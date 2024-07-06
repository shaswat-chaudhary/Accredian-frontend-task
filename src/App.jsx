import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ReferPage } from './pages/ReferPage'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/refer" element={<ReferPage />} />
      </Routes>
    </div>
  )
}

export default App
