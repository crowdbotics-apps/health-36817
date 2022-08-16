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
      <View style={styles.View_28_1157}>
        <View style={styles.View_28_1158}>
          <View style={styles.View_28_1159}>
            <View style={styles.View_28_1160} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9826895-c53e-4d7f-a230-706c4d904b10"
              }}
              style={styles.ImageBackground_28_1161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b2d9679-e5ac-4ebc-b97e-5377507ffb77"
              }}
              style={styles.ImageBackground_28_1162}
            />
            <View style={styles.View_28_1163}>
              <View style={styles.View_I28_1163_2_7}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdfe3ce8-2790-405a-ba28-b7e56146769d"
                  }}
                  style={styles.ImageBackground_I28_1163_2_8}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8181f28-78d8-4e8d-a425-23b2f90b3437"
                  }}
                  style={styles.ImageBackground_I28_1163_2_12}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/890c4dec-fd9b-4781-9b2e-d36d4d19b8da"
                  }}
                  style={styles.ImageBackground_I28_1163_2_16}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14da9d45-e103-485d-9854-62452898ded1"
                }}
                style={styles.ImageBackground_I28_1163_2_21}
              />
            </View>
            <View style={styles.View_28_1164}>
              <View style={styles.View_28_1165} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba12e330-e847-4457-a6a5-241a29a68062"
              }}
              style={styles.ImageBackground_28_1166}
            />
            <View style={styles.View_28_1167} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6ae7d9e-248a-4556-a1dc-44487bc35ad7"
              }}
              style={styles.ImageBackground_28_1172}
            />
            <View style={styles.View_28_1174}>
              <Text style={styles.Text_28_1174}>My Child</Text>
            </View>
            <View style={styles.View_28_1197}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d97f5504-63f5-4053-8d4e-d2a869647c52"
                }}
                style={styles.ImageBackground_28_1191}
              />
              <TouchableOpacity
                style={styles.TouchableOpacity_28_1194}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("23_146"))
                }
              >
                <Text style={styles.Text_28_1194}>Allow</Text>
              </TouchableOpacity>
              <View style={styles.View_28_1196}>
                <Text style={styles.Text_28_1196}>
                  My child wants to access your microphone and camera
                </Text>
              </View>
              <View style={styles.View_28_1195}>
                <Text style={styles.Text_28_1195}>Deny</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_28_1157: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_1159: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_28_1160: {
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
  ImageBackground_28_1161: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%")
  },
  ImageBackground_28_1162: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_28_1163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I28_1163_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I28_1163_2_8: {
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
  ImageBackground_I28_1163_2_12: {
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
  ImageBackground_I28_1163_2_16: {
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
  ImageBackground_I28_1163_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_28_1164: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_28_1165: {
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
  ImageBackground_28_1166: {
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
  View_28_1167: {
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
  ImageBackground_28_1172: {
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
  },
  View_28_1174: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_28_1174: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1197: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("46%")
  },
  ImageBackground_28_1191: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_28_1194: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_28_1194: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1196: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_28_1196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1195: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_28_1195: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
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
