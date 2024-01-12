import { Router } from 'express'
// import the Todo data - now moved to CONTROLLER 
// import { skills } from '../data/skills-data.js'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// ORIGINAL - GET localhost:3000/users (works bc of /users in server.js)
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)

export { router }
