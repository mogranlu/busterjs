var config = module.exports;

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    sources: [
      //  "lib/mylib.js", // Paths are relative to config file
      //  "lib/**/*.js"   // Glob patterns supported
    ],
    tests: [
        "test/*-test.js"
    ]
}

// Add more configuration groups as needed
