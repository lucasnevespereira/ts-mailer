import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import template from './templates/email';

// Load env variables
dotenv.config()

const app = express()

// MiddleWares
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TS-Mailer!')
})

app.listen(process.env.PORT || 8000, () => {
  console.log('TS-Mailer is running')
})
