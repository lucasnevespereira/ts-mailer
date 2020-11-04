import express, { Request, Response } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import * as functions from "./helpers/functions"


const app = express()

// MiddleWares
app.use(cors({ origin: '*' }))
app.use(bodyParser.json())


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TS-Mailer! 👁')
})

app.post('/send', (req: Request, res: Response) => {
  let data = req.body
  try {
    const result = functions.sendMail(data)
    res.send(result)
  } catch (e) {
    throw new Error(e)
  }

})

app.listen(process.env.PORT || 8000, () => {
  console.log('TS-Mailer is running')
})
