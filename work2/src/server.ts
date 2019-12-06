import express = require('express')
import { MetricsHandler } from './metrics'
import path = require('path')

const app = express()
const port: string = process.env.PORT || '8080'
app.use(express.static(path.join(__dirname, '/../public')))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.get('/', (req: any, res: any) => {
    res.send('Hello, if you want to see your name on the screen and a button to have metrics you must ad (/hello/YOUR_NAME) to the url')
  res.end()
})
app.get(
    '/hello/:name', 
    (req: any, res: any) => res.render('hello.ejs', {name: req.params.name})
  )

app.get('/metrics.json', (req: any, res: any) => {
    MetricsHandler.get((err: Error | null, result?: any) => {
      if (err) {
        throw err
      }
      res.json(result)
    })
  })

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})