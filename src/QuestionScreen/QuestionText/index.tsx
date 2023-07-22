import React from "react"

import { Typography } from "@mui/material";

function QuestionText({text}: {text: string}): JSX.Element {
  return <Typography variant="h5" className="question">{text}</Typography>
}

export default QuestionText;
