import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import {
  App,
  Appbar,
  AppTitleContainer,
  AppbarToggleButton,
  AppTitle,
  AppbarToolbar,
  DropdownButton,
  DropdownButtonItem,
  DropdownButtonText,
  DropdownButtonIcon,
  NavDrawer,
  NavHeader,
  NavContent,
  NavGroup,
  NavItem,
  NavItemText,
  NavSubheader,
  AppContent,
  BottomNavigation,
  BottomNavItem,
  BottomNavItemIcon,
  BottomNavItemText
} from "react-uix";

// import {
//   LDSRipple
// } from '../../dist/spinners';

import {
  AppbarFragment,
  BottomNavigationFragment,
  DropdownButtonFragment,
  HomeFragment,
  NavDrawerFragment,
  ButtonFragment,
  CardFragment,
  CheckboxFragment,
  HeadingFragment,
  IconFragment,
  IconButtonFragment,
  PaperFragment,
  ParagraphFragment,
  RowFragment,
  TableFragment,
  InstallationFragment,
  UsageFragment,
  GridFragment,
  ExamplesFragment,
  AppFragment,
  SwitchFragment,
  TextFragment,
  TextAreaFragment,
  ToastFragment
} from "./fragment";
import TextInputFragment from './fragment/TextInputFragment';

// const COLOR_PRIMARY = "#6c5ce7";
// const COLOR_PRIMARY = "#16a085";
// const COLOR_PRIMARY = "#f1c40f";
// const COLOR_PRIMARY = "#f39c12";
// const COLOR_PRIMARY = "#2ecc71";
// const COLOR_PRIMARY = "#e67e22";
// const COLOR_PRIMARY = "#d35400";
// const COLOR_PRIMARY = "#3498db";
// const COLOR_PRIMARY = "#e74c3c";
// const COLOR_PRIMARY = "#c0392b";
// const COLOR_PRIMARY = "#2c3e50";
// const COLOR_PRIMARY = "#1abc9c";

const NSLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};

  &:focus,
  &:hover,
  &:visited,
  &:active,
  &:link {
    text-decoration: none;
    color: ${props => props.color};
  }
