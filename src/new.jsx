import React, { useState } from "react";
import ButtonContainersec from "./ButtonContainersec";
import Display from "./Displaysec";

export default function Calculator() {
  let buttonArray = [
    "C",
    "⌫",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    ".",
    "0",
    "%",
  ];

  let [data, setdata] = useState("");
  let [equation,setEquation] = useState("");


  let buttonClick = (item) => {
    let value = item.target.innerText;

    if (value === "=") {
      if (!equation) return;

      try {
        let result = eval(equation);
        setdata(result);
      } catch {
        setdata("error");
      }
    } else if (value === "C") {
      setdata("");
      setEquation("");
    } else if (value === "⌫") {
      setEquation((prev) => prev.toString().slice(0, -1));
      setdata("")
    } else {
      if (data === "error") {
        setdata("error");
      } else {
        setEquation((prev) => prev + value);
        
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white selection:bg-indigo-500 selection:text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="mb-6 text-center z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
          React Calculator
        </h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">
          Minimal &amp; Modern
        </p>
      </header>

      <Display result={data} equation={equation} ></Display>

      {/* Calculator Container */}
      <ButtonContainersec
        array={buttonArray}
        data={data}
        click={buttonClick}
      ></ButtonContainersec>

      {/* Footer */}
      <footer className="mt-8 text-xs text-slate-400 tracking-wide z-10 flex items-center gap-1">
        <span>Built with React &amp; Tailwind by</span>
        <span className="text-indigo-400 font-medium">Jayadev Bemal</span>
      </footer>
    </div>
  );
}
