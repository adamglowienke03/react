import { createRoot } from 'react-dom/client'
import './index.css'

const value1 = Number(prompt("Podaj pierwszą liczbę: "))
const value2 = Number(prompt("Podaj drugą liczbę: "))

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myName = "Adam";

const transformMe = (value: string) => {
  return value.toLocaleUpperCase();
}

createRoot(document.getElementById('root')!).render(
  <h1>Hello {transformMe(myName)}, {value1 + value2}, {values.filter(el => el % 2).map(el => el ** 2).join("-")}</h1>
)
