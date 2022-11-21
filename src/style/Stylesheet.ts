import {StyleSheet} from "react-native";

const stylesheet = StyleSheet.create({

  container: {
    flex: 4,
    backgroundColor: '#ffffff',
    padding:10,
    margin:5,
    marginTop: 20,
  },

  title: {
    fontSize:23,
    fontWeight:"bold"
  },

  articleListContainer: {
    borderTopStyle:"solid",
    borderTopColor:"#000",
    borderTopWidth:1,

    marginBottom:10,
    padding:10,

    height:500,
    overflow:"scroll",
  },

  articleContainer: {
    marginTop:10,
    marginBottom:10,

    padding:10,

    backgroundColor:"#e8e8e8"
  },

  basketListContainer: {
    borderTopStyle:"solid",
    borderTopColor:"#000",
    borderTopWidth:1,

    marginBottom:10,
    padding:10,

    height:150,
    overflow:"scroll",

    backgroundColor:"#e8e8e8"
  },

  basketItem: {
    flexDirection:"row",
    flexWrap:"wrap",

    marginTop:5,
    marginBottom:5
  },

  articleText: {
    fontSize: 19,
    marginRight:10,
  },

});

export const styles = stylesheet;