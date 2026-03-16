import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './Homescreen.tsx'
import FilterViewA from './FilterViewA.tsx'
import FilterViewB from './FilterViewB.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ display: 'flex', gap: 48, padding: '0 max(24px, calc((100vw - 834px) / 2))' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 500, color: '#60758f' }}>Homescreen A</span>
        <div style={{ width: 393, flexShrink: 0 }}>
          <Homescreen FilterView={FilterViewA} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 500, color: '#60758f' }}>Homescreen B</span>
        <div style={{ width: 393, flexShrink: 0 }}>
          <Homescreen FilterView={FilterViewB} filterChipVariant="B" />
        </div>
      </div>
    </div>
  </StrictMode>,
)
