import express = require('express')
import { MetricsHandler } from './metrics'
import path = require('path')
import bodyparser = require('body-parser')

const app = express()
const port: string = process.env.PORT || '8082'
const dbMet: MetricsHandler = new MetricsHandler('./db/metrics')
app.use(express.static(path.join(__dirname, '/../public')))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded())


app.set('views', __dirname + "/../views")
app.set('view engine', 'ejs');


app.get('/', (req: any, res: any) => {
  res.write('Hello world')
  res.end()
})

app.get('/hello/:name', (req: any, res: any) => {
  res.render('hello.ejs', {name: req.params.name})
})


app.get("/metrics/:id", (req: any, res: any) => {
  
  dbMet.getOne(req.params.id,(err: Error | null, result?: any) => {
    if (err) {
      res.status(500).send(err);
    }
    else res.status(200).send(result);
  });
});

app.get('/metrics.json', (req: any, res: any) => {
  dbMet.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})


app.delete("/metrics/:id", (req: any, res: any) => {
  dbMet.delete(req.params.id, (err: Error | null, result: any) => {
    if(err) res.status(500).send({err: err});
    else res.status(200).send("saved");
  })
})

app.post('/metrics/:id', (req: any, res: any) => {
  dbMet.save(req.params.id, req.body, (err: Error | null) => {
    if (err) throw err
    res.status(200).send()
  })
})

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`Server is running on http://localhost:${port}`)
})
