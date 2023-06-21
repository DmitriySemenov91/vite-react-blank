# Webpack Starters for reference

A collection of different Webpack setups for quick referencing or starting from.


## This is the main branch with general config, each next config will be added in a new branch
- router   
- jest   
- vite for dev work   
- storybook   
- cypress   
- i18
- redux-toolkit
- RTK query
- coming soon
- husky

## `react-ts-project`

A project setup with React (TSX) support.

Here are some other things this project supports:

- Latest stable ES version transpiling through `@babel/preset-env` and `babel-loader`.(in process)   
- JSX syntax through `@babel/preset-react` and `babel-loader`.(in process)   
- .tsx file extensions, and importing them without adding the extension.
- importing `.css` files into javascript files through `css-loader`.
- Sass: `.scss` and `.sass` formats through `sass-loader` and dart sass (`sass`) package.
- importing images (including `.svg`) through `import` syntax in javascript and `url()` syntax in css.(in process)   
- `html-webpack-plugin@next` for outputting an `index.html` from a template for proper production builds support. _NOTE: `html-webpack-plugin` currently recommends installing the @next version for Webpack 5 support_

## Start using for a new project, or playground

1. Clone the repo
2. Select the branch you want
3. Run `npm i` to install dependencies
4. Run one of the following commands, depending on intent:

### Production Build

```bash
npm run build:prod
```

### Development Build

```bash
npm run build:dev
```

### Development Server on port :3010

```bash
npm start
```


by Dima Semenov   