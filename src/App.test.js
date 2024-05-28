import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
    render(<App />);
    const headerTitle = screen.getByText(/Image Search/i);
    expect(headerTitle).toBeInTheDocument();
});

test("renders SearchForm with initial state", () => {
    render(<App />);
    const searchForm = screen.getByTestId("search-form");
    const searchLoading = screen.queryByTestId("search-loading");
    const searchError = screen.queryByTestId("search-error");

    expect(searchForm).toBeInTheDocument();
    expect(searchLoading).toBeNull();
    expect(searchError).toBeNull();
});

test("renders Gallery with initial state", () => {
    render(<App />);
    const gallery = screen.getByTestId("gallery");
    const images = screen.queryAllByRole("img");
    const modal = screen.queryByTestId("modal");

    expect(gallery).toBeInTheDocument();
    expect(images).toHaveLength(1); // the image is the logo in the footer
    expect(modal).toBeNull();
});
