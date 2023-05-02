import React from 'react'
import './SortingVis.css'
import { __mergeSort } from '../SortingAlgorithms/MergeSort.js';
import { ANIMATION_SPEED_MS, turq,red,bubbleSpeed } from '../constraints';
import { bubble } from '../SortingAlgorithms/BubbleSort';
import { insertion } from '../SortingAlgorithms/InsertionSort';
import { selectionSort } from '../SortingAlgorithms/SelectionSort';


export default class SortingVis extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array: [] //main array stored in state
        };
    }

    componentDidMount(){ //when app loads or this components for the first time, it will reset the array
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0; i<300;i++){
            array.push(randomIntFromInterval(5,700));
        }
        this.setState({array});
    }   


    MergeSort(){
        const animations = __mergeSort(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for(let i=0;i<animations.length;i++){
            let rem = i%3 === 2;
            if(rem){
                const [id, newHeight]= animations[i];
                setTimeout(()=>{
                    bars[id].style.height = `${newHeight}px`;
                },i*ANIMATION_SPEED_MS)
            }

            else{
            const [id1, id2] = animations[i];
            const color = i % 3 === 0 ? red : turq;
            setTimeout(()=>{
            bars[id1].style.backgroundColor=color;
            bars[id2].style.backgroundColor=color;
            },i*bubbleSpeed);
            }
        }

    }

    
    BubbleSort(){
        const animations = bubble(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for(let i=0;i<animations.length;i++){
            const [id,newHeight] = animations[i];
            setTimeout(()=>{
                bars[id].style.height= `${newHeight}px`;
            },i*bubbleSpeed)
        }

    }


    InsertionSort(){
        const animations = insertion(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for(let i=0;i<animations.length;i++){
            const [id,newHeight] = animations[i];
            setTimeout(()=>{
                bars[id].style.height= `${newHeight}px`;
            },i*bubbleSpeed)
        }


    }

    SelectionSort(){
        const animations = selectionSort(this.state.array);
        const bars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [id1, id2, newHeight] = animations[i];
            setTimeout(() => {
              bars[id1].style.height = `${newHeight}px`;
              bars[id2].style.height = `${animations[id2]}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }


    QuickSort(){}
    CountSort(){}

    render(){
        const {array} = this.state;
        return (
            <div className='array-container'>
            {
                array.map((value, index) => (
                    <div className='array-bar' key={index} style={{height: `${value}px`}}>
                    </div>
                ))
            }
            
            <div>
                <button onClick={()=> this.resetArray()}>Generate New Array</button>
                <button onClick={()=> this.BubbleSort()}> Bubble Sort</button>
                <button onClick={()=> this.InsertionSort()}>Insertion Sort</button>
                <button onClick={()=> this.SelectionSort()}>Selection Sort</button>
                <button onClick={()=> this.MergeSort()}>Merge Sort</button>
                {/* <button onClick={()=> this.QuickSort()}>Quick Sort</button>
                <button onClick={()=> this.CountSort()}>Count Sort</button> */}
                </div>
            </div>
        )
    }
}



function randomIntFromInterval(min, max) {
    const num = Math.floor(Math.random() * (max-min + 1) + min);
    return num;
}
