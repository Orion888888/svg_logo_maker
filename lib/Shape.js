class Shape {
    // method that initialized objects created by the class.
    // parameters are assinged to instance variables.
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text;
    }
}

//exports the  Shape  class, making it available 
//for import in other files within a Node.js application.
module.exports = Shape;