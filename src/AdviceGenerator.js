import React, {useState, useEffect} from "react";
import images from "./images/pattern-divider-desktop.svg";
import images2 from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";


const AdviceGenerator = () => {
  const [qoute, setQuote] = useState("");

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(qoute => {setQuote(qoute)})
  },[])

  let fetchNewQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(qoute => {setQuote(qoute)})
  }

    return (
<div className="h-screen flex items-center justify-center p-2 ">
  <div className="relative border rounded-2xl border-transparent bg-[#323a49] w-[33rem] h-[20rem] grid grid-cols-1 gap-2 p-10 mb-10  ">
    <p className="text-[#52ffa8] text-sm place-self-center pb-5 ">
      Advice # "Advice ID goes here"
    </p>
    <h2 className="text-[#cee3e9] place-self-center text-[28px] pb-7 "> 
      {qoute}
    </h2>

    <img
      className=" hidden sm:place-self-center sm:pb-4 sm:max-w-full sm:w-full sm:block  "
      src={images}
      alt="images"
    />
    <img
      className=" place-self-center pb-4 max-w-full w-full sm:hidden"
      src={images2}
      alt="images"
    />

    {/*  pl-[14.5rem] top-[90%] border rounded-full border-transparent bg-[#52ffa8] cursor-pointer left-[43.4%] top-[70%] sm:left-[46.5%] sm:top-[71%] md:left-[48.2%] md:top-[71%] */}

    <div className="absolute flex justify-center top-[15.9rem] w-full mt-8 sm:left-[14.4rem]  sm:w-max">
      <div className=" flex justify-center items-center w-16 h-16  border rounded-full border-transparent bg-[#52ffa8] transition duration-500 ease-in-out hover:shadow-[0_0_70px_RGBA(82,255,168,1)]  cursor-pointer">
        <button onClick={fetchNewQuote}>
          <img className="" src={dice} alt="images2" />
        </button>
      </div>
    </div>
  </div>
</div>
    );
};


export default AdviceGenerator;