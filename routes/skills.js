import { Router } from 'express'
// import the Todo data
import { skills } from '../data/skills-data.js'

const router = Router()

// ORIGINAL - GET localhost:3000/users (works bc of /users in server.js)
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// GET localhost:3000/skills
router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})

export { router }
