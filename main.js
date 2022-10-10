const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const Field = class {
    constructor(field = [[]]) {
        this.field = field
    };

    print() {
        const displayString = this.field.map(row => {
            return row.join('');
          }).join('\n');
        console.log(displayString);
      }
};

const path = prompt('Which  way?');


console.log(this.field);