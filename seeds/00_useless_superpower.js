
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('useless_superpower').del()
    .then(function () {
      // Inserts seed entries
      return knex('useless_superpower').insert([
        {id: 1, superpower: "Transform into yourself", name: "Conner", img: ""}, 
        {id: 2, superpower: "Contract any disease at will", name: "Greg", img: ""}, 
        {id: 3, superpower: "Disappear when people aren't around", name: "Beef", img: ""}, 
        {id: 4, superpower: "Move as slow as a sloth", name: "Ryan", img: ""}, 
        {id: 5, superpower: "Ability to sneeze at will", name: "Kate", img: ""}, 
        {id: 6, superpower: "Teleport one body part", name: "Phill", img: ""}
      ]);
    });
};
