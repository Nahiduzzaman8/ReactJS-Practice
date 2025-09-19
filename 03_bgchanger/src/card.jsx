import { useState } from "react";

function Card() {
  let [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className="fixed bottom-[35px] left-1/2 transform -translate-x-1/2 w-4/5 h-[40px] bg-gray-900 flex items-center justify-between px-4 rounded-md shadow-md">
        <button onClick={()=>setColor("#991B1B")} className="w-[70px] h-[30px] text-white bg-red-700 hover:bg-red-900 rounded-md ">
          RED
        </button>
        <button onClick={()=>setColor("#1E40AF")} className="w-[70px] h-[30px] text-white bg-blue-800 hover:bg-blue-900 rounded-md ">
          BLUE
        </button>
        <button onClick={()=>setColor("#166534")} className="w-[70px] h-[30px] text-white bg-green-800 hover:bg-green-900 rounded-md ">
          GREEN
        </button>
        <button onClick={()=>setColor("#FFFFFF")} className="w-[70px] h-[30px] text-black bg-white hover:bg-blue-100 rounded-md ">
          WHITE
        </button>
        <button onClick={()=>setColor("#EAB308")} className="w-[70px] h-[30px] text-white bg-yellow-500 hover:bg-yellow-600 rounded-md ">
          YELLOW
        </button>
        <button onClick={()=>setColor("#9D174D")} className="w-[70px] h-[30px] text-white bg-pink-800  hover:bg-pink-900 rounded-md ">
          PINK
        </button>
        <button onClick={()=>setColor("black")} className="border border-white w-[70px] h-[30px] text-white bg-black rounded-md ">
          BLACK
        </button>
      </div>
    </div>
  );
}

export default Card;