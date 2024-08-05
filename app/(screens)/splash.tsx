import { View, Text, Image, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
// 📗 khai báo thư viện mà expo hổ trỡ để lấy giá trị chiều cao  statusBar
import Constants from "expo-constants";
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
const DetailFirstScreen = () => {
  const { width, height } = useWindowDimensions()
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/(tabs)')
    }, 3000)
  }, [])
  return (
    <View style={[styles.container]}>

      {/* header */}
      <Image source={require('@/public/images/logo_tik-tok.png')} style={{ width: 100, height: 100 }} />
      <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 10, fontWeight: 'bold', color: 'white' }}>Tik Tok</Text>
    </View>
  )
}

export default DetailFirstScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})