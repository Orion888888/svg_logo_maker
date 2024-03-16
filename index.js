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
