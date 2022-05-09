const findChar = (arr) => {
    const obj = {};
    for(var i=0; i<arr.length;i++) {
        if(obj[arr[i]] !== undefined) {
            return arr[i];
        }
        else {
            obj[arr[i]] = i;
        }
    }
    return undefined;
}

console.log(findChar[1,2,3,2,3,5])