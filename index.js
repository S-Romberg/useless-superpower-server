const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const app = express()

const port = 3000

var data = [{id: 1, superpower: "Transform into yourself", name:"Conner", img:""}, {id: 2, superpower: "Contract any disease at will", name:"Greg", img:""}, {id: 3, superpower: "Disappear when people aren't around", name:"Beef", img:""}, {id: 4, superpower: "Move as slow as a sloth", name:"Ryan", img:""}, {id: 5, superpower: "Ability to sneeze at will", name:"Kate", img:""}, {id: 6, superpower: "Teleport one body part", name:"Phill", img:""}]

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    queries.list().then(superpowers => {
        res.json({superpowers});
    }).catch(next);
})

app.get('/:id', (req, res, next) => {
    var { id } = req.params
    queries.read(id).then(superpower => {
        superpower ? response.json({ superpower }) : next()
    }).catch(next)
})

app.post('/', (req, res, next) => {
    var { body } = req
    queries.create(body).then(superpower => {
        response.status(201).json({ superpower })
    }).catch(next)
})

app.put('/:id', (req, res, next) => {
    var { id } = req.params
    var { body } = req

    var newArr = data.map(obj => {
       if(id == obj.id){
           obj.superpower = body.superpower
       } 
       return obj
    })
    data = newArr
    res.send({ data })
})

app.delete('/:id', (req, res) => {
    var { id } = req.params
    var mapped = data.filter(obj => {
        return obj.id != id
    })
    data = mapped
    res.send({ data })
})

app.use(notFound)
app.use(errorHandler)


function notFound(req, res, next) {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
}

function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: req.app.get("env") === "development" ? err.stack : {}
    });
}

app.listen(port)