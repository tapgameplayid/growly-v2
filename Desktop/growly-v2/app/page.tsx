'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru')
  const [scrollY, setScrollY] = useState(0)
  const [showChat, setShowChat] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMsg, setUserMsg] = useState('')
  const [messages, setMessages] = useState([
    { role: 'bot', text: lang === 'ru' ? '👋 Привет! Я Growly AI. Чем могу помочь?' : '👋 Hi! I am Growly AI. How can I help?' }
  ])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sendMessage = () => {
    if (!userMsg.trim()) return
    const newMessages = [...messages, { role: 'user', text: userMsg }]
    setMessages(newMessages)
    setUserMsg('')
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: lang === 'ru'
          ? '✨ Отличный вопрос! Зарегистрируйся чтобы получить полный доступ к Growly AI →'
          : '✨ Great question! Register to get full access to Growly AI →'
      }])
    }, 800)
  }

  const ru = {
    nav: ['Возможности', 'Агент', 'О нас'],
    hero_tag: 'ИИ Агент нового поколения',
    hero_title: 'Твой персональный',
    hero_title2: 'ИИ помощник',
    hero_sub: 'Growly AI создаёт сайты, пишет ботов, генерирует аватары и помогает развивать бизнес — всё в одном месте',
    hero_btn: 'Начать бесплатно',
    hero_btn2: 'Попробовать агента',
    features_title: 'Что умеет Growly',
    features_sub: 'Один агент заменяет целую команду специалистов',
    features: [
      { icon: '🌐', title: 'Создание сайтов', desc: 'Опиши идею — агент напишет код и задеплоит сайт за минуты', tag: '' },
      { icon: '🤖', title: 'Telegram боты', desc: 'Умные боты для бизнеса без навыков программирования', tag: '' },
      { icon: '🎨', title: 'ИИ аватары', desc: 'Уникальные аватары и изображения в любом стиле', tag: 'Скоро' },
      { icon: '🎬', title: 'Видео с аватаром', desc: 'Реалистичные видео с ИИ аватаром для контента', tag: 'Скоро' },
      { icon: '📈', title: 'Стратегия роста', desc: 'Персональный план развития для твоего бизнеса', tag: 'Скоро' },
      { icon: '⚡', title: 'Автоматизация', desc: 'Автоматизируй рутину и сосредоточься на главном', tag: 'Скоро' },
    ],
    agent_title: 'Попробуй агента прямо сейчас',
    agent_sub: 'Задай любой вопрос — Growly AI готов помочь',
    agent_placeholder: 'Напиши что-нибудь...',
    agent_send: 'Отправить',
    agent_register: 'Получить полный доступ →',
    stats: [
      { num: '10+', label: 'Возможностей ИИ' },
      { num: '24/7', label: 'Всегда онлайн' },
      { num: '0₽', label: 'Для старта' },
      { num: '∞', label: 'Потенциал роста' },
    ],
    cta_title: 'Готов изменить своё будущее?',
    cta_sub: 'Зарегистрируйся бесплатно и получи доступ к Growly AI прямо сейчас',
    cta_btn: 'Начать бесплатно',
    cta_btn2: 'Войти в аккаунт',
    social_title: 'Мы в соцсетях',
    social_sub: 'Следи за обновлениями и новостями',
    tg_channel: 'https://t.me/growlyrazvitie',
    tg_channel_name: 'Telegram канал',
    footer: '© 2026 Growly. Все права защищены.',
    login: 'Войти',
    support_title: 'Поддержка',
    support_sub: 'Привет! 👋 Чем могу помочь?',
    support_desc: 'Менеджер ответит в течение нескольких минут',
    support_btn: 'Написать в Telegram',
    support_time: 'Обычно отвечаем за 5 минут',
    close: 'Закрыть',
  }

  const en = {
    nav: ['Features', 'Agent', 'About'],
    hero_tag: 'Next-gen AI Agent',
    hero_title: 'Your personal',
    hero_title2: 'AI assistant',
    hero_sub: 'Growly AI builds websites, writes bots, generates avatars and helps grow your business — all in one place',
    hero_btn: 'Start for free',
    hero_btn2: 'Try the agent',
    features_title: 'What Growly can do',
    features_sub: 'One agent replaces an entire team of specialists',
    features: [
      { icon: '🌐', title: 'Website Builder', desc: 'Describe your idea — the agent writes code and deploys in minutes', tag: '' },
      { icon: '🤖', title: 'Telegram Bots', desc: 'Smart bots for business without any coding skills', tag: '' },
      { icon: '🎨', title: 'AI Avatars', desc: 'Unique avatars and images in any style', tag: 'Soon' },
      { icon: '🎬', title: 'Avatar Videos', desc: 'Realistic videos with AI avatar for content', tag: 'Soon' },
      { icon: '📈', title: 'Growth Strategy', desc: 'Personal development plan for your business', tag: 'Soon' },
      { icon: '⚡', title: 'Automation', desc: 'Automate routine and focus on what matters', tag: 'Soon' },
    ],
    agent_title: 'Try the agent right now',
    agent_sub: 'Ask anything — Growly AI is ready to help',
    agent_placeholder: 'Type something...',
    agent_send: 'Send',
    agent_register: 'Get full access →',
    stats: [
      { num: '10+', label: 'AI Capabilities' },
      { num: '24/7', label: 'Always online' },
      { num: '$0', label: 'To get started' },
      { num: '∞', label: 'Growth potential' },
    ],
    cta_title: 'Ready to change your future?',
    cta_sub: 'Register for free and get access to Growly AI right now',
    cta_btn: 'Start for free',
    cta_btn2: 'Sign in',
    social_title: 'Follow us',
    social_sub: 'Stay updated with latest news',
    tg_channel: 'https://t.me/growlyworld',
    tg_channel_name: 'Telegram channel',
    footer: '© 2026 Growly. All rights reserved.',
    login: 'Login',
    support_title: 'Support',
    support_sub: 'Hi! 👋 How can I help?',
    support_desc: 'Manager will respond within minutes',
    support_btn: 'Write in Telegram',
    support_time: 'Usually responds in 5 minutes',
    close: 'Close',
  }

  const t = lang === 'ru' ? ru : en

  return (
    <main style={{ background: '#080810', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; }
        a:hover { opacity: 0.85; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .feature-card:hover { transform: translateY(-4px); border-color: rgba(168,85,247,0.4) !important; }
        .feature-card { transition: all 0.3s ease; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-mobile { display: flex !important; }
          .hero-title { font-size: 2.5rem !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .social-grid { flex-direction: column !important; align-items: center !important; }
          .social-grid a { width: 100% !important; max-width: 300px !important; justify-content: center !important; }
          .support-btn-text { display: none !important; }
          .cta-btns { flex-direction: column !important; }
          .cta-btns a { width: 100% !important; text-align: center !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>

      {/* Фоновые эффекты */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-20%', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', transform: `translateY(${scrollY * 0.08}px)` }} />
        <div style={{ position: 'absolute', top: '20%', right: '-20%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '0%', left: '20%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,146,60,0.06) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168,85,247,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(8,8,16,0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer' }}>✕</button>
          {t.nav.map((item, i) => (
            <a key={i} href={`#${['features', 'agent', 'social'][i]}`} onClick={() => setMenuOpen(false)} style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '600' }}>{item}</a>
          ))}
          <button onClick={() => { setLang(lang === 'ru' ? 'en' : 'ru'); setMenuOpen(false) }} style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: '8px', padding: '8px 20px', color: '#a855f7', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
          <a href="/login" onClick={() => setMenuOpen(false)} style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '12px', padding: '12px 32px', color: '#fff', fontSize: '16px', fontWeight: '700' }}>{t.login}</a>
        </div>
      )}

      {/* Поддержка */}
      <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
        {showChat && (
          <div style={{ background: '#13131f', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '20px', padding: '1.5rem', width: '290px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', animation: 'slideIn 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>G</div>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '13px', color: '#fff' }}>Growly Support</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'glow 2s infinite' }} />
                    <p style={{ fontSize: '11px', color: '#4ade80' }}>Online</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '16px' }}>✕</button>
            </div>
            <div style={{ background: 'rgba(168,85,247,0.1)', borderRadius: '12px', padding: '12px', marginBottom: '1rem' }}>
              <p style={{ fontSize: '13px', color: '#fff', marginBottom: '4px', fontWeight: '600' }}>{t.support_sub}</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{t.support_desc}</p>
            </div>
            <a href="https://t.me/growlymanager" target="_blank" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '10px', padding: '10px', color: '#fff', fontSize: '13px', fontWeight: '700', marginBottom: '6px' }}>
              ✈️ {t.support_btn}
            </a>
            <p style={{ textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>⚡ {t.support_time}</p>
          </div>
        )}
        <button onClick={() => setShowChat(!showChat)} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '100px', padding: '12px 18px', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 30px rgba(168,85,247,0.4)' }}>
          <span style={{ fontSize: '18px' }}>{showChat ? '✕' : '💬'}</span>
          <span className="support-btn-text">{showChat ? t.close : t.support_title}</span>
        </button>
      </div>

      {/* Навбар */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrollY > 50 ? 'rgba(8,8,16,0.95)' : 'transparent', backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none', borderBottom: scrollY > 50 ? '1px solid rgba(168,85,247,0.15)' : 'none', transition: 'all 0.3s' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '18px' }}>G</div>
          <span style={{ fontWeight: '800', fontSize: '20px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Growly</span>
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {t.nav.map((item, i) => (
            <a key={i} href={`#${['features', 'agent', 'social'][i]}`} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', transition: 'color 0.2s' }}>{item}</a>
          ))}
          <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '8px', padding: '6px 14px', color: '#c084fc', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
          <a href="/login" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '500' }}>{t.login}</a>
          <a href="/register" style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '10px', padding: '8px 20px', color: '#fff', fontSize: '14px', fontWeight: '700', boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}>{t.hero_btn}</a>
        </div>
        <div className="nav-mobile" style={{ alignItems: 'center', gap: '10px' }}>
          <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} style={{ background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '8px', padding: '5px 10px', color: '#c084fc', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
          <a href="/login" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{t.login}</a>
          <button onClick={() => setMenuOpen(true)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px' }}>☰</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 1.5rem 4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '100px', padding: '6px 18px', marginBottom: '2rem' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', animation: 'glow 2s infinite' }} />
          <span style={{ fontSize: '13px', color: '#c084fc', fontWeight: '500' }}>{t.hero_tag}</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: '900', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>{t.hero_title}</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 40%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.hero_title2}</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '580px', lineHeight: '1.8', marginBottom: '3rem' }}>{t.hero_sub}</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '5rem' }}>
          <a href="/register" style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '14px', padding: '16px 36px', color: '#fff', fontSize: '16px', fontWeight: '700', boxShadow: '0 0 50px rgba(168,85,247,0.35)', display: 'inline-block' }}>
            {t.hero_btn} →
          </a>
          <a href="#agent" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '16px 36px', color: 'rgba(255,255,255,0.8)', fontSize: '16px', fontWeight: '600', display: 'inline-block' }}>
            {t.hero_btn2}
          </a>
        </div>

        {/* Статистика */}
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(168,85,247,0.15)', borderRadius: '20px', overflow: 'hidden', width: '100%', maxWidth: '700px', border: '1px solid rgba(168,85,247,0.15)' }}>
          {t.stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(8,8,16,0.9)', padding: '1.5rem 1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, #a855f7, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Возможности */}
      <section id="features" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>{t.features_title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.05rem' }}>{t.features_sub}</p>
        </div>
        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {t.features.map((f, i) => (
            <div key={i} className="feature-card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '2rem', position: 'relative', overflow: 'hidden', cursor: 'default' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: ['rgba(168,85,247,0.1)', 'rgba(236,72,153,0.1)', 'rgba(251,146,60,0.1)', 'rgba(168,85,247,0.1)', 'rgba(236,72,153,0.1)', 'rgba(251,146,60,0.1)'][i] }} />
              {f.tag && <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', padding: '3px 10px', fontSize: '10px', color: '#c084fc', fontWeight: '600' }}>{f.tag}</span>}
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: '1.6', fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ИИ Агент демо */}
      <section id="agent" style={{ position: 'relative', zIndex: 1, padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>{t.agent_title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.05rem' }}>{t.agent_sub}</p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 80px rgba(168,85,247,0.1)' }}>
            {/* Шапка чата */}
            <div style={{ background: 'rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.15)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>G</div>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#fff' }}>Growly AI</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', animation: 'glow 2s infinite' }} />
                  <span style={{ fontSize: '11px', color: '#4ade80' }}>Online</span>
                </div>
              </div>
            </div>

            {/* Сообщения */}
            <div style={{ padding: '1.5rem', minHeight: '280px', maxHeight: '400px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '10px', animation: 'slideIn 0.3s ease' }}>
                  {msg.role === 'bot' && (
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #fb923c)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>G</div>
                  )}
                  <div style={{ background: msg.role === 'user' ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : 'rgba(255,255,255,0.06)', borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '4px 14px 14px 14px', padding: '10px 16px', maxWidth: '75%', fontSize: '14px', color: msg.role === 'user' ? '#fff' : 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
                    {msg.text}
                    {msg.role === 'bot' && msg.text.includes('→') && (
                      <a href="/register" style={{ display: 'block', marginTop: '8px', color: '#a855f7', fontWeight: '700', fontSize: '13px' }}>{t.agent_register}</a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Ввод */}
            <div style={{ borderTop: '1px solid rgba(168,85,247,0.15)', padding: '1rem 1.5rem', display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder={t.agent_placeholder}
                value={userMsg}
                onChange={e => setUserMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
              />
              <button onClick={sendMessage} style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '12px', padding: '12px 20px', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '700', whiteSpace: 'nowrap' }}>
                {t.agent_send} →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 1, padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '-2px', background: 'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(251,146,60,0.2), rgba(236,72,153,0.3))', borderRadius: '34px', filter: 'blur(1px)' }} />
          <div style={{ position: 'relative', background: 'rgba(8,8,16,0.9)', borderRadius: '32px', padding: '4rem 2rem', backdropFilter: 'blur(20px)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '1rem', color: '#fff' }}>{t.cta_title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2.5rem', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>{t.cta_sub}</p>
            <div className="cta-btns" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/register" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '14px', padding: '16px 40px', color: '#fff', fontSize: '16px', fontWeight: '700', boxShadow: '0 0 50px rgba(168,85,247,0.4)' }}>
                {t.cta_btn} 🚀
              </a>
              <a href="/login" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', padding: '16px 40px', color: 'rgba(255,255,255,0.7)', fontSize: '16px', fontWeight: '600' }}>
                {t.cta_btn2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Соцсети */}
      <section id="social" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>{t.social_title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '2rem', fontSize: '0.95rem' }}>{t.social_sub}</p>
        <div className="social-grid" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { href: t.tg_channel, label: `✈️ ${t.tg_channel_name}`, bg: 'rgba(0,136,204,0.12)', border: 'rgba(0,136,204,0.3)' },
            { href: 'https://t.me/growlymanager', label: `✈️ ${lang === 'ru' ? 'Менеджер' : 'Manager'}`, bg: 'rgba(0,136,204,0.12)', border: 'rgba(0,136,204,0.3)' },
            { href: 'https://www.instagram.com/growlyrazvitie', label: '📸 Instagram', bg: 'rgba(225,48,108,0.12)', border: 'rgba(225,48,108,0.3)' },
            { href: 'https://www.tiktok.com/@growly27', label: '🎵 TikTok', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)' },
            { href: 'https://youtube.com/@growlyrazvitie', label: '▶️ YouTube', bg: 'rgba(255,0,0,0.12)', border: 'rgba(255,0,0,0.3)' },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: s.bg, border: `1px solid ${s.border}`, borderRadius: '12px', padding: '12px 20px', color: '#fff', fontSize: '14px', fontWeight: '600' }}>
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem 1.5rem', color: 'rgba(255,255,255,0.2)', fontSize: '13px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {t.footer}
      </footer>

    </main>
  )
}