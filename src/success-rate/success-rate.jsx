import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BoldGreyText = styled.p`
  color: #c4c4c5;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  text-align: left;
`;

const Rate = styled.p`
  font-size: 2rem;
  color: #22aa54;
  font-weight: bold;
  margin: 0;
  text-align: left;
`;

const SuccessRate = ({ attempts, successfulAttempts, measureName }) => {
  const rate = (successfulAttempts / attempts) * 100;
  const value = `${rate.toFixed(1)}%`;
  return (
    <div style={{ padding: "1rem" }}>
      <Rate>{value}</Rate>
      <BoldGreyText>{measureName.toUpperCase()}</BoldGreyText>
    </div>
  );
};

SuccessRate.propTypes = {
  attempts: PropTypes.number.isRequired,
  successfulAttempts: PropTypes.number.isRequired,
  measureName: PropTypes.string.isRequired,
};

export default SuccessRate;
