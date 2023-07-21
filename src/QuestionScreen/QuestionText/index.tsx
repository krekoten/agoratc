import React from "react"

import { Typography } from "@mui/material";

function QuestionText({text}: {text: string}): JSX.Element {
  return <Typography variant="body1" className="question">{text}</Typography>
}

export default QuestionText;
