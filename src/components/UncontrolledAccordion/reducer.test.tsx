import { StateType, TOGGLE_COLLAPSED, reducer } from "./reducer";

test("collapsed should be true", () => {
  //data
  const state: StateType = {
    collapsed: false,
  };

  //action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  //axpect
  expect(newState.collapsed).toBe(true);
});

test("collapsed should be false", () => {
  //data
  const state: StateType = {
    collapsed: true,
  };

  //action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  //axpect
  expect(newState.collapsed).toBe(false);
});

test("reducer should be throw error because action type is incorrect", () => {
  //data
  const state: StateType = {
    collapsed: true,
  };

  //action
  expect(() => {
    reducer(state, { type: "FAKE" });
  }).toThrowError();
});
