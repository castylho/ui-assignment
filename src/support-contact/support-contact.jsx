import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "../hooks/hooks";
import messages from "../messages";

const GreyText = styled.p`
  text-align: left;
  font-weight: bold;
  color: #c4c4c5;
  font-size: 16px;
  margin: 0;
`;

const HighlightLetter = styled.div`
  border-radius: 10%;
  background-color: #f8cf02;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const BoldText = styled.p`
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const Container = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr 5fr;
`;

const EqualSpacingBox = styled.div`
  text-align: left;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const UserInfo = ({ isMobile, email }) => {
  if (isMobile) {
    return (
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#616160" }} />
          <p style={{ color: "#c4c4c5", margin: "0 8px" }}>{email}</p>
        </div>
        <p style={{ color: "#c4c4c5", margin: "0" }}>
          {messages.supportPhoneNumber}
        </p>
      </>
    );
  }

  return (
    <>
      <FontAwesomeIcon icon={faEnvelope} style={{ color: "#616160" }} />
      <p style={{ color: "#c4c4c5", margin: "0 8px" }}>{email}</p>
      <p style={{ color: "#c4c4c5", margin: "8px 0" }}>
        {messages.supportPhoneNumber}
      </p>
    </>
  );
};

const SupportContact = ({ name, email }) => {
  const firstLetter = name.at(0);
  const { width } = useWindowDimensions();
  const isMobile = width < 600;
  return (
    <div>
      <GreyText>{messages.supportContactTitle}</GreyText>
      <Container>
        <HighlightLetter>{firstLetter}</HighlightLetter>
        <div>
          <BoldText>{name}</BoldText>
          <EqualSpacingBox>
            <UserInfo isMobile={isMobile} email={email} />
          </EqualSpacingBox>
        </div>
      </Container>
    </div>
  );
};

SupportContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

SupportContact.defaultProps = {
  name: messages.supportDefaultName,
  email: messages.supportDefaultEmail,
};

export default SupportContact;
