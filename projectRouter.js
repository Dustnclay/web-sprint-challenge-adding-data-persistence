const express = require('express')
const db = require('./data/db-model')

const router = express.Router();

router.get('/', (req,res) => {
    db.getProject()
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})
router.get('/resource', (req,res) => {
    db.getRes()
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

router.post('/', (req,res) => {
    const body = req.body
    db.addProject(body)
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

router.get('/:id/tasks', (req,res) => {
    const {id} = req.params
    db.getTask(id)
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

router.post('/:id/tasks', (req,res) => {
    const {id} = req.params
    const body = req.body
    db.addTask(id,body)
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

router.get('/:id/resources', (req,res) => {
    const {id} = req.params
    db.getResources(id)
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

router.post('/:id/resources', (req,res) => {
    const {id} = req.params
    const body = req.body
    db.addResources(id,body)
    .then(proj =>
        res.status(200).send(proj))
    .catch(err =>
        res.status(400).send(err)
    )
})

module.exports = router