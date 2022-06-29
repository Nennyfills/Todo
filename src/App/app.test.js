import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { renderHook } from "@testing-library/react-hooks";

import App from "./index";

const mock = {
  disconnect: jest.fn(),
  observe: jest.fn(<div />)
};
const useCustomHook = () => {
  return useQuery("customHook", () => [
    {
      picture: {
        large: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      name: {
        title: "Mr",
        first: "Philippe",
        last: "Lo"
      },
      location: {
        street: { name: " Regent Ave", number: 9358 },
        postcode: 89988,
        state: "Yukon",
        city: "Westport",
        country: "Canada"
      },
      completed: true
    }
  ]);
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1
    }
  }
});
const renderApp = () => {
  window.IntersectionObserver = mock;
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
renderApp();

describe("<App />", () => {
  test("should deplay fetched data", async () => {
    renderApp();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId("app-id")).toHaveClass("app");
    });
  });
  test("should fetch data", async () => {
    const { result } = renderHook(() => useCustomHook(), {
      wrapper: createWrapper()
    });
    await waitFor(() => {
      expect(result.current.status).toEqual("success");
      expect(result.current.data).toBeDefined();
    });
  });
});
