const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo');

const questions = [ 
    //when I am prompted for a shape
    //then I am presented with a list of shapes to choose from: circle, triangle, and square.
    {
        type: 'list',
        name: 'shape',
        message: 'What shape did you want the svg to be?',
        choices: ['circle', 'triangle', 'square']
    },
    //prompts me for the shape color
    //enters a color keyboard
    {
        type:'input',
        message: 'What color did you want the shape to be?',
        name: 'shape_color'
    },
    //prompts for a text
    //enter three characters
    {
        type: 'input',
        message: 'Enter character set of three letters:',
        name: 'text'
    },
    //prompts for the text color
    //eter a color keyboard
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'text_color'
    },
];

//enter input for all prompts
//SVG file is created name 'logo.svg'
function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(err) {
        if (err) {
            return console.log(err);
        }
        //output text "Generated logo.svg" is printed in the command line
        console.log("Generated logo.svg");
    });
}

// function to intialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();