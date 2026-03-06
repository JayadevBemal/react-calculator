import styles from './ButtonContainer.module.css'
import ButtonItem from './ButtonItem';
const Container = ({array,click,data}) => {



  return  <div className={styles.buttonContainer}>

     <ButtonItem Button={array} data={data} Buttonclick={click}  ></ButtonItem>
    
  </div>
}

export default Container;