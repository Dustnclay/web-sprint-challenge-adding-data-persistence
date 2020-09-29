const { join } = require('path')
const { where } = require('./knexConfig')
const db = require('./knexConfig')

module.exports = {
    getProject,
    addProject,
    getTask,
    addTask,
    getResources,
    addResources,
    getRes
}

function getProject() {
    return db('project')
}
function addProject(pro) {
    return db('project').insert(pro)
    // .then(resp => {
    //     return(getProject())
    // })
}
function getTask(id) {
    return db('task')
    // .where ({projectId:id})
}
function addTask(id,body) {
    // console.log(body)
  return  db('task').insert(body)
    // .then( res =>{
    //    return(getProject())        
    // })
}
function getResources(id) {
    return db('project-resource')
    .join('resource', 'project-resource.resourceId','=','resource.id')
    // .select('project.name')
    .where('projectId',id)
    
}
function addResources(id,body) {
    console.log(body)
    return db('resource').insert(body)
    // .then( res =>{
    //     return(getProject())  
// })
}
function getRes(){
    return db('resource')
}
