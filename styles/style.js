import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 250,
    backgroundColor: "#FFDEAD",
  },
  title: {
    fontSize: 25,
    color: "#333",
    fontFamily: "SyneMono",
    textAlign: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#B8860B",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  addCollectionBtn: {
    borderWidth: 1,
    borderColor: "#B8860B",
    backgroundColor: '#6B8E23',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  btnText: {
    fontFamily: "SyneMono",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    padding: 20,
    margin: 2,
    borderWidth: 2,
    borderColor: "#B8860B",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  background: {
    flex: 1,
    backgroundColor: "#FFDEAD",
  },
  addPairBtn: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#6B8E23",
    width: "30%",
    //marginLeft: "35%",
    padding: 13,
    alignItems: "center",
    margin: 15,
  },
  modalContainer: {
    marginTop: "50%",
    borderWidth: 2,
    borderColor: "#6B8E23",
    borderRadius: 5,
    margin: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#BDB76B",
  },
  modalInput: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: "#6B8E23",
    borderRadius: 5,
  },
  icons: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'space-around'
  },
  upperBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  learnBtn: {
    borderWidth: 1,
    backgroundColor: "#BC8F8F",
    borderRadius: 5,
    padding: 13,
    marginRight: 10,
    width: '30%'
  },
  learnMain: {
    flex: 1,
    alignItems: "center",
    paddingTop: '50%',
    backgroundColor: "#FFDEAD",
  },
  card: {
    borderWidth: 2,
    borderRadius: 10,
    width: '80%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BC8F8F',
    flexDirection: 'row'
  },
  word: {
    fontSize: 50,
    fontWeight: "bold",
  },
  end: {
    alignItems: 'center'
  },
  questionMark: {
    position: 'absolute',
    top: 7,
    right: 7
  },
  textList: {
    fontSize: 20,
  },
  switchIcon: {
    position: "absolute",
    bottom: 7,
    right: 7
  },
  tip: {
    fontFamily: 'SyneMono',
    fontSize: 20,
    position: 'absolute',
    top: '20%'
  }
});
