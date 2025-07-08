import styles from './Header.module.css';
import Image from 'next/image';
import avatar from '@/public/src/assets/imagens/avatar.png'; 
import { ProfileMenu } from './ProfileMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1>Dashboard</h1>
        <nav className={styles.menu}>
          <a href="#">Inicio</a>        
          <a href="#">Menu</a>
          <a href="#">Contato</a>
        </nav>
      </div>

      <div className={styles.right}>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
