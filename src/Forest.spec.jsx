import React from 'react';
import ReactAdapter from "enzyme-adapter-react-16"
import Enzyme, { shallow } from "enzyme";

import { useAnimalContext } from "./useAnimalContext";

jest.mock("./useAnimalContext"); 

import Forest from "./Forest";

Enzyme.configure({adapter: new ReactAdapter() })



describe("Forest", () => {
  beforeEach(() => {
    useAnimalContext.mockReturnValue({})
  });

  it ("shows the right amount of trees", () => {
    const wrapper = shallow(<Forest />);
    const forestString = wrapper.find("[aria-label='trees']").text()

    expect(forestString.length).toEqual('🤔'.length * 5)
  })

  it.only("shows the right amount of trees if I change the number of trees", () => {
    const wrapper = shallow(<Forest />);
    const setTreeFn = wrapper.find("[children='Trees']").prop("setNumItems");
    setTreeFn(100)

    const forestString = wrapper.find("[aria-label='trees']").text();

    expect(forestString.length).toEqual("🤔".length * 100);
  })
})