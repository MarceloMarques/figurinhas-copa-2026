import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { STICKERS, GRUPOS, TOTAL } from './data/stickers'
import './App.css'

const FLAGS = {
  MEX:'mx',RSA:'za',KOR:'kr',CZE:'cz',CAN:'ca',BIH:'ba',QAT:'qa',SUI:'ch',
  BRA:'br',MAR:'ma',HAI:'ht',SCO:'gb-sct',USA:'us',PAR:'py',AUS:'au',TUR:'tr',
  GER:'de',CUW:'cw',CIV:'ci',ECU:'ec',NED:'nl',JPN:'jp',SWE:'se',TUN:'tn',
  BEL:'be',EGY:'eg',IRN:'ir',NZL:'nz',ESP:'es',CPV:'cv',KSA:'sa',URU:'uy',
  FRA:'fr',SEN:'sn',IRQ:'iq',NOR:'no',ARG:'ar',ALG:'dz',AUT:'at',JOR:'jo',
  POR:'pt',COD:'cd',UZB:'uz',COL:'co',ENG:'gb-eng',CRO:'hr',GHA:'gh',PAN:'pa',
}
const getSigla = (cod) => cod.replace(/\d+$/, '')

const STICKERS_COM_NUM = STICKERS.map((s, i) => ({ ...s, numero: i + 1 }))
const POR_NUMERO = Object.fromEntries(STICKERS_COM_NUM.map(s => [s.numero, s]))

const ICONE_TIPO = { escudo: '🛡️', foto: '📸', especial: '⭐', cc: '🥤', normal: '' }

