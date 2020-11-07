import React from 'react';
import PropTypes from 'prop-types';
import HasChildren from '../../types/HasChildren';
import HasStyle from '../../types/HasStyle';

export interface ListProps extends HasChildren, HasStyle {
  type: ListType;
}

export enum ListType {
  Ordered = "ol",
  Unordered = "ul"
}

const List = ({ children, style: listStyle, type = ListType.Unordered }: ListProps) => {
  const style = {
    list: {
      fontSize: ".8rem"
    }
  };
  Object.assign(style.list, listStyle);
  return (
    <div style={style.list}>
      {type === ListType.Ordered &&
        <ol>
          {children}
        </ol>
      }
      {type === ListType.Unordered &&
        <ul>
          {children}
        </ul>
      }
    </div>
  );
};

List.propTypes = {
  children?:PropTypes.node,
  type: PropTypes.oneOf([
    "ul",
    "ol"
  ])
};

export default List;
