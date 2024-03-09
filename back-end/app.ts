// import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';




const app = express();
// dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
