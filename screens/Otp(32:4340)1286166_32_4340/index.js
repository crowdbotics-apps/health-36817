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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93f491db-d35a-4ac6-bbd3-3983b71a6175"
        }}
        style={styles.ImageBackground_32_4341}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/741c48f8-c411-49a6-b2bd-640ae398ee47"
        }}
        style={styles.ImageBackground_32_4342}
      />
      <View style={styles.View_32_4343}>
        <View style={styles.View_I32_4343_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cee17da3-c98b-4f0f-bf02-ea0c2075b1f1"
            }}
            style={styles.ImageBackground_I32_4343_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7c14a09-9caa-4130-86fd-b916717a63fa"
            }}
            style={styles.ImageBackground_I32_4343_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc0d08d2-2bb3-43e7-8ced-037fbcf5d26e"
            }}
            style={styles.ImageBackground_I32_4343_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97350c6a-7597-46bd-8ef3-3708f5690c05"
          }}
          style={styles.ImageBackground_I32_4343_2_21}
        />
      </View>
      <View style={styles.View_32_4344}>
        <Text style={styles.Text_32_4344}>OTP ?</Text>
      </View>
      <View style={styles.View_32_4345}>
        <View style={styles.View_32_4346}>
          <Text style={styles.Text_32_4346}>E.g. 123456</Text>
        </View>
      </View>
      <View style={styles.View_32_4349}>
        <View style={styles.View_32_4350} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_32_4405}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("16_82"))
        }
      >
        <View style={styles.View_32_4406}>
          <Text style={styles.Text_32_4406}>Next</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(60, 65, 207, 1)" },
  View_2: { height: hp("111%") },
  ImageBackground_32_4341: {
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
  ImageBackground_32_4342: {
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
  View_32_4343: {
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
  View_I32_4343_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I32_4343_2_8: {
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
  ImageBackground_I32_4343_2_12: {
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
  ImageBackground_I32_4343_2_16: {
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
  ImageBackground_I32_4343_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_32_4344: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_32_4344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4345: {
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
  View_32_4346: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_32_4346: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4349: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_32_4350: {
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
  },
  TouchableOpacity_32_4405: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("55%"),
    backgroundColor: "rgba(77, 204, 33, 1)"
  },
  View_32_4406: {
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
  Text_32_4406: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
