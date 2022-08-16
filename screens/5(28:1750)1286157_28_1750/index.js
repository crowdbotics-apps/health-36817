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
      <View style={styles.View_28_1751}>
        <View style={styles.View_I28_1751_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83de92e8-6ab9-4c56-b949-f800ecb57ca9"
            }}
            style={styles.ImageBackground_I28_1751_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fad72230-069d-4bfe-a21e-f34e6ab8f50f"
            }}
            style={styles.ImageBackground_I28_1751_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8475de8-465f-4f53-a49d-91c943728ad0"
            }}
            style={styles.ImageBackground_I28_1751_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c95a8fdf-1de0-4511-b75b-abb4b05920d6"
          }}
          style={styles.ImageBackground_I28_1751_2_21}
        />
      </View>
      <View style={styles.View_28_1752} />
      <View style={styles.View_28_1753}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccc3377f-1ac3-402d-bec1-89d2b6d214d1"
          }}
          style={styles.ImageBackground_28_1754}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73906ab4-a7e6-4c9b-9f43-3b9a014911fe"
          }}
          style={styles.ImageBackground_28_1755}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aea0f307-a493-4610-afd8-898c5f379f6d"
          }}
          style={styles.ImageBackground_28_1756}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecf5119c-9afc-452e-bc93-02a681aac700"
          }}
          style={styles.ImageBackground_28_1757}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/879ae728-c5f3-4f7b-870d-fd2fef7fc90d"
          }}
          style={styles.ImageBackground_28_1759}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84616baf-dfd3-4119-be6c-689dce48b85a"
          }}
          style={styles.ImageBackground_28_1760}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7bdcacce-dc33-4e42-a78e-b4362504f99f"
          }}
          style={styles.ImageBackground_28_1761}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9afedca3-99dd-4220-a4b9-c28b1a4b57d4"
          }}
          style={styles.ImageBackground_28_1762}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/609d203c-da9d-42f2-bcc3-a1d2bda3ff5b"
          }}
          style={styles.ImageBackground_28_1763}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5f9a749-f459-42af-be58-18c8b13d77ae"
          }}
          style={styles.ImageBackground_28_1764}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/877f1fea-66b7-43cb-98e3-673b1a5572c8"
          }}
          style={styles.ImageBackground_28_1766}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ad77f4d-cb06-421f-a56a-3c5a6c44d238"
          }}
          style={styles.ImageBackground_28_1767}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2eae31c9-562c-4133-b8ed-f88ad03d4ba6"
          }}
          style={styles.ImageBackground_28_1768}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a99b3ab9-d7e9-4828-8500-105f2a005037"
          }}
          style={styles.ImageBackground_28_1769}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d20067f-5b4b-4a51-bb89-2ccc53861462"
          }}
          style={styles.ImageBackground_28_1770}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf1ba1b8-2917-4049-b50e-07057c216b05"
          }}
          style={styles.ImageBackground_28_1772}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16547818-153b-457f-9c85-6724d5e7e514"
          }}
          style={styles.ImageBackground_28_1773}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02e6bd36-7a21-4ac4-81a8-8a853831a77a"
          }}
          style={styles.ImageBackground_28_1774}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4aeeb7a7-f15b-434f-8811-8fbe5f6808a5"
          }}
          style={styles.ImageBackground_28_1775}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab308617-c893-4460-af0a-bbbbc6537aa8"
          }}
          style={styles.ImageBackground_28_1776}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5fae24d-b342-498c-9ec9-11a35694c369"
          }}
          style={styles.ImageBackground_28_1777}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/162fab91-0f55-4814-ad2f-a790533bf53b"
          }}
          style={styles.ImageBackground_28_1778}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dcf2a65-66fd-44f4-9639-c2d12a37cc45"
          }}
          style={styles.ImageBackground_28_1779}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8def558-71a9-4598-bdcc-04b87c3dc759"
          }}
          style={styles.ImageBackground_28_1780}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84da27ff-eb20-46fd-8827-0905e56e3534"
          }}
          style={styles.ImageBackground_28_1781}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c231d685-e225-46a6-9cc2-244f8f35eac8"
          }}
          style={styles.ImageBackground_28_1782}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/060c32f1-5b7a-4ee7-983a-885a31b8d867"
          }}
          style={styles.ImageBackground_28_1783}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4ad8e30-b470-43a4-96c8-ff4119e255f4"
          }}
          style={styles.ImageBackground_28_1784}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b7cad60-b19a-4751-b4a9-d143a6db24ce"
          }}
          style={styles.ImageBackground_28_1785}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91aaaef8-32bf-407a-98fb-46690f0c0f3a"
          }}
          style={styles.ImageBackground_28_1786}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4f4cadd-6a6c-4e4c-b088-f12d495aa7e8"
          }}
          style={styles.ImageBackground_28_1787}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b938b73c-7da7-4dfc-87d5-3b0289152bec"
          }}
          style={styles.ImageBackground_28_1788}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e34f1df-23ba-42af-bf7b-b73fdc0976af"
          }}
          style={styles.ImageBackground_28_1789}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4dc5c27-fcf2-436b-bc00-dfc5584c810a"
          }}
          style={styles.ImageBackground_28_1790}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a13e996c-02f9-4f47-90be-7f2cfa97f0f2"
          }}
          style={styles.ImageBackground_28_1791}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4f8c2ed-4ace-46f3-9d1e-7674cb741003"
          }}
          style={styles.ImageBackground_28_1792}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4044a3c3-0d0b-4193-8c87-702bd59103b4"
          }}
          style={styles.ImageBackground_28_1793}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24465795-25e5-4c07-b617-b3e9bcb3d2aa"
          }}
          style={styles.ImageBackground_28_1794}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/561b20b1-6e21-4bad-823b-7250803fc60b"
          }}
          style={styles.ImageBackground_28_1795}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79068a0a-2c48-4257-826b-be0d2c2b4fdf"
          }}
          style={styles.ImageBackground_28_1796}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6364406-df9e-4447-b221-e46e59cf5dd1"
          }}
          style={styles.ImageBackground_28_1797}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f140d91d-ac46-43db-a0d3-fa8995655f35"
          }}
          style={styles.ImageBackground_28_1798}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3029ab4d-2ad3-420d-af65-3502c05c3cd8"
          }}
          style={styles.ImageBackground_28_1799}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c685ce4-677d-4885-9bef-f42ff4294c03"
          }}
          style={styles.ImageBackground_28_1800}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34f97dbf-f513-4065-a8a2-88511a734e9c"
          }}
          style={styles.ImageBackground_28_1801}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b881053b-8945-4462-8c15-d40d30396149"
          }}
          style={styles.ImageBackground_28_1802}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/52a027cd-eaca-4c62-bbff-4d472392f132"
          }}
          style={styles.ImageBackground_28_1803}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4537800d-195b-4a28-a139-c6fc318bb660"
          }}
          style={styles.ImageBackground_28_1805}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a980cf84-1911-4e0f-ad93-55d6471c99c4"
          }}
          style={styles.ImageBackground_28_1806}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d62972-e057-48a7-9ac4-0d2eaaa8ac3d"
          }}
          style={styles.ImageBackground_28_1807}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f202c321-412b-4a1b-8bdb-a0a7ee267206"
          }}
          style={styles.ImageBackground_28_1808}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b394572f-552a-4d31-b786-f79533ac00c9"
          }}
          style={styles.ImageBackground_28_1809}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02f83c2f-291e-4d8f-bb91-a0ea0d20bd98"
          }}
          style={styles.ImageBackground_28_1810}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a2d1237-7a2d-4315-9e37-986033dd9c9b"
          }}
          style={styles.ImageBackground_28_1811}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb6d2944-acd5-4622-a10c-2385094f16b9"
          }}
          style={styles.ImageBackground_28_1812}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e38b57a5-754e-4e78-8315-876649324edd"
          }}
          style={styles.ImageBackground_28_1813}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/995a6e74-b3d3-47da-a8c6-e6a0adad2218"
          }}
          style={styles.ImageBackground_28_1814}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4719ad51-5017-4c9b-bb9f-3b508bf08d7d"
          }}
          style={styles.ImageBackground_28_1815}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dcc2cfd-9974-4fbc-9be7-ae7595da6b42"
          }}
          style={styles.ImageBackground_28_1817}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/780ef9fc-eb5d-4bfd-b8b5-7e731ca9d545"
          }}
          style={styles.ImageBackground_28_1818}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8a3fceb-e10d-49c5-a954-11e98ccad1c6"
          }}
          style={styles.ImageBackground_28_1819}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/552c8d96-4876-4d57-90a5-d29597e95ff6"
          }}
          style={styles.ImageBackground_28_1820}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38c5f8c9-3290-4070-8787-f8cea0f2b238"
          }}
          style={styles.ImageBackground_28_1821}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c648b218-222c-4672-9f5f-3e586dd624ce"
          }}
          style={styles.ImageBackground_28_1822}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cd92f9a-0578-42df-bda5-0df5178298e7"
          }}
          style={styles.ImageBackground_28_1823}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42a37ddb-b097-4206-9bb7-03c10cc4e227"
          }}
          style={styles.ImageBackground_28_1824}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e82cc89-7762-4de9-87f6-1592c0327346"
          }}
          style={styles.ImageBackground_28_1825}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af49480a-1bc1-4179-96a1-2b2bff2ea5f2"
          }}
          style={styles.ImageBackground_28_1826}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f72f2b5-b455-46a7-82ba-c9b72a87e5c6"
          }}
          style={styles.ImageBackground_28_1827}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/117eb179-b65b-4fc2-8cea-0d821eecef3d"
          }}
          style={styles.ImageBackground_28_1828}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be54f37b-ebd0-4cc5-b31f-bfecf6114be5"
          }}
          style={styles.ImageBackground_28_1829}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ec1b8c2-8d8e-49f8-a815-2dad2eca97a3"
          }}
          style={styles.ImageBackground_28_1830}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1000ea3-fbcc-4eca-b4e2-3305283573d9"
          }}
          style={styles.ImageBackground_28_1831}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5f0bb35-7c60-4180-b356-19c33db6ac4f"
          }}
          style={styles.ImageBackground_28_1832}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0825dc43-2ee3-4234-8f40-f1019a356674"
          }}
          style={styles.ImageBackground_28_1833}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8938ad2e-7d17-4040-a87c-7e6746dc8574"
          }}
          style={styles.ImageBackground_28_1834}
        />
      </View>
      <View style={styles.View_28_1835}>
        <View style={styles.View_28_1836}>
          <Text style={styles.Text_28_1836}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_28_1837}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c06365b0-722a-4cee-a121-7691e83b1aec"
          }}
          style={styles.ImageBackground_28_1838}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10a138bd-46ea-4a49-8e0e-48ebc5513964"
          }}
          style={styles.ImageBackground_28_1840}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3376af24-200a-4d30-a68f-777982e169b8"
          }}
          style={styles.ImageBackground_28_1841}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c85693d-644d-438b-9157-31b380e8f058"
          }}
          style={styles.ImageBackground_28_1842}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5f533eb-9c36-49aa-b231-fbef7f0cec0a"
          }}
          style={styles.ImageBackground_28_1843}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04adc415-c976-4c98-a7a4-9e8f1301b906"
          }}
          style={styles.ImageBackground_28_1844}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07c8ccd1-6788-4d72-af7a-da811dce211b"
          }}
          style={styles.ImageBackground_28_1845}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ec816a4-a929-4359-8783-18cddb7c03f2"
          }}
          style={styles.ImageBackground_28_1846}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49fdbcad-58f1-4f17-aff3-361453197885"
          }}
          style={styles.ImageBackground_28_1847}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0be55d10-565c-4b01-8a2f-1f2ae5aebc70"
          }}
          style={styles.ImageBackground_28_1848}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f55e4d88-4633-446e-abf9-05263afecd53"
          }}
          style={styles.ImageBackground_28_1849}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad32039b-5fc9-423e-b627-dd6ea068b586"
          }}
          style={styles.ImageBackground_28_1850}
        />
      </View>
      <View style={styles.View_28_1851}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bed02f7c-14e9-4f82-8b9e-16a35df44ca5"
          }}
          style={styles.ImageBackground_28_1852}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4064d37-66ea-44ee-a0bf-3273e8a8a09a"
          }}
          style={styles.ImageBackground_28_1853}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03d855ef-5beb-4f6a-b73f-638756fefc09"
          }}
          style={styles.ImageBackground_28_1854}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3ce9391-e541-45ae-8028-8b76ea7dcd5a"
          }}
          style={styles.ImageBackground_28_1855}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a09b95cc-90c7-4873-a1e1-8335b21b20c4"
          }}
          style={styles.ImageBackground_28_1856}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d505650-fc9c-4e66-b2bf-0143f6f55b4f"
          }}
          style={styles.ImageBackground_28_1857}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dac3d48-99ed-45ef-826b-9dbfa11ef5cc"
          }}
          style={styles.ImageBackground_28_1858}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a53227ce-cf81-4ec2-8088-4f3a7a91baa8"
          }}
          style={styles.ImageBackground_28_1859}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f54dcce3-379c-486b-8a3b-76368e5fe1b8"
          }}
          style={styles.ImageBackground_28_1860}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32ee7a01-5008-4b88-ba52-398fe54370c8"
          }}
          style={styles.ImageBackground_28_1861}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb128013-3917-4887-a421-f79f644fc3a5"
          }}
          style={styles.ImageBackground_28_1862}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3178c8e9-2e1b-409b-90bf-aeeedaf11e9e"
          }}
          style={styles.ImageBackground_28_1863}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/087219ba-48e3-42ec-b9ad-8fca06527f8c"
          }}
          style={styles.ImageBackground_28_1864}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/278745c8-7c76-4dfa-8a3b-9e3832c193b5"
          }}
          style={styles.ImageBackground_28_1865}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b2fcc83-20e1-4688-9ad3-72d5b7678c27"
          }}
          style={styles.ImageBackground_28_1866}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db5fd36d-f545-44e4-8dad-2bfe0d17c444"
          }}
          style={styles.ImageBackground_28_1867}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39bec487-2b38-4746-b51d-3c16940b7e65"
          }}
          style={styles.ImageBackground_28_1868}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf431d98-5be9-409b-8c8e-aee69d0b6bb5"
          }}
          style={styles.ImageBackground_28_1869}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa6a107b-0d04-4b2d-a369-44e446e8bf00"
          }}
          style={styles.ImageBackground_28_1870}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/798a582a-7b38-4ef7-bfc7-6fdfc1ed0a58"
          }}
          style={styles.ImageBackground_28_1871}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3223b9eb-378a-4faa-b6a8-c89c12e20814"
          }}
          style={styles.ImageBackground_28_1872}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91891ee2-92a8-41a8-8608-92478e55e2d0"
          }}
          style={styles.ImageBackground_28_1873}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/119966b2-722b-4adf-bf5f-a01fa11d8ba9"
          }}
          style={styles.ImageBackground_28_1874}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b051328a-05df-4e35-936b-ee02410355ec"
          }}
          style={styles.ImageBackground_28_1875}
        />
        <View style={styles.View_28_1876}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/465a13e2-55cc-451d-85e8-1783de910263"
            }}
            style={styles.ImageBackground_28_1877}
          />
          <View style={styles.View_28_1879}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/864cd5d8-596b-41b3-a2de-917fe4be9a3c"
              }}
              style={styles.ImageBackground_28_1880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ee3bb5f-d68e-42a4-aa3f-597985e4d678"
              }}
              style={styles.ImageBackground_28_1881}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b426b78a-de16-4867-8ab3-bc9d3a70fdf5"
              }}
              style={styles.ImageBackground_28_1882}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f4692dd-cc60-42d5-9a24-3ca21a442021"
              }}
              style={styles.ImageBackground_28_1883}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/315e91c1-3f6e-43bc-a430-979f4aa349e2"
              }}
              style={styles.ImageBackground_28_1884}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5412bc8-3a3c-4e04-a8f3-46846907f53e"
              }}
              style={styles.ImageBackground_28_1885}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0735077f-460a-4b2c-82dc-81155aa8d818"
              }}
              style={styles.ImageBackground_28_1886}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0c5396f-2a74-46a7-b65c-1f0f889a2521"
              }}
              style={styles.ImageBackground_28_1887}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b75c5d93-9191-42ad-831b-59e417bcb353"
              }}
              style={styles.ImageBackground_28_1888}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67c21b10-2d98-4a07-ac86-2f637693368b"
              }}
              style={styles.ImageBackground_28_1889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dec6f8c-300b-40f8-aa89-802a9daebbac"
              }}
              style={styles.ImageBackground_28_1890}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2ca2a98-fd60-4986-86ce-33cbacf4b6ba"
              }}
              style={styles.ImageBackground_28_1891}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94eeb95c-60ea-4102-b233-81f640e224f2"
              }}
              style={styles.ImageBackground_28_1892}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6d281d4-3db9-4455-8797-103689db1f7a"
              }}
              style={styles.ImageBackground_28_1893}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d7113d6-6578-4410-a336-55d591f46561"
              }}
              style={styles.ImageBackground_28_1894}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89696f84-2808-472b-a8f7-624f288644f0"
              }}
              style={styles.ImageBackground_28_1895}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ca7c549-1158-4da9-b5f7-369b24775257"
              }}
              style={styles.ImageBackground_28_1896}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53572fb2-4712-487f-827c-a6e0b7da382e"
              }}
              style={styles.ImageBackground_28_1897}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/745bc843-623f-4ac6-b470-bdf77d40f26a"
              }}
              style={styles.ImageBackground_28_1898}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fc40643-f9c6-47fd-948c-d858d5958298"
              }}
              style={styles.ImageBackground_28_1899}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92696c5c-d897-44db-a74a-1fbcd5a7a29f"
              }}
              style={styles.ImageBackground_28_1900}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c76f015e-03e5-4268-aa3e-b32995ae17fa"
              }}
              style={styles.ImageBackground_28_1901}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f901fdf-9869-4022-927c-c2d785ddbd69"
              }}
              style={styles.ImageBackground_28_1902}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5178fb55-4848-4907-9edb-628b8460ae02"
              }}
              style={styles.ImageBackground_28_1903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1a395b1-a7ee-45a6-b054-d14a3731c22f"
              }}
              style={styles.ImageBackground_28_1904}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_1906}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ba0676d-bcf4-4287-807e-f2b0ca6f0671"
          }}
          style={styles.ImageBackground_28_1907}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0489d2c0-8d56-4a75-8f86-3052b8ee7f16"
          }}
          style={styles.ImageBackground_28_1908}
        />
        <View style={styles.View_28_1909}>
          <Text style={styles.Text_28_1909}>Do you like to go play game?</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_28_1751: {
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
  View_I28_1751_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I28_1751_2_8: {
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
  ImageBackground_I28_1751_2_12: {
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
  ImageBackground_I28_1751_2_16: {
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
  ImageBackground_I28_1751_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_28_1752: {
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
  View_28_1753: {
    width: wp("55%"),
    height: hp("52%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_28_1754: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1755: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1756: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1757: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1759: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1760: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_28_1761: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_28_1762: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1763: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1764: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1766: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1767: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1768: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1769: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1770: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1772: {
    width: wp("23%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1773: {
    width: wp("28%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1774: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1775: {
    width: wp("22%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1776: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1777: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1778: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1779: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1780: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1781: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1782: {
    width: wp("9%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1783: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1784: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1785: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1786: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1787: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1788: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1789: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1790: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1791: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1792: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1793: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1794: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1795: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1796: {
    width: wp("14%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1797: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1798: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1799: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1800: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1801: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1802: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_28_1803: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1805: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1806: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1807: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1808: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1809: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1810: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_28_1811: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1812: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1813: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1814: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1815: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1817: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1818: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1819: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1820: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1821: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1822: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1823: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1824: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1825: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1826: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1827: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1828: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1829: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1830: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1831: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_28_1832: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1833: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1834: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_28_1835: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("96%"),
    backgroundColor: "rgba(77, 204, 33, 1)"
  },
  View_28_1836: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_28_1836: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1837: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1838: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1840: {
    width: wp("26%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1841: {
    width: wp("21%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1842: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1843: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1844: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1845: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1846: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1847: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1848: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1849: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_28_1850: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_28_1851: {
    width: wp("163%"),
    minWidth: wp("163%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("86%")
  },
  ImageBackground_28_1852: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1853: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1854: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1855: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1856: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1857: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1858: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1859: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_28_1860: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_28_1861: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1862: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_28_1863: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1864: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1865: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_28_1866: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_28_1867: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_28_1868: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1869: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_28_1870: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_28_1871: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1872: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1873: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_28_1874: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_28_1875: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_28_1876: {
    width: wp("163%"),
    minWidth: wp("163%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_1877: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_28_1879: {
    width: wp("162%"),
    minWidth: wp("162%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_28_1880: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_28_1881: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1882: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_28_1883: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1884: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1885: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1886: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_28_1887: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_28_1888: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1889: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_28_1890: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1891: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1892: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1893: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_28_1894: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1895: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1896: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1897: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_28_1898: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1899: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1900: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1901: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_28_1902: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_28_1903: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1904: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_28_1906: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("14%")
  },
  ImageBackground_28_1907: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1908: {
    width: wp("39%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_28_1909: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_1909: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
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
