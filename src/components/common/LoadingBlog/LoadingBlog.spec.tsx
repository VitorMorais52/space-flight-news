import { render } from "@testing-library/react";

import LoadingBlog from "./";

describe("LoadingBlog Component", () => {
  it("should render a list of loading skeletons", async () => {
    const { getAllByTestId } = render(<LoadingBlog quantityItems={3} />);

    const itemsLoading = getAllByTestId("container-loading");
    expect(itemsLoading[0]).toBeInTheDocument();
    expect(itemsLoading[2]).toBeInTheDocument();
  });
});
