'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleRegister = async () => {
    setLoading(true)
    setError('')
    if (!name || !email || !password) {
      setError('Заполни все поля')
      setLoading(false)
      return
    }
    if (password.length < 6) {
      setError('Пароль минимум 6 символов')
      setLoading(false)
      return
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    })
    if (error) setError(error.message)
    else setSuccess(true)
    setLoading(false)
  }

  if (success) return (
    <main style={{ background: '#0a0a0f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', color: '#fff', padding: '2rem' }}>
        <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Аккаунт создан!</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>Мы отправили письмо на</p>
        <p style={{ color: '#a855f7', fontWeight: '600', marginBottom: '2rem' }}>{email}</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '2rem' }}>Подтверди email чтобы войти в аккаунт</p>
        <a href="/login" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', borderRadius: '12px', padding: '14px 32px', color: '#fff', textDecoration: 'none', fontWeight: '700', fontSize: '15px' }}>
          Войти →
        </a>
      </div>
    </main>
  )

  return (
    <main style={{ background: '#0a0a0f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 70%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '24px', padding: '3rem', width: '100%', maxWidth: '420px', backdropFilter: 'blur(10px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '24px', color: '#fff', margin: '0 auto 1rem', cursor: 'pointer' }}>G</div>
          </a>
          <h1 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem' }}>Регистрация</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Создай аккаунт в Growly бесплатно</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Твоё имя"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }}
          />
          <input
            type="password"
            placeholder="Пароль (минимум 6 символов)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleRegister()}
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }}
          />
          {error && (
            <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '10px', padding: '10px 14px', color: '#f87171', fontSize: '14px', textAlign: 'center' }}>
              {error}
            </div>
          )}
          <button
            onClick={handleRegister}
            disabled={loading}
            style={{ background: loading ? 'rgba(168,85,247,0.5)' : 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '12px', padding: '14px', color: '#fff', fontSize: '16px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', marginTop: '0.5rem', transition: 'all 0.3s' }}
          >
            {loading ? 'Создаём...' : 'Создать аккаунт →'}
          </button>
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            Уже есть аккаунт?{' '}
            <a href="/login" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: '600' }}>Войти</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none', fontSize: '13px' }}>← Вернуться на главную</a>
          </div>
        </div>
      </div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        input::placeholder { color: rgba(255,255,255,0.3); }
        input:focus { border-color: rgba(168,85,247,0.6) !important; }
      `}</style>
    </main>
  )
}