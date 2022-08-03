import {FC, ReactNode} from "react";
import classes from "./MyModal.module.css";

const MyModal: FC<{
  children: ReactNode,
  visible: boolean,
  setVisible: (visible: boolean) => void
}> = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
export default MyModal;
