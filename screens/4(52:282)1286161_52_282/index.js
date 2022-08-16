import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_52_283} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/932e2850-9a22-45b9-9a2a-e5508bc7eb05"
        }}
        style={styles.ImageBackground_52_284}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d5a68bf-b70e-4ffb-abb3-241c965e7179"
        }}
        style={styles.ImageBackground_52_285}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8a9a896-22e3-4b7c-8aac-368321ae2752"
        }}
        style={styles.ImageBackground_52_289}
      />
      <View style={styles.View_52_290} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df32667b-2a69-4e5d-ba5a-98431d69c9fc"
        }}
        style={styles.ImageBackground_52_295}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_52_283: {
    width: wp("113%"),
    minWidth: wp("113%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("-3%"),
    backgroundColor: "rgba(60, 65, 207, 1)"
  },
  ImageBackground_52_284: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%")
  },
  ImageBackground_52_285: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_52_289: {
    width: wp("189%"),
    minWidth: wp("189%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-35%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_52_290: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("50%")
  },
  ImageBackground_52_295: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("30%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
