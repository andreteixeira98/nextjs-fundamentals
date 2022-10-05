import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton(){
  const isLogger = true;


  return(

    isLogger? (
      <button
      type="button"
      className={styles.sigInButton}
    >

      <FaGithub color='04D361'/>
      Andre Teixeira

      <FiX  className={styles.closeIcon}
        color='#737380'
      />

    </button>
    ) : (
      <button
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color='EBA417'/>
      Andre Teixeira

    </button>
    )
  )
}