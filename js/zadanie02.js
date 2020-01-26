function concatArray(array1, array2){
    var table = [];
    for(var i = 0; i<array1.length;i++){
        table.push(array1[i]);
    }
    for(var j = 0; j<array1.length;j++){
        table.push(array2[j]);
    }
    return table;
}

console.log(concatArray( [1,3],[3,5]));