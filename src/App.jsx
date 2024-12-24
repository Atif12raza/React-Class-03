import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from './Utlis/Data'
import Card from './Componenet/Card'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <div style={{display:'flex',flexWrap:'wrap'}}>
      {data.map((e,i)=>{

return <div style={{display:'flex'}}>< Card key={i} img={e.image} title={e.title} description={e.description.substring(0,120)} price={e.price}/>
</div>
})}

    </div>
  )
}

export default App
