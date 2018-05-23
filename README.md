# lostpets
Homeward
  Homeward was developed by `Dylan Glover`, `Maeli Hector`, `Daniel Hayes`, and `David Grimshaw` in May of 2018 as an application to help lost pets return home. The App uses `Node.js` and `Express.js` to host a page where the client can add, view, and delete lost or found pet postings from a SQL hosted database accessed through `Sequelize`. Homeward uses `Materialize` for CSS stylings and a `Petfinder API` to list animal shelter info. 

To run this page: 
*Create the `pets_db` database with the `schema.sql` file.
*Add your SQL credentials to the development object of the `config.json` file.
*Run an `npm install` from the root folder.
*Run `node server.js` in command line.
*Acces `localhost:8080` in your web browser.

Contents:
*[Server Initialization](./server.js)
*[SQL Schema](./schema.sql)
*[Database Configuration](./config/config.json)
*[CSS Stylesheet](./public/css/styles.css)
*[Webpage Javascript](./public/js/)
*[HTML Pages](./public)
*[SQL Model](./models/pet.js)
*[Sequelize Dependencies](./models/index.js)
*[API Routes](./routes/api-routes.js)
*[HTML Routes](./routes/html-routes.js)