import type { FC } from 'react'
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'

import { StickyItem } from './components/StickyItem'

import { ExampleScrollView } from '../../components/ExampleScrollView'
import { PlaceholderItem } from '../../components/PlaceholderItem'

const items = [false, false, false, false, true, false, false, false, false, false, false]

export const StickyTopBefore: FC = () => {
  const scrollY = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler(({ contentOffset: { y } }) => {
    scrollY.value = y
  })
  return (
    <ExampleScrollView onScroll={onScroll} scrollEventThrottle={16}>
      {items.map((shouldBeSticky, index) =>
        shouldBeSticky ? (
          <StickyItem key={index} scrollY={scrollY} />
        ) : (
          <PlaceholderItem key={index} />
        ),
      )}
    </ExampleScrollView>
  )
}
