import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const HorizontalDivider = styled.hr`
  margin: 0;
  background-color: #c4c4c5;
`;

const DividerVertical = styled.hr`
  margin: 0;
  background-color: #c4c4c5;
`;

const Divider = ({ isVertical }) => {
  if (isVertical) {
    return <DividerVertical />;
  }

  return <HorizontalDivider />;
};

Divider.propTypes = {
  isVertical: PropTypes.bool,
};

export default Divider;
