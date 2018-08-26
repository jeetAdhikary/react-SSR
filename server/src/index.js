import  express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

//components
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    const content = renderToString(<Home />);
    const html = `
    <!DOCTYPE <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Page Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>   
    </body>
    </html>`;
    
    res.send(html);
})


app.listen(3000, ()=>{
    console.log('server is listening to port 3000');
})