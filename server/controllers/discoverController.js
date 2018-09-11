var svm = require("svm");

var SVM = new svm.SVM();

var data = [
    [[0,1,1,1,0],0],
    [[0,0,1,1,0],1],
    [[1,1,1,1,1],1],
    [[0,1,0,1,0],0],
    [[0,0,0,0,0],0]
    // [[],],
    // [[],],
    // [[],],
    // [[],],
    // [[],],
    // [[],]
];
// SVM.train(data, labels);
SVM.train(data).done(function(){
    data.forEach(function(ex){
        var prediction = SVM.predictSync(ex[0]);
    });
});
