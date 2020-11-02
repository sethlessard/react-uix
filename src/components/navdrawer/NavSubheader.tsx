import React from 'react';
import PropTypes from 'prop-types';

import Heading from "../Heading";

const NavSubheader = (props) => {
  const style = {
    navSubheader: {
      padding: ".25em 1em"
    }
  };
  return (
    <div style={style.navSubheader}>
      <Heading h={6} style={{ margin: 0, padding: 0 }}>{props.children}</Heading>
    </div>
  );
};

NavSubheader.propTypes = {
  children: PropTypes.node
};

export default NavSubheader;
