import React from "react"

import { Box, Button, Typography } from "@mui/material"

function StartScreen(): JSX.Element {
  return <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Typography variant="h5">Agoracom - Tech Challenge - Quiz</Typography>
    <Button className="start" variant="contained">Start the Quiz</Button>
  </Box>
}

export default StartScreen
