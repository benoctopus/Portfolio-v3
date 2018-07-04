const express = require('express');
const parser = require('body-parser');
const path = require('path');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const app = express();
const PORT = process.env.PORT || 8080;

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(parser.text());

app.use(express.static(path.join(__dirname, '../../dist')));

// app.get( "/*", ( req, res ) => {
//   const jsx = ( <Layout /> );
//   const reactDom = renderToString( jsx );
//
//   res.writeHead( 200, { "Content-Type": "text/html" } );
//   res.end( htmlTemplate( reactDom ) );
// } );

app.listen(PORT, () => {
  console.log('listening on', PORT)
});

// function htmlTemplate( reactDom ) {
//   return `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>React SSR</title>
//         </head>
//
//         <body>
//             <div id="app">${ reactDom }</div>
//             <script src="./app.bundle.js"></script>
//         </body>
//         </html>
//     `;
// }