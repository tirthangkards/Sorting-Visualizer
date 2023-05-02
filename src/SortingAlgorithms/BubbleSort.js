export const bubble = array =>{
    if(array.length === 1) return array;
    const animations = [];
    for( let i=0;i<array.length-1;i++){
        for(let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                const h1=array[j];
                const h2=array[j+1];
                animations.push([j,j+1]); //color to red
                animations.push([j,j+1]); //color to turquoise
                animations.push([j,h2]);
                animations.push([j+1,h1]);
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return animations;

}