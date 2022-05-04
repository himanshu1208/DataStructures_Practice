function findEarliestMonth(stockPrice) {
    var len = stockPrice.length; // 4
    const avgPc = []; // []
    var prevFlag = 0;
    var count = 0;
    for (var i = 0; i < len - 1; i++) {
        count += 1;
        var count2 = len - count; // count2 = 3
        var secflag = 0
        prevFlag += stockPrice[i]
        for (var j = i + 1; j < len; j++) {
            secflag += stockPrice[j] //8
        }
        // prevflag // seclag addition
        var avgPrevFlag = parseInt(prevFlag / count);
        var avgSecFlag = parseInt(secflag / count2);
        avgPc.push(Math.abs(avgPrevFlag - avgSecFlag));
        
    }
}

findEarliestMonth([1,3,2,3])