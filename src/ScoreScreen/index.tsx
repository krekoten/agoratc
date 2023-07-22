import { Box, Button, Typography } from "@mui/material"
import React from "react"

interface ScoreParams {
  score: number,
  onRestart: () => void
}

function ScoreScreen({ score, onRestart }: ScoreParams): JSX.Element {
  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: 2}}>
      <Typography variant="h5">Final score</Typography>
      <Typography variant="h6" className="score">{score}</Typography>
      <Button className="restart" variant="contained" color="primary" onClick={onRestart}>Restart</Button>
    </Box>
}

export default ScoreScreen
