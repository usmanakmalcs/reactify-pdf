/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from "react";
import { DYNAMIC_QUESTION_TYPE } from "../../constant";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { saveFieldValue } from "../../helper";

export const PageField = (props) => {
  const { field, isHighlighted, setSelectedField, index, pageNumber } = props;
  const { UUID, value, width, height, type } = field;

  const isTextBox = type === DYNAMIC_QUESTION_TYPE.TextBox;

  const getFieldProps = () => {
    return {
      ...(isTextBox
        ? {
            width,
            height,
            className: classNames(styles.PDFFieldOverlay, styles.textField, {
              [styles.activeTextField]: isHighlighted,
            }),
            onBlur: (e: any) => {
              const value = e.target.value;
              saveFieldValue(value, index, pageNumber);
              setSelectedField(undefined);
            },

            defaultValue: value,
            placeholder: 'Enter Text'
          }
        : {}),
    };
  };

  const getProps = useCallback(
    () => ({
      ...getFieldProps(),
    }),
    [value, isHighlighted]
  );

  return (
    <div className={styles.pageField}>
      <input
        onClick={() => setSelectedField({ UUID })}
        itemID={`field-${UUID}`}
        {...getProps()}
      />
    </div>
  );
};
