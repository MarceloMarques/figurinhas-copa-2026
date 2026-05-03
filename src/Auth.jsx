import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [loading, setLoading] = useState(false)

  const entrar = async () => {
    setLoading(true)
    setErro('')
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha })
    if (error) setErro('Email ou senha incorretos')
    setLoading(false)
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          src="https://cdn.prod.website-files.com/68f550992570ca0322737dc2/69f4a82e3685731a3ab5086e_fifa-world-cup-2026-official-logo-footylogos-white.png"
          alt="Copa 2026"
          className="auth-logo"
        />
        <h1 className="auth-titulo">Copa 2026</h1>
        <p className="auth-sub">Álbum de Figurinhas</p>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && entrar()}
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && entrar()}
        />
        {erro && <p className="auth-erro">{erro}</p>}
        <button className="auth-btn" onClick={entrar} disabled={loading}>
          {loading ? '⏳ Entrando...' : '⚽ Entrar'}
        </button>
      </div>
    </div>
  )
}