const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

async function askDeepSeek(prompt, system = '') {
  const messages = []
  if (system) messages.push({ role: 'system', content: system })
  messages.push({ role: 'user', content: prompt })
  const res = await axios.post('https://api.deepseek.com/chat/completions', {
    model: 'deepseek-chat', messages, max_tokens: 1500, temperature: 0.7,
  }, {
    headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`, 'Content-Type': 'application/json' },
    timeout: 60000,
  })
  return res.data.choices[0].message.content
}

async function fetchSiteText(url) {
  try {
    const res = await axios.get(`https://r.jina.ai/${url}`, {
      headers: { Accept: 'text/plain' }, timeout: 30000,
    })
    return res.data.slice(0, 8000)
  } catch { return '' }
}

app.post('/analyze', async (req, res) => {
  const { input } = req.body
  if (!input) return res.status(400).json({ error: 'input required' })
  try {
    const siteText = input.startsWith('http') ? await fetchSiteText(input) : ''
    const system = 'Ты опытный маркетолог. Анализируешь конкурентов для малого бизнеса в России. Пишешь чётко, по делу. Русский язык.'
    const positioning = await askDeepSeek(`Проанализируй конкурента (${input}).\nТекст сайта: ${siteText.slice(0, 3000)}\n\n1. Главный оффер?\n2. УТП?\n3. Цена?\n4. Аудитория?`, system)
    const weaknesses = await askDeepSeek(`Конкурент: ${positioning}\n\nНайди 3-5 слабых мест.\nФормат: • [слабость] — [как использовать]`, system)
    const actions = await askDeepSeek(`Позиционирование: ${positioning}\nСлабости: ${weaknesses}\n\nДай 3 действия.\nФормат:\n💡 [Название]\nЧто: [шаг]\nПочему: [1 предложение]`, system)
    res.json({ positioning, weaknesses, actions })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.get('/health', (req, res) => res.json({ ok: true }))
app.listen(3001, () => console.log('Сервер запущен на порту 3001'))
