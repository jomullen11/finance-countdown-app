import { Router } from 'express'
import models from '../models'

const router = Router();

// reads from the database
router.get('/', async (req, res) => {
    const result = await models.users.find({})
    res.status(200).send(result)
})

router.get('/:id', async (req, res) => {
    const result = await models.users.find({_id: req.params.id})
    // .then(data => data.map(element => console.log(element)))
    res.status(200).send(result)
})

// creates new data
router.post('/', async (req, res) => {
    const data = await models.users.insert(req.body)
    res.status(201).send(data)
})

// udatates every entry
router.put('/:id', async (req, res) => {
    const data = req.body
    // make sure to set which items you're updating
    const updatedData = await models.users.findOneAndUpdate({_id: req.params.id}, { $set: { "name": data.name, "type": data.type}  }, req.body)
    res.status(200).send(updatedData)
})

// deletes items at their :id
router.delete('/:id', async (req, res) => {
    const result = await models.users.findOneAndDelete({_id: req.params.id})
    res.status(200).send(result)
    }
)

export default router