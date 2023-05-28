import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

const StyledCornerArc = styled(Box)(() => ({
  width: '20px',
  height: '20px',
  border: '3px solid #FFFFFF',
  position: 'absolute',
}))

type CornerArcType = 'LeftTop' | 'LeftBottom' | 'RightTop' | 'RightBottom'

type Props = {
  type: CornerArcType
}
const getCornerArcSx = (type: CornerArcType) => {
  const CONER_ARC_ADJUST = -3
  const CONER_ARC_RADIUS_ADJUST = '60%'
  switch (type) {
    case 'LeftTop':
      return {
        borderBottomRightRadius: CONER_ARC_RADIUS_ADJUST,
        top: CONER_ARC_ADJUST,
        left: CONER_ARC_ADJUST,
      }
    case 'LeftBottom':
      return {
        borderTopRightRadius: CONER_ARC_RADIUS_ADJUST,
        bottom: CONER_ARC_ADJUST,
        left: CONER_ARC_ADJUST,
      }
    case 'RightTop':
      return {
        borderBottomLeftRadius: CONER_ARC_RADIUS_ADJUST,
        top: CONER_ARC_ADJUST,
        right: CONER_ARC_ADJUST,
      }
    case 'RightBottom':
      return {
        borderTopLeftRadius: CONER_ARC_RADIUS_ADJUST,
        bottom: CONER_ARC_ADJUST,
        right: CONER_ARC_ADJUST,
      }
    default:
      undefined
  }
}

const CornerArc: FC<Props> = ({ type }) => {
  const cornerArcSx = getCornerArcSx(type)
  return <StyledCornerArc sx={cornerArcSx} />
}

export default CornerArc
