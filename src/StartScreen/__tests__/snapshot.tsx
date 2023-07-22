import React from "react"
import renderer from "react-test-renderer"

import StartScreen from ".."

test("StartScreen Snapshot", () => {
  const tree = renderer.create(<StartScreen onStart={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
