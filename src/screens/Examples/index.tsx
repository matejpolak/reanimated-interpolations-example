import { useNavigation } from '@react-navigation/native'
import type { StackNavigationProp } from '@react-navigation/stack'
import type { FC } from 'react'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native'

import { styles } from './index.styles'

import type { RootStackParamList } from '../../constants/Routes'
import { Routes } from '../../constants/Routes'

export const examples = [
  {
    screen: Routes.StickyTopBefore,
    title: `⬇️ ${Routes.StickyTopBefore}`,
  },
  {
    screen: Routes.StickyTopAfter,
    title: `⬆️️ ${Routes.StickyTopAfter}`,
  },
  {
    screen: Routes.StickyBottom,
    title: `🔻 ${Routes.StickyBottom}`,
  },
]

export const Examples: FC = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList, Routes.Examples>>()

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {examples.map((thumbnail) => (
        <TouchableHighlight key={thumbnail.screen} onPress={() => navigate(thumbnail.screen)}>
          <View style={styles.thumbnail}>
            <Text style={styles.title}>{thumbnail.title}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </ScrollView>
  )
}
