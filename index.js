// Add your functions here

//map
const map = function(array, callback){
    const newArray = []
    for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i]))
}
    return newArray
};

//reduce
