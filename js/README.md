# Consumo de API ANIMECHAN

Generador de frases de personajes de anime

## Data consumida

[ LINK API ANIMECHAN](https://animechan.vercel.app/)

## Intentalo

Ejecute este código para obtener una frase aleatoria.

```
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))
```

### Resultado

```
{
	anime: 'Fairy Tail',
	character: 'Gray Fullbuster',
	quote: 'Sorry, but it doesn\'t matter if you\'re a woman or even a child... I don\'t go easy on anybody who hurts my nakama.'
}
```

## Colaboradores

Jhon Carlos Acevedo Mendoza - 1151661

Carlos Alberto Arias Delgado - 1151656