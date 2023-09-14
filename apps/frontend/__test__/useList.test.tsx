import { renderHook, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import {
    afterAll,
    afterEach,
    beforeAll,
    describe,
    expect,
    test,
    vi,
} from "vitest";
import { useList } from "../src/hooks/useList";
import { createWrapper, handlers } from "./setupTest";

export const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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
        username: "Delavalom"
      },
    ],
    isSuccess: true,
  }),
}));

describe("useList hook", () => {
  test("successful query", async () => {
    const { result } = renderHook(() => useList(), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    const expectedStructure = {
      sha: expect.anything(),
      author: expect.anything(),
      date: expect.anything(),
      message: expect.anything(),
      verified: expect.anything(),
      html_url: expect.anything(),
      avatar_url: expect.anything(),
    };

    if (!result.current.data) throw new Error("Query not successful");

    expect(result.current.data[0]).toEqual(
      expect.objectContaining(expectedStructure)
    );
  });
});
