import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { NewsletterSignUp } from "../components/ui/footer";

test("render newsletter signup", () => {
  render(<NewsletterSignUp />);
  const emailLabel = screen.getByTestId("email-label");
  expect(emailLabel.textContent).toMatch(/Subscribe to our newsletter/i);
});
