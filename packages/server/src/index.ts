import express from 'express';
import cors from 'cors';
import { join } from 'path';

const clientPath = '../../client/build';
const app = express();
app.use(cors());
const port = 8080;

app.use(express.static(join(__dirname, clientPath)));

app.get('/api', (req, res) => {
    res.send(`Hello, Client`);
});

app.get('*', (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`started at http://localhost:${port}` );
});
