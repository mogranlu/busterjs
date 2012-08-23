buster.testCase("BowlingGame", {
    setUp: function () {
        this.game = new BowlingGame();

        this.rollMany = function (rolls, pins) {
            while (rolls--) {
                this.game.roll(pins);
            }
        };
    },

    "gutter game yields 0 in score": function () {
        this.rollMany(20, 0);

        assert.equals(0, this.game.score());
    },

    "one pin down yields score 1": function () {
        this.game.roll(1);
        this.rollMany(19, 0);

        assert.equals(this.game.score(), 1);
    },

    "strike followed by two pins": function () {
        this.game.roll(10);
        this.game.roll(1);
        this.game.roll(1);
        this.rollMany(16, 0);

        assert.equals(this.game.score(), 14);
    },

    "spare followed by one pin": function () {
        this.game.roll(5);
        this.game.roll(5);
        this.game.roll(1);
        this.rollMany(17, 0);

        assert.equals(this.game.score(), 12);
    },

    "spare needs to happen in one frame": function () {
        this.game.roll(1);
        this.game.roll(5);
        this.game.roll(5);
        this.game.roll(1);
        this.rollMany(16, 0);

        assert.equals(this.game.score(), 12);
    },

    "strike followed by spare": function () {
        this.game.roll(10);
        this.game.roll(5);
        this.game.roll(5);
        this.game.roll(1);
        this.rollMany(15, 0);

        // 10 + 5 + 5 + 1 = 21
        // Bonus: 10 + 1 = 11
        assert.equals(this.game.score(), 32);
    },

    "spare should not count as strike": function () {
        this.game.roll(0);
        this.game.roll(10);
        this.game.roll(1);
        this.game.roll(1);
        this.rollMany(16, 0);

        assert.equals(this.game.score(), 13);
    },

    "perfect game": function () {
        this.rollMany(12, 10);

        assert.equals(this.game.score(), 300);
    },

    "roll after game is over should be ignored": function () {
        this.rollMany(20, 1);
        this.game.roll(8);
        
        assert.equals(this.game.score(), 20);
    },

    "test should calculate score after 8 rolls": function () {
        this.rollMany(8, 1);
        
        assert.equals(this.game.score(), 8);
    },

    "test should calculate score after 10 rolls": function () {
        this.rollMany(8, 1);
        this.game.roll(10);
        this.game.roll(10);
        
        assert.equals(this.game.score(), 8);
    },

    "test getScoreForIndex": function () {
        this.rollMany(8, 1);
        this.game.roll(10);
        this.game.roll(10);
        
        assert.equals(this.game.getScoreForIndex(9), 10);        
        assert.equals(this.game.getScoreForIndex(7), 1);
    }




});
