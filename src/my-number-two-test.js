buster.testCase("My thing", {
    "has the foo and bar": function () {
	var barVar="foo";
        assert.equals("foo", barVar);
    },

    "states the obvious": function () {
        assert(true);
    }
})

