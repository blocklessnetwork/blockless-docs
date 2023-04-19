import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  handleClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
