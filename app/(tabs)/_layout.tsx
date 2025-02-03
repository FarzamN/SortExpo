import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  )
}

export default TabLayout