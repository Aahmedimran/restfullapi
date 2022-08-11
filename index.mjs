
import express from 'express'
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())
const port =process.env.port || 3000

let User =[];

app.post ('/User', (req, res) =>{
console.log(req.body)
  User.push(req.body)
  res.send('User is created')
})

app.get ('/User', (req, res) =>{
  res.send(User)
})

app.put ('/User', (req, res) =>{
  res.send('User is modified')
})

app.delete ('/User', (req, res) =>{
  res.send('User is deleated')
})

app.get('/',  (req, res) => {
  console.log('fake world');
    res.send('Hello World!')
  })
  app.get('/profile', (req, res) => {
    console.log('profile');
        res.send('prfile!')
      })

app.listen(port, () => {
  console.log(`Example app listening on port${port} `)
})
