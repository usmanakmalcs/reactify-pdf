/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import styles from "./style.module.scss";
import { getDefaultFieldSize, getFields, saveField } from "./helper";
import { FieldRenderer } from "./FieldRenderer";
import { DYNAMIC_QUESTION_TYPE } from "./constant";

type PageEditorProps = {
  pageNumber: number;
};

let listenerAttached = false;

export const PageEditor = (props: PageEditorProps) => {
  const { pageNumber } = props;

  const ref = useRef<HTMLSpanElement>(null);
  const [selectedField, setSelectedField] = useState();

  useEffect(() => {
    if (listenerAttached) return;

    const eventName = "click";

    const clickHandler = (event: any) => {
      const target = event.target;

      const fields = document.getElementsByName("Form-Field");
      const sidebar = document.getElementById("Right-Sidebar");

      let outsideClicked = true;

      fields.forEach((field) => {
        if (
          target === field ||
          field.contains(target) ||
          target === sidebar ||
          sidebar?.contains(target)
        ) {
          outsideClicked = false;
        }
      });

      if (outsideClicked) {
        setSelectedField(undefined);
      }
    };

    document.addEventListener(eventName, clickHandler);

    listenerAttached = true;

    return () => {
      document.removeEventListener(eventName, clickHandler);
      listenerAttached = false;
    };
  }, []);

  const [{ isOver }, dropRef] = useDrop({
    accept: Object.values(DYNAMIC_QUESTION_TYPE),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),

    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();

      if (ref.current && clientOffset) {
        const dropTargetXy = ref.current.getBoundingClientRect();

        const type: DYNAMIC_QUESTION_TYPE = (item as any).type;
        const { width, height } = getDefaultFieldSize(type);

        const x = clientOffset.x - dropTargetXy.left - width / 2;
        const y = clientOffset.y - dropTargetXy.top - height / 2;

        const newField = {
          pageNumber,
          UUID: uuidv4(),
          type: type,
          width,
          height,
          x,
          y,
          required:
            type === DYNAMIC_QUESTION_TYPE.Signature ||
            type === DYNAMIC_QUESTION_TYPE.Initials,
          ...(type === DYNAMIC_QUESTION_TYPE.StrikeThrough && {
            strokeWidth: 2,
            strokeColor: { r: 0, g: 0, b: 0, a: 1 },
          }),
        };

        saveField(newField, pageNumber);
      }
    },
  });

  return (
    <div className={styles.pageContainer} ref={dropRef}>
      <span className={styles.pageContainerDrop} ref={ref}>
        {getFields(pageNumber).map((field, index) => {
          return (
            <FieldRenderer
              field={field}
              key={`field-render-${field.UUID}-${index}`}
              pageNumber={pageNumber}
              index={index}
              scale={1}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
            />
          );
        })}
      </span>
    </div>
  );
};
