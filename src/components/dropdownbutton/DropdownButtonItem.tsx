import React, { Component } from "react";

export interface DropdownButtonItemProps {
  children: React.ReactNode[],
  foregroundColor?: string;
  onClick?: () => void;
};

interface DropdownButtonItemState {
  hovered: boolean;
};

class DropdownButtonItem extends Component<DropdownButtonItemProps, DropdownButtonItemState> {
  constructor(props: DropdownButtonItemProps) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    const style = {
      dropdownItem: {
        display: "flex",
        alignContent: "center",
        padding: "0.75rem",
        color: this.props.foregroundColor || "#000000"
      }
    };

    return (
      <div
        style={style.dropdownItem}
        onMouseEnter={() => this.toggleHover()}
        onMouseLeave={() => this.toggleHover()}
        onClick={() => this.props.onClick && this.props.onClick()}
      >
        {this.props.children}
      </div>
    );
  }

  toggleHover() {
    this.setState({ hovered: !this.state.hovered });
  }
}

export default DropdownButtonItem;
