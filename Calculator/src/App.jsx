import "./App.css";
import Container from "./ButtonContainer";
import Display from "./Display";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
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
  let buttonClick = (item) => {
    let value = item.target.innerText;
    
      if (value === "=") {
        if (!data) return;

        try {
          let result = eval(data);
          setdata(result.toString());
        } catch {
          setdata("error");
        }
      
    } else if (value === "C") {
      setdata("");
    } else if ( value === "⌫") {
      setdata((prev) => prev.toString().slice(0, -1));
    } else {
      if (data === "error") {
        setdata((prev) => prev);
      } else {
        setdata((prev) => prev + value);
      }
    }
  };
  return (
    <>
      <div className={styles.calcContainer}>
        <Display data={data}></Display>
        <Container
          array={buttonArray}
          data={data}
          click={buttonClick}
        ></Container>
      </div>
    </>
  );
}

export default App;
