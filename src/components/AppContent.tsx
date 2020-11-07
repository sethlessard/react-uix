import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import { updateAppContentScrollableComponent, updateNavDrawerOpen } from '../redux/actions/ui';
import { UIState } from '../redux/reducers/ui';
import HasChildren from '../types/HasChildren';
import HasStyle from '../types/HasStyle';

export interface AppContentProps extends HasChildren, HasStyle { }

const mapStateToProps = (state: { ui: UIState }) => {
  return {
    appbarDefined: state.ui.appbar.defined,
    appbarHeight: state.ui.appbar.defined,
    bottomNavDefined: state.ui.bottomNav.defined,
    bottomNavHeight: state.ui.bottomNav.height,
    navDrawerOpen: state.ui.navDrawer.open
  };
};

const mapDispatchToProps = (dispatch: (v: any) => void) => ({
  updateAppContentScrollableComponent: (ref: React.RefObject<HTMLDivElement>) => dispatch(updateAppContentScrollableComponent(ref)),
  updateNavDrawerOpen: (value: boolean) => dispatch(updateNavDrawerOpen(value))
});

interface ConnectedAppContentProps extends AppContentProps {
  appbarDefined: boolean;
  appbarHeight: number;
  bottomNavDefined: boolean;
  bottomNavHeight: number;
  navDrawerOpen: boolean;
  updateAppContentScrollableComponent: (ref: React.RefObject<HTMLDivElement>) => void;
  updateNavDrawerOpen: (value: boolean) => void;
}

const Wrapper = styled.div<ConnectedAppContentProps & { height: string }>`
  width: 100vw;
  position: fixed;
  z-index: 0;
  left: 0;
  top: ${props => (props.appbarDefined) ? props.appbarHeight : 0}px;
  height: ${props => props.height};
`;

const Relative = styled.div<{ height: string }>`
  position: relative;
  width: 100vw;
  height: ${props => props.height};
`;

const Content = styled.div<{ height: string }>`
  height: ${props => props.height};
  padding: 2em 1.5em;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #ecf0f1;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Padding = styled.div`
  width: 100vw;
  height: 12em;
`;

class AppContent extends Component<AppContentProps> {

  private readonly refScrollableContent: React.RefObject<HTMLDivElement>;

  constructor(props: AppContentProps) {
    super(props);
    this.state = {};
    this.refScrollableContent = React.createRef();

    this.calcHeight = this.calcHeight.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
  }

  calcHeight() {
    const { appbarDefined, appbarHeight, bottomNavDefined, bottomNavHeight } = this.props as ConnectedAppContentProps;
    let height = "100vh";
    let margins = 0;
    if (appbarDefined && bottomNavDefined) margins = appbarHeight + bottomNavHeight;
    else if (appbarDefined) margins = appbarHeight;
    else if (bottomNavDefined) margins = bottomNavHeight;

    if (margins === 0) height = "100vh";
    else height = `calc(100vh - ${margins}px)`;

    return height;
  }

  componentDidMount() {
    const { updateAppContentScrollableComponent } = this.props as ConnectedAppContentProps;
    updateAppContentScrollableComponent(this.refScrollableContent);
  }

  handleClickInside(_) {
    const { navDrawerOpen, updateNavDrawerOpen } = this.props as ConnectedAppContentProps;

    // if the navigation drawer is open, close it
    if (navDrawerOpen) { updateNavDrawerOpen(false); }
  }

  render() {
    const { appbarDefined, appbarHeight } = this.props as ConnectedAppContentProps;
    const height = this.calcHeight();
    const style = {
      appContent: {}
    };
    Object.apply(style.appContent, this.props.style);
    return (
      <Wrapper
        appbarDefined={appbarDefined}
        appbarHeight={appbarHeight}
        height={height}
        onClick={this.handleClickInside}
        style={style.appContent}
      >
        <Relative height={height}>
          <Content height={height} ref={this.refScrollableContent}>
            {this.props.children}
            <Padding />
          </Content>
        </Relative>
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContent);
