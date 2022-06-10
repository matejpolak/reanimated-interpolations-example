import type { ComponentProps, FC } from 'react'
import Animated from 'react-native-reanimated'

import { styles } from './index.styles'

type IExampleScrollView = ComponentProps<typeof Animated.ScrollView>

export const ExampleScrollView: FC<IExampleScrollView> = ({ children, ...rest }) => (
  <Animated.ScrollView style={styles.scrollView} {...rest}>
    {children}
  </Animated.ScrollView>
)
