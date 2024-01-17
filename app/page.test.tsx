jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
    };
  },
}));

import React from "react";
import { render } from "@testing-library/react";
import Home from "./page"; // Adjust the import path as needed

describe("Home Page Snapshot", () => {
  it("should match the snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
