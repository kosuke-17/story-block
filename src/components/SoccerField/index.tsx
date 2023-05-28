import React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import CornerArc from '../CornerArc'

const centerCSS = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const SoccerFieldLayout = styled(Box)(() => ({
  ...centerCSS,
  width: '100vw',
  height: '100vh',
}))

const StyledPaper = styled(Paper)(() => ({
  width: '900px',
  height: '90%',
}))

const GreenField = styled(Box)(({ theme }) => ({
  ...centerCSS,
  width: '840px',
  height: '630px',
  backgroundColor: theme.palette.primary.main,
}))

const SoccerFieldOutLine = styled(Box)(() => ({
  ...centerCSS,
  border: '3px solid #FFFFFF',
  width: '720px',
  height: '540px',
  position: 'relative',
}))

const SoccerFieldCenterLine = styled(Box)(() => ({
  ...centerCSS,
  backgroundColor: '#FFFFFF',
  width: '3px',
  height: '100%',
}))

const SoccerField = () => {
  return (
    <SoccerFieldLayout>
      <StyledPaper elevation={3}>
        <Typography variant='h2'>サッカー場</Typography>
        <Box sx={centerCSS}>
          <GreenField>
            <SoccerFieldOutLine>
              <CornerArc type='LeftTop' />
              <CornerArc type='LeftBottom' />
              <SoccerFieldCenterLine />
              <CornerArc type='RightTop' />
              <CornerArc type='RightBottom' />
            </SoccerFieldOutLine>
          </GreenField>
        </Box>
      </StyledPaper>
    </SoccerFieldLayout>
  )
}

export default SoccerField
