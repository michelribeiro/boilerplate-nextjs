## The purpose of this repository is to create a base template with everything you need for a complete front end project.

### Getting Started

Template for future projects

I made this model using:
* NextJs
  * ReactJs
  * Styled-components
* Jest
* Lint
* Prettier
* Storybook
* PWA


### The profiles for running the project

yarn or npm run

````
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint src --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch",
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook"
  }
````
### Configured Base Url
File: tsconfig.json
````
"baseUrl": "src"
````

### Prettier
The pattern to be followed in the code
File: .prettierrc

````
{
  "trailingComma": "none", //Print trailing commas wherever possible when multi-line
  "semi": false, //Print semicolons at the ends of statements
  "singleQuote": true //Use single quotes instead of double quotes
}
````

For more examples [Prettier](https://prettier.io/docs/en/options.html)


Thank you for sharing this content and if you have any question, send me an e-mail [michel.ribeiro@michelribeiro.com.br](michel.ribeiro@michelribeiro.com.br)
