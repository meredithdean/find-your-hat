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

    runGame() {
        let playing = true;
        while(playing) {
            this.print();
            this.askQuestion();
            if(!this.isInBounds()) {
                console.log('Sorry, you landed out of bounds!');
                playing = false;
                break;
            } else if (this.isHole()) {
                console.log('Sorry, you fell down a hole!');
                playing = false;
                break;
            } else if (this.isHat()) {
                console.log('Congrats, you found your hat!');
                playing = false;
                break;
            }
             // update current location on the map
            this.field[this.locationY][this.locationX] = pathCharacter;
        }
    }

   
    

    askQuestion() {
        const answer = prompt('Which  way?').toUpperCase();
        switch(answer) {
            case 'U': 
                this.locationY -= 1;
                break;
            case 'D': 
                this.locationY += 1;
                break;
            case 'L': 
                this.locationX -= 1;
                break;
            case 'R': 
                this.locationX += 1;
                break;
            default:
                console.log('Enter U, D, L or R.');
                this.askQuestion();
                break;
        }
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


console.log(this.field);