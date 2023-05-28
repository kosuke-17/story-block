import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SoccerField = () => {
  const centerCSS = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        ...centerCSS,
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
        <Box sx={centerCSS}>
          {/* GreenField */}
          <Box
            sx={{
              ...centerCSS,
              width: '840px',
              height: '630px',
              bgcolor: 'primary.main',
            }}
          >
            {/* SoccerFieldOutLine */}
            <Box
              sx={{
                ...centerCSS,
                border: '3px solid #FFFFFF',
                width: '720px',
                height: '540px',
                position: 'relative',
              }}
            >
              {/* Corner Arc */}
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  top: -3,
                  left: -3,
                  border: '3px solid #FFFFFF',
                  borderBottomRightRadius: '60%',
                  position: 'absolute',
                }}
              />
              {/* SoccerFieldCenterLine */}
              <Box
                sx={{
                  ...centerCSS,
                  bgcolor: '#FFFFFF',
                  width: '3px',
                  height: '100%',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default SoccerField
