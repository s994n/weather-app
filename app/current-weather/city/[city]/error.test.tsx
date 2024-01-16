import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Error from "./error";
import { NetworkError } from "@/utils/errors";

describe("Error component", () => {
  it("renders a static error message", () => {
    const { getByText } = render(
      <Error
        error={new NetworkError("Failed to fetch current weather data")}
        reset={() => {}}
      />
    );
    expect(getByText("An error occurred")).toBeInTheDocument();
    expect(getByText("The city could not be found")).toBeInTheDocument();
  });
});
