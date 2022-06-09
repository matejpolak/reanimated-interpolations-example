import { createNativeStackNavigator } from '@react-navigation/native-stack'
import type { FC } from 'react'

import type { RootStackParamList } from '../constants/Routes'
import { Routes } from '../constants/Routes'
import { Examples } from '../screens/Examples'
import { StickyBottom } from '../screens/StickyBottom'
import { StickyTopAfter } from '../screens/StickyTopAfter'
import { StickyTopBefore } from '../screens/StickyTopBefore'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Examples} component={Examples} />
    <Stack.Screen name={Routes.StickyTopBefore} component={StickyTopBefore} />
    <Stack.Screen name={Routes.StickyTopAfter} component={StickyTopAfter} />
    <Stack.Screen name={Routes.StickyBottom} component={StickyBottom} />
  </Stack.Navigator>
)
