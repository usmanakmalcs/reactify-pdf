/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragItem } from "./DragItem/DragItem";
import { QuestionConfig } from "./helper";
import styles from "./style.module.scss";

export const TopBar = () => {

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.dynamicFormTopbar}>
        {QuestionConfig.map((item, index) => (
          <div key={index}>
            <DragItem
              key={index}
              item={item}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