export default function App() {
  const [qtds, setQtds] = useState({})
  const [loading, setLoading] = useState(true)
  const [grupoAtivo, setGrupoAtivo] = useState('TODOS')
  const [saving, setSaving] = useState(null)
  const [zapMsg, setZapMsg] = useState('')

  useEffect(() => {
    supabase.from('figurinhas').select('numero, quantidade').then(({ data }) => {
      if (data) setQtds(Object.fromEntries(data.map(r => [r.numero, r.quantidade])))
      setLoading(false)
    })
  }, [])

  const getQtd = (num) => qtds[num] || 0

  const salvar = async (sticker, novaQtd) => {
    setSaving(sticker.numero)
    if (novaQtd === 0) {
      await supabase.from('figurinhas').delete().eq('numero', sticker.numero)
    } else {
      const { data } = await supabase.from('figurinhas').select('id').eq('numero', sticker.numero).maybeSingle()
      if (data) await supabase.from('figurinhas').update({ quantidade: novaQtd }).eq('numero', sticker.numero)
      else await supabase.from('figurinhas').insert({ numero: sticker.numero, nome: sticker.nome, selecao: sticker.selecao, grupo: sticker.grupo, tipo: sticker.tipo, quantidade: novaQtd })
    }
    setSaving(null)
  }

  const clicar = (s) => { const n = getQtd(s.numero) + 1; setQtds(p => ({ ...p, [s.numero]: n })); salvar(s, n) }
  const desclicar = (e, s) => { e.preventDefault(); const a = getQtd(s.numero); if (!a) return; const n = a - 1; setQtds(p => ({ ...p, [s.numero]: n })); salvar(s, n) }

  const totalColadas = STICKERS_COM_NUM.filter(s => getQtd(s.numero) >= 1).length
  const totalRepetidas = STICKERS_COM_NUM.reduce((acc, s) => acc + Math.max(0, getQtd(s.numero) - 1), 0)
  const totalFaltam = TOTAL - totalColadas
  const progresso = Math.round((totalColadas / TOTAL) * 100).toFixed(2)

  const zapFaltam = () => {
    const faltam = STICKERS_COM_NUM.filter(s => getQtd(s.numero) === 0)
    let msg = `🎴 *Copa 2026 — Faltam ${faltam.length} figurinhas*\n\n`
    const porGrupo = {}
    faltam.forEach(s => { if (!porGrupo[s.grupo]) porGrupo[s.grupo] = []; porGrupo[s.grupo].push(s) })
    Object.entries(porGrupo).forEach(([g, lista]) => {
      const porSel = {}
      lista.forEach(s => { if (!porSel[s.selecao]) porSel[s.selecao] = []; porSel[s.selecao].push(s.codigo) })
      msg += `*${g === 'FWC' ? 'Apresentação' : g === 'HIST' ? 'História' : g === 'CC' ? 'Coca-Cola' : `Grupo ${g}`}*\n`
      Object.entries(porSel).forEach(([sel, codes]) => { msg += `${sel}: ${codes.join(', ')}\n` })
      msg += '\n'
    })
    navigator.clipboard.writeText(msg).then(() => { setZapMsg('faltam'); setTimeout(() => setZapMsg(''), 3000) })
  }

  const zapRepetidas = () => {
    const repetidas = STICKERS_COM_NUM.filter(s => getQtd(s.numero) >= 2)
    if (!repetidas.length) { alert('Nenhuma repetida ainda! 🎉'); return }
    let msg = `🔄 *Copa 2026 — ${totalRepetidas} repetidas para trocar*\n\n`
    const porGrupo = {}
    repetidas.forEach(s => { if (!porGrupo[s.grupo]) porGrupo[s.grupo] = []; porGrupo[s.grupo].push(s) })
    Object.entries(porGrupo).forEach(([g, lista]) => {
      msg += `*${g === 'FWC' ? 'Apresentação' : g === 'HIST' ? 'História' : g === 'CC' ? 'Coca-Cola' : `Grupo ${g}`}*\n`
      lista.forEach(s => { msg += `• ${s.codigo} — ${s.nome} (+${getQtd(s.numero) - 1})\n` })
      msg += '\n'
    })
    navigator.clipboard.writeText(msg).then(() => { setZapMsg('repetidas'); setTimeout(() => setZapMsg(''), 3000) })
  }

  const getCardClass = (qtd, tipo) => {
    if (qtd === 0) return `card cinza tipo-${tipo}`
    if (qtd === 1) return `card verde tipo-${tipo}`
    return `card roxo tipo-${tipo}`
  }

  // Agrupa stickers por seleção dentro de cada grupo
  const getSelecoesDoGrupo = (grupoId) => {
    const stickers = STICKERS_COM_NUM.filter(s => s.grupo === grupoId)
    const map = {}
    stickers.forEach(s => {
      if (!map[s.selecao]) map[s.selecao] = { nome: s.selecao, bandeira: s.bandeira, stickers: [] }
      map[s.selecao].stickers.push(s)
    })
    return Object.values(map)
  }

  const gruposExibidos = grupoAtivo === 'TODOS'
    ? GRUPOS
    : GRUPOS.filter(g => g.id === grupoAtivo)

  const filtros = [
    { id: 'TODOS', label: 'Todas' },
    { id: 'FWC', label: 'FWC' },
    ...'ABCDEFGHIJKL'.split('').map(l => ({ id: l, label: l })),
    { id: 'HIST', label: 'Hist.' },
    { id: 'CC', label: 'Coca' },
  ]
  
  const gerarPDF = () => {
  const linhas = GRUPOS.map(grupo => {
    const selecoesMap = {}
    STICKERS_COM_NUM.filter(s => s.grupo === grupo.id).forEach(s => {
      if (!selecoesMap[s.selecao]) selecoesMap[s.selecao] = []
      selecoesMap[s.selecao].push(s)
    })
    const timesHTML = Object.entries(selecoesMap).map(([sel, stickers]) => {
      const sqHTML = stickers.map(s => {
        const qtd = getQtd(s.numero)
        const cod = s.codigo.replace(/(\D+)(\d+)/, '$1 $2')
        if (qtd === 0) return `<div class="sq">${cod}</div>`
        if (qtd === 1) return `<div class="sq preto"></div>`
        return `<div class="sq preto rep"><span class="rdot"></span></div>`
      }).join('')
      return `<div class="row"><div class="tnome">${sel}</div><div class="sqs">${sqHTML}</div></div>`
    }).join('')
    return `<div class="grp"><div class="gtit">${grupo.nome}</div>${timesHTML}</div>`
  }).join('')

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Copa 2026</title>
  <style>
    @page { size: A4 portrait; margin: 8mm; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .header { text-align: center; margin-bottom: 4mm; border-bottom: 2px solid #006847; padding-bottom: 3mm; }
    .header h1 { font-size: 13px; color: #006847; font-weight: 900; }
    .header p { font-size: 7px; color: #555; margin-top: 1mm; }
    .legenda { display: flex; gap: 6mm; justify-content: center; margin-bottom: 3mm; font-size: 7px; align-items: center; }
    .leg { display: flex; align-items: center; gap: 1mm; }
    .grp { margin-bottom: 2.5mm; break-inside: avoid; }
    .gtit { font-size: 8px; font-weight: 900; background: #006847; color: white; padding: 1mm 2mm; border-radius: 2px; margin-bottom: 1mm; }
    .row { display: flex; align-items: center; margin-bottom: 0.8mm; gap: 1mm; }
    .tnome { font-size: 5.5px; font-weight: 700; width: 20mm; flex-shrink: 0; color: #333; line-height: 1.2; }
    .sqs { display: flex; flex-wrap: wrap; gap: 0.4mm; }
    .sq { width: 5.8mm; height: 5.8mm; border: 0.5px solid #aaa; border-radius: 1px; display: flex; align-items: center; justify-content: center; font-size: 3.8px; font-weight: 700; color: #666; flex-shrink: 0; position: relative; }
    .sq.preto { background: #111 !important; border-color: #111; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .sq.rep { background: #111; border: 1.5px solid #7c3aed; }
    .rdot { position: absolute; top: 0.5px; right: 0.5px; width: 1.8px; height: 1.8px; background: #a855f7; border-radius: 50%; }
    .leg-sq { width: 5mm; height: 5mm; border: 0.5px solid #aaa; border-radius: 1px; }
    .leg-sq.p { background: #111; border-color: #111; }
    .leg-sq.r { background: #111; border: 1.5px solid #7c3aed; position: relative; }
  </style></head><body>
  <div class="header">
    <h1>🎴 Copa do Mundo 2026 — Lista de Figurinhas</h1>
    <p>Impresso em ${new Date().toLocaleDateString('pt-BR')} · Total: ${TOTAL} figurinhas · No álbum: ${totalColadas} · Faltam: ${totalFaltam}</p>
  </div>
  <div class="legenda">
    <div class="leg"><div class="leg-sq"></div> Não tenho</div>
    <div class="leg"><div class="leg-sq p"></div> Tenho (colada)</div>
    <div class="leg"><div class="leg-sq r"><span class="rdot"></span></div> Tenho repetida</div>
  </div>
  ${linhas}
  </body></html>`

  const win = window.open('', '_blank')
  win.document.write(html)
  win.document.close()
  setTimeout(() => { win.focus(); win.print() }, 600)
}

  if (loading) return (
    <div className="loading">
      <div className="bola">⚽</div>
      <p>Carregando álbum...</p>
    </div>
  )

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <img 
    src="https://cdn.prod.website-files.com/68f550992570ca0322737dc2/69f4a82e3685731a3ab5086e_fifa-world-cup-2026-official-logo-footylogos-white.png" 
    alt="Copa 2026" 
    style={{ height: '42px', width: 'auto' }} 
  />
  <h1 style={{ fontFamily: "'Righteous', sans-serif", fontSize: '32px', letterSpacing: '0px', fontWeight: '400' }}>Copa 2026</h1>
</div>
          <div className="zap-btns">
            <button className={`btn-zap faltam ${zapMsg === 'faltam' ? 'ok' : ''}`} onClick={zapFaltam}>
              {zapMsg === 'faltam' ? '✅' : '❌'} Faltam
            </button>
            <button className={`btn-zap repetidas ${zapMsg === 'repetidas' ? 'ok' : ''}`} onClick={zapRepetidas}>
              {zapMsg === 'repetidas' ? '✅' : '🔄'} Repetidas
            </button>
            <button className="btn-zap pdf" onClick={gerarPDF}>🖨️ PDF
            </button>
          </div>
        </div>
        <div className="stats">
          <div className="stat"><span className="stat-num verde-txt">{totalColadas}</span><span className="stat-label">No álbum</span></div>
          <div className="stat"><span className="stat-num roxo-txt">{totalRepetidas}</span><span className="stat-label">Repetidas</span></div>
          <div className="stat"><span className="stat-num cinza-txt">{totalFaltam}</span><span className="stat-label">Faltam</span></div>
          <div className="stat"><span className="stat-num">{progresso}%</span><span className="stat-label">Completo</span></div>
        </div>
        <div className="barra-fundo"><div className="barra-progresso" style={{ width: `${progresso}%` }} /></div>
      </header>

      <div className="filtros">
        {filtros.map(f => (
          <button key={f.id} className={`filtro ${grupoAtivo === f.id ? 'ativo' : ''}`} onClick={() => setGrupoAtivo(f.id)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="legenda">
        <span className="leg cinza">⬜ Não tenho</span>
        <span className="leg verde">🟩 No álbum</span>
        <span className="leg roxo">🟪 Repetida</span>
        <span className="dica">Clique = +1 · Botão direito = -1</span>
      </div>

      <div className="conteudo">
        {gruposExibidos.map(grupo => (
          <div key={grupo.id} className="grupo">
            <h2 className="grupo-titulo">{grupo.nome}</h2>
            {getSelecoesDoGrupo(grupo.id).map(selObj => (
              <div key={selObj.nome} className="time">
                {selObj.nome !== 'Apresentação' && selObj.nome !== 'História' && selObj.nome !== 'Coca-Cola' && selObj.nome !== 'Capa' && (
                  <h3 className="time-titulo">
                    {(() => { const fc = FLAGS[getSigla(selObj.stickers[0].codigo)]; return fc ? <img src={`https://flagcdn.com/20x15/${fc}.png`} alt="" className="flag-img" /> : selObj.bandeira })()}
                      {selObj.nome}
                     <span className="time-pct">
                       {((selObj.stickers.filter(s => getQtd(s.numero) >= 1).length / selObj.stickers.length) * 100).toFixed(2)}%
                     </span>
                  </h3>
                )}
                <div className="grid">
                  {selObj.stickers.map(s => {
                    const qtd = getQtd(s.numero)
                    return (
                      <div
                        key={s.numero}
                        className={getCardClass(qtd, s.tipo)}
                        onClick={() => clicar(s)}
                        onContextMenu={(e) => desclicar(e, s)}
                        title={`${s.codigo} · ${s.nome} · Clique +1 · Botão direito -1`}
                      >
                        <span className="card-cod" style={{ fontFamily: "'Righteous', sans-serif" }}>{s.codigo.replace(/(\D+)(\d+)/, '$1 $2')}</span>
                        {ICONE_TIPO[s.tipo] && <span className="card-tipo-icon">{ICONE_TIPO[s.tipo]}</span>}
                        <span className="card-nome">{s.nome}</span>
                        {qtd >= 2 && <span className="card-extra">+{qtd - 1}</span>}
                        {saving === s.numero && <span className="card-saving">⏳</span>}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}