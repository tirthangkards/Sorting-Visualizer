export const insertion = array =>{
    if(array.length === 1) return array;

    const animations = [];
    for(let i=1; i<array.length;i++){
        let key = array[i];
        let j=i-1;
        while(j>=0 && array[j]>key){
            animations.push([j + 1, array[j]]);
            array[j+1] = array[j];
            j--;
        }
        animations.push([j + 1, key])
        array[j+1]=key;
    }
    return animations;
}