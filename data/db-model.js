const { join } = require('path')
const db = require('./knexConfig')

module.exports = {
    getProject,
    addProject,
    getTask,
    addTask,
    getResources,
    addResources
}

function getProject() {
    return db('project')
}
function addProject(pro) {
    db('project').insert(pro)
    .then(resp => {
        return(getProject())
    })
    return 
}
function getTask(id) {
    return db('task')
    // .where ({projectId:id})
}
function addTask(id,body) {
    console.log(body)
    db('task').insert(body)
    .then( res =>{
       return(getTask(id))        
    }
    )
    
}
function getResources(id) {
    return db('project-resource')
    .join('resource')
    .where({projectId:id})
    
}
function addResources(id,body) {
    db('resource').insert(body)
    .then( res =>{
        return(getTask(id))  
})}