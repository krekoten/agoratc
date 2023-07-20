import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import "./App.css"
import { Typography } from "@mui/material"

function App(): JSX.Element {
  return (
    <Container maxWidth="sm" sx={{p: 2}}>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h5">Agoracom - Tech Challenge - Quiz</Typography>
        <Button className="start" variant="contained">Start the Quiz</Button>
      </Box>
    </Container>
  )
}

export default App
