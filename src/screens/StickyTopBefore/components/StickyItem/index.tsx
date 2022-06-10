import type { FC } from 'react'
import { Text } from 'react-native'
import type { SharedValue } from 'react-native-reanimated'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

import { styles } from './index.styles'

import { useLayout } from '../../../../utils/useLayout'

interface IStickyItem {
  scrollY: SharedValue<number>
}

export const StickyItem: FC<IStickyItem> = ({ scrollY }) => {
  const { onLayout, y } = useLayout()

  const style = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(scrollY.value, [y.value - 1, y.value, y.value + 1], [-1, 0, 0]),
      },
    ],
  }))

  return (
    <Animated.View onLayout={onLayout} style={[styles.container, style]}>
      <Text style={styles.text}>I am STICKY!</Text>
    </Animated.View>
  )
}
