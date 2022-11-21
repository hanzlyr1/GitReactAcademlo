import { useState } from 'react'
import './App.css'
import Quotebox from './components/Quotebox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'


function App() {


  const getRandomArray = arr => {
    const indexArray = Math.floor(arr.length * Math.random())
    return arr[indexArray]
  }

  const [quoteRandom, setquoteRandom] = useState(getRandomArray(quotes))
  const [colorRandom, setcolorRandom] = useState(getRandomArray(colors))

  const handleClick = () => {
    setquoteRandom(getRandomArray(quotes))
    setcolorRandom(getRandomArray(colors))
  }
  const objstyle = {
    backgroundColor: colorRandom
  }

  return (
    <div className="App" style={objstyle}>
      <Quotebox quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
