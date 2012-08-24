var config = module.exports;

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    sources: [
	"src/**/*.js"
	//  "lib/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*.js"
    ]
}

// Add more configuration groups as needed
