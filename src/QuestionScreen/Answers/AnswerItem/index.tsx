import React from "react"

import FormControlLabel from "@mui/material/FormControlLabel"
import Radio from "@mui/material/Radio"

interface AnswerItemParams {
  text: string
  value: number
}

function AnswerItem({ text, value }: AnswerItemParams): JSX.Element {
  return <FormControlLabel value={value} name={text} control={<Radio />} label={text} />
}

export default AnswerItem
