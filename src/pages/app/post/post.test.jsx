import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "./index.jsx";

// Mock the useGetPostsQuery hook
jest.mock("../../../services/api/post/index.js", () => ({
  useGetPostsQuery: jest.fn(),
}));

import { useGetPostsQuery } from "../../../services/api/post/index.js";

describe("Posts component JSX rendering", () => {
  test("shows loading state", () => {
    useGetPostsQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<Posts />);
    expect(screen.getByText(/Loading posts/i)).toBeInTheDocument();
  });

  test("shows error state", () => {
    useGetPostsQuery.mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    });

    render(<Posts />);
    expect(screen.getByText(/Error loading posts/i)).toBeInTheDocument();
  });

  test("renders posts correctly", () => {
    const mockData = [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 2, title: "Post 2", body: "Body 2" },
    ];

    useGetPostsQuery.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    render(<Posts />);

    expect(screen.getByText("Posts")).toBeInTheDocument();
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Body 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
    expect(screen.getByText("Body 2")).toBeInTheDocument();
  });
});
