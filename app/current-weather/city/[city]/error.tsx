"use client";

import { StyledHeader } from "@/components/atoms";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="error">
      <StyledHeader variant="hero">An error occured</StyledHeader>
      <StyledHeader variant="subheader">
        The city could not be found
      </StyledHeader>
    </main>
  );
}
