function reverseString(string) {
    abc = "";
    for(var i=string.length-1;i>=0;i--) {        //O(n)
        abc += string[i]                      //0(n)
    }
    return abc

    //time coplexity O(n), space complexity O(n)
}



console.log(reverseString("hi my name is himanshu"))