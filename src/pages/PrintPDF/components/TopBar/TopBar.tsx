/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragItem } from "./DragItem/DragItem";
import { MoreQuestionConfigs, QuestionConfig } from "./helper";
import styles from "./style.module.scss";

export const TopBar = () => {
  const getQuestions = () => {
    const configs: any = QuestionConfig;

    if (screen.width > 1515) {
      const lastIndex = configs.length - 1;
      const { items } = configs[lastIndex];

      configs[lastIndex].items = [...items, ...MoreQuestionConfigs] as any[];

    //   configs.push(StrikeThroughQuestionFields);
    }

    return configs;
  };
  const questionsConfiguration = getQuestions();

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.dynamicFormTopbar}>
        {questionsConfiguration.map((item, index) => (
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
