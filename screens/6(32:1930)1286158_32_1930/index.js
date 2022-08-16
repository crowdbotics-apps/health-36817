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
      <View style={styles.View_32_1931}>
        <View style={styles.View_I32_1931_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75299b89-81c3-4f1c-a6fd-9e85dc761944"
            }}
            style={styles.ImageBackground_I32_1931_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4861c51-7237-4c93-9811-9f286882ad97"
            }}
            style={styles.ImageBackground_I32_1931_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff9da5e0-a28e-4827-a6e3-b483b21d22cc"
            }}
            style={styles.ImageBackground_I32_1931_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d973581-ae2c-41ab-8e25-ff335ae579c3"
          }}
          style={styles.ImageBackground_I32_1931_2_21}
        />
      </View>
      <View style={styles.View_32_1932} />
      <View style={styles.View_32_4292}>
        <Text style={styles.Text_32_4292}>
          Some games for you Keep Enjoying
        </Text>
      </View>
      <View style={styles.View_32_4291}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4a3edb6-896b-4352-a2a5-57aaee9a553e"
          }}
          style={styles.ImageBackground_32_4166}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75405178-6c7b-4c04-b68e-fbdd629b9262"
          }}
          style={styles.ImageBackground_32_4168}
        />
        <View style={styles.View_32_4172}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c9ac6c8-333a-4e47-989f-1011e7aa75d6"
            }}
            style={styles.ImageBackground_32_4173}
          />
        </View>
        <View style={styles.View_32_4180}>
          <View style={styles.View_32_4181}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/275cf9ba-1ce6-4286-af24-f4ead62c0438"
              }}
              style={styles.ImageBackground_32_4182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/708ddf20-cb79-4bb5-af7c-8c2adb2f7e92"
              }}
              style={styles.ImageBackground_32_4183}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f39d4d2-2297-4cbb-a699-3d46ba9dc122"
              }}
              style={styles.ImageBackground_32_4184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d48e086-0361-4f50-8d03-4ddb2707e9e2"
              }}
              style={styles.ImageBackground_32_4185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/592aaa25-4e0d-41fa-89e5-0646295b02af"
              }}
              style={styles.ImageBackground_32_4187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/888a7dea-8721-4ba4-8baa-b1c5dbf030a7"
              }}
              style={styles.ImageBackground_32_4188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e8a8752-700a-4f64-b703-bb98f8222783"
              }}
              style={styles.ImageBackground_32_4190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f03dd16d-1299-4286-a6f2-4bb8f1c30a70"
              }}
              style={styles.ImageBackground_32_4196}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b0162a2-d9fe-4d82-b598-7689abf7a415"
              }}
              style={styles.ImageBackground_32_4197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a40210b6-55b7-45fa-9a03-a442655ff289"
              }}
              style={styles.ImageBackground_32_4198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6060a37-8cdd-4a3c-b2ce-e4f04cd97de1"
              }}
              style={styles.ImageBackground_32_4199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0598002d-2f63-4909-88c2-06c48313f869"
              }}
              style={styles.ImageBackground_32_4200}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2cf95ce-fdee-49f0-824b-ffd10da972d3"
              }}
              style={styles.ImageBackground_32_4201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4443faf1-076f-482c-a314-b6a527321038"
              }}
              style={styles.ImageBackground_32_4202}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32956963-7d3d-42b1-9a8a-471278cc19dc"
              }}
              style={styles.ImageBackground_32_4203}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/708d46cb-476d-4670-9d51-2c44ff401ae2"
              }}
              style={styles.ImageBackground_32_4204}
            />
          </View>
        </View>
        <View style={styles.View_32_4209}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ccc9bf8-eb5f-4e8e-9265-8f9957ac9d54"
            }}
            style={styles.ImageBackground_32_4210}
          />
        </View>
        <View style={styles.View_32_4262}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/854e2ca9-22ec-4e68-893a-06b706d00ab9"
            }}
            style={styles.ImageBackground_32_4263}
          />
        </View>
        <View style={styles.View_32_4267}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecfeb854-a801-4295-b6ea-d4c580b1a89f"
            }}
            style={styles.ImageBackground_32_4268}
          />
        </View>
        <View style={styles.View_32_4280}>
          <View style={styles.View_32_4281}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f8117d9-82d1-4c18-8c48-6036486ee047"
              }}
              style={styles.ImageBackground_32_4282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37b88702-53eb-405f-b436-4261835a01d9"
              }}
              style={styles.ImageBackground_32_4283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58ae0c3b-8352-41ce-b3c8-c1645008694b"
              }}
              style={styles.ImageBackground_32_4284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f10907a1-1485-41c8-8967-e630fc676b25"
              }}
              style={styles.ImageBackground_32_4285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1850a49f-f954-4827-bc8f-7600ee7b1da1"
              }}
              style={styles.ImageBackground_32_4286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdd22d68-90eb-4675-92d5-e1bcbf024068"
              }}
              style={styles.ImageBackground_32_4290}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_32_4306}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05f4fdb2-dce8-4428-9f43-c5a8d21eb6d2"
          }}
          style={styles.ImageBackground_32_4300}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c0f7a43-0294-4130-9a16-cfea87e53460"
          }}
          style={styles.ImageBackground_32_4299}
        />
        <View style={styles.View_32_4297}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/329c25d5-32eb-4355-8b69-3fbe48f71f2f"
            }}
            style={styles.ImageBackground_32_4295}
          />
        </View>
        <View style={styles.View_32_4296}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc129939-35a6-44ea-9f91-18c5a63061e6"
            }}
            style={styles.ImageBackground_32_4293}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df22b868-ecc5-4ae2-bba7-b00826c059a6"
            }}
            style={styles.ImageBackground_32_4294}
          />
        </View>
        <View style={styles.View_32_4309}>
          <Text style={styles.Text_32_4309}>Ludo</Text>
        </View>
        <View style={styles.View_32_4310}>
          <Text style={styles.Text_32_4310}>Mario</Text>
        </View>
        <View style={styles.View_32_4311}>
          <Text style={styles.Text_32_4311}>Chess</Text>
        </View>
        <View style={styles.View_32_4312}>
          <Text style={styles.Text_32_4312}>Carrom</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_32_1931: {
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
  View_I32_1931_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I32_1931_2_8: {
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
  ImageBackground_I32_1931_2_12: {
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
  ImageBackground_I32_1931_2_16: {
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
  ImageBackground_I32_1931_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_32_1932: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_32_4292: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_32_4292: {
    color: "rgba(61, 122, 230, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4291: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%")
  },
  ImageBackground_32_4166: {
    width: wp("96%"),
    height: hp("28%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4168: {
    width: wp("85%"),
    height: hp("14%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_32_4172: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4173: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_4180: {
    width: wp("40%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_32_4181: {
    width: wp("40%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4182: {
    width: wp("40%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4183: {
    width: wp("40%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4184: {
    width: wp("40%"),
    height: hp("15%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4185: {
    width: wp("40%"),
    height: hp("28%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4187: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_32_4188: {
    width: wp("20%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_32_4190: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_32_4196: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_32_4197: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_32_4198: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_32_4199: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_32_4200: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_32_4201: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_32_4202: {
    width: wp("19%"),
    height: hp("6%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_32_4203: {
    width: wp("19%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_32_4204: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_32_4209: {
    width: wp("40%"),
    height: hp("26%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_32_4210: {
    width: wp("40%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_4262: {
    width: wp("42%"),
    height: hp("18%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_32_4263: {
    width: wp("42%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_4267: {
    width: wp("20%"),
    height: hp("8%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_32_4268: {
    width: wp("20%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_32_4280: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_32_4281: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4282: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_32_4283: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_32_4284: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_32_4285: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_32_4286: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_32_4290: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_32_4306: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_32_4300: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("199%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_32_4299: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("133%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_32_4297: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("0%")
  },
  ImageBackground_32_4295: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_32_4296: {
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
  ImageBackground_32_4293: {
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
  ImageBackground_32_4294: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_32_4309: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_32_4309: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4310: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_32_4310: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4311: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("150%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_32_4311: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_32_4312: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("216%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_32_4312: {
    color: "rgba(58, 122, 205, 1)",
    fontSize: 12,
    fontWeight: "400",
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
