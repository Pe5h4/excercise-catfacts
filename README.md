# Cat facts excercise

This is about to test your availability to work with react-hooks and its components.

## Clone the repo

```
$ git clone https://github.com/Pe5h4/excercise-catfacts.git
```

## Install dependencies

```
$ cd excercise-catfacts
$ yarn install
```

## Run the app

```
$ yarn start
```

## Task description

All the components you are going to / you can use are already imported.

### Fetch cat facts

- Fetch Cat fact from  `https://catfact.ninja/fact` on page initialization and render it to `CardHeader`

Example of the response:

```
{ data: { fact: 'Some fact', length: 9}, status: 200, statusText: "OK", headers: {…}, config: {…}, request: XMLHttpRequest }
```

We are interested in `data.fact` response.

### Fetch cat breeds

- Fetch Cat breeds from `https://catfact.ninja/breeds` on `Get breeds` button click and render the data to `Table`.

Example of the response:

```
{ data: {
	...
	data: [{breed: 'Some', coat: 'Some', country: 'Distant', origin: 'Natural', pattern: 'None'}, {…}, ...],
	...
}, status: 200, statusText: "OK", headers: {…}, config: {…}, request: XMLHttpRequest }
```

We are interested in `data.data` response.

### Get a new fact

- Get another fact with `Get fact` button.

### Remove the cat breeds

- Remove the breeds from the table by clicking on `Remove breeds` button.
