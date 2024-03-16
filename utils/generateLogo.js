//imports the different classes from files located in the 'lib' folder.
const Square = require("../lib/Square")
const Triangle = require("../lib/triangle")
const Circle = require("../lib/Circle")

//defines a function named  generateLogo  that generates a logo based on the input data
//function decides which shape to use (Triangle, Square, or Circle) for the logo based on the  shape  property of the input data.
function generateLogo(data) {
    //initializes new variable
    let shape = undefined
    // The function checks the  shape  property of the input  data  object to determine which shape to use for the logo. 
    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
    } else if (data.shape === 'Square') {
        shape = new Square(data.shape_color, data.text, data.text_color)
    } else {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    }
    //calls the  render  method on the created shape object to generate the logo and returns the result.
    return shape.render();
}
//Exports the  generateLogo  function so it can be used in other parts of the application. 
module.exports = generateLogo;