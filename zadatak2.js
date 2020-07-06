function findMax(array){
    var max = 0;
    var a = array.length;
    for (i=0;i<a;i++)
        {
            if (array[i] > max)
            {
                max = array[i];
            }
         }
    return max;
}console.log("largest number is: " + findMax([1,2,3,4,35,5,6,8,9,2,554,15,96]));