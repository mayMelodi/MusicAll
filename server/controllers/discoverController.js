var db    = require("../core/db");
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

Classifier.prototype.load = () => {
    while(db.isConnected());
    
    db.select('discover', {})
        .then((dataset) => { this.classifier.train(dataset); })
        .catch((err) => {
            console.log(err);
            this.load();
        });
}

Classisfier.prototype.classify = function(vector) {
    return this.classifier.run(vector);
}

module.exports.Classifier = Classifier;