`;

const theme = {
  colorPrimary: "#2c3e50",
  colorSecondary: "#000000",
  text: {
    colorOnLight: "#111",
    colorOnDark: "#fff"
  }
};

class UIApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      aboutBoxOpen: false,
      settingsBoxOpen: false
    };
  }

  render() {
    const style = {
      toolbarButtons: {
        margin: "0 0.5rem"
      },
      navLink: {
        textDecoration: "none"
      }
    };

    return (
      <App
        theme={theme}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <Appbar>
            <AppTitleContainer>
              <AppbarToggleButton visible={!this.state.navDrawerOpen} onClick={() => this.setState({ navDrawerOpen: true })}>menu</AppbarToggleButton>
              <AppTitle>UiX</AppTitle>
            </AppTitleContainer>
            <AppbarToolbar>
              <DropdownButton
                icon="more_vert"
                style={style.toolbarButtons}
                refBackgroundColor={theme.colorPrimary}
              >
                <DropdownButtonItem onClick={() => this.setState({ settingsBoxOpen: true })}>
                  <DropdownButtonIcon>settings</DropdownButtonIcon>
                  <DropdownButtonText>Settings</DropdownButtonText>
                </DropdownButtonItem>
                <DropdownButtonItem onClick={() => this.setState({ aboutBoxOpen: true })}>
                  <DropdownButtonIcon>question_answer</DropdownButtonIcon>
                  <DropdownButtonText>About</DropdownButtonText>
                </DropdownButtonItem>
              </DropdownButton>
            </AppbarToolbar>
          </Appbar>
          <NavDrawer>
            <NavHeader />
            <NavContent>
              <NavGroup>
                <NSLink color={theme.text.colorOnLight} to="/"><NavItem><NavItemText>Home</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/install"><NavItem><NavItemText>Installation</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/usage"><NavItem><NavItemText>Getting Started</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/examples"><NavItem><NavItemText>Example Projects</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>App</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/App"><NavItem><NavItemText>App</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Appbar</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Appbar"><NavItem><NavItemText>Appbar</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Buttons</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Button"><NavItem><NavItemText>Button</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/DropdownButton"><NavItem><NavItemText>Dropdown Button</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/IconButton"><NavItem><NavItemText>Icon Button</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Icon</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Icon"><NavItem><NavItemText>Icon</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Inputs</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Checkbox"><NavItem><NavItemText>Checkbox</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/TextInput"><NavItem><NavItemText>Text Input</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Switch"><NavItem><NavItemText>Switch</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Layout</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Grid"><NavItem><NavItemText>Grid</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Row"><NavItem><NavItemText>Row</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Table"><NavItem><NavItemText>Table</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Navigation</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/BottomNavigation"><NavItem><NavItemText>Bottom Navigation</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/NavDrawer"><NavItem><NavItemText>Navigation Drawer</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Surfaces</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Card"><NavItem><NavItemText>Card</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Paper"><NavItem><NavItemText>Paper</NavItemText></NavItem></NSLink>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Text</NavSubheader>
                <NSLink color={theme.text.colorOnLight} to="/component/Heading"><NavItem><NavItemText>Heading</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Paragraph"><NavItem><NavItemText>Paragraph</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Text"><NavItem><NavItemText>Text</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/TextArea"><NavItem><NavItemText>Text Area</NavItemText></NavItem></NSLink>
                <NSLink color={theme.text.colorOnLight} to="/component/Toast"><NavItem><NavItemText>Toast</NavItemText></NavItem></NSLink>
              </NavGroup>
            </NavContent>
          </NavDrawer>
          <AppContent navDrawerOpen={this.state.navDrawerOpen}>
            <Switch>
              <Route exact path="/" component={HomeFragment} />
              <Route path="/install" component={InstallationFragment} />
              <Route path="/usage" component={UsageFragment} />
              <Route path="/examples" component={ExamplesFragment} />

              <Route path="/component/App" component={AppFragment} />

              <Route path="/component/Appbar" component={AppbarFragment} />

              <Route path="/component/Button" component={ButtonFragment} />
              <Route path="/component/DropdownButton" component={DropdownButtonFragment} />
              <Route path="/component/IconButton" component={IconButtonFragment} />

              <Route path="/component/Icon" component={IconFragment} />

              <Route path="/component/Checkbox" component={CheckboxFragment} />
              <Route path="/component/TextInput" component={TextInputFragment} />
              <Route path="/component/Switch" component={SwitchFragment} />

              <Route path="/component/BottomNavigation" component={BottomNavigationFragment} />
              <Route path="/component/NavDrawer" component={NavDrawerFragment} />

              <Route path="/component/Grid" component={GridFragment} />
              <Route path="/component/Row" component={RowFragment} />
              <Route path="/component/Table" component={TableFragment} />

              <Route path="/component/Card" component={CardFragment} />
              <Route path="/component/Paper" component={PaperFragment} />

              <Route path="/component/Heading" component={HeadingFragment} />
              <Route path="/component/Paragraph" component={ParagraphFragment} />
              <Route path="/component/Text" component={TextFragment} />
              <Route path="/component/TextArea" component={TextAreaFragment} />
              <Route path="/component/Toast" component={ToastFragment} />
            </Switch>
          </AppContent>
          <BottomNavigation>
            <NSLink to="/" color={theme.text.colorOnDark}>
              <BottomNavItem>
                <BottomNavItemIcon>home</BottomNavItemIcon>
                <BottomNavItemText>Home</BottomNavItemText>
              </BottomNavItem>
            </NSLink>
            <NSLink to="/install" color={theme.text.colorOnDark}>
              <BottomNavItem>
                <BottomNavItemIcon>build</BottomNavItemIcon>
                <BottomNavItemText>Install</BottomNavItemText>
              </BottomNavItem>
            </NSLink>
            <NSLink to="/usage" color={theme.text.colorOnDark}>
              <BottomNavItem>
                <BottomNavItemIcon>info_outline</BottomNavItemIcon>
                <BottomNavItemText>Get Started</BottomNavItemText>
              </BottomNavItem>
            </NSLink>
          </BottomNavigation>
        </Router>
      </App>
    );
  }
}

export default UIApp;
