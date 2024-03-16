const shape = require("./Shape.js");

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.textColor}" />`;
    } 
}

module.exports = Square;