import React, { Component, ReactNode } from 'react';

export interface DropdownListProps {
  children?:ReactNode[];
};

class DropdownList extends Component<DropdownListProps> {
  constructor(props: DropdownListProps) {
    super(props);
    this.state = {
      visible: false
    };
    // TODO: [RU-22] implement
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default DropdownList;
