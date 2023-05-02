export const __mergeSort = (array) =>{
    if(array.length === 1){
        return array;
    }

    const animations = [];
    const auxArray = array.slice(); //a copy of my array

    mergesort(array, 0 , array.length-1,auxArray,animations);
    return animations;
}


const mergesort = (array, start, end, auxArray, animations) =>{
    if(start === end){
        return;
    }

    const mid = Math.floor((start+end)/2);
    mergesort(auxArray, start, mid, array, animations); // left part
    mergesort(auxArray, mid+1, end, array, animations); //right part
    merge(array,start,mid,end,auxArray,animations);
}

const merge = (array,start,mid,end,auxArray,animations) =>{
    let k=start, i=start, j=mid+1; 
    while(i<=mid && j<=end){
        animations.push([i,j]);
        animations.push([i,j]);

        if(auxArray[i]<auxArray[j]){ //positions are correct
            animations.push([k,auxArray[i]]);
            array[k++] = auxArray[i++]; //putting the ith value in the original array
        }

        else{ 
            animations.push([k,auxArray[j]])
            array[k++] = auxArray[j++];
        }
    }

    while(i<=mid){
        animations.push([i,i]); //select
        animations.push([i,i]); //switch
        animations.push([k,auxArray[i]]);
        array[k++]=auxArray[i++];
    }

    while(j<=end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArray[j]]);
        array[k++] = auxArray[j++];
    }
}