import { render, screen } from "@testing-library/react";
import Gallery from "../../components/Gallery";
import { testImages } from "../mocks/imgur";
import userEvent from "@testing-library/user-event";

describe("Gallery", () => {
    it("should render nothing when passed an empty array of images", () => {
        render(<Gallery images={[]} />);
        const images = screen.queryAllByTestId("gallery-image");
        const modal = screen.queryByTestId("modal");
        expect(images).toHaveLength(0);
        expect(modal).toBeNull();
    });

    it("should render a list of images", () => {
        render(<Gallery images={testImages} />);
        const images = screen.getAllByTestId("gallery-image");
        images.forEach((image, index) => {
            expect(image).toHaveAttribute("src", testImages[index].src);
        });
    });

    it("should render the modal when an image is clicked", async () => {
        render(<Gallery images={testImages} />);
        const image = screen.getAllByTestId("gallery-image")[0];
        const user = userEvent.setup();
        await user.click(image);
        const modalImage = screen.getByTestId("modal-image");
        expect(modalImage).toBeInTheDocument();
        expect(modalImage).toHaveAttribute("src", image.src);
    });
});
