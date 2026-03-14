import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './Homescreen.tsx'
import FilterViewA from './FilterViewA.tsx'
import FilterViewB from './FilterViewB.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ display: 'flex', gap: 48, justifyContent: 'center' }}>
      <div style={{ width: 393, flexShrink: 0 }}>
        <Homescreen FilterView={FilterViewA} />
      </div>
      <div style={{ width: 393, flexShrink: 0 }}>
        <Homescreen FilterView={FilterViewB} filterChipVariant="B" />
      </div>
    </div>
  </StrictMode>,
)
