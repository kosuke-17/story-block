import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SoccerField = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          width: '900px',
          height: '700px',
          px: 3,
          pb: 3,
        }}
        elevation={3}
      >
        <Typography variant='h2'>サッカー場</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '840px',
              height: '630px',
              bgcolor: '#228B22',
            }}
          >
            SoccerField moved
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default SoccerField
