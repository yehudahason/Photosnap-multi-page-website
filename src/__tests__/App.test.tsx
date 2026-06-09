import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("App Component", () => {
  it("should render the heading", () => {
    render(<Header />);
    // Adjust the text below to match whatever is actually in your App.tsx
    expect(screen.getByText(/Get started/i)).toBeInTheDocument();
  });
});
