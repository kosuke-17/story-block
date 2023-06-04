import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import CornerArc from '../CornerArc'
import SoccerGoal from '../SoccerGoal'
import { FC } from 'react'

const LINE_ADJUST = '3px solid #FFFFFF'
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
  border: LINE_ADJUST,
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

const SoccerFieldCenterCircle = styled(Box)(() => ({
  ...centerCSS,
  border: LINE_ADJUST,
  height: '100px',
  width: '100px',
  position: 'absolute',
  borderRadius: '50%',
}))

const GoalArea = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRight: LINE_ADJUST,
  borderTop: LINE_ADJUST,
  borderBottom: LINE_ADJUST,
  width: '60px',
  height: '200px',
  left: 0,
  position: 'absolute',
}))
const GoalAreaRight = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: LINE_ADJUST,
  borderTop: LINE_ADJUST,
  borderBottom: LINE_ADJUST,
  width: '60px',
  height: '200px',
  right: 0,
  position: 'absolute',
}))

const PenaltyArea = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRight: LINE_ADJUST,
  borderTop: LINE_ADJUST,
  borderBottom: LINE_ADJUST,
  width: '100px',
  height: '360px',
  left: 0,
  position: 'absolute',
}))

const PenaltyAreaRight = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderLeft: LINE_ADJUST,
  borderTop: LINE_ADJUST,
  borderBottom: LINE_ADJUST,
  width: '100px',
  height: '360px',
  right: 0,
  position: 'absolute',
}))

const SoccerField: FC = () => {
  return (
    <SoccerFieldLayout>
      <StyledPaper elevation={3}>
        <Typography variant='h2'>サッカー場</Typography>
        <Box sx={centerCSS}>
          <GreenField>
            <SoccerGoal type='left' />
            <SoccerFieldOutLine>
              <CornerArc type='LeftTop' />
              <CornerArc type='LeftBottom' />
              <GoalArea />
              <PenaltyArea />
              <PenaltyAreaRight />
              <SoccerFieldCenterCircle />
              <SoccerFieldCenterLine />
              <GoalAreaRight />
              <CornerArc type='RightTop' />
              <CornerArc type='RightBottom' />
            </SoccerFieldOutLine>
            <SoccerGoal type='right' />
          </GreenField>
        </Box>
      </StyledPaper>
    </SoccerFieldLayout>
  )
}

export default SoccerField
