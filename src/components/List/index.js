import React from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function List(props) {
  function loadLike(likeada) {
    return likeada
      ? require("../../assets/likeada.png")
      : require("../../assets/like.png");
  }
  
  function showLikes(likers){
    if(likers === 0){
      return
    }
    return(
      <Text style={styles.likerstext}>{likers} {likers === 1? "curtida": "curtidas"}</Text>
    )
  
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: props.data.imgperfil }} style={styles.imgperf} />
        <Text style={styles.namePerf}>{props.data.nome}</Text>
      </View>
      <Image
        source={{ uri: props.data.imgPublicacao }}
        style={styles.imgFeed}
        resizeMode="cover"
      />
      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image source={loadLike(props.data.likeada)} style={styles.like} />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btns}>
          <Image
            source={require("../../assets/comment.png")}
            style={styles.like}
          />
        </TouchableOpacity>
        <TouchableOpacity  style={styles.like}>
          <Image
            source={require("../../assets/send.png")}
            style={styles.like}
          />
        </TouchableOpacity>
      </View>
    {showLikes(props.data.likers)}
    <View>
    <Text style={styles.rodapeName}>{props.data.nome}</Text>
    <Text style={styles.rodapeDesc}>{props.data.descricao}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
  },
  imgperf: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  namePerf: {
    padding: 8,
    fontSize: 22,
    fontWeight: "bold",
  },
  imgFeed: {
    height: 400,
    alignItems: "center",
  },
  areaBtn: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  btns: {
   paddingLeft:5,
  
  },
  like:{
    width:25,
    height:25
  },
  rodapeName:{
    fontSize:20,
    fontWeight:"bold",
    paddingLeft:5
  },
  rodapeDesc:{
    fontSize:15,
    paddingLeft:5
  },
  likerstext:{
    paddingLeft:5,
    fontWeight:"bold"
  }
});

export default List;
