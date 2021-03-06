//------------Selection Sort complexity----------------
// Best Case - O(n^2)
// Average Case - O(n^2)
// Worst Case - O(n^2)

// Space Complexity - O(1)


function selection_Sort(array){
    var smallest_val_index, temp;
    var array_length = array.length;

    for (let i = 0; i < array_length; i++) {
        
        //Initially the smallest value is setted up as first element of array
        smallest_val_index = i;

        //The second loop runs from next element in array after i (i.e) i+1 to end of the array
        for(let j = i+1; j < array_length; j++){

            //Check if any element in the array is less then smallest_val_index 
            //If there then it is update with new index
            if( array[j] < array[smallest_val_index]){
                smallest_val_index = j;
            }
        }

        //To check if we found any lowest value than smallest_val_index to avoid unnessary time
        //If we founded means the if condition satisfies and swap occurs
        if(smallest_val_index !== i){
            temp = array[i];
            array[i] = array[smallest_val_index];
            array[smallest_val_index] = temp;
        }

        //To see the partial sorted array after every pass remove the comment of below code
        //console.log(arr);
    }
    return array;
}

console.log(selection_Sort([3,6,-2,8,1,5]));
console.log(selection_Sort(["t","u","a","e","z","b","q"]));

//Explanation for [3,6,-2,8,1,5] 
//Step 1: [3,6,-2,8,1,5]    i=0     smallest_val_index=3
//Step 2: [-2,6,3,8,1,5]    i=1     smallest_val_index=4
//Step 3: [-2,1,3,8,6,5]    i=2     smallest_val_index=5
//Step 4: [-2,1,3,5,6,8]    i=3     smallest_val_index=3 --> No swap because both are same
//Step 5: [-2,1,3,5,6,8]    i=4     smallest_val_index=4 --> No swap because both are same
//Step 6: [-2,1,3,5,6,8]    i=5     smallest_val_index=5 --> No swap because both are same