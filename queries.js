const database = require('./database-connection')

const queries = {
    list(){
        return database('useless_superpower')
    },
    read(id){
        return database('useless_superpower').where('id', id).first()
    },
    create(superpower){
        return database('useless_superpower').insert(superpower).returning('*').then(record => record[0])
    },
    update(id, superpower){
        return database('superpower').update(superpower).where('id', id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('superpower').del()
    }
}

module.exports = queries

