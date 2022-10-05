import styles from './styles.module.scss';
import Image from 'next/image';
import { SignInButton } from '../SignInButton';

function Header(){

  return(
    <header className={styles.container}>
      <div className={styles.content}>
      <Image
        className={styles.logo_image}
        src='/assets/images/logo.svg'
        alt='logo'
        width={80}
        height={60}
      />

      <nav>
        <a className={styles.isActive}>Home</a> &nbsp;
        <a>Posts</a>
      </nav>

      <SignInButton />
      </div>
    </header>
  )
}

export {Header};