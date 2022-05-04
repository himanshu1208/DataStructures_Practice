function group(arr) {
    const uniqueObj = getUnique(arr);     
}

function getCount(key,arr) {
    let count = 0;
    arr.forEach(res => {
        if(res === key) {
            count++;
        }
    })
    return count;
} 

function getUnique(arr) {
    const map = new Map();
    arr.forEach(element => {
        if(!map.has(element)) {
            map.set(element,getCount(element,arr));
        }
    });
    return map;
}

// Main 

group([1,2,3,3,1,]);