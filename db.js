var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var db = require('knex')(config)

function getAllDogs (testDb) {
   const conn = testDb || db 
    return conn('dogs')
    .select()
    // .first()
}

function getDogById(id, testDb) {
    const conn = testDb || db
    return conn('dogs')
    .join('owners', 'dogs.owner_id', 'owners.id')
    .where('dogs.id', id)
    .select('owners.name as owner', 'owners.email as email', 'dogs.id as id', 'dogs.name as name', 'dogs.pic_url as pic_url', 'dogs.suburb as suburb', 'dogs.breed as breed', 'dogs.notes as notes' )
    .first()
}

function getOwner(id, testDb) {
    console.log(id)
   return db('owners')
    //  .join('dogs','dogs_and_walkers.dog_id', 'dogs.id')
      .join('dogs','owners.id', 'dogs.owner_id')
      .where('owners.id', id)
      .select('dogs.name as dog_name','owners.name as name', 'owners.id as id', 'dogs.id as dog_id')
      .first()
    
}

function getWalkRequests(owner, testDb){
    var dog = owner.dog_id
    return db('dogs_and_walkers')
      .join('walkers','walker_id','walkers.id')
      .where('dog_id', dog)
      .select('dog_id as dog','walkers.name as walker', 'status as status')
}

function addNewDog (id,body,testDb) {
    return db('dogs')
      .insert({
          owner_id: id,
          name: body.name,
          breed: body.breed,
          suburb: body.suburb,
          pic_url: body.pic_url,
          notes: body.notes
        }) 
}

function submitRequest(body, id, testDb){
    var body = body.walker_id
 
    return db('dogs').where('id',id)
      .select('id').first()
      .then(function (dog){
         return db('walkers').where('id',body)
            .select('id').first()
            .then( function (walker){
            return    db('dogs_and_walkers')
                  .insert({
                      dog_id: dog.id,
                      walker_id: walker.id,
                      status: 'pending'
                  })
            })
      })
}

module.exports = {
    addNewDog, 
    getOwner, 
    getAllDogs,
    getDogById,
    submitRequest,
    getWalkRequests
}
//beautiful. like a sunset.