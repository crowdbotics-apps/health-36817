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
      <View style={styles.View_28_1575}>
        <View style={styles.View_I28_1575_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5cf6b204-742f-4615-bb8e-49e952b434b5"
            }}
            style={styles.ImageBackground_I28_1575_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13646fda-265d-4c8e-bd4c-1b7c95639e4d"
            }}
            style={styles.ImageBackground_I28_1575_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94f16e35-d782-486e-be54-b6eaeadc5648"
            }}
            style={styles.ImageBackground_I28_1575_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bdb628f-dc73-4f5d-a179-a0f6141a94fc"
          }}
          style={styles.ImageBackground_I28_1575_2_21}
        />
      </View>
      <View style={styles.View_28_1576} />
      <View style={styles.View_28_1577}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80b0107f-7403-4d09-ba5a-f5df94e5998e"
          }}
          style={styles.ImageBackground_28_1578}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d3e87a-a74d-47fd-92e2-415ec3d26197"
          }}
          style={styles.ImageBackground_28_1579}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69fbdb8f-a51a-451e-9bbd-54cc50a0e22e"
          }}
          style={styles.ImageBackground_28_1580}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c572999-32c7-46cc-b13f-b1a239465318"
          }}
          style={styles.ImageBackground_28_1581}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c695ce3-0096-4d55-9831-766d470e72d7"
          }}
          style={styles.ImageBackground_28_1583}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4221724-d2fe-4f10-9807-100aa43908f2"
          }}
          style={styles.ImageBackground_28_1584}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1838273e-095a-429c-8795-b49dc50f853d"
          }}
          style={styles.ImageBackground_28_1585}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdeb75bc-cfbe-4bea-9893-62ce4b849d05"
          }}
          style={styles.ImageBackground_28_1586}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/960f665d-cb25-49b4-b2a3-f98f2b5ac042"
          }}
          style={styles.ImageBackground_28_1587}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b455f9c4-2be9-45fe-87e8-bb02bee93dca"
          }}
          style={styles.ImageBackground_28_1588}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ac64844-0483-4d7a-b4ec-568a8285b746"
          }}
          style={styles.ImageBackground_28_1590}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdda992d-aa4c-47a1-85b8-012ba4858569"
          }}
          style={styles.ImageBackground_28_1591}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70433224-5d03-41a6-9c23-46271128b1a6"
          }}
          style={styles.ImageBackground_28_1592}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f40ef309-0b76-4707-848f-7ebf18e5685e"
          }}
          style={styles.ImageBackground_28_1593}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69454d6f-1635-4636-85d8-80e7db61db22"
          }}
          style={styles.ImageBackground_28_1594}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46142e2e-bc1b-4046-b05d-8d8af7e2d364"
          }}
          style={styles.ImageBackground_28_1596}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d910234b-16ea-4c76-b792-85e272bf0baf"
          }}
          style={styles.ImageBackground_28_1597}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2ff1501-c1ab-4332-b837-d858cf434d01"
          }}
          style={styles.ImageBackground_28_1598}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10a80e43-3347-4ec2-8aee-da4025075a2d"
          }}
          style={styles.ImageBackground_28_1599}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc178b59-d5ff-4aa8-9d44-08bf99f0c7b9"
          }}
          style={styles.ImageBackground_28_1600}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f103be93-99a0-45af-a352-64af62fcef5d"
          }}
          style={styles.ImageBackground_28_1601}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c581cf09-a110-479e-a760-f620bdd23db7"
          }}
          style={styles.ImageBackground_28_1602}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7cf0dc26-7795-4df6-9fb2-dbb1d446f98a"
          }}
          style={styles.ImageBackground_28_1603}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3e70c23-3992-4a94-b840-faf5e9fb29af"
          }}
          style={styles.ImageBackground_28_1604}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2f04230-9617-4b41-8153-907fd068eaba"
          }}
          style={styles.ImageBackground_28_1605}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19d2bc29-1e75-45b4-a20f-e1b70f72d52b"
          }}
          style={styles.ImageBackground_28_1606}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6a3bfad-f0c4-4aa2-a74e-b14a71debcae"
          }}
          style={styles.ImageBackground_28_1607}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7786c536-6c4e-4418-89e4-100fdad673c2"
          }}
          style={styles.ImageBackground_28_1608}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f394ac03-9b51-4652-8197-f21e160065ad"
          }}
          style={styles.ImageBackground_28_1609}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ecf977d-fd94-4eeb-b553-f96b2b19ae14"
          }}
          style={styles.ImageBackground_28_1610}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df552abb-49f9-4a36-87e7-8391f86b467f"
          }}
          style={styles.ImageBackground_28_1611}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7f2da67-8893-4221-a4bb-e643055ce49a"
          }}
          style={styles.ImageBackground_28_1612}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed7471b8-220c-461c-8186-c08e6390f62a"
          }}
          style={styles.ImageBackground_28_1613}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9dc3904-11fb-4e7f-95fc-2d4c5139f611"
          }}
          style={styles.ImageBackground_28_1614}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d1eaacf-94b0-4c9e-af1c-8a0ff4f830e8"
          }}
          style={styles.ImageBackground_28_1615}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4c02185-1587-4753-8cbc-6938d796b0d5"
          }}
          style={styles.ImageBackground_28_1616}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c9f76ef-0cbd-4fb7-a83a-007cac3cd507"
          }}
          style={styles.ImageBackground_28_1617}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef0ef1e3-7961-42b3-a3ed-b6cb254b9702"
          }}
          style={styles.ImageBackground_28_1618}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5a5a5e9-4913-402c-936a-d74b9ae1d3ce"
          }}
          style={styles.ImageBackground_28_1619}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35fd9e3d-226f-410c-a503-134a4feca9d3"
          }}
          style={styles.ImageBackground_28_1620}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/689e5df6-2f47-469a-acc9-cfcc8af502bf"
          }}
          style={styles.ImageBackground_28_1621}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73c1ba1d-92d6-4ea5-b9ec-93e87bcf3984"
          }}
          style={styles.ImageBackground_28_1622}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a3ef70d-285e-43ec-b309-1421f90e7bc3"
          }}
          style={styles.ImageBackground_28_1623}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e364a66-12ed-42e4-b866-aab027ef3fe8"
          }}
          style={styles.ImageBackground_28_1624}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f5ed90a-f134-4555-b5cf-f6f07891a7f5"
          }}
          style={styles.ImageBackground_28_1625}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7dabfc46-6983-479b-9d98-a8bb8be2e775"
          }}
          style={styles.ImageBackground_28_1626}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/159244b4-3515-4069-8240-3fed8440c809"
          }}
          style={styles.ImageBackground_28_1627}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29b475d1-f03e-4862-bdfe-4af9da7f25bb"
          }}
          style={styles.ImageBackground_28_1629}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/918aab78-36d0-40c9-8123-f9c20efbd6d9"
          }}
          style={styles.ImageBackground_28_1630}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57021bb9-b55a-4601-9f45-0f5b875342c2"
          }}
          style={styles.ImageBackground_28_1631}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8df9350c-2c76-44d8-af1f-00bae4d44c2b"
          }}
          style={styles.ImageBackground_28_1632}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03661ecd-03d2-4ef3-ab33-27149d750fdf"
          }}
          style={styles.ImageBackground_28_1633}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/258a8899-a4e3-448d-ae4b-1be54ed06ffb"
          }}
          style={styles.ImageBackground_28_1634}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8cb92e7-595a-4408-bbf3-79e035766762"
          }}
          style={styles.ImageBackground_28_1635}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d200efc9-f9c5-42a4-ba24-d0bbb766efeb"
          }}
          style={styles.ImageBackground_28_1636}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26c06fbd-6f85-4b48-8e52-3266906ebaa0"
          }}
          style={styles.ImageBackground_28_1637}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8957fb90-29b0-40d3-b91f-884ff11a32c9"
          }}
          style={styles.ImageBackground_28_1638}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e8cf2dd-ebfa-48f8-a506-e48841a5c08d"
          }}
          style={styles.ImageBackground_28_1639}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acd16d32-a88e-4ec9-a796-f3cd758a0fca"
          }}
          style={styles.ImageBackground_28_1641}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dcba9f79-2d36-44dc-982c-25218b2332fb"
          }}
          style={styles.ImageBackground_28_1642}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ada6c11-ef58-4427-b4c2-5147af2d0e9a"
          }}
          style={styles.ImageBackground_28_1643}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edf089e5-7e65-4256-8bfc-3ecd365149d8"
          }}
          style={styles.ImageBackground_28_1644}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f12ebb3-dfe9-46c6-99f6-c0a970d81bab"
          }}
          style={styles.ImageBackground_28_1645}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd2df22a-367f-4b16-973e-283873e54b57"
          }}
          style={styles.ImageBackground_28_1646}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e25230c7-e157-44af-b808-42388d8a3530"
          }}
          style={styles.ImageBackground_28_1647}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc77b0eb-e429-4a16-acf6-fea836bf5db2"
          }}
          style={styles.ImageBackground_28_1648}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7d5e2f2-270b-4d15-b6b0-db3660d8dcd1"
          }}
          style={styles.ImageBackground_28_1649}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d4269de-b93d-466c-9ec2-23b417f89ea2"
          }}
          style={styles.ImageBackground_28_1650}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf0b8d2e-be78-4245-89b6-6739a61f5b2e"
          }}
          style={styles.ImageBackground_28_1651}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e5045c-e915-4cb3-b7bb-3658f2abaa53"
          }}
          style={styles.ImageBackground_28_1652}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/735c71eb-d0d2-42a1-99c8-b49ae2dcaf1d"
          }}
          style={styles.ImageBackground_28_1653}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6227d7d-8f5e-4941-9f4a-5ff1897a3caf"
          }}
          style={styles.ImageBackground_28_1654}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/becdf9a3-1b85-45d7-b1a6-fa5ea1edacc6"
          }}
          style={styles.ImageBackground_28_1655}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a2864aa-64e7-49ea-b2b2-6db1cc129703"
          }}
          style={styles.ImageBackground_28_1656}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d333ad5-0291-4cb2-83e7-e3330f59d807"
          }}
          style={styles.ImageBackground_28_1657}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3ceb9c5-d4a4-4d4b-8fb0-6744b9b5a51d"
          }}
          style={styles.ImageBackground_28_1658}
        />
      </View>
      <View style={styles.View_28_1659}>
        <View style={styles.View_28_1660}>
          <Text style={styles.Text_28_1660}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_28_1661}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93cc5ca8-ca63-4d1f-9fa5-4bbf0ac25e54"
          }}
          style={styles.ImageBackground_28_1662}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b20ddba3-50cc-4d2a-979e-5a208f8bbbb7"
          }}
          style={styles.ImageBackground_28_1664}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34640dc5-5357-4a2d-bf5e-487f57815173"
          }}
          style={styles.ImageBackground_28_1665}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f7f804e-8e83-44a2-b565-c083cd483d06"
          }}
          style={styles.ImageBackground_28_1666}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f6873af-7655-4b36-aae8-97fb517f6292"
          }}
          style={styles.ImageBackground_28_1667}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3391410-22b2-4694-8194-04627c17fa7d"
          }}
          style={styles.ImageBackground_28_1668}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9f70f72-3616-49da-9054-b0704823501f"
          }}
          style={styles.ImageBackground_28_1669}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79f78003-3804-4008-ad4d-1f33475827b5"
          }}
          style={styles.ImageBackground_28_1670}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c5bc09c-a53d-41de-b0af-0e3fc6f45b0a"
          }}
          style={styles.ImageBackground_28_1671}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4cfe3c5-476b-44f9-be54-a732da5243dd"
          }}
          style={styles.ImageBackground_28_1672}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9e7a76d-b6bc-4422-b6c5-7a73814e5186"
          }}
          style={styles.ImageBackground_28_1673}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfeca39f-8601-441a-955f-c68655c69691"
          }}
          style={styles.ImageBackground_28_1674}
        />
      </View>
      <View style={styles.View_28_1675}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60d2245a-bae6-4034-8681-a6fcae63fb6b"
          }}
          style={styles.ImageBackground_28_1676}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc37c08d-8f90-43bc-83ed-ba0ac93515ba"
          }}
          style={styles.ImageBackground_28_1677}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0069e83a-6091-4c45-9bc8-47c49362981c"
          }}
          style={styles.ImageBackground_28_1678}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8af6cabc-80d9-4374-ab2c-3155c16d2f09"
          }}
          style={styles.ImageBackground_28_1679}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51d30322-e918-4a14-a6ec-d30dd1e8e8f1"
          }}
          style={styles.ImageBackground_28_1680}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f1da474-4b3c-4049-9261-8b38a60f664a"
          }}
          style={styles.ImageBackground_28_1681}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ec57fb3-98c2-4894-b8f5-35ab48582ec3"
          }}
          style={styles.ImageBackground_28_1682}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30e8b71f-0ebf-486f-97ee-5deec6830d12"
          }}
          style={styles.ImageBackground_28_1683}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8286c0e3-63a7-4ff8-ac8d-77794552a617"
          }}
          style={styles.ImageBackground_28_1684}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e08e2060-2c29-431d-9ac8-80b3da28d99f"
          }}
          style={styles.ImageBackground_28_1685}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30898e85-779e-4f02-a402-58f6b2992deb"
          }}
          style={styles.ImageBackground_28_1686}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e60572ec-f2f7-4967-89ce-45a47a27ac5b"
          }}
          style={styles.ImageBackground_28_1687}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f54217d4-d67d-4e67-88ae-6712858eb282"
          }}
          style={styles.ImageBackground_28_1688}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b59afdd-9a2e-4175-ac18-82fa2270149a"
          }}
          style={styles.ImageBackground_28_1689}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04fd60a2-53d7-4ee5-8247-5955d280e699"
          }}
          style={styles.ImageBackground_28_1690}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f84ffd3-a802-420c-9f7b-adee8da88628"
          }}
          style={styles.ImageBackground_28_1691}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b09ab7-4702-4575-b8a5-5822034de0cc"
          }}
          style={styles.ImageBackground_28_1692}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29ec128f-b5ef-4d3e-b256-f13d7f87f90b"
          }}
          style={styles.ImageBackground_28_1693}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/550cdbd8-8413-4c6a-a8e1-218df65e4259"
          }}
          style={styles.ImageBackground_28_1694}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff4f2d7b-91e7-46a5-949b-9fca9874387c"
          }}
          style={styles.ImageBackground_28_1695}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94a7cea6-d35c-4747-9b19-bfb77c513058"
          }}
          style={styles.ImageBackground_28_1696}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd6479df-e5c3-4094-ae61-1766726292cd"
          }}
          style={styles.ImageBackground_28_1697}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5008362b-5dbe-4f3f-a19c-58f18afc5fe0"
          }}
          style={styles.ImageBackground_28_1698}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44a30eff-3715-4f76-bb4d-6a5128ce02e4"
          }}
          style={styles.ImageBackground_28_1699}
        />
        <View style={styles.View_28_1700}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88fcafd5-88dd-4d4a-93b9-330db987d692"
            }}
            style={styles.ImageBackground_28_1701}
          />
          <View style={styles.View_28_1703}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/effd57cf-11f3-4c9e-ba48-928b4e813190"
              }}
              style={styles.ImageBackground_28_1704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57687ded-9350-43b7-801e-2cc886ec5a1d"
              }}
              style={styles.ImageBackground_28_1705}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dbfac3b-b80d-44e6-818f-f8bcf75a3a8e"
              }}
              style={styles.ImageBackground_28_1706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38f09261-290c-4476-bbd5-82af0637545c"
              }}
              style={styles.ImageBackground_28_1707}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9468f07f-20bb-49fd-bb3f-f472eb71610d"
              }}
              style={styles.ImageBackground_28_1708}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a124f210-dc9f-4b5f-bf94-252bd26cdb75"
              }}
              style={styles.ImageBackground_28_1709}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb897cc8-9370-4a04-b198-1d404ca68d02"
              }}
              style={styles.ImageBackground_28_1710}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f6a1101-f527-469e-bc6f-7af1789e1dd6"
              }}
              style={styles.ImageBackground_28_1711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/658ca24e-fa80-4842-a747-cd848abf514c"
              }}
              style={styles.ImageBackground_28_1712}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f708a4c-bc2b-43a0-bf3f-f6074425ec1a"
              }}
              style={styles.ImageBackground_28_1713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25a4ead3-b58b-4879-b0d4-3c94866b2baa"
              }}
              style={styles.ImageBackground_28_1714}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/471b9bdc-6dcc-4c61-91ea-c8134208efdc"
              }}
              style={styles.ImageBackground_28_1715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d09ce52-b26a-4fc2-a06a-fe497f65a4a3"
              }}
              style={styles.ImageBackground_28_1716}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a579a275-ba41-4f05-aa60-ce38d9070a46"
              }}
              style={styles.ImageBackground_28_1717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ea4ef35-6829-44c4-94f6-e73247bfc8fd"
              }}
              style={styles.ImageBackground_28_1718}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef738be2-b17a-4022-925e-13876e617924"
              }}
              style={styles.ImageBackground_28_1719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff8de9aa-d270-4318-84e4-f96bad06d21b"
              }}
              style={styles.ImageBackground_28_1720}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13cad88e-e933-4cdc-9112-cb9a65d618c1"
              }}
              style={styles.ImageBackground_28_1721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/238a8ebd-bcd0-4760-8493-0fe9a59e36cc"
              }}
              style={styles.ImageBackground_28_1722}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1a9d3f7-194f-4c89-8a2d-c1387f5d960c"
              }}
              style={styles.ImageBackground_28_1723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7641a64-cd4d-489a-a752-764619e8a6b6"
              }}
              style={styles.ImageBackground_28_1724}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0f883de-8e5e-42f0-92cf-f29f05a5e51e"
              }}
              style={styles.ImageBackground_28_1725}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7747e4f1-5d3d-41b8-ad7c-884b488bdb2e"
              }}
              style={styles.ImageBackground_28_1726}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7ec1d98-5e95-4049-918b-c817f840b4ee"
              }}
              style={styles.ImageBackground_28_1727}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ada2845-54a1-4b9a-825f-50142d6224d0"
              }}
              style={styles.ImageBackground_28_1728}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_1730}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34c01a50-cf29-4f9a-8e46-26ed84896b8d"
          }}
          style={styles.ImageBackground_28_1731}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d17739a-e894-482a-9f15-3fd4ea4c2b4b"
          }}
          style={styles.ImageBackground_28_1732}
        />
        <View style={styles.View_28_1733}>
          <Text style={styles.Text_28_1733}>Do you like to go outside</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_28_1575: {
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
  View_I28_1575_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I28_1575_2_8: {
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
  ImageBackground_I28_1575_2_12: {
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
  ImageBackground_I28_1575_2_16: {
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
  ImageBackground_I28_1575_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_28_1576: {
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
  View_28_1577: {
    width: wp("55%"),
    height: hp("52%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_28_1578: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1579: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1580: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1581: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1583: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1584: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_28_1585: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_28_1586: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1587: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1588: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1590: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1591: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1592: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1593: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1594: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1596: {
    width: wp("23%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1597: {
    width: wp("28%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1598: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1599: {
    width: wp("22%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1600: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1601: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1602: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1603: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1604: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1605: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1606: {
    width: wp("9%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1607: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1608: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1609: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1610: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1611: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1612: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1613: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1614: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1615: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1616: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1617: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1618: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1619: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1620: {
    width: wp("14%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1621: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1622: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1623: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1624: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1625: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1626: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_28_1627: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1629: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1630: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1631: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1632: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1633: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1634: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_28_1635: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1636: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1637: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1638: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1639: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1641: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1642: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1643: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1644: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1645: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1646: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1647: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1648: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1649: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1650: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1651: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1652: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1653: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1654: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1655: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_28_1656: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1657: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1658: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_28_1659: {
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
  View_28_1660: {
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
  Text_28_1660: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1661: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1662: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1664: {
    width: wp("26%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1665: {
    width: wp("21%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1666: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1667: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1668: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1669: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1670: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1671: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1672: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1673: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_28_1674: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_28_1675: {
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
  ImageBackground_28_1676: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1677: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1678: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1679: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1680: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1681: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1682: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1683: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_28_1684: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_28_1685: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1686: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_28_1687: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1688: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1689: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_28_1690: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_28_1691: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_28_1692: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1693: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_28_1694: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_28_1695: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1696: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1697: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_28_1698: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_28_1699: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_28_1700: {
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
  ImageBackground_28_1701: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_28_1703: {
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
  ImageBackground_28_1704: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_28_1705: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1706: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_28_1707: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1708: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1709: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1710: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_28_1711: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_28_1712: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1713: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_28_1714: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1715: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1716: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1717: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_28_1718: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1719: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1720: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1721: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_28_1722: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1723: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1724: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1725: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_28_1726: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_28_1727: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1728: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_28_1730: {
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
  ImageBackground_28_1731: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1732: {
    width: wp("39%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_28_1733: {
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
  Text_28_1733: {
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
