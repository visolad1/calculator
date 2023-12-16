import { Button } from '../UI/Button'
import styles from './NumericKeypad.module.scss'

export const NumericKeypad = () => {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']
  return (
    <div className={styles.wrapper}>
      {nums.map(num => (
        <div className={`${styles.btn} ${num === '0' ? styles.btn_b : ''}`}><Button item={num} /></div>
      ))}
    </div>
  )
}
