import { Button } from '../../components/Buttom';
import styles from './style.module.css';

export const DashBoard: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Tela DashBoard</h1>
        <Button />
      </div>
    </>
  );
};
