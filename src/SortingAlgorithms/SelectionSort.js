export const selectionSort = array => {
    if (array.length === 1) return array;
    const animations = [];

    for(let i=0;i<array.length-1;i++){
        let minIdx=i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIdx]){
                minIdx=j;
            }
        }
        animations.push([i, minIdx, array[minIdx]]);
        animations.push([minIdx, i, array[i]]);

        let temp=array[i];
        array[i]=array[minIdx];
        array[minIdx]=temp;
    }

    return animations;

}