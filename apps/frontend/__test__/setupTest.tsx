import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const handlers = [
  rest.get("*", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
      ])
    );
  }),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient();
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

