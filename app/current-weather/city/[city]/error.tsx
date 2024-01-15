"use client";

import { StyledHeader } from "@/components/atoms";

export default function Error() {
  return (
    <main className="error">
      <StyledHeader variant="hero">An error occured</StyledHeader>
      <StyledHeader variant="subheader">
        Failed to find weather for the city. Please try a different city or try
        again later.
      </StyledHeader>
    </main>
  );
}
