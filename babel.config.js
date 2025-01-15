module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react","@babel/preset-typescript"],
    "plugins": [
        [
          "module-resolver",
          {
            "root": ["./src"],
            "alias": {
              "@shared": "./src/shared",
              "@components": "./src/components",
              "@": "./src"
            }
          }
        ]
      ]
  };