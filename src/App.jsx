// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) =>{
  {/* Si la variable isSelected es true le agregamos el string 'isSelected', de lo contrario no agregamos nada*/}
  const className = `square ${isSelected ? 'isSelected' : ''}` 

  const handleClick = ()=>{
    {/*2* cuando la funcion handleClikc se ejecuta, pasa a ejecutar la funcion updateBoard()*/}
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {/*1* cuando se hace un click sobre el elemento square se pasa como promps la funcion handleClick */}
      {children}
    </div>
  )
}

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurns] = useState(TURNS.X)

  const updateBoard = (index) =>{
    let newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    console.log(newBoard[index])
    {/*3* esta funcion evalua el turno jugado y otorga el turno al otro jugador*/}
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurns(newTurn)
  }

  return (
    <main className='board'>
      <h1>Ta te ti</h1>
      <section className='game'>
        {board.map((square, index)=>{
          return(
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          )
        })}
     </section>

     <section className='turn'>
        <Square isSelected = {turn === TURNS.X}> 
          {TURNS.X} {/* le pasamos el valor true cuando el turno sea igual a X*/}
        </Square>
        <Square isSelected = {turn === TURNS.O}> 
          {TURNS.O}  {/* le pasamos el valor true cuando el turno sea igual a O*/}
        </Square>
     </section>
    </main>
  )
}

export default App
