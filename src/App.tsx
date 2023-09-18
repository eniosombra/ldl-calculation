import { useState } from 'react'
import lab from './assets/icon-lab.png'
import './App.css'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

function App() {
  const [colesterol, setColesterol] = useState(0)
  const [hdlColesterol, setHdlColesterol] = useState(0)
  const [triglicerideos, setTriglicerideos] = useState(0)

  const [resultado, setResultado] = useState<string>()

  const handleCalculation = () => {
    const ldl = colesterol - hdlColesterol - triglicerideos / 5
    setResultado(ldl.toFixed(2))
  }

  return (
    <div className="App">
      <Box>
        <img src={lab} className="App-logo" alt="logo" />
        <Typography variant="h4">Calculadora LDL</Typography>
        <Typography variant="caption">
          Fórmula de Friedewald: LDL = (CT - HDL) - (TG/5)
        </Typography>
        <Stack gap={2} pt={3}>
          <TextField
            type="number"
            variant="outlined"
            label="Colesterol Total (CT)"
            onChange={(e) => setColesterol(Number(e.target.value))}
          />
          <TextField
            type="number"
            variant="outlined"
            label="Colesterol (HDL)"
            onChange={(e) => setHdlColesterol(Number(e.target.value))}
          />
          <TextField
            type="number"
            variant="outlined"
            label="Triglicerídeos (TG)"
            onChange={(e) => setTriglicerideos(Number(e.target.value))}
          />

          <Button variant="contained" size="large" onClick={handleCalculation}>
            Calcular
          </Button>
        </Stack>

        {resultado && (
          <>
            <Typography variant="h5" pt={4} fontWeight="700">
              LDL: {resultado}
            </Typography>
          </>
        )}
      </Box>

      <Typography pt={2} fontWeight="300">
        developer by Victor
      </Typography>
    </div>
  )
}

export default App
