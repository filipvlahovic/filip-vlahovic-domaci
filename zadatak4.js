var arrayVar = new Array(10);
document.getElementById("array").innerHTML = arrayVar;
function sortNums(arrayVar) {
    arrayVar.sort();
    document.getElementById("array").innerHTML = arrayVar;
 }console.log(arrayVar);