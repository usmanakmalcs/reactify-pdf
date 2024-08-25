/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames";
import { Rnd } from "react-rnd";
import { DYNAMIC_QUESTION_TYPE } from "../constant";
import { updateField } from "../helper";

import styles from "./styles.module.scss";
import { PageField } from "./PageField/PageField";

interface PDFEditorFieldRendererProps {
  field: any;
  index: number | undefined;
  scale: number;
  pageNumber: number;
  selectedField: any;
  setSelectedField: any;
}

export const FieldRenderer = ({
  field,
  pageNumber,
  index,
  scale,
  selectedField,
  setSelectedField,
}: PDFEditorFieldRendererProps) => {
  const width = field.width * scale;
  const height = field.height * scale;
  const x = field.x * scale;
  const y = field.y * scale;

  const isHighlighted =
    selectedField?.UUID && selectedField?.UUID === field?.UUID;

  const isStrikeThrough = field.type === DYNAMIC_QUESTION_TYPE.StrikeThrough;

  const grabPointStyle = isHighlighted ? styles.grabPoint : undefined;
  const midGrabPointStyle = isHighlighted ? styles.line : undefined;

  const rndResizeProps = {
    ...(isStrikeThrough && {
      enableResizing: {
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        left: true,
        right: true,
        top: false,
        topLeft: false,
        topRight: false,
      },
    }),
  };

  return (
    <Rnd
      name="Form-Field"
      className={classNames(
        styles.fieldContainer,
        {
          [styles.highlightedField]: isHighlighted,
          [styles.strikeThroughFieldContainer]: isStrikeThrough,
        },
        "prevent-user-select"
      )}
      {...rndResizeProps}
      default={{
        x,
        y,
        width,
        height,
      }}
      position={{ x, y }}
      size={{ height, width }}
      minHeight={isStrikeThrough ? 0 : 20}
      minWidth={20}
      style={{
        border: isStrikeThrough
          ? `${field.strokeWidth}px solid rgb(${field.strokeColor?.r}, ${field.strokeColor?.g}, ${field.strokeColor?.b})`
          : `2px solid #015CB9`,
        background: "#4673d11a",
      }}
      onResizeStart={() => setSelectedField(field)}
      onDragStart={() => {
        setSelectedField(field);
      }}
      bounds="parent"
      onDragStop={(e, d) => {
        const { x, y } = d;

        const data = {
          x: x / scale,
          y: y / scale,
        };
        setSelectedField(undefined);

        updateField(data, index, pageNumber);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        const width = parseInt(ref.style.width) / scale;
        const height = parseInt(ref.style.height) / scale;

        setSelectedField(undefined);
        updateField(
          {
            width,
            height,
            x: position.x / scale,
            y: position.y / scale,
          },
          index,
          pageNumber
        );
      }}
      dragGrid={[1, 1]}
      resizeGrid={[1, 1]}
      resizeHandleClasses={{
        bottomLeft: grabPointStyle,
        bottomRight: grabPointStyle,
        topLeft: grabPointStyle,
        topRight: grabPointStyle,
        top: midGrabPointStyle,
        bottom: midGrabPointStyle,
        left: midGrabPointStyle,
        right: midGrabPointStyle,
      }}
    >
      <PageField
        field={field}
        isHighlighted={isHighlighted}
        setSelectedField={setSelectedField}
        index={index}
        pageNumber={pageNumber}
      />
    </Rnd>
  );
};
