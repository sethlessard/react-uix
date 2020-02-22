import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
const COLOR_PRIMARY = "#009866";
const COLOR_SECONDARY = "#000000";
const COLOR_FOREGROUND = "#000";

class UIApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      aboutBoxOpen: false,
      settingsBoxOpen: false
    }
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
        primaryColor={COLOR_PRIMARY}
        secondaryColor={COLOR_SECONDARY}
        foregroundColor={COLOR_FOREGROUND}
      >
        <Router basename={process.env.PUBLIC_URL}>
          <Appbar>
            <AppTitleContainer>
              <AppbarToggleButton visible={!this.state.navDrawerOpen} onClick={() => { this.setState({ navDrawerOpen: true }) }}>menu</AppbarToggleButton>
              <AppTitle>UiX</AppTitle>
            </AppTitleContainer>
            <AppbarToolbar>
              <DropdownButton
                icon="more_vert"
                style={style.toolbarButtons}
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
                <Link to="/" style={style.navLink}><NavItem><NavItemText>Home</NavItemText></NavItem></Link>
                <Link to="/install" style={style.navLink}><NavItem><NavItemText>Installation</NavItemText></NavItem></Link>
                <Link to="/usage" style={style.navLink}><NavItem><NavItemText>Getting Started</NavItemText></NavItem></Link>
                <Link to="/examples" style={style.navLink}><NavItem><NavItemText>Example Projects</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>App</NavSubheader>
                <Link to="/component/App" style={style.navLink}><NavItem><NavItemText>App</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Appbar</NavSubheader>
                <Link to="/component/Appbar" style={style.navLink}><NavItem><NavItemText>Appbar</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Buttons</NavSubheader>
                <Link to="/component/Button" style={style.navLink}><NavItem><NavItemText>Button</NavItemText></NavItem></Link>
                <Link to="/component/DropdownButton" style={style.navLink}><NavItem><NavItemText>DropdownButton</NavItemText></NavItem></Link>
                <Link to="/component/IconButton" style={style.navLink}><NavItem><NavItemText>IconButton</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Icon</NavSubheader>
                <Link to="/component/Icon" style={style.navLink}><NavItem><NavItemText>Icon</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Inputs</NavSubheader>
                <Link to="/component/Checkbox" style={style.navLink}><NavItem><NavItemText>Checkbox</NavItemText></NavItem></Link>
                <Link to="/component/TextInput" style={style.navLink}><NavItem><NavItemText>Text Input</NavItemText></NavItem></Link>
                <Link to="/component/Switch" style={style.navLink}><NavItem><NavItemText>Switch</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Layout</NavSubheader>
                <Link to="/component/Grid" style={style.navLink}><NavItem><NavItemText>Grid</NavItemText></NavItem></Link>
                <Link to="/component/Row" style={style.navLink}><NavItem><NavItemText>Row</NavItemText></NavItem></Link>
                <Link to="/component/Table" style={style.navLink}><NavItem><NavItemText>Table</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Navigation</NavSubheader>
                <Link to="/component/BottomNavigation" style={style.navLink}><NavItem><NavItemText>BottomNavigation</NavItemText></NavItem></Link>
                <Link to="/component/NavDrawer" style={style.navLink}><NavItem><NavItemText>NavDrawer</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Surfaces</NavSubheader>
                <Link to="/component/Card" style={style.navLink}><NavItem><NavItemText>Card</NavItemText></NavItem></Link>
                <Link to="/component/Paper" style={style.navLink}><NavItem><NavItemText>Paper</NavItemText></NavItem></Link>
              </NavGroup>

              <NavGroup>
                <NavSubheader>Text</NavSubheader>
                <Link to="/component/Heading" style={style.navLink}><NavItem><NavItemText>Heading</NavItemText></NavItem></Link>
                <Link to="/component/Paragraph" style={style.navLink}><NavItem><NavItemText>Paragraph</NavItemText></NavItem></Link>
                <Link to="/component/Text" style={style.navLink}><NavItem><NavItemText>Text</NavItemText></NavItem></Link>
                <Link to="/component/TextArea" style={style.navLink}><NavItem><NavItemText>TextArea</NavItemText></NavItem></Link>
                <Link to="/component/Toast" style={style.navLink}><NavItem><NavItemText>Toast</NavItemText></NavItem></Link>
              </NavGroup>
            </NavContent>
          </NavDrawer>
          <AppContent navDrawerOpen={this.state.navDrawerOpen}>

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
          </AppContent>
        </Router>
      </App>
    );
  }
}

export default UIApp;
