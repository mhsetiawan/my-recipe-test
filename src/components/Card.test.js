/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card & given props", () => {
  render(<Card el={el} />);

  //2. test img-recipe-n
  const card = screen.getByTestId(`img-recipe-${el.id}`);
  expect(card).toBeInTheDocument();
  expect(card).toHaveProperty("src", el.image);
  expect(card).toHaveProperty("alt", el.name);

  //3. test title-recipe-n
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  expect(title).toBeInTheDocument();

  //4. test rating-recipe-n
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rating).toBeInTheDocument();

  //5. test link-recipe-n
  const link = screen.getByTestId(`link-recipe-${el.id}`);
  expect(link).toBeInTheDocument();
  expect(link).toHaveProperty("href", `https://dummyjson.com/recipes/${el.id}`);
});
