import { render } from "@testing-library/react";

import Header from "./";

describe("Header Component", () => {
  it("should render a Header", async () => {
    const filters = { title_contains: "", _sort: "" };

    const { getByText, getByTestId } = render(
      <Header filters={filters} changeFilters={() => {}} />
    );

    const select = getByText("Mais novas");
    const input = getByTestId("input search");
    const logoName = getByText("Space Flight News");
    const logoIcon = getByTestId("logo-icon");

    const elements = { select, input, logoName, logoIcon };
    Object.values(elements).map((el) => {
      expect(el).toBeInTheDocument();
    });
  });
});
