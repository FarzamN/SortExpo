import { View, Text, Button } from 'react-native'
import React from 'react'
import { globalStyle } from '@/utils/globalStyle'
import { router } from 'expo-router'

const Index = () => {
    const { push} = router
  return (
    <View style={globalStyle.container}>

      <Text>Index</Text>
      <Button title='go To login' onPress={() => push('/login')}/>
    </View>
  )
}

export default Index