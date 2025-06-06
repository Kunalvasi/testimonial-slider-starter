import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
function Testimonials(props){
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(4);
        }
        else{
            setIndex(index-1);
        }

    }
    function rightShiftHandler(){
        if(index+1>4){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let rand=Math.floor(Math.random()*(5));
        setIndex(rand);
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transation-all duration-700 hover:shadow-xl rounded-md">
            <Card review={reviews[index]}></Card>
            
                       <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center">
                        <button
                        onClick={leftShiftHandler}
                         className="cursor-pointer hover:text-violet-500">
                        <FiChevronLeft />
                        </button>
                        <button 
                        onClick={rightShiftHandler}
                        className="cursor-pointer hover:text-violet-500">
                        <FiChevronRight />
                        </button>
                       </div>
            
                       <div className="mt-5">
                        <button 
                        onClick={surpriseHandler}
                        className="bg-violet-400 hover:bg-violet-500 transation-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
                            Surprise Me
                        </button>
                       </div>
        </div>
    );
}
export default Testimonials;