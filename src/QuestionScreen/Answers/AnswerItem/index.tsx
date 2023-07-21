import React from "react"

import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"

import type { Answer } from "../../../types"

function AnswerItem({text, correct}: Answer): JSX.Element {
  return <FormControlLabel value={correct} control={<Radio />} label={text} />
}

export default AnswerItem
