import AuthRoot from "./(auth)/_layout";
import TabLayout from "./(tabs)/_layout";

const App = () => {
  const isLogin = false
  return isLogin ? <TabLayout/>  : <AuthRoot /> 
}

export default App