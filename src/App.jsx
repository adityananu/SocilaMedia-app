import { useState } from 'react'
import './App.css'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/SideBar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{position:"relative"}}>
    <Header />
    <div className="body__division">
      <Sidebar />
      <Feed />
    </div>
    </div>
  )
}

export default App
