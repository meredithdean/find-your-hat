const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const Field = class {
    constructor(field = [[]]) {
        this.field = field
        this.locationX = 0;
        this.locationY = 0;
        // home position before game starts
        this.field[0][0] = pathCharacter;
    };

    print() {
        const displayString = this.field.map(row => {
            return row.join('');
          }).join('\n');
        console.log(displayString);
      }

      isInBounds() {
        return (
          this.locationY >= 0 &&
          this.locationX >= 0 &&
          this.locationY < this.field.length &&
          this.locationX < this.field[0].length
        );
      }

      isHat() {
        return this.field[this.locationY][this.locationX] === hat;
      }

      isHole() {
        return this.field[this.locationY][this.locationX] === hole;
      }
};

const path = prompt('Which  way?');


console.log(this.field);