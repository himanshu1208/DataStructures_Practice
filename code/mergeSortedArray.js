function mergeSortedArrays(arr1,arr2) {
    arr2.forEach(el => arr1.push(el)) // O(n)
    return arr1.sort(); // O(m)

    // time complexity O(n+m) space complexity O(n)
}

function mergeSortedArrays2(arr1,arr2) {
    
}

console.log(mergeSortedArrays([1,2,3,4],[2,3,4]))