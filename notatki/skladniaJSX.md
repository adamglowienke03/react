# JSX
### Pomimo że wygląda bardzo podobnie to nie jest HTML. JSX jest specjalną składnią tłumaczoną w całości na JS

## JSX na JS
### Element zapisany jako:
```html
<h1>Hello World!</h1>
```
### zostanie przekształcony na:
```js
__jsx('h1', {children: 'Hello World!'})
```