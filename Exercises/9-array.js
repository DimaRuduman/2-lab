'use strict';

const phonebook = [
    {name: 'Denys Bereznyak', phone: '0984525534'},
    {name: 'Dasha Koshevaya', phone: '0984352456'}, 
    {name: 'Dima Ruduman', phone: '0986123456'},
    {name: 'Nikitin Egor', phone: '0963459086'},
]
const findPhoneByName=(name)=>{
for (const user of phonebook)
if(user.name === name) 
return user.phone}

module.exports = { phonebook, findPhoneByName };
