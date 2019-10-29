import React from 'react';
import Forest from './Forest';
import {useAnimalContext} from "./useAnimalContext";
import {shallow} from "enzyme";

describe("Forest", () => {
  it.only("Shows the right amount of trees", () => {
    const forestString = shallow(<Forest/>).find("[aria-label=trees]").text();
    expect(forestString.length).toEqual("🌳".length * 5)
  });

  it("Shows the right type of trees");
  it("Shows the right amount of animals");
  it("Shows the right type of animals");
})