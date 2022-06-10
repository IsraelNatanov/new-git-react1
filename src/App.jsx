import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AppRouter from './component/appRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <AppRouter />
    </div>
  )
}

export default App
