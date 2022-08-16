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
      <View style={styles.View_28_1399}>
        <View style={styles.View_I28_1399_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e8b9e5b-59e9-4069-a478-303d2ab9eb32"
            }}
            style={styles.ImageBackground_I28_1399_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fedc29f2-9a31-4cac-ac43-ccbe7ab8dceb"
            }}
            style={styles.ImageBackground_I28_1399_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5501243-14e0-44df-99e3-128d47b64cb5"
            }}
            style={styles.ImageBackground_I28_1399_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89e1a4bd-e218-4a0c-a578-4bcfcfd9d091"
          }}
          style={styles.ImageBackground_I28_1399_2_21}
        />
      </View>
      <View style={styles.View_28_1400} />
      <View style={styles.View_28_1401}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab987f1a-a058-440c-b00c-4dbdf61935c3"
          }}
          style={styles.ImageBackground_28_1402}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dcdbe1c-d4fd-4189-bc14-388e3d4b0251"
          }}
          style={styles.ImageBackground_28_1403}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7020262-f36c-48ad-a710-09d2c55446a2"
          }}
          style={styles.ImageBackground_28_1404}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e89b57b9-b6ac-48e4-8496-c700571d5185"
          }}
          style={styles.ImageBackground_28_1405}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74c72b37-e871-462d-b816-131334b8909f"
          }}
          style={styles.ImageBackground_28_1407}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/988a5bd1-c079-404b-8954-88b1043fe7ff"
          }}
          style={styles.ImageBackground_28_1408}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c6ee575-0e9f-4e26-b1fc-b008778798dd"
          }}
          style={styles.ImageBackground_28_1409}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48c8e752-4b8e-44f6-b402-1ff321ad99e1"
          }}
          style={styles.ImageBackground_28_1410}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/302b48f8-37f5-40ee-8d59-a28ed1b2df60"
          }}
          style={styles.ImageBackground_28_1411}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/595ac8bc-3e63-4b24-bfa4-47354e8551b9"
          }}
          style={styles.ImageBackground_28_1412}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ddd306b-c1c5-427f-a993-18173befbd0b"
          }}
          style={styles.ImageBackground_28_1414}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d59a0466-1172-40e0-a3a5-c9ca69a481f3"
          }}
          style={styles.ImageBackground_28_1415}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04080794-f5c4-4a50-b8b3-45c2d2dace8b"
          }}
          style={styles.ImageBackground_28_1416}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaff72d6-17dc-4ee4-83b1-2b9c7eb7a826"
          }}
          style={styles.ImageBackground_28_1417}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d2d348c-a546-4791-b73a-b1f709663baf"
          }}
          style={styles.ImageBackground_28_1418}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e291880e-94a8-49fe-a3db-615c8c713e21"
          }}
          style={styles.ImageBackground_28_1420}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f06a9bc6-88e3-4e0e-90ab-148f756cba1f"
          }}
          style={styles.ImageBackground_28_1421}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1acc7e8a-298e-40f9-aeda-0f1992d05476"
          }}
          style={styles.ImageBackground_28_1422}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07a493c3-10ef-4257-8366-93e5660d60d5"
          }}
          style={styles.ImageBackground_28_1423}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23cae5bb-fb41-4e05-9625-f53f60081a5d"
          }}
          style={styles.ImageBackground_28_1424}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/850ef246-03ac-4217-873a-5dd8db12f6f2"
          }}
          style={styles.ImageBackground_28_1425}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0848ba83-d5ae-4809-b9b5-dc05b9529ba1"
          }}
          style={styles.ImageBackground_28_1426}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cffcb43-bce6-4d1b-8116-43cbf83b79af"
          }}
          style={styles.ImageBackground_28_1427}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb26da78-1544-4c7e-8582-7f9108b29cbf"
          }}
          style={styles.ImageBackground_28_1428}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ed00ad8-0e76-449e-b004-6a4de6e2721d"
          }}
          style={styles.ImageBackground_28_1429}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a80ac4d-d12b-4d20-a085-db04c9b870df"
          }}
          style={styles.ImageBackground_28_1430}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cee5a7b-a28b-4a99-8878-03bb48609ef4"
          }}
          style={styles.ImageBackground_28_1431}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74f7a7d1-6a78-4b47-b2b7-3967760967eb"
          }}
          style={styles.ImageBackground_28_1432}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a570b51-7941-469e-8c42-acb6bb88cc80"
          }}
          style={styles.ImageBackground_28_1433}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c6a947-da92-4598-89a0-3fea3213ba8c"
          }}
          style={styles.ImageBackground_28_1434}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5dafab67-e3f8-4a85-913a-c6d99291af1d"
          }}
          style={styles.ImageBackground_28_1435}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48cb41e7-5753-494a-993a-26f46f116438"
          }}
          style={styles.ImageBackground_28_1436}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/018f571a-5512-4404-a90e-f76b22fe90d0"
          }}
          style={styles.ImageBackground_28_1437}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b762db50-fbbb-4e7e-8644-ad6a0d31bce5"
          }}
          style={styles.ImageBackground_28_1438}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71d7d646-bbde-4178-baf0-cccf273ff86c"
          }}
          style={styles.ImageBackground_28_1439}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7d1e363-ffde-4e22-a5b9-eb30d2d28254"
          }}
          style={styles.ImageBackground_28_1440}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3faaf214-2337-45be-9f44-996f414f8af1"
          }}
          style={styles.ImageBackground_28_1441}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c76db6fe-06f5-4253-97b5-71b4fc42a9a4"
          }}
          style={styles.ImageBackground_28_1442}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b75b1354-d1aa-4d4c-93a1-88ead1f58013"
          }}
          style={styles.ImageBackground_28_1443}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a227666-bced-48dd-9771-45fac2d79044"
          }}
          style={styles.ImageBackground_28_1444}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af5707bd-ad39-4827-90aa-448d10680376"
          }}
          style={styles.ImageBackground_28_1445}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b52fee8-d6e4-449c-8fbd-91e2be9e3d78"
          }}
          style={styles.ImageBackground_28_1446}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78757697-f806-4073-86b5-e4dc8fbc38cd"
          }}
          style={styles.ImageBackground_28_1447}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e781d6d6-c2bf-4d63-9fc7-2dfa6eed92d7"
          }}
          style={styles.ImageBackground_28_1448}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ad32555-dd78-4409-a7f8-6e8bab62d3fe"
          }}
          style={styles.ImageBackground_28_1449}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee2e8789-662a-48c9-92ba-09ace22f4a68"
          }}
          style={styles.ImageBackground_28_1450}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96fe92ce-464c-43e7-b33d-617735b4c271"
          }}
          style={styles.ImageBackground_28_1451}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/649333af-d6e4-4213-80cf-a8bb9544b347"
          }}
          style={styles.ImageBackground_28_1453}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d20df54-12f1-44f6-a91d-65938f5b6887"
          }}
          style={styles.ImageBackground_28_1454}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5313ac7-1efc-4fe2-98db-e91ab00de1e0"
          }}
          style={styles.ImageBackground_28_1455}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cce144c-ff50-4111-a85d-42507c2e31b6"
          }}
          style={styles.ImageBackground_28_1456}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f61e1acc-3a34-4d64-a2bc-01ca4edb2f35"
          }}
          style={styles.ImageBackground_28_1457}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b179461-a967-4e49-801e-965e2611b2fb"
          }}
          style={styles.ImageBackground_28_1458}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ae28f4a-6339-4bbf-96f2-3b2e646cf15c"
          }}
          style={styles.ImageBackground_28_1459}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef6beaeb-15c8-4987-b3f7-297bc104b54a"
          }}
          style={styles.ImageBackground_28_1460}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50aff93f-136e-412d-a66e-93ef6b8bf0bb"
          }}
          style={styles.ImageBackground_28_1461}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1a79e02-a61d-4983-bc18-08e8fcf9fccd"
          }}
          style={styles.ImageBackground_28_1462}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3786497-0606-4a8e-93d9-46f899bdea2e"
          }}
          style={styles.ImageBackground_28_1463}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a22863d7-a914-4221-a625-a8734ee5ac63"
          }}
          style={styles.ImageBackground_28_1465}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe7997ab-9d5d-49b4-99ee-3ad01423599d"
          }}
          style={styles.ImageBackground_28_1466}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7108dc2c-37ca-436f-84fe-41b1888aa0f2"
          }}
          style={styles.ImageBackground_28_1467}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c168ddf-57b6-407b-ba8e-f33304489e9d"
          }}
          style={styles.ImageBackground_28_1468}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7561c7a6-b890-4705-b4cc-82f83a874b32"
          }}
          style={styles.ImageBackground_28_1469}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fe47e65-e2bf-4a90-b0cd-7ba83d331d13"
          }}
          style={styles.ImageBackground_28_1470}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d37904a2-422d-40da-8b6b-71e87619e255"
          }}
          style={styles.ImageBackground_28_1471}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97217f24-e574-4a89-8b16-2e881e154d12"
          }}
          style={styles.ImageBackground_28_1472}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d323f6bd-3ffc-4e73-897b-a751498b5ed3"
          }}
          style={styles.ImageBackground_28_1473}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a6182c6-70ee-4765-9f5e-a261468dcade"
          }}
          style={styles.ImageBackground_28_1474}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0d060ad-61d2-4b2a-b303-99fde322063a"
          }}
          style={styles.ImageBackground_28_1475}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad036bac-e4cf-4cea-8292-939185345e7a"
          }}
          style={styles.ImageBackground_28_1476}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c26a6591-d968-4bb3-a030-e786961c0692"
          }}
          style={styles.ImageBackground_28_1477}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df09f37e-5fa5-445b-a34a-f85d7813a56a"
          }}
          style={styles.ImageBackground_28_1478}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7c340d2-50e8-4173-89c0-e997ca064ad4"
          }}
          style={styles.ImageBackground_28_1479}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b06c8e66-6e7d-435e-882a-0a4d98859286"
          }}
          style={styles.ImageBackground_28_1480}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22123851-54be-4276-8b7a-3e5ba2a81e7b"
          }}
          style={styles.ImageBackground_28_1481}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b23e0100-614d-4a28-b7c4-2fd88285c3aa"
          }}
          style={styles.ImageBackground_28_1482}
        />
      </View>
      <View style={styles.View_28_1483}>
        <View style={styles.View_28_1484}>
          <Text style={styles.Text_28_1484}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_28_1485}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c161d8a-3d20-4bfe-adff-f41e067ed303"
          }}
          style={styles.ImageBackground_28_1486}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70797c3c-7113-41dc-a36c-f5208c421b8f"
          }}
          style={styles.ImageBackground_28_1488}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf410804-47ca-4d97-b5c7-f5054008ffd3"
          }}
          style={styles.ImageBackground_28_1489}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/718e326e-6bde-420b-9ba0-b3598f1085e6"
          }}
          style={styles.ImageBackground_28_1490}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbd0d962-3c1c-4f04-bf3e-ab259f49f0a2"
          }}
          style={styles.ImageBackground_28_1491}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/568f515f-b660-4338-b6d8-3a9584de4427"
          }}
          style={styles.ImageBackground_28_1492}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2103f72-9652-4b46-93da-dc326fcb5d31"
          }}
          style={styles.ImageBackground_28_1493}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c620dadd-a372-4471-9cfa-184cc04e4877"
          }}
          style={styles.ImageBackground_28_1494}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e407ce35-af26-4a68-b33e-7957fa39fd18"
          }}
          style={styles.ImageBackground_28_1495}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/601c9fa3-294e-49a8-b1bf-7c8c99178e91"
          }}
          style={styles.ImageBackground_28_1496}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e228352d-6224-4d58-ade5-9c8667f92a91"
          }}
          style={styles.ImageBackground_28_1497}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/375deb06-3557-41b4-a5dc-55998b378c95"
          }}
          style={styles.ImageBackground_28_1498}
        />
      </View>
      <View style={styles.View_28_1499}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f37b5f19-538b-46cb-a547-0d4bd74bd2d3"
          }}
          style={styles.ImageBackground_28_1500}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f469552-18be-47b9-8561-5f934b06d58a"
          }}
          style={styles.ImageBackground_28_1501}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9199cb89-9da7-4b47-b66b-473a3365d96f"
          }}
          style={styles.ImageBackground_28_1502}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c0c7258-26bf-4b39-a89a-54c6bdcfdada"
          }}
          style={styles.ImageBackground_28_1503}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb961bcd-bf5b-4d1a-9491-9c0471fa0e4e"
          }}
          style={styles.ImageBackground_28_1504}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a5f4aff-ac11-43d7-b6c7-042fdb843e62"
          }}
          style={styles.ImageBackground_28_1505}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1c90f76-486f-4a9f-b81f-96af84b78c93"
          }}
          style={styles.ImageBackground_28_1506}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93c5cffe-b709-4727-b4a0-81bc4b98ff94"
          }}
          style={styles.ImageBackground_28_1507}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cce8faf-7ae5-4dcc-852b-8e1fae453057"
          }}
          style={styles.ImageBackground_28_1508}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/838aeb54-6e87-4b66-8275-3b0aaeeaa154"
          }}
          style={styles.ImageBackground_28_1509}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e46f07c-c763-46ee-ab5f-b1fb9770f250"
          }}
          style={styles.ImageBackground_28_1510}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1af1c784-9b2e-4a8b-9bed-6ce951ee44e8"
          }}
          style={styles.ImageBackground_28_1511}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6f9df4b-652d-439c-bd98-9b97f5394469"
          }}
          style={styles.ImageBackground_28_1512}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38044c3d-6d46-4977-ad60-504cf04598c8"
          }}
          style={styles.ImageBackground_28_1513}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccbbd9c5-8d11-4486-852f-c0ec98fede7d"
          }}
          style={styles.ImageBackground_28_1514}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/397b7c35-0d16-48ae-8481-c8722d7fd3a2"
          }}
          style={styles.ImageBackground_28_1515}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/725f8c9a-cf13-4599-a75c-e1d65a8e01c1"
          }}
          style={styles.ImageBackground_28_1516}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65bc9ddf-ef3c-4efd-ae0c-f1cc363ffd55"
          }}
          style={styles.ImageBackground_28_1517}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a806cdd-da27-49de-b642-aa72513034f5"
          }}
          style={styles.ImageBackground_28_1518}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7770081a-3749-46d6-92e8-6dd4161d44e8"
          }}
          style={styles.ImageBackground_28_1519}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1490b9c4-9377-40bc-9431-b08fdbe9b421"
          }}
          style={styles.ImageBackground_28_1520}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5906d36-f7af-4236-bf7a-dc2aaa426497"
          }}
          style={styles.ImageBackground_28_1521}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cd833fb-8190-4636-b2c8-ba52da727d82"
          }}
          style={styles.ImageBackground_28_1522}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d45493e-8393-426e-9bbe-85285295286e"
          }}
          style={styles.ImageBackground_28_1523}
        />
        <View style={styles.View_28_1524}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1836ad3a-1fb1-426a-a743-a827ab5b28a4"
            }}
            style={styles.ImageBackground_28_1525}
          />
          <View style={styles.View_28_1527}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4fad2f2-7515-48e7-b8b3-48c9bbaa9eb8"
              }}
              style={styles.ImageBackground_28_1528}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a4da533-d056-421e-a619-d14f220f7cf0"
              }}
              style={styles.ImageBackground_28_1529}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04f38d12-bb12-4aa4-b0f5-f584c9585260"
              }}
              style={styles.ImageBackground_28_1530}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62bc907f-87db-4bbf-80d6-06e2b3185073"
              }}
              style={styles.ImageBackground_28_1531}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c89721f5-0c3f-423f-973b-11bc0be74bde"
              }}
              style={styles.ImageBackground_28_1532}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1258fbfc-877e-42b3-a97d-07226abb6879"
              }}
              style={styles.ImageBackground_28_1533}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0b2e8d5-40c7-4daf-945f-145cd7054837"
              }}
              style={styles.ImageBackground_28_1534}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00cb58b4-ea4a-4f34-9f18-5ef82a14279e"
              }}
              style={styles.ImageBackground_28_1535}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27b2db59-8040-4551-b068-0924e5455f85"
              }}
              style={styles.ImageBackground_28_1536}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b82b9a24-3586-4286-8d9d-be794c99ab48"
              }}
              style={styles.ImageBackground_28_1537}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d4b1e13-28ea-44b4-8f90-084b3f9fca92"
              }}
              style={styles.ImageBackground_28_1538}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cbb4ec2-b027-4a6e-859d-1c3e42abd961"
              }}
              style={styles.ImageBackground_28_1539}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58717072-65ac-4636-868e-18e4d6e9ea94"
              }}
              style={styles.ImageBackground_28_1540}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fa74e40-6964-4a67-bd1f-ef71097da306"
              }}
              style={styles.ImageBackground_28_1541}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b40f57fe-ea67-4bc7-b16c-0a7fb5766f74"
              }}
              style={styles.ImageBackground_28_1542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cea8c217-820c-4a16-9c92-106346dc494a"
              }}
              style={styles.ImageBackground_28_1543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4d8236e-d03a-44aa-86ed-5f18ed6bb3d1"
              }}
              style={styles.ImageBackground_28_1544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00fce408-000b-46d5-aa2b-b8e8ecae3eb3"
              }}
              style={styles.ImageBackground_28_1545}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faf1bcbb-0728-4f82-b529-43023b383b17"
              }}
              style={styles.ImageBackground_28_1546}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49d2d8aa-2db3-47c6-bd90-7a7ce6edab6c"
              }}
              style={styles.ImageBackground_28_1547}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72ef14d0-c774-4b89-b95c-8f617ac8e8f7"
              }}
              style={styles.ImageBackground_28_1548}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb8fb509-822b-4f48-b311-ea1aaa4afc67"
              }}
              style={styles.ImageBackground_28_1549}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe58c116-df63-47a5-a549-8bb135c4a0fa"
              }}
              style={styles.ImageBackground_28_1550}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d61e7e9d-cdac-49d9-a879-133c321e6772"
              }}
              style={styles.ImageBackground_28_1551}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef24631d-c4b1-4856-bd07-66e1963d07d1"
              }}
              style={styles.ImageBackground_28_1552}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_1554}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/925ca2c1-6419-4e7b-88bb-acd3c08ea1ea"
          }}
          style={styles.ImageBackground_28_1555}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/253b5293-70f8-4fe5-8d4c-6815784cc333"
          }}
          style={styles.ImageBackground_28_1556}
        />
        <View style={styles.View_28_1557}>
          <Text style={styles.Text_28_1557}>How have been your friends?</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_28_1399: {
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
  View_I28_1399_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I28_1399_2_8: {
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
  ImageBackground_I28_1399_2_12: {
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
  ImageBackground_I28_1399_2_16: {
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
  ImageBackground_I28_1399_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_28_1400: {
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
  View_28_1401: {
    width: wp("55%"),
    height: hp("52%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_28_1402: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1403: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1404: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1405: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1407: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1408: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_28_1409: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_28_1410: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1411: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1412: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1414: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1415: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1416: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1417: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1418: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1420: {
    width: wp("23%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1421: {
    width: wp("28%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1422: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1423: {
    width: wp("22%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1424: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1425: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1426: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1427: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1428: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1429: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1430: {
    width: wp("9%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1431: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1432: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1433: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1434: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1435: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1436: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1437: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1438: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1439: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1440: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1441: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1442: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1443: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1444: {
    width: wp("14%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1445: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1446: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1447: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1448: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1449: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1450: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_28_1451: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1453: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1454: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1455: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1456: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1457: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1458: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_28_1459: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1460: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1461: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1462: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1463: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1465: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1466: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1467: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1468: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1469: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1470: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1471: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1472: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1473: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1474: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1475: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1476: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1477: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1478: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1479: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_28_1480: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1481: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1482: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_28_1483: {
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
  View_28_1484: {
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
  Text_28_1484: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1485: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1486: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1488: {
    width: wp("26%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1489: {
    width: wp("21%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1490: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1491: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1492: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1493: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1494: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1495: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1496: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1497: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_28_1498: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_28_1499: {
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
  ImageBackground_28_1500: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1501: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1502: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1503: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1504: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1505: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1506: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1507: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_28_1508: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_28_1509: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1510: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_28_1511: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1512: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1513: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_28_1514: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_28_1515: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_28_1516: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1517: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_28_1518: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_28_1519: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1520: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1521: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_28_1522: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_28_1523: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_28_1524: {
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
  ImageBackground_28_1525: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_28_1527: {
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
  ImageBackground_28_1528: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_28_1529: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1530: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_28_1531: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1532: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1533: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1534: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_28_1535: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_28_1536: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1537: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_28_1538: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1539: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1540: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1541: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_28_1542: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1543: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1544: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1545: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_28_1546: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1547: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1548: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1549: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_28_1550: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_28_1551: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1552: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_28_1554: {
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
  ImageBackground_28_1555: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1556: {
    width: wp("39%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_28_1557: {
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
  Text_28_1557: {
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
