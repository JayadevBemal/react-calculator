import styles from './ButtonItem.module.css'

const ButtonItem = ({Button,data,Buttonclick}) => {

let operators = ["/","*","-","+","%",];
let utilities = ["C","⌫"]

  return <> {Button.map((i) => 
    <button type="button" key={i} className={`btn  ${styles.btn} ${i === "0" ? styles.zero : ""} ${operators.includes(i) ? styles.operator : "btn-light"} ${utilities.includes(i) ? styles.utility : "btn-light"} ${i === "=" ? styles.equals:""} `} onClick= {Buttonclick} value={data} >{i}</button>
  )}
       
      </>

}

export default ButtonItem;
