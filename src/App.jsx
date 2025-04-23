import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
//import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
