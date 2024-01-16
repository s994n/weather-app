import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./index";

describe("Button", () => {
  it("applies the default variant class", () => {
    const { getByRole } = render(<Button>Search current weather</Button>);
    expect(getByRole("button")).toHaveClass("default");
  });
});
