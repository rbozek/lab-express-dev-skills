import { Skill } from '../models/skill.js'

// used previously, before we set up schema/model:
// import { skills } from '../data/skills-data.js'

// Inside the index controller, use the Skill model to query for ALL skills
function index(req, res) {
 Skill.find({})
 .then(skills => { // skills represents the result of the query, in this case ALL skills
   res.render('skills/index', {
     skills: skills,
   })
 })
 .catch(error => { // If there's an error, console.log it and redirect back home!
   console.log(error)
   res.redirect('/')
 })
}

export {
index,
}
