import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Label from "./";

describe("Label", () => {
  const example = "example";
  const wrapper = <Label>{example}</Label>;

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(wrapper, div);
  });

  it("matches snapshot", () => {
    expect(mount(wrapper)).toMatchSnapshot(`enzyme.mount`);
  });
});