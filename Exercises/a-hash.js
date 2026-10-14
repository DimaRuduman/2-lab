'use strict';

const phonebook = {
 'Denys Bereznyak': '0984525534',
 'Dasha Koshevaya':'0984352456', 
 'Dima Ruduman':'0986123456',
 'Nikitin Egor':'0963459086'
};


const findPhoneByName=name=>phonebook[name];

module.exports = { phonebook, findPhoneByName };
