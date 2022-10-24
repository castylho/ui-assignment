import { render, screen } from "@testing-library/react";
import messages from "../messages";
import SalesOverview from "./sales-overview";

test("renders learn react link", () => {
  const props = {
    totalUploads: 10,
    totalLines: 4,
  };
  render(<SalesOverview {...props} />);

  const name = screen.getByText(messages.sales);

  expect(name).toBeInTheDocument();
});
