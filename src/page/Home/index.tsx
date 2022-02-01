import { Button } from '../../components/Buttom';
import styles from './style.module.css';

export const Home: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Tela Home</h1>
        <Button />
      </div>
    </>
  );
};
