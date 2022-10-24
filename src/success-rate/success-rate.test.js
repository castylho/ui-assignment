import { render, screen } from "@testing-library/react";
import messages from "../messages";
import SuccessRate from "./success-rate";

test("renders learn react link", () => {
  const props = {
    attempts: 10,
    successfulAttempts: 5,
    measureName: "Shots",
  };
  render(<SuccessRate {...props} />);

  const name = screen.getByText(/shots/i);
  const rateText = screen.getByText(`50.0%`);

  expect(name).toBeInTheDocument();
  expect(rateText).toBeInTheDocument();
});
