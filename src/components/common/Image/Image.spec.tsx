import { render } from "@testing-library/react";

import Image from "./";

describe("Image Component", () => {
  it("should render a valid image", async () => {
    const { getByAltText } = render(
      <Image
        src="https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg"
        alt="test image"
      />
    );

    const image = getByAltText("test image");
    expect(image).toBeInTheDocument();
  });
});
