# MELI Example App

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Minimal example of the Mercado Libre application.
The code is organized using hexagonal architecture and [DDD](https://en.wikipedia.org/wiki/Domain-driven_design)

## Screenshots

![image](https://github.com/MissNalgas/meli-example/assets/59502970/365114df-8220-4102-b892-ccc39952ba99)

![image](https://github.com/MissNalgas/meli-example/assets/59502970/6f12c6d0-6745-444a-bca1-c7fcbfb84557)

![image](https://github.com/MissNalgas/meli-example/assets/59502970/a1ec27f1-ae3b-416f-8a7b-c859551813ab)

## Demo

[live demo](https://meli.mssnapps.com/)

## Installation

Install dependencies

```bash
yarn
```

Build for production and generate `.next` folder

```bash
yarn build
```

Run using

```
yarn start
```

## Features

- Filters data from MercadoLibre API and returns it using custom APIs
- Custom URL's
- Search items and display the detail of each item
- Custom express server

## Tests

To run tests use
```bash
yarn test
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
