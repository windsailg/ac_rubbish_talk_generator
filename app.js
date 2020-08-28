const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatorRubbishTalk = require('./generator_rubbishtalk')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    const options = req.body
    const rubbishTalk = generatorRubbishTalk(req.body)
    res.render('index', {rubbishTalk: rubbishTalk})
})

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})
