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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b3b3ade-fad2-42c6-9e87-0bf23f24add8"
        }}
        style={styles.ImageBackground_11_102}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/538e1e6b-2a23-4412-a347-2e3481350581"
        }}
        style={styles.ImageBackground_11_103}
      />
      <View style={styles.View_11_104}>
        <View style={styles.View_I11_104_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4baffd3b-a538-4141-8e85-eccc3d451a38"
            }}
            style={styles.ImageBackground_I11_104_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39f6737f-8742-4d0f-89e7-6c04a3b69141"
            }}
            style={styles.ImageBackground_I11_104_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a692a4b-9d8e-4e43-be00-8d0603b43152"
            }}
            style={styles.ImageBackground_I11_104_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9ab61dd-a8ca-40ca-8f16-aadf108d8243"
          }}
          style={styles.ImageBackground_I11_104_2_21}
        />
      </View>
      <View style={styles.View_11_105}>
        <Text style={styles.Text_11_105}>Your Kid’s Gender ?</Text>
      </View>
      <View style={styles.View_11_106}>
        <View style={styles.View_11_107}>
          <Text style={styles.Text_11_107}>E.g. Male</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_11_108}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_107"))
        }
      >
        <View style={styles.View_11_109}>
          <Text style={styles.Text_11_109}>Next</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_16_151}>
        <View style={styles.View_16_152} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(60, 65, 207, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_11_102: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("84%")
  },
  ImageBackground_11_103: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("11%")
  },
  View_11_104: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I11_104_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I11_104_2_8: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I11_104_2_12: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I11_104_2_16: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I11_104_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_11_105: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_11_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_106: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
    backgroundColor: "rgba(252, 252, 252, 1)"
  },
  View_11_107: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_11_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_11_108: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("55%"),
    backgroundColor: "rgba(77, 204, 33, 1)"
  },
  View_11_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_11_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_151: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_16_152: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
