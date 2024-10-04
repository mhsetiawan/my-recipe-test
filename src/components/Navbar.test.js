/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./NavBar";

test("renders Navbar component & given elements", async () => {
  render(<Navbar />);

  //10. navbar my-recipe
  const navbarText = screen.getByTestId("my-recipe");
  expect(navbarText).toBeInTheDocument();

  //11. form-search
  const search = screen.getByTestId("form-search");
  expect(search).toBeInTheDocument();
});
