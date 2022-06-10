import { useCallback } from 'react'
import { useSharedValue } from 'react-native-reanimated'

export function useLayout() {
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const width = useSharedValue(0)
  const height = useSharedValue(0)

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { x: X, y: Y, width: WIDTH, height: HEIGHT },
      },
    }) => {
      x.value = X
      y.value = Y
      width.value = WIDTH
      height.value = HEIGHT
    },
    [],
  )

  return {
    x,
    y,
    width,
    height,
    onLayout,
  }
}
