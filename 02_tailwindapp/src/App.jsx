import { useState } from 'react'
import './App.css'
import Card from "./comps/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card name = "Sugar" id = "123" price = "98.32" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLr42ZwT06Zslr-9G1DFBi69BTZWLhiOy_aA&s"> </Card>
    <br />
    <Card name = "Rice" id = "124" price = "72" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZb7ocY6U6xV6iYaTVWt0OOZBEfQoJXzpHvg&s"> </Card>
    <br />
    <Card name = "Potato" id = "125" price = "22" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjBHcNyorX8brpzW-9TQzWgUApyhm_DFQWWw&s"> </Card>
    <br />
    <Card name = "Chips" id = "126" price = "25" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2g0yMNywHUi0K3dIHlmcaTZG0qYn4l7i60A&s"> </Card>
    </>
  )
}

export default App
