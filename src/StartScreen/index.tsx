import React from "react"

import { Box, Button } from "@mui/material"

interface StartParams {
  onStart: () => void
}

function StartScreen({ onStart }: StartParams): JSX.Element {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 2 }}>
      <Button className="start" variant="contained" onClick={onStart}>
        Start the Quiz
      </Button>
    </Box>
  )
}

export default StartScreen
