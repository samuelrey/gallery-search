import { render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";
import userEvent from "@testing-library/user-event";
import { testImages, mockFetchImages } from "../mocks/imgur";

describe("SearchForm", () => {
    it("should render with the initial state", () => {
        const fetchImages = jest.fn(mockFetchImages);
        const setImages = jest.fn();
        render(<SearchForm fetchImages={fetchImages} setImages={setImages} />);
        const searchForm = screen.getByTestId("search-form");
        const searchLoading = screen.queryByTestId("search-loading");
        const searchError = screen.queryByTestId("search-error");

        expect(searchForm).toBeInTheDocument();
        expect(searchLoading).toBeNull();
        expect(searchError).toBeNull();
    });

    it("should call fetch and set images when user submits", async () => {
        const fetchImages = jest.fn(mockFetchImages);
        const setImages = jest.fn();
        render(<SearchForm fetchImages={fetchImages} setImages={setImages} />);
        const searchInput = await screen.findByTestId("search-input");
        const searchButton = await screen.findByTestId("search-button");
        const user = userEvent.setup();

        await user.type(searchInput, "ninja turtles");
        await user.click(searchButton);

        expect(fetchImages).toHaveBeenCalledWith("ninja turtles");
        expect(setImages).toHaveBeenCalledWith(testImages);
    });

    it("should render error if fetch throws error", async () => {
        const fetchImages = jest.fn(mockFetchImages);
        const setImages = jest.fn();
        render(<SearchForm fetchImages={fetchImages} setImages={setImages} />);
        const searchInput = await screen.findByTestId("search-input");
        const searchButton = await screen.findByTestId("search-button");
        const user = userEvent.setup();

        await user.type(searchInput, "renaissance painters");
        await user.click(searchButton);

        expect(fetchImages).toHaveBeenCalledWith("renaissance painters");
        expect(setImages).toHaveBeenCalledTimes(0);

        const searchError = await screen.findByTestId("search-error");
        expect(searchError).toBeInTheDocument();
    });
});
