var svm = require("svm");

var SVM = new svm.SVM();

var data = [
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],],
    [[],]
];
// SVM.train(data, labels);
SVM.train(data).done(function(){
    data.forEach(function(ex){
        var prediction = SVM.predictSync(ex[0]);
    });
});
