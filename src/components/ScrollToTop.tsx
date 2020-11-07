import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { UIState } from "../redux/reducers/ui";
import HasChildren from "../types/HasChildren";
import HasStyle from "../types/HasStyle";

export interface ScrollToTopProps extends HasChildren, HasStyle, RouteComponentProps<{}> { }

const mapStateToProps = (state: { ui: UIState }) => ({
  appContentScrollableComponent: state.ui.appContentScrollableComponent
});

interface ConnectedScrollToTopProps extends ScrollToTopProps {
  appContentScrollableComponent: React.RefObject<HTMLDivElement> | undefined
}

class ScrollToTop extends Component<ScrollToTopProps> {
  constructor(props: ScrollToTopProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { appContentScrollableComponent } = this.props as ConnectedScrollToTopProps;
    // scroll to the top on
    if (appContentScrollableComponent && appContentScrollableComponent.current) { appContentScrollableComponent.current.scrollTo(0, 0); }
  }

  render() {
    const { children, style: compStyle } = this.props;
    const style = {
      ScrollToTop: {}
    };
    Object.assign(style.ScrollToTop, compStyle);
    return (
      <div style={style.ScrollToTop}>
        { children }
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(ScrollToTop));
