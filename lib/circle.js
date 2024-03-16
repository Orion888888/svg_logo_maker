// mports the  Shape  class from a file named Shape.js 
const shape = require("./Shape.js");

//Circle  class is defined using the  class  keyword. 
//By extending  Shape , it inherits properties and methods from the  Shape  class.
class Circle extends Shape {
    //This method generates and returns a string that represents SVG code for 
    //drawing a circle and displaying text inside it.
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.color}"/>
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

module.exports = Circle;