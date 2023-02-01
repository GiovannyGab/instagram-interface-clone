import React from 'react'
import { FlatList,Image,Text,View, StyleSheet,TouchableOpacity } from 'react-native'
function Header() {
  return (
    <View style={styles.container}>
      <Image
      source={require("../../assets/logo.png")}
      />
      <TouchableOpacity>
        <Image
        source={require("../../assets/send.png")}
        style={styles.send}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  height:55,
  backgroundColor:"#FFF",
  flexDirection:'row',
  marginTop:30,
  alignItems:'center',
  justifyContent:"space-between",
paddingLeft:15,
paddingRight:15,
borderBottomWidth: 0.2,
shadowColor:"#000",
elevation:2

},
send:{
  height:23,
  width:23,
}
})

export default Header
