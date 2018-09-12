var data = require('../configuration/data');
var brain = require("brain.js");


function PreProcessing(dataset) {
    var output = [];
    dataset.forEach(element => {
        output.push({ input: element[0], output: [element[1]] });
    });
    return output;
}

function Classifier () {
    this.classifier = new brain.recurrent.RNN({
        activation: 'sigmoid',
        hiddenLayers: [4],
        learningRate: 0.01,
    });
}

Classifier.prototype.load = function() {
    var temp = PreProcessing(data.data);
    this.classifier.train(temp);
}
Classifier.prototype.classify = function(vector) {
    return new Promise((resolve, reject) => {
        try {
            resolve(this.classifier.run(vector));
        } catch (err) {
            reject(err);
        }
    });
}
//*
module.exports.Classifier = Classifier;
/*/
var c = new Classifier();
c.load();
console.log("1. Predicted Value = " + c.classify([1,1,1,4,1,1]));
console.log("2. Predicted Value = " + c.classify([7,12,2,1,1,1]));
console.log("3. Predicted Value = " + c.classify([1,6,1,6,1,1]));
//*/