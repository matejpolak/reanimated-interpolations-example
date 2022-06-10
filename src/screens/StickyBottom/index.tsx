import type { FC } from 'react'
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

import { StickyItem } from './components/StickyItem'

import { ExampleScrollView } from '../../components/ExampleScrollView'
import { PlaceholderItem } from '../../components/PlaceholderItem'
import { useLayout } from '../../utils/useLayout'

const items = [false, false, false, false, false, false, false, true, false, false]

export const StickyBottom: FC = () => {
  const { onLayout, height } = useLayout()
  const scrollY = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    scrollY.value = y
  })
  return (
    <ExampleScrollView onScroll={onScroll} onLayout={onLayout} scrollEventThrottle={16}>
      {items.map((shouldBeSticky, index) =>
        shouldBeSticky ? (
          <StickyItem key={index} scrollY={scrollY} scrollViewHeight={height} />
        ) : (
          <PlaceholderItem key={index} />
        ),
      )}
    </ExampleScrollView>
  )
}
