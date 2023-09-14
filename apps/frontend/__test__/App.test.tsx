import { vi, describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import React from 'react'
import { createWrapper } from "./setupTest";

vi.mock("../src/hooks/useList.ts", () => ({
    useList: () => ({
      data: [
        {
          sha: "08097479fb2fba12ecc16efbc0e2216d8fbc60d6",
          author: "Luis Angel Arvelo",
          date: "2023-09-14T16:23:03Z",
          message: "add start script to the frontend",
          verified: true,
          html_url:
            "https://github.com/Delavalom/fulltimeforce/commit/08097479fb2fba12ecc16efbc0e2216d8fbc60d6",
          avatar_url: "https://avatars.githubusercontent.com/u/95777619?v=4",
        },
      ],
      isSuccess: true,
    }),
  }));

describe("App Component", () => {
  test("Should display the data item component", async () => {
    const result = render(<App />, {
        wrapper: createWrapper()
    });

    await waitFor(() => expect(result.baseElement).toBeInTheDocument());
    
    const commitElement = screen.getByTestId("08097479fb2fba12ecc16efbc0e2216d8fbc60d6");
    expect(commitElement).toBeInTheDocument();
  });
});
