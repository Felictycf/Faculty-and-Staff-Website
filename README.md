# README

## Pre-operation
Front-end Technology
Main technologies.
- Vue.js (2.6.14): JavaScript Framework
- Vuex (3.6.2): State Management
- Vue Router (3.5.3): Route Management
  UI frameworks.
- Ant Design Vue (1.7.8): main UI component library (UI used in the interface, animated buttons, etc.)
- Ant Design Icons Vue (7.0.0): Ant Design's Vue icon component.
- Ant Design Vue Pro Layout (1.0.12): Ant Design's professional layout component.
  Tools and Libraries.
- axios: HTTP client for API calls
- moment: date and time manipulation library
- nprogress: top loading progress bar
- mockjs2: data simulation library
- vue-clipboard2: clipboard tooling
- vue-i18n : internationalisation plugin
- vue-quill-editor : rich text editor
  Development Tools: eslint: Code Quality Tool
- eslint: Code quality tool
- stylelint: Style checker
- babel: JavaScript compiler
- less: CSS preprocessor
- postcss: CSS processing tool

Front-end project structure

1. root directory:

   ├── config: configuration folder
   ├── public: public resources folder
   ├── src: the main source code folder of the project
   └── tests: tests folder

2. src/ folder structure:

   ├── CONST: Constants folder
   ├── api: API interface request folder
   ├── assets: static resources folder
   └── icons: icon resources

   ├── components: public components folder
   ├── ArticleListContent: Article list content component
   ├── AvatarList: Avatar list component
   ├── Charts: Charts component
   ... (other public components)

   ├── config: configuration folder
   ├── core: core functionality folder
   ├── directives: Vue directives folder
   └── permission: permissions folder

   ├── layouts: layout folder
   ├── locales: internationalisation resources folder
   └── lang: language-specific folder
   ├── en-US: English resources folder
   ├── account: account-related text resources
   ... (other English resources folder)
   └── zh-CN: Chinese resources folder
   ... (Chinese resources folder content)



    ├── router: routing folder
    ├── store: Vuex state management folder
        └── modules：Vuex modules folder

    ├── utils: tools and methods folder
    └── views: pages and views folder
        ├── about: about page
        ├── account: account page and its subpages
        ├── dashboard: dashboard page


Backend Technologies
Main Technologies.
- - Koa a lightweight Node.js web framework for building web applications and APIs.
    Middleware and Tools.
- bcryptjs: a library for password encryption, often used for encrypted storage of user passwords.
- koa-body : Koa's request body parsing middleware that parses JSON, form and text.
- koa-router : Koa's routing middleware for defining URL paths and handling requests.
- koa-static: Koa's static file serving middleware for serving static resources.
- koa2-cors : CORS middleware for Koa, allowing cross-domain requests.
- mongoose: a MongoDB object modelling tool for connecting to and manipulating MongoDB databases.
- uuid : Used to generate RFC4122 UUIDs, often used to generate unique identifiers.

1. Install and run the mongodb database (just enough to get it up and running);
   1. Installation specific look at: <https://xiaozhuanlan.com/topic/4769152803>;
   2. start: `brew services start mongodb/brew/mongodb-community`.
   3. shutdown: `brew services stop mongodb/brew/mongodb-community`.
   4. Use a visual tool to view the database: Navicat;
      1. specifically view: <https://xclient.info/s/navicat-premium.html>;
      2. add the database;
2. install nodejs: v16.15.1;

## Project Development

### Starting the back-end

1. Go to the server directory;
2. `npm install`;
3. `npm run dev`;

