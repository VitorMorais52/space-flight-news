import { render } from "@testing-library/react";
import Modal from "react-modal";

import { Blog } from "../../../types/Blog";

import BlogModal from "./";

const blog: Blog = {
  id: 1,
  title: "Post title",
  url: "",
  image_url: "",
  news_site: "",
  summary: "Summary",
  published_at: "2022-04-09T20:10:45.737Z",
  launches: [],
  events: [],
};

describe("BlogModal Component", () => {
  it("should render a Modal", async () => {
    Modal.setAppElement("body");

    const { getByText } = render(
      <BlogModal isOpen={true} onRequestClose={() => {}} blog={blog} />
    );

    const postTitle = getByText("Post title");
    const postSummary = getByText("Summary");
    const postPublishedAt = getByText("09/04/2022 17:10");
    const buttonUrl = getByText("Ir para o site");

    const elements = { postTitle, postSummary, postPublishedAt, buttonUrl };
    Object.values(elements).map((el) => {
      expect(el).toBeInTheDocument();
    });
  });
});
