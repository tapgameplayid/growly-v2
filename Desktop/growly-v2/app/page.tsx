'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [lang, setLang] = useState<'ru' | 'en'>('ru')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = {
    ru: {
      nav: ['Возможности', 'Цены', 'О нас'],
      hero_tag: 'ИИ Агент нового поколения',
      hero_title: 'Growly — твой',
      hero_title2: 'ИИ помощник',
      hero_sub: 'Создавай сайты, ботов, аватары и видео с помощью искусственного интеллекта',
      hero_btn: 'Начать бесплатно',
      hero_btn2: 'Узнать больше',
      features_title: 'Всё что тебе нужно',
      features_sub: 'Один агент — безграничные возможности',
      features: [
        { icon: '🌐', title: 'Создание сайтов', desc: 'Опиши свой сайт — агент напишет код и задеплоит за секунды' },
        { icon: '🤖', title: 'Telegram боты', desc: 'Создавай умных ботов для бизнеса без навыков программирования' },
        { icon: '🎨', title: 'ИИ аватарки', desc: 'Генерируй уникальные аватары и изображения для любых целей' },
        { icon: '🎬', title: 'Видео с аватаром', desc: 'Создавай видеоролики с реалистичным ИИ аватаром' },
        { icon: '📈', title: 'Планы развития', desc: 'Получай персональные стратегии роста для твоего бизнеса' },
        { icon: '⚡', title: 'Автоматизация', desc: 'Автоматизируй рутинные задачи и освободи время для важного' },
      ],
      coming: 'Скоро',
      pricing_title: 'Простые цены',
      pricing_sub: 'Начни бесплатно, расти вместе с нами',
      plans: [
        { name: 'Free', price: '0', period: '/мес', features: ['10 запросов в день', 'Базовые функции', 'Сообщество'], btn: 'Начать', accent: false },
        { name: 'Pro', price: '900', period: '/мес', features: ['Безлимитные запросы', 'Все функции', 'Генерация видео', 'Приоритет'], btn: 'Выбрать Pro', accent: true },
        { name: 'Business', price: '2900', period: '/мес', features: ['Всё из Pro', 'API доступ', 'Команда до 10', 'Поддержка 24/7'], btn: 'Для бизнеса', accent: false },
      ],
      cta_title: 'Готов начать?',
      cta_sub: 'Присоединяйся к тысячам пользователей которые уже используют Growly',
      cta_btn: 'Попробовать бесплатно',
      footer: '© 2026 Growly. Все права защищены.',
      login: 'Войти',
    },
    en: {
      nav: ['Features', 'Pricing', 'About'],
      hero_tag: 'Next-gen AI Agent',
      hero_title: 'Growly — your',
      hero_title2: 'AI assistant',
      hero_sub: 'Build websites, bots, avatars and videos powered by artificial intelligence',
      hero_btn: 'Start for free',
      hero_btn2: 'Learn more',
      features_title: 'Everything you need',
      features_sub: 'One agent — unlimited possibilities',
      features: [
        { icon: '🌐', title: 'Website Builder', desc: 'Describe your site — the agent writes code and deploys in seconds' },
        { icon: '🤖', title: 'Telegram Bots', desc: 'Create smart bots for business without any coding skills' },
        { icon: '🎨', title: 'AI Avatars', desc: 'Generate unique avatars and images for any purpose' },
        { icon: '🎬', title: 'Avatar Videos', desc: 'Create video content with a realistic AI avatar' },
        { icon: '📈', title: 'Growth Plans', desc: 'Get personalized growth strategies for your business' },
        { icon: '⚡', title: 'Automation', desc: 'Automate routine tasks and free up time for what matters' },
      ],
      coming: 'Coming soon',
      pricing_title: 'Simple pricing',
      pricing_sub: 'Start free, grow with us',
      plans: [
        { name: 'Free', price: '0', period: '/mo', features: ['10 requests/day', 'Basic features', 'Community'], btn: 'Get started', accent: false },
        { name: 'Pro', price: '10', period: '/mo', features: ['Unlimited requests', 'All features', 'Video generation', 'Priority'], btn: 'Choose Pro', accent: true },
        { name: 'Business', price: '30', period: '/mo', features: ['Everything in Pro', 'API access', 'Team up to 10', '24/7 support'], btn: 'For business', accent: false },
      ],
      cta_title: 'Ready to start?',
      cta_sub: 'Join thousands of users already using Growly',
      cta_btn: 'Try for free',
      footer: '© 2026 Growly. All rights reserved.',
      login: 'Login',
    }
  }[lang]

  return (
    <main style={{ background: '#0a0a0f', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif', overflowX: 'hidden' }}>

      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)', transform: `translateY(${scrollY * 0.1}px)` }} />
        <div style={{ position: 'absolute', top: '30%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,113,133,0.1) 0%, transparent 70%)', transform: `translateY(${scrollY * -0.05}px)` }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Навбар */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: scrollY > 50 ? 'rgba(10,10,15,0.9)' : 'transparent', backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none', borderBottom: scrollY > 50 ? '1px solid rgba(168,85,247,0.2)' : 'none', transition: 'all 0.3s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px' }}>G</div>
          <span style={{ fontWeight: '700', fontSize: '20px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Growly</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {t.nav.map((item) => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '15px' }}>{item}</span>
          ))}
          <button onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: '8px', padding: '6px 14px', color: '#a855f7', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
          <a href="/login" style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '10px', padding: '8px 20px', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
            {t.login}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 2rem 4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(168,85,247,0.15)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '2rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
          <span style={{ fontSize: '13px', color: '#c084fc' }}>{t.hero_tag}</span>
        </div>

        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
          <span style={{ color: '#fff' }}>{t.hero_title}</span>
          <br />
          <span style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.hero_title2}</span>
        </h1>

        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', lineHeight: '1.7', marginBottom: '3rem' }}>{t.hero_sub}</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/register" style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '14px', padding: '16px 36px', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: '700', boxShadow: '0 0 40px rgba(168,85,247,0.4)', textDecoration: 'none', display: 'inline-block' }}>
            {t.hero_btn} →
          </a>
          <a href="/login" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', padding: '16px 36px', color: '#fff', cursor: 'pointer', fontSize: '16px', fontWeight: '600', textDecoration: 'none', display: 'inline-block' }}>
            {t.hero_btn2}
          </a>
        </div>

        {/* Превью агента */}
        <div style={{ marginTop: '5rem', width: '100%', maxWidth: '800px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '20px', padding: '2rem', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '1.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            <div style={{ alignSelf: 'flex-end', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '14px 14px 4px 14px', padding: '12px 18px', maxWidth: '70%', fontSize: '14px' }}>
              {lang === 'ru' ? 'Создай мне лендинг для кофейни' : 'Create a landing page for my coffee shop'}
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #a855f7, #fb923c)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>G</div>
              <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '4px 14px 14px 14px', padding: '12px 18px', maxWidth: '70%', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                {lang === 'ru' ? '✨ Конечно! Создаю современный лендинг...' : '✨ Sure! Creating a modern landing page...'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фичи */}
      <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.6))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.features_title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>{t.features_sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {t.features.map((f, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '20px', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', borderRadius: '50%', background: i % 3 === 0 ? 'rgba(168,85,247,0.1)' : i % 3 === 1 ? 'rgba(251,146,60,0.1)' : 'rgba(236,72,153,0.1)', transform: 'translate(30%, -30%)' }} />
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: '#fff' }}>{f.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.6', fontSize: '0.95rem' }}>{f.desc}</p>
              {i >= 2 && <span style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', borderRadius: '100px', padding: '4px 10px', fontSize: '11px', color: '#c084fc' }}>{t.coming}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Цены */}
      <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(135deg, #fff, rgba(255,255,255,0.6))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.pricing_title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem' }}>{t.pricing_sub}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {t.plans.map((plan, i) => (
            <div key={i} style={{ background: plan.accent ? 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(124,58,237,0.2))' : 'rgba(255,255,255,0.03)', border: plan.accent ? '1px solid rgba(168,85,247,0.5)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2.5rem 2rem', position: 'relative', transform: plan.accent ? 'scale(1.05)' : 'none', boxShadow: plan.accent ? '0 0 60px rgba(168,85,247,0.2)' : 'none' }}>
              {plan.accent && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '100px', padding: '4px 16px', fontSize: '12px', fontWeight: '700', whiteSpace: 'nowrap' }}>⭐ Popular</div>}
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', background: plan.accent ? 'linear-gradient(135deg, #a855f7, #fb923c)' : '#fff', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{plan.price}₽</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{plan.period}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                    <span style={{ color: plan.accent ? '#a855f7' : '#4ade80', fontWeight: 'bold' }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href="/register" style={{ display: 'block', width: '100%', background: plan.accent ? 'linear-gradient(135deg, #a855f7, #7c3aed)' : 'rgba(255,255,255,0.08)', border: plan.accent ? 'none' : '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px', color: '#fff', cursor: 'pointer', fontSize: '15px', fontWeight: '700', textDecoration: 'none', textAlign: 'center' }}>
                {plan.btn}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(251,146,60,0.1))', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '32px', padding: '5rem 3rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>{t.cta_title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>{t.cta_sub}</p>
          <a href="/register" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '14px', padding: '18px 48px', color: '#fff', cursor: 'pointer', fontSize: '18px', fontWeight: '700', boxShadow: '0 0 60px rgba(168,85,247,0.5)', textDecoration: 'none' }}>
            {t.cta_btn} 🚀
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '14px' }}>
        {t.footer}
      </footer>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a:hover { opacity: 0.9; transform: translateY(-1px); }
      `}</style>
    </main>
  )
}