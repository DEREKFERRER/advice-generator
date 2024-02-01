import React, {useState, useEffect} from "react";
import "./App.css";
import images from "./images/pattern-divider-desktop.svg";
import images2 from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";

function App() {
    const [text, setText] = useState("");
    const [button, setButton] = useState(0);

    useEffect(() => {
      fetch('https://api.adviceslip.com/advice')
          .then(res => res.json())
          .then(data =>{
            setText(data.slip)
            console.log(data)
          })
    },[button])

  
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" relative border rounded-2xl border-transparent bg-[#323a49] w-[33rem]  grid grid-cols-1 gap-2 p-10 ">
        <p className="text-[#52ffa8] text-sm place-self-center  ">
          ADVICE #{text.id} 
        </p>
        <q className="text-[#cee3e9] place-self-center text-center text-[28px] py-5"> 
          {text.advice}
        </q>
        <img
          className=" hidden sm:place-self-center  sm:max-w-full sm:w-full sm:block "
          src={images}
          alt="images"
        />
        <img
          className=" place-self-center pb-4 max-w-full w-full sm:hidden"
          src={images2}
          alt="images"
        />
        <div className="flex justify-center pt-6">
          <div className="absolute flex justify-center items-center -bottom-8 w-16 h-16  border rounded-full border-transparent bg-[#52ffa8] transition duration-500 ease-in-out hover:shadow-[0_0_70px_RGBA(82,255,168,1)]  cursor-pointer">
            <button onClick={()=>{setButton(button+1)}}>
              <img className="" src={dice} alt="images2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
