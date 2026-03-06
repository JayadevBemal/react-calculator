import styles from './Display.module.css'

const Display = ({data}) => {
  return <input className={styles.display} type="text" value={data} readOnly/>
}

export default Display;