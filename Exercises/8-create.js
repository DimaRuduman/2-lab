'use strict';

const createUser = (name, city) => ({name, city})
console.log(createUser('Dima', 'Kyiv'));
module.exports = { createUser };
