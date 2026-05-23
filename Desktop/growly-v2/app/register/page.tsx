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
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Проверь почту!</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)' }}>Мы отправили ссылку на {email}</p>
      </div>
    </main>
  )

  return (
    <main style={{ background: '#0a0a0f', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '24px', padding: '3rem', width: '100%', maxWidth: '420px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #a855f7, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '24px', color: '#fff', margin: '0 auto 1rem' }}>G</div>
          <h1 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem' }}>Регистрация</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>Создай аккаунт в Growly</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Твоё имя" value={name} onChange={e => setName(e.target.value)} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }} />
          <input type="password" placeholder="Пароль (минимум 6 символов)" value={password} onChange={e => setPassword(e.target.value)} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '12px', padding: '14px 16px', color: '#fff', fontSize: '15px', outline: 'none', width: '100%' }} />
          {error && <p style={{ color: '#f87171', fontSize: '14px', textAlign: 'center' }}>{error}</p>}
          <button onClick={handleRegister} disabled={loading} style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', border: 'none', borderRadius: '12px', padding: '14px', color: '#fff', fontSize: '16px', fontWeight: '700', cursor: 'pointer', marginTop: '0.5rem' }}>
            {loading ? 'Создаём...' : 'Создать аккаунт →'}
          </button>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            Уже есть аккаунт?{' '}
            <a href="/login" style={{ color: '#a855f7', textDecoration: 'none', fontWeight: '600' }}>Войти</a>
          </p>
        </div>
      </div>
    </main>
  )
}