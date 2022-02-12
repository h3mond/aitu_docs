import express from 'express';
import cors from 'cors';
import { join } from 'path';

import { App_Name } from '@my-app/common';
const clientPath = '../../client/build';
const app = express();
app.use(cors());
const port = 8080;

app.use(express.static(join(__dirname, clientPath)));

app.get('/api', (req, res) => {
    res.send(`Hello ${App_Name}`);
});

app.get('*', (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`app ${App_Name} started at http://localhost:${port}` );
});
