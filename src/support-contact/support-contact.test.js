import { render, screen } from "@testing-library/react";
import messages from "../messages";
import SupportContact from "./support-contact";

test("renders learn react link", () => {
  const props = {
    name: "Yohann",
    email: "ygoncalves@alter-solutions.com",
  };
  render(<SupportContact {...props} />);
  const name = screen.getByText(props.name);
  const email = screen.getByText(props.email);
  const supportNumber = screen.getByText(messages.supportPhoneNumber);
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(supportNumber).toBeInTheDocument();
});
