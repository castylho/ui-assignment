import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import messages from "../messages";

const BoldText = styled.span`
  font-weight: bold;
`;

const SalesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SalesOverview = ({ totalUploads, totalLines }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <SalesHeader>
        <div>
          <FontAwesomeIcon
            icon={faUpload}
            style={{ color: "#58bdef", marginRight: "8px" }}
            role="tooltip"
          />
          <BoldText>{messages.sales}</BoldText>
        </div>
        <FontAwesomeIcon icon={faInfoCircle} style={{ color: "#bebabb" }} />
      </SalesHeader>
      <p style={{ textAlign: "left" }}>
        You had <BoldText>{totalUploads} uploads</BoldText> and{" "}
        <BoldText>{totalLines}</BoldText> lines added.
      </p>
    </div>
  );
};

SalesOverview.propTypes = {
  attempts: PropTypes.number.isRequired,
  successfulAttempts: PropTypes.number.isRequired,
  measureName: PropTypes.string.isRequired,
};

SalesOverview.defaultProps = {
  attempts: 0,
  successfulAttempts: 0,
  measureName: "Measure Name",
};

export default SalesOverview;
