import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { FC } from 'react'

const LINE_ADJUST = '3px solid #FFFFFF'

const StyledSoccerGoal = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: LINE_ADJUST,
  borderBottom: LINE_ADJUST,
  width: '30px',
  height: '12%',
}))

type SoccerGoalType = 'right' | 'left'

type Props = {
  type: SoccerGoalType
}

const getGoalSx = (type: SoccerGoalType) => {
  if (type === 'right') return { borderRight: LINE_ADJUST }
  if (type === 'left') return { borderLeft: LINE_ADJUST }
}

const SoccerGoal: FC<Props> = ({ type }) => {
  const goalSx = getGoalSx(type)
  return <StyledSoccerGoal sx={goalSx} />
}

export default SoccerGoal
