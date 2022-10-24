import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SupportContact from "./support-contact/support-contact";
import SalesOverview from "./sales-overview/sales-overview";
import SuccessRate from "./success-rate/success-rate";
import messages from "./messages";
import Divider from "./divider";

const Container = styled.div`
  background-color: #f5f5f4;
  padding: 1rem;
  @media screen and (min-width: 600px) {
    padding: 2rem;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Dialog = styled.div`
  background-color: #fff;
  border-radius: 10px;
`;

const SalesMeasures = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 5fr 0fr 5fr;
  }
`;

export const AccountOverview = ({ data }) => {
  return (
    <Container>
      <Header>
        <h2>{messages.title}</h2>
        <SupportContact
          name={data.supportContact.name}
          email={data.supportContact.email}
        />
      </Header>
      <Dialog>
        <SalesOverview
          totalUploads={data.salesOverview.successfulUploads}
          totalLines={data.salesOverview.linesSaved}
        />
        <Divider />
        <SalesMeasures>
          <SuccessRate
            measureName={"Upload Success"}
            attempts={data.salesOverview.uploads}
            successfulAttempts={data.salesOverview.successfulUploads}
          />
          <Divider isVertical />
          <SuccessRate
            measureName={"Lines Saved"}
            attempts={data.salesOverview.linesAttempted}
            successfulAttempts={data.salesOverview.linesSaved}
          />
        </SalesMeasures>
      </Dialog>
    </Container>
  );
};

AccountOverview.propTypes = {
  supportContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired,
  }),
};

export default AccountOverview;
