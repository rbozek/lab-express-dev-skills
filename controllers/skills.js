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

function newSkill(req, res) {
  res.render('skills/new')
}


function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function create(req, res) {
  // console.log('TESTING')
  // console.log(req.body)
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
index,
newSkill as new,
show,
create
}
