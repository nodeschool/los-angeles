# NodeSchool Los Angeles Website

[![Site Screen Shot](http://i.imgur.com/6NZendX.png)](http://nodeschool.io/los-angeles)

## Building

First install the dependecies.

```
npm install
```

Then to build the html or css from source files run.

```
npm run build
```

## Developing

#### Data

It is very simple to add in new information to the site without having to go through the html. It is easy to edit some things like the event data or time from the `data/index.json` file.

Once you edit this file run `npm run build` to see the changes.

### HTML

We are currently using handlebars to setup a basic template for the nodeschool LA site. This is located at `templates/layout.hbs`. After editing this file you will need to run `npm run build` to see the changes.

### CSS

We are currently using LESS as a precompiler for our CSS you can file he source file in `styles/less`. After editing a file you will need to run `npm run build`.
