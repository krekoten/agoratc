import React from "react"
import renderer from "react-test-renderer"

import ScoreScreen from ".."

test("ScoreScreen Snapshot", () => {
  const tree = renderer.create(<ScoreScreen score={5} onRestart={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
