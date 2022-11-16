import style from '../../../css/global/common.module.scss';
import {useCallback} from "react";

const Button = ({ children, color }) => {
  const buttonStyle = useCallback(() => {
    switch (color) {
      case 'white':
        return style.whiteButton;
      default:
        return style.mainButton;
    }
  }, [style, color]);

  return (
    <button type="button" className={`${style.btn} ${buttonStyle()}`}>
      { children }
    </button>
  );
};

export default Button;
