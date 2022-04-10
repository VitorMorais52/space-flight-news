import { render } from "@testing-library/react";
import Modal from "react-modal";

import { BlogProps } from "../../../types/Blog";

import BlogList from "./";

const blogs: BlogProps[] = [
  {
    id: 1,
    title: "Post title",
    url: "",
    imageUrl: "",
    newsSite: "Site",
    summary: "Summary",
    publishedAt: "2022-04-09T20:10:45.737Z",
    launches: [],
    events: [],
  },
  {
    id: 2,
    title: "Post title 2",
    url: "",
    imageUrl: "",
    newsSite: "Blog",
    summary: "Summary 2",
    publishedAt: "2022-05-09T13:20:45.737Z",
    launches: [],
    events: [],
  },
];

describe("BlogList Component", () => {
  it("should render a list of blogs", async () => {
    Modal.setAppElement("body");

    const { getByText, getAllByAltText, getAllByText } = render(
      <BlogList list={blogs} />
    );

    const postTitle = getByText("Post title");
    const postSummary = getByText("Summary");
    const postPublishedAt = getByText("09/05/2022 10:20");
    const buttonNewsSite = getByText("Blog");
    const listButtonModal = getAllByText("Ver mais");
    const listImage = getAllByAltText("post image");

    const elements = {
      postTitle,
      postSummary,
      postPublishedAt,
      buttonNewsSite,
      listButtonModal: listButtonModal[1],
      listImage: listImage[1],
    };

    Object.values(elements).map((el) => {
      expect(el).toBeInTheDocument();
    });

    expect(listImage[2]).toBeUndefined();
  });
});
