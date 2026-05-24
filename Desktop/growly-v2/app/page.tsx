'use client'

import { useState, useRef, useEffect } from 'react'

type Lang = 'ru' | 'en'

const translations = {
  ru: {
    nav: { features: 'Возможности', agent: 'Агент', social: 'О нас' },
    login: 'Войти',
    register: 'Начать бесплатно',
    badge: 'ИИ Агент нового поколения',
    heroTitle1: 'Твой персональный',
    heroTitle2: 'ИИ помощник',
    heroDesc: 'Growly AI создаёт сайты, пишет ботов, генерирует аватары и помогает развивать бизнес — всё в одном месте',
    ctaStart: 'Начать бесплатно →',
    ctaTry: 'Попробовать агента',
    stats: [
      { v: '10+', l: 'Возможностей ИИ' },
      { v: '24/7', l: 'Всегда онлайн' },
      { v: '0₽', l: 'Для старта' },
      { v: '∞', l: 'Потенциал роста' },
    ],
    featuresTitle: 'Что умеет Growly',
    featuresSub: 'Один агент заменяет целую команду специалистов',
    soon: 'Скоро',
    features: [
      { i: '🌐', t: 'Создание сайтов', d: 'Опиши идею — агент напишет код и задеплоит сайт за минуты', soon: false },
      { i: '🤖', t: 'Telegram боты', d: 'Умные боты для бизнеса без навыков программирования', soon: true },
      { i: '🎨', t: 'ИИ аватары', d: 'Уникальные аватары и изображения в любом стиле', soon: true },
      { i: '🎬', t: 'Видео с аватаром', d: 'Реалистичные видео с ИИ аватаром для контента', soon: true },
      { i: '📈', t: 'Стратегия роста', d: 'Персональный план развития для твоего бизнеса', soon: true },
      { i: '⚡', t: 'Автоматизация', d: 'Автоматизируй рутину и сосредоточься на главном', soon: false },
    ],
    liveDemo: 'Live Demo',
    agentTitle1: 'Попробуй агента',
    agentTitle2: 'прямо сейчас',
    agentSub: 'Задай любой вопрос — Growly AI готов помочь',
    online: 'Online · отвечает мгновенно',
    quickPrompts: ['🌐 Создай мне лендинг', '🤖 Сделай Telegram-бота', '📈 План роста бизнеса', '🎨 Идеи для аватара'],
    greeting: '👋 Привет! Я Growly AI. Чем могу помочь?',
    reply: 'Отличная задача! Зарегистрируйся бесплатно — и я возьмусь за неё прямо сейчас 🚀',
    inputPlaceholder: 'Напиши агенту...',
    send: 'Отправить →',
    perks: [
      { i: '⚡', t: 'Мгновенный ответ' },
      { i: '🧠', t: 'Понимает контекст' },
      { i: '🔒', t: 'Безопасно' },
      { i: '🌍', t: 'На русском' },
    ],
    ctaTitle: 'Готов изменить своё будущее?',
    ctaDesc: 'Зарегистрируйся бесплатно и получи доступ к Growly AI прямо сейчас',
    ctaBtn1: 'Начать бесплатно 🚀',
    ctaBtn2: 'Войти в аккаунт',
    socialTitle: 'Мы в соцсетях',
    socialSub: 'Следи за обновлениями и новостями',
    socials: [
      { i: '✈️', t: 'Telegram канал', l: 'https://t.me/growlyrazvitie' },
      { i: '✈️', t: 'Менеджер', l: 'https://t.me/growlymanager' },
      { i: '📸', t: 'Instagram', l: 'https://www.instagram.com/growlyrazvitie' },
      { i: '🎵', t: 'TikTok', l: 'https://www.tiktok.com/@growly27' },
      { i: '▶️', t: 'YouTube', l: 'https://youtube.com/@growlyrazvitie' },
    ],
    footer: '© 2026 Growly. Все права защищены.',
  },
  en: {
    nav: { features: 'Features', agent: 'Agent', social: 'About' },
    login: 'Log in',
    register: 'Start free',
    badge: 'Next-gen AI Agent',
    heroTitle1: 'Your personal',
    heroTitle2: 'AI assistant',
    heroDesc: 'Growly AI builds websites, writes bots, generates avatars and helps grow your business — all in one place',
    ctaStart: 'Start free →',
    ctaTry: 'Try the agent',
    stats: [
      { v: '10+', l: 'AI features' },
      { v: '24/7', l: 'Always online' },
      { v: '$0', l: 'To start' },
      { v: '∞', l: 'Growth potential' },
    ],
    featuresTitle: 'What Growly can do',
    featuresSub: 'One agent replaces an entire team',
    soon: 'Soon',
    features: [
      { i: '🌐', t: 'Website creation', d: 'Describe an idea — the agent writes the code and deploys it in minutes', soon: false },
      { i: '🤖', t: 'Telegram bots', d: 'Smart bots for business without coding skills', soon: true },
      { i: '🎨', t: 'AI avatars', d: 'Unique avatars and images in any style', soon: true },
      { i: '🎬', t: 'Avatar videos', d: 'Realistic videos with AI avatar for content', soon: true },
      { i: '📈', t: 'Growth strategy', d: 'A personal development plan for your business', soon: true },
      { i: '⚡', t: 'Automation', d: 'Automate routine and focus on what matters', soon: false },
    ],
    liveDemo: 'Live Demo',
    agentTitle1: 'Try the agent',
    agentTitle2: 'right now',
    agentSub: 'Ask any question — Growly AI is ready to help',
    online: 'Online · instant replies',
    quickPrompts: ['🌐 Build me a landing', '🤖 Make a Telegram bot', '📈 Business growth plan', '🎨 Avatar ideas'],
    greeting: '👋 Hey! I am Growly AI. How can I help?',
    reply: 'Great task! Sign up for free — and I will get on it right now 🚀',
    inputPlaceholder: 'Message the agent...',
    send: 'Send →',
    perks: [
      { i: '⚡', t: 'Instant answer' },
      { i: '🧠', t: 'Gets context' },
      { i: '🔒', t: 'Secure' },
      { i: '🌍', t: 'Multilingual' },
    ],
    ctaTitle: 'Ready to change your future?',
    ctaDesc: 'Sign up for free and access Growly AI right now',
    ctaBtn1: 'Start free 🚀',
    ctaBtn2: 'Log in',
    socialTitle: 'Find us on socials',
    socialSub: 'Stay tuned for updates and news',
    socials: [
      { i: '✈️', t: 'Telegram channel', l: 'https://t.me/growlyrazvitie' },
      { i: '✈️', t: 'Manager', l: 'https://t.me/growlymanager' },
      { i: '📸', t: 'Instagram', l: 'https://www.instagram.com/growlyrazvitie' },
      { i: '🎵', t: 'TikTok', l: 'https://www.tiktok.com/@growly27' },
      { i: '▶️', t: 'YouTube', l: 'https://youtube.com/@growlyrazvitie' },
    ],
    footer: '© 2026 Growly. All rights reserved.',
  },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const t = translations[lang]

  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: t.greeting },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  // Обновляем приветствие при смене языка
  useEffect(() => {
    setMessages([{ role: 'ai', text: translations[lang].greeting }])
  }, [lang])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, isTyping])

  // Активная секция при скролле
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'agent', 'social']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id)
            return
          }
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const send = (text?: string) => {
    const value = (text ?? input).trim()
    if (!value) return
    setMessages((m) => [...m, { role: 'user', text: value }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((m) => [...m, { role: 'ai', text: translations[lang].reply }])
    }, 1400)
  }

  const navItems = [
    { id: 'features', label: t.nav.features },
    { id: 'agent', label: t.nav.agent },
    { id: 'social', label: t.nav.social },
  ]

  return (
    <main style={{ position: 'relative', minHeight: '100vh', background: '#0a0a0f', color: '#fff', overflow: 'hidden', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Фоновые эффекты */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* ============ КРАСИВАЯ ШАПКА ============ */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', background: 'rgba(10,10,15,0.75)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="header-inner">
          {/* Логотип-аватарка слева */}
          <a href="/" className="logo">
            <div className="logo-avatar">
              <span className="logo-letter">G</span>
              <span className="logo-shine" />
            </div>
            <span className="logo-text">Growly</span>
          </a>

          {/* Десктоп навигация — pill-кнопки */}
          <nav className="desktop-nav">
            <div className="nav-pill-group">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-pill ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Правая часть: язык + кнопки */}
          <div className="header-right">
            <div className="lang-switch">
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'lang-active' : ''}>RU</button>
              <button onClick={() => setLang('en')} className={lang === 'en' ? 'lang-active' : ''}>EN</button>
            </div>
            <a href="/login" className="btn-ghost desktop-only">{t.login}</a>
            <a href="/register" className="btn-primary-sm desktop-only">{t.register}</a>

            {/* Бургер для мобилы */}
            <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
              <span className={menuOpen ? 'open' : ''} />
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <div className="mobile-menu-buttons">
              <a href="/login" className="btn-ghost" onClick={() => setMenuOpen(false)}>{t.login}</a>
              <a href="/register" className="btn-primary-sm" onClick={() => setMenuOpen(false)}>{t.register}</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="badge">
          <span className="badge-dot" />
          {t.badge}
        </div>
        <h1 className="hero-title">
          {t.heroTitle1}<br />
          <span className="gradient-text">{t.heroTitle2}</span>
        </h1>
        <p className="hero-desc">{t.heroDesc}</p>
        <div className="hero-buttons">
          <a href="/register" className="btn-primary">{t.ctaStart}</a>
          <a href="#agent" className="btn-secondary">{t.ctaTry}</a>
        </div>

        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2 className="section-title">{t.featuresTitle}</h2>
        <p className="section-sub">{t.featuresSub}</p>
        <div className="features-grid">
          {t.features.map((f, i) => (
            <div key={i} className="feature-card">
              {f.soon && <span className="soon-badge">{t.soon}</span>}
              <div className="feature-icon">{f.i}</div>
              <h3 className="feature-title">{f.t}</h3>
              <p className="feature-desc">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI АГЕНТ — ЧАТ */}
      <section id="agent" className="section">
        <div className="agent-header">
          <div className="badge badge-green">
            <span className="badge-dot green" />
            {t.liveDemo}
          </div>
          <h2 className="section-title">
            {t.agentTitle1} <span className="gradient-text-cyan">{t.agentTitle2}</span>
          </h2>
          <p className="section-sub">{t.agentSub}</p>
        </div>

        <div className="chat-wrapper">
          <div className="chat-glow" />
          <div className="chat-container">
            <div className="chat-head">
              <div className="chat-head-left">
                <div className="chat-avatar">
                  G
                  <span className="chat-status-dot" />
                </div>
                <div>
                  <div className="chat-name">Growly AI</div>
                  <div className="chat-online">● {t.online}</div>
                </div>
              </div>
              <div className="chat-dots">
                <span style={{ background: '#ef4444' }} />
                <span style={{ background: '#eab308' }} />
                <span style={{ background: '#10b981' }} />
              </div>
            </div>

            <div ref={chatRef} className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`msg-row ${m.role}`}>
                  {m.role === 'ai' && <div className="msg-avatar">G</div>}
                  <div className={`msg-bubble ${m.role}`}>{m.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="msg-row ai">
                  <div className="msg-avatar">G</div>
                  <div className="typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>

            <div className="quick-prompts">
              {t.quickPrompts.map((p, i) => (
                <button key={i} onClick={() => send(p)} className="prompt-btn">{p}</button>
              ))}
            </div>

            <div className="chat-input-wrap">
              <div className="chat-input-row">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder={t.inputPlaceholder}
                />
                <button onClick={() => send()} className="send-btn">{t.send}</button>
              </div>
            </div>
          </div>
        </div>

        <div className="perks-grid">
          {t.perks.map((x, i) => (
            <div key={i} className="perk">
              <span className="perk-icon">{x.i}</span>
              <span className="perk-text">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="cta-wrap">
          <div className="cta-glow" />
          <div className="cta-box">
            <h2 className="cta-title">{t.ctaTitle}</h2>
            <p className="cta-desc">{t.ctaDesc}</p>
            <div className="hero-buttons">
              <a href="/register" className="btn-primary">{t.ctaBtn1}</a>
              <a href="/login" className="btn-secondary">{t.ctaBtn2}</a>
            </div>
          </div>
        </div>
      </section>

      {/* СОЦСЕТИ */}
      <section id="social" className="section social-section">
        <h3 className="social-title">{t.socialTitle}</h3>
        <p className="section-sub">{t.socialSub}</p>
        <div className="socials">
          {t.socials.map((s, i) => (
            <a key={i} href={s.l} className="social-link">
              <span>{s.i}</span> {s.t}
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">{t.footer}</footer>

      {/* ============ СТИЛИ ============ */}
      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        /* HEADER */
        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .logo { display: flex; align-items: center; gap: 0.7rem; text-decoration: none; color: #fff; }
        .logo-avatar {
          position: relative;
          width: 42px; height: 42px;
          border-radius: 13px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 24px rgba(139,92,246,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
          overflow: hidden;
        }
        .logo-letter { font-weight: 800; font-size: 1.25rem; position: relative; z-index: 2; }
        .logo-shine {
          position: absolute; top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%);
          animation: shine 3s infinite;
        }
        @keyframes shine {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }
        .logo-text { font-weight: 700; font-size: 1.2rem; letter-spacing: -0.02em; }

        .desktop-nav { flex: 1; display: flex; justify-content: center; }
        .nav-pill-group {
          display: flex; gap: 0.3rem;
          padding: 0.35rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
        }
        .nav-pill {
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: all 0.25s;
          position: relative;
        }
        .nav-pill:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .nav-pill.active {
          background: linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.25));
          color: #fff;
          box-shadow: 0 0 20px rgba(139,92,246,0.3);
        }

        .header-right { display: flex; align-items: center; gap: 0.7rem; }
        .lang-switch {
          display: flex;
          padding: 3px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
        }
        .lang-switch button {
          padding: 0.35rem 0.75rem;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 999px;
          transition: all 0.2s;
        }
        .lang-switch button.lang-active {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          color: #fff;
          box-shadow: 0 2px 12px rgba(139,92,246,0.4);
        }

        .btn-ghost {
          color: #fff;
          text-decoration: none;
          font-size: 0.92rem;
          padding: 0.55rem 1.1rem;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 11px;
          transition: all 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); }
        .btn-primary-sm {
          color: #fff;
          text-decoration: none;
          font-size: 0.92rem;
          padding: 0.6rem 1.2rem;
          border-radius: 11px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(139,92,246,0.4);
          transition: all 0.2s;
        }
        .btn-primary-sm:hover { transform: translateY(-1px); box-shadow: 0 6px 25px rgba(139,92,246,0.5); }

        .burger {
          display: none;
          width: 40px; height: 40px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          flex-direction: column;
          gap: 4px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .burger span {
          width: 18px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s;
        }
        .burger span.open:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .burger span.open:nth-child(2) { opacity: 0; }
        .burger span.open:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem 1.5rem 1.5rem;
          gap: 0.5rem;
          background: rgba(10,10,15,0.95);
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .mobile-menu a {
          padding: 0.85rem 1rem;
          color: #fff;
          text-decoration: none;
          border-radius: 10px;
          background: rgba(255,255,255,0.03);
          font-size: 1rem;
        }
        .mobile-menu-buttons {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .mobile-menu-buttons a { flex: 1; text-align: center; background: none; padding: 0.7rem 1rem; }

        /* HERO */
        .hero {
          position: relative; z-index: 1;
          padding: 5rem 1.5rem 3rem;
          text-align: center;
          max-width: 1100px;
          margin: 0 auto;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          background: rgba(139,92,246,0.1);
          border: 1px solid rgba(139,92,246,0.3);
          font-size: 0.85rem;
          margin-bottom: 1.8rem;
        }
        .badge-green { background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); }
        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 12px #8b5cf6;
        }
        .badge-dot.green { background: #10b981; box-shadow: 0 0 12px #10b981; animation: pulse 2s infinite; }

        .hero-title {
          font-size: clamp(2.2rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 1.2rem;
        }
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-cyan {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          font-size: clamp(0.95rem, 1.5vw, 1.2rem);
          color: rgba(255,255,255,0.6);
          max-width: 650px;
          margin: 0 auto 2rem;
          line-height: 1.5;
          padding: 0 0.5rem;
        }
        .hero-buttons {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .btn-primary {
          padding: 0.9rem 1.6rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 10px 40px rgba(139,92,246,0.4);
          font-size: 0.95rem;
          transition: transform 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); }
        .btn-secondary {
          padding: 0.9rem 1.6rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.8rem;
          max-width: 800px;
          margin: 0 auto;
        }
        .stat-card {
          padding: 1.1rem 0.6rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .stat-value {
          font-size: clamp(1.3rem, 3vw, 2rem);
          font-weight: 800;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-label { font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-top: 0.3rem; }

        /* SECTIONS */
        .section {
          position: relative; z-index: 1;
          padding: 4rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        .section-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          text-align: center;
          margin: 0 0 0.6rem;
          letter-spacing: -0.02em;
        }
        .section-sub {
          text-align: center;
          color: rgba(255,255,255,0.5);
          margin: 0 0 3rem;
          font-size: 0.95rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.1rem;
        }
        .feature-card {
          position: relative;
          padding: 1.7rem;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(139,92,246,0.3);
          background: rgba(139,92,246,0.05);
        }
        .soon-badge {
          position: absolute;
          top: 1rem; right: 1rem;
          font-size: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          background: rgba(139,92,246,0.2);
          color: #a78bfa;
          border: 1px solid rgba(139,92,246,0.3);
        }
        .feature-icon { font-size: 2.3rem; margin-bottom: 0.9rem; }
        .feature-title { font-size: 1.2rem; font-weight: 700; margin: 0 0 0.5rem; }
        .feature-desc { color: rgba(255,255,255,0.55); font-size: 0.92rem; line-height: 1.5; margin: 0; }

        /* CHAT */
        .agent-header { text-align: center; margin-bottom: 2.5rem; }
        .chat-wrapper {
          position: relative;
          max-width: 850px;
          margin: 0 auto;
          border-radius: 24px;
          background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.05));
          padding: 2px;
          box-shadow: 0 30px 80px rgba(139,92,246,0.25);
        }
        .chat-glow {
          position: absolute; inset: 0;
          border-radius: 24px;
          background: conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6);
          opacity: 0.5;
          filter: blur(20px);
          z-index: -1;
          animation: spin 8s linear infinite;
        }
        .chat-container {
          border-radius: 22px;
          background: rgba(15,15,22,0.95);
          overflow: hidden;
          backdrop-filter: blur(20px);
        }
        .chat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.3rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .chat-head-left { display: flex; align-items: center; gap: 0.7rem; }
        .chat-avatar {
          position: relative;
          width: 42px; height: 42px;
          border-radius: 13px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1.2rem;
          box-shadow: 0 0 22px rgba(139,92,246,0.5);
        }
        .chat-status-dot {
          position: absolute;
          bottom: -2px; right: -2px;
          width: 13px; height: 13px;
          border-radius: 50%;
          background: #10b981;
          border: 3px solid #0f0f16;
        }
        .chat-name { font-weight: 700; font-size: 1rem; }
        .chat-online { font-size: 0.74rem; color: #10b981; }
        .chat-dots { display: flex; gap: 0.4rem; }
        .chat-dots span { width: 10px; height: 10px; border-radius: 50%; }

        .chat-messages {
          height: 380px;
          overflow-y: auto;
          padding: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }
        .msg-row { display: flex; gap: 0.5rem; animation: fadeIn 0.4s ease; }
        .msg-row.user { justify-content: flex-end; }
        .msg-row.ai { justify-content: flex-start; }
        .msg-avatar {
          width: 32px; height: 32px;
          flex-shrink: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 0.85rem;
        }
        .msg-bubble {
          max-width: 75%;
          padding: 0.75rem 1rem;
          font-size: 0.93rem;
          line-height: 1.45;
        }
        .msg-bubble.user {
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 16px 16px 4px 16px;
        }
        .msg-bubble.ai {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px 16px 16px 4px;
        }
        .typing {
          padding: 0.85rem 1rem;
          border-radius: 16px 16px 16px 4px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          gap: 0.3rem;
          align-items: center;
        }
        .typing span {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #8b5cf6;
          animation: bounce 1.4s infinite;
        }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }

        .quick-prompts {
          padding: 0 1.3rem 0.7rem;
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }
        .prompt-btn {
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.8);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .prompt-btn:hover { background: rgba(139,92,246,0.15); border-color: rgba(139,92,246,0.4); }

        .chat-input-wrap {
          padding: 0.9rem 1.3rem 1.3rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .chat-input-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding: 0.4rem 0.4rem 0.4rem 1rem;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .chat-input-row input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-size: 0.93rem;
          padding: 0.5rem 0;
          min-width: 0;
        }
        .send-btn {
          padding: 0.6rem 1.1rem;
          border-radius: 10px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border: none;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.85rem;
          box-shadow: 0 4px 15px rgba(139,92,246,0.4);
          white-space: nowrap;
        }

        .perks-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.7rem;
          max-width: 850px;
          margin: 1.5rem auto 0;
        }
        .perk {
          padding: 0.85rem 1rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .perk-icon { font-size: 1.25rem; }
        .perk-text { font-size: 0.88rem; color: rgba(255,255,255,0.75); }

        /* CTA */
        .cta-section { text-align: center; }
        .cta-wrap { max-width: 750px; margin: 0 auto; position: relative; }
        .cta-glow {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4);
          border-radius: 24px;
          filter: blur(40px);
          opacity: 0.3;
        }
        .cta-box {
          position: relative;
          padding: 3rem 1.5rem;
          border-radius: 24px;
          background: rgba(8,8,16,0.9);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .cta-title { font-size: clamp(1.6rem, 4vw, 2.6rem); font-weight: 800; margin: 0 0 0.8rem; }
        .cta-desc { color: rgba(255,255,255,0.5); margin: 0 0 2rem; font-size: 1rem; }

        /* SOCIAL */
        .social-section { text-align: center; padding-bottom: 5rem; }
        .social-title { font-size: 1.6rem; font-weight: 700; margin: 0 0 0.5rem; }
        .socials { display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; }
        .social-link {
          padding: 0.65rem 1.1rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          text-decoration: none;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }
        .social-link:hover { background: rgba(139,92,246,0.1); border-color: rgba(139,92,246,0.3); }

        .footer {
          position: relative; z-index: 1;
          padding: 1.8rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.4);
          font-size: 0.83rem;
        }

        /* ============ МОБИЛЬНАЯ АДАПТАЦИЯ ============ */
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .burger { display: flex; }
          .mobile-menu { display: flex; }
          .header-inner { padding: 0.8rem 1rem; }
          .logo-text { font-size: 1.1rem; }

          .hero { padding: 3rem 1rem 2rem; }
          .section { padding: 3rem 1rem; }
          .hero-buttons { flex-direction: column; align-items: stretch; max-width: 320px; margin: 0 auto 2.5rem; }
          .btn-primary, .btn-secondary { width: 100%; text-align: center; }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.6rem;
          }

          .features-grid { grid-template-columns: 1fr; gap: 0.9rem; }
          .feature-card { padding: 1.4rem; }

          .chat-messages { height: 340px; padding: 1rem; }
          .chat-head { padding: 0.85rem 1rem; }
          .chat-avatar { width: 38px; height: 38px; font-size: 1.1rem; }
          .chat-name { font-size: 0.95rem; }
          .chat-online { font-size: 0.7rem; }
          .msg-bubble { max-width: 82%; font-size: 0.9rem; }
          .quick-prompts { padding: 0 1rem 0.6rem; overflow-x: auto; flex-wrap: nowrap; }
          .prompt-btn { flex-shrink: 0; }
          .chat-input-wrap { padding: 0.7rem 1rem 1rem; }
          .send-btn { padding: 0.55rem 0.9rem; font-size: 0.8rem; }

          .cta-box { padding: 2.2rem 1.2rem; }
          .socials { flex-direction: column; align-items: stretch; padding: 0 1rem; }
          .social-link { justify-content: center; }
        }
        @media (max-width: 380px) {
          .lang-switch button { padding: 0.3rem 0.55rem; font-size: 0.75rem; }
          .logo-avatar { width: 38px; height: 38px; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* АНИМАЦИИ */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.3); border-radius: 3px; }

        html { scroll-behavior: smooth; }
      `}</style>
    </main>
  )
}