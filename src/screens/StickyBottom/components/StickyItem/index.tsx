import type { FC } from 'react'
import { Text } from 'react-native'
import type { SharedValue } from 'react-native-reanimated'
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'

import { styles } from './index.styles'

import { useLayout } from '../../../../utils/useLayout'

interface IStickyItem {
  scrollY: SharedValue<number>
  scrollViewHeight: SharedValue<number>
}

export const StickyItem: FC<IStickyItem> = ({ scrollY, scrollViewHeight }) => {
  const { onLayout, y, height } = useLayout()

  const derivedOffset = useDerivedValue(
    () => -y.value + scrollViewHeight.value - height.value + scrollY.value,
  )

  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          derivedOffset.value,
          [-1, 0],
          [derivedOffset.value, 0],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }))

  return (
    <Animated.View onLayout={onLayout} style={[styles.container, style]}>
      <Text style={styles.text}>I am STICKY!</Text>
    </Animated.View>
  )
}
