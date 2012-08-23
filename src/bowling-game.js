function BowlingGame() {
    this.rolls = [];
}

BowlingGame.prototype = {
    roll: function (pins) {
        this.rolls.push(pins);
    },

    score: function () {
        var score = 0, roll = 0;

        for (var frame = 0; frame < 10; frame++) {
            if (this.isStrike(roll)) {
                score += this.strikePoints(roll);
                roll += 1;
            } else {
                if (this.isSpare(roll)) {
                    score += this.sparePoints(roll);
                }
                score += this.getScoreForIndex(roll) + this.getScoreForIndex(roll + 1);
                roll += 2;
            }
            if(this.rolls.length == roll) {
                break;
            }
        }

        return score;
    },

    isStrike: function (roll) {
        return this.getScoreForIndex(roll) == 10;
    },



    strikePoints: function (roll) {
        if (this.getScoreForIndex(roll + 2) == 0 || this.getScoreForIndex(roll + 1) == 0)
        {
            return 0;
        }
        return this.getScoreForIndex(roll) + this.getScoreForIndex(roll + 1) + this.getScoreForIndex(roll + 2);
    },

    isSpare: function (roll) {
        return this.getScoreForIndex(roll) + this.getScoreForIndex(roll + 1) == 10;
    },

    sparePoints: function (roll) {
        if (this.getScoreForIndex(roll + 1) == 0)
        {
            return 0;
        }
        return this.getScoreForIndex(roll + 2);
    },

    getScoreForIndex: function (index) {
        //buster.log(index + ":" + this.rolls.length);
        if(this.rolls.length > index) {
            return this.rolls[index];
        }
        return 0;
    }

};
