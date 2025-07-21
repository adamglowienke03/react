# JSX/TSX
### Pomimo że wygląda bardzo podobnie to nie jest HTML. JSX/TSX jest specjalną składnią tłumaczoną w całości na JS

## JSX/TSX na JS
Element zapisany jako:
```html
<h1>Hello World!</h1>
```
 zostanie przekształcony na:
```jsx
__jsx('h1', {children: 'Hello World!'})
```

```tsx
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
```

![Przykład](./zdjecia/image.png)

**Opis działania:**

1. `filter(el => el % 2)`
Filtruje tablicę `values`, wybierając tylko liczby nieparzyste (bo `el % 2` zwraca `true` dla nieparzystych).

2. `map(el => el ** 2)`
Podnosi każdą z tych liczb do kwadratu.

3. `join("-")`
Łączy wyniki w jeden napis, rozdzielając je myślnikiem.