function bigestSumOfTwoElements(array){
    switch(array.length){
        case 0:
            return false;
        case 1:
            return array[0];
        case array.length:
                var tab = [];
                var max = 0;
                var which = 0;
                var j=0;
                var size = array.length-1;
                for(var i=0;i<array.length;i++){
                    tab.push(0);
                }
                for(i=0;i<array.length;i++){
                    for(j=0;j<array.length;j++){
                        if(max < array[j]){
                            max = array[j];
                            which=j;
                        }
                    }
                    array[which]=0;
                    tab[size]=max;
                    max=0;
                    size = size-1;
                }
                max = tab[array.length-2] + tab [array.length-1];
            return max;
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));