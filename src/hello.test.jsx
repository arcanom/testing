import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Hello from "./hello";

test("affiche le nom après soumission", () => {
  render(<Hello />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Thanos" } });

  const button = screen.getByText("Envoyer");
  fireEvent.click(button);

  expect(screen.getByText("Salut Thanos")).toBeInTheDocument();
});
