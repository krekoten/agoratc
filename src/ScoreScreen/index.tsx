import { Box, Button, Typography } from "@mui/material"
import React from "react"

interface ScoreParams {
  score: number
}

function ScoreScreen({ score }: ScoreParams): JSX.Element {
  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Typography variant="h5">Final score</Typography>
      <Typography variant="h6" className="score">{score}</Typography>
      <Button className="restart" variant="contained" color="primary">Restart</Button>
    </Box>
}

export default ScoreScreen
