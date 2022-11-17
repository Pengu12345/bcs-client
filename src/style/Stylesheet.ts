import {StyleSheet} from "react-native";

const stylesheet = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    padding:10,
    marginTop: 20
  },

  title: {
    fontSize:23,
    fontWeight:"bold"
  },

  articleListContainer: {
    borderStyle:"solid",
    borderColor:"#ff0000",
    borderWidth:1,

  },

  articleContainer: {
    borderStyle:"solid",
    borderColor:"#000",
    borderWidth:1,

    marginTop:5,
    marginBottom:5
  },

  articleText: {
    fontSize: 18
  },

});

export const styles = stylesheet;