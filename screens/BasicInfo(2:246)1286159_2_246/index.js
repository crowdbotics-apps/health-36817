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
      <View style={styles.View_2_248}>
        <View style={styles.View_2_249} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86014785-507a-4f94-a105-cfdf577d4143"
          }}
          style={styles.ImageBackground_2_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1915a438-b171-458e-8353-cd77a9b6e6ad"
          }}
          style={styles.ImageBackground_2_251}
        />
        <View style={styles.View_2_252}>
          <View style={styles.View_I2_252_2_7}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51f92586-29dd-49c3-b3ec-726acced4763"
              }}
              style={styles.ImageBackground_I2_252_2_8}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ae26d7d-448a-4bb5-b931-5ce5cc2950e2"
              }}
              style={styles.ImageBackground_I2_252_2_12}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18823178-dc9b-4298-980d-757586c35070"
              }}
              style={styles.ImageBackground_I2_252_2_16}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ae575ec-7157-48e9-9de2-5f84b288279e"
            }}
            style={styles.ImageBackground_I2_252_2_21}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65a72db7-437f-4790-b1e6-0fa484b8fae0"
          }}
          style={styles.ImageBackground_2_255}
        />
        <View style={styles.View_2_256} />
        <View style={styles.View_2_257}>
          <Text style={styles.Text_2_257}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_263}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("32_4313"))
          }
        >
          <View style={styles.View_2_264}>
            <Text style={styles.Text_2_264}>Get Started</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_16_145}>
          <View style={styles.View_16_146} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a8db2e5-3577-41fe-a86c-ab05de16fc5a"
        }}
        style={styles.ImageBackground_2_286}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_2_248: {
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
  View_2_249: {
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
  ImageBackground_2_250: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16%")
  },
  ImageBackground_2_251: {
    width: wp("100%"),
    height: hp("33%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_252: {
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
  View_I2_252_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I2_252_2_8: {
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
  ImageBackground_I2_252_2_12: {
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
  ImageBackground_I2_252_2_16: {
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
  ImageBackground_I2_252_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  ImageBackground_2_255: {
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
  View_2_256: {
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
  View_2_257: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_263: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("94%"),
    backgroundColor: "rgba(77, 204, 33, 1)"
  },
  View_2_264: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_145: {
    width: wp("36%"),
    height: hp("1%"),
    top: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_16_146: {
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
  ImageBackground_2_286: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
