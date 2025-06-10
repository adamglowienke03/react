import { createRoot } from 'react-dom/client'
import './index.css'

// let greeting = <h1>Witaj</h1>

// const myName = prompt("Podaj swoje imię: ")

// if(myName !== "Adam")
//   greeting = <h1>Nie masz dostępu</h1>

const first = 5
const second = 10

const fname = "Jan"
const sname = "Kowalski"

const displayName = (firstName: string, lastName: string) => {
  return <h1>Imię: {firstName}, Nazwisko: {lastName}</h1>
}


createRoot(document.getElementById('root')!).render(
  <>
    <h1>{first + second}</h1>
    <div>{displayName(fname, sname)}</div>
  </>
)
