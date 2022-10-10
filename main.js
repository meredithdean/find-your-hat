const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);


const Field = class {
    constructor(field) {
        this.field = field
    };

    print() {
        let fieldState;
        fieldState.join(field);
        return fieldState;
    }
};



  console.log(this.field);