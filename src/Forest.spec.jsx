import React from 'react';
import Forest from './Forest';
import {useAnimalContext} from "./useAnimalContext";
import Enzyme, {shallow} from "enzyme";
import ReactAdapter from "enzyme-adapter-react-16";
import _ from "lodash";

Enzyme.configure({ adapter: new ReactAdapter() });

jest.mock("./useAnimalContext")
jest.mock("lodash")

describe("Forest", () => {
  beforeEach( () => {
    useAnimalContext.mockReturnValue({});
  })

  describe("amount of trees", () => {
    it("Shows the default amount", () => {
      const forestString = shallow(<Forest/>).find("[aria-label='trees']").text();
      expect(forestString.length).toEqual("🤔".length * 5)
    });
  
    it("shows the stateful amount if a child component changes it", () => {
      const wrapper = shallow(<Forest />);
      const addTreeButton = wrapper.find("[children='Trees']");
      const setTreesFn = addTreeButton.prop("setNumItems")
      setTreesFn(100);
  
      const forestString = wrapper.find("[aria-label='trees']").text();
      expect(forestString.length).toEqual("🤔".length * 100)
    })
  })
  
  it("Shows the right type of trees", () => {
    const wrapper = shallow(<Forest />);
    const changeTreeButton = wrapper.find("[children='Change tree']");
    changeTreeButton.simulate("click");

    const forestString = wrapper.find("[aria-label='trees']").text();
    expect(forestString).toEqual(expect.stringContaining("🌴"));
    
  });

  it.skip("Shows the right amount of animals", () => {
    const forestString = shallow(<Forest />)
      .find("[aria-label='animals']")
      .text();
    expect(forestString.length).toEqual("🤔".length * 1);
  });
  
  // it("Shows the right type of animals");
})