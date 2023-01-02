import { FC } from 'react';
import styles from './Menu.module.scss';

interface MenuProps {
  checked: boolean;
  handleChangeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ checked, handleChangeMenu }) => {
  return (
    <>
      <input
        type="checkbox"
        id="menu_checkbox"
        className={styles.menu_checkbox}
        checked={checked}
        onChange={handleChangeMenu}
      />
      <label htmlFor="menu_checkbox" className={styles.label}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </>
  );
};

export default Menu;
