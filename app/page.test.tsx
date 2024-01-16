import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import Home from "./page";

jest.mock("react-dom");

//
jest.mock("@components/molecules/SingleInputForm", () => ({
  __esModule: true,
  default: ({
    children,
    action,
    inputFieldType,
    inputFieldVariant,
    buttonVariant,
    buttonAriaLabel,
    buttonLabel,
    ...props
  }: {
    children: ReactNode;
    action: (formData: FormData) => Promise<void>;
    inputFieldType: string;
    inputFieldVariant: string;
    buttonVariant: string;
    buttonAriaLabel: string;
    buttonLabel: string;
  }) => <form {...props}>{children}</form>,
}));

it("renders and matches snapshot", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
