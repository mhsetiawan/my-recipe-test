/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("renders Footer component & given elements", async () => {
  render(<Footer />);

  //6. footer-text
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toBeInTheDocument();

  //7. footer link-facebook
  const linkFacebook = screen.getByTestId("link-facebook");
  expect(linkFacebook).toBeInTheDocument();
  expect(linkFacebook).toHaveProperty("href", "https://facebook.com/");

  //8.  footer link-x
  const linkX = screen.getByTestId("link-x");
  expect(linkX).toBeInTheDocument();
  expect(linkX).toHaveProperty("href", "https://x.com/");

  //9. footer link-instagram
  const linkInstagram = screen.getByTestId("link-instagram");
  expect(linkInstagram).toBeInTheDocument();
  expect(linkInstagram).toHaveProperty("href", "https://instagram.com/");
});
