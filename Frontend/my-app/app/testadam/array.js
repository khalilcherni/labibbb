//1
function sumArray(array){
    var sum=0
    for(var i=0;i<array.length;i++){
    sum=sum+array[i]
        
    }
    
        return sum
    }
//2
function findMax(numbers){
    var Max=0
    for(var i=0;i<numbers.length;i++){
        for(var j=0;j<numbers.length;j++){
     if (numbers[j] >= numbers[i]){
     Max=numbers[j]
    }
    }
     return Max}   
    }

    //3
    function reverseArray(array){
        var array2=[]
                {
        
                for(var i=0;i<array.length;i++){
                    array2[array.length-i-1]=array[i]
        
                    
                }
                    }
        return array2
                }


    