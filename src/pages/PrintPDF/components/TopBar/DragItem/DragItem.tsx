import { forwardRef } from "react";

import classNames from "classnames";
import { Icons } from "../../Icons";
import styles from '../style.module.scss';
import { useDrag } from "react-dnd";

export const DragItem = (props) => {
  const {
    item,
    index,
    color,
    dragItemClass = "",
    dragContentClass = "",
  } = props;
  const [{ isDragging }, ref] = useDrag(
    {
      type: item.type,
      item: {
        type: item.type,
        item: item,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    },
    [item]
  );


  return (
    <RenderListItem
      style={{
        opacity: isDragging ? "0.6" : "1",
      }}
      key={`${item.name}-${index}`}
      item={item}
      color={color}
      ref={ref}
      className={`${dragItemClass || ""}`}
      dragContentClass={dragContentClass}
    />
  );
};

const RenderListItem = forwardRef(
  ({ item, color, className, dragContentClass, ...props }: any, ref) => (
    <div
      {...props}
      className={classNames(styles.item, "prevent-user-select", className)}
      ref={ref}
    >
      <div className={`${styles.itemContent} ${dragContentClass || ""}`}>
        <Icons
          className={item.icon === 'TextBox' ? styles.iconItem : ''}
          variant={item.icon}
          color={color}
        />
        <div>{item.name}</div>
      </div>
    </div>
  )
);
