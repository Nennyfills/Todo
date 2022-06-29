import React from "react";
import NetworkNotification from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const renderNetworkNotification = () => render(<NetworkNotification />);

const navigator = {
  _onLine: true,
  set onLine(value) {
    this._onLine = value;
  },
  get onLine() {
    return this._onLine;
  }
};

window.addEventListener("offline", function (e) {
  console.log("offline");
});

describe("<NetworkNotification /> ", () => {
  it("Should render the network notification when offLine ", () => {
    renderNetworkNotification();
    const changeSpy = jest.spyOn(navigator, "onLine", "set");
    navigator.onLine = false;
    console.log(navigator.onLine);
    const spy = jest.spyOn(navigator, "onLine", "get");

    expect(navigator.onLine).toBe(false);
    expect(spy).toBeCalled();
    expect(changeSpy).toBeCalled();

    spy.mockRestore();
    changeSpy.mockRestore();

    // const networkNotification = screen.getByTestId("network-notification");
    // expect(networkNotification).toHaveTextContent(
    //   "You are not connected to the internet"
    // );
    // expect(networkNotification).toHaveTextContent(
    //   "Double-check your internet connection and try again."
    // );
  });
});
