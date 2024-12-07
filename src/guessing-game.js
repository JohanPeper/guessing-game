class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.answer = null;
    }

    setRange(min, max) {
        this.min = (min == 0) ? min + 1 : min;
        this.max = max - 1;
        this.answer = Math.ceil((this.max + this.min) / 2);
    }

    guess() {
        return this.answer;
    }

    lower() {
        this.max = this.answer - 1;
        this.answer = Math.ceil((this.max + this.min) / 2);
    }
    greater() {
        this.min = this.answer + 1;
        this.answer = Math.ceil((this.max + this.min) / 2);
    }

}
module.exports = GuessingGame;
