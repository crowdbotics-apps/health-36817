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
      <View style={styles.View_28_1203}>
        <View style={styles.View_I28_1203_2_7}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bd2a5f4-f92f-44cc-919a-067de67a2bda"
            }}
            style={styles.ImageBackground_I28_1203_2_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f19e777-526a-4183-8636-4c92f6c418cf"
            }}
            style={styles.ImageBackground_I28_1203_2_12}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73e6c9a9-8070-4d09-87ca-18dea7b87e07"
            }}
            style={styles.ImageBackground_I28_1203_2_16}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b1bb8d3-cd2d-457f-97d8-2b4c262fe1e4"
          }}
          style={styles.ImageBackground_I28_1203_2_21}
        />
      </View>
      <View style={styles.View_28_1204} />
      <View style={styles.View_28_1205}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4bb5b98-e6d3-439e-88da-320fcc9cc6d4"
          }}
          style={styles.ImageBackground_28_1206}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b135d0c1-84d5-4689-b4c7-91e8589f16fe"
          }}
          style={styles.ImageBackground_28_1207}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80988ce8-33f7-444a-a094-45e561832fb7"
          }}
          style={styles.ImageBackground_28_1208}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/366a03a1-7902-4d50-90cb-1b62392f8eae"
          }}
          style={styles.ImageBackground_28_1209}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e153f75d-03b4-4721-8914-84ee82510423"
          }}
          style={styles.ImageBackground_28_1211}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f30b3a6f-599a-46c8-a558-656f09bde096"
          }}
          style={styles.ImageBackground_28_1212}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb486404-194b-4bfc-a5fb-4625d157d809"
          }}
          style={styles.ImageBackground_28_1213}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fe062bb-a02b-41d1-bb7b-4500d1e0f37f"
          }}
          style={styles.ImageBackground_28_1214}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c3107a8-75c9-4ba6-a804-ca6417ed61db"
          }}
          style={styles.ImageBackground_28_1215}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/166860ec-4ecd-4110-92c3-b2aed55398f5"
          }}
          style={styles.ImageBackground_28_1216}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfeb1bd1-cf3d-4b38-9d95-dee8631a09e7"
          }}
          style={styles.ImageBackground_28_1218}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74e2eb7b-f430-4f99-b527-0a9ae1cc301a"
          }}
          style={styles.ImageBackground_28_1219}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0cec30d-0ad8-4af6-ba84-b7d1f5893da0"
          }}
          style={styles.ImageBackground_28_1220}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b1794cf-cdde-4aed-8b32-a17515bf9191"
          }}
          style={styles.ImageBackground_28_1221}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c86a9b8-ae44-421f-a4b7-f31b76b5188d"
          }}
          style={styles.ImageBackground_28_1222}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/139cdf20-2882-4267-a6a9-25d42bf9e237"
          }}
          style={styles.ImageBackground_28_1224}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b28cfa31-90cd-4531-8f7e-711f3f6deefe"
          }}
          style={styles.ImageBackground_28_1225}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76148efb-537a-4b43-8043-479645558626"
          }}
          style={styles.ImageBackground_28_1226}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1657cfc-45cf-4b22-b1d2-08f28f18206e"
          }}
          style={styles.ImageBackground_28_1227}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5f6bf68-9258-4028-a30f-abfae8a9b429"
          }}
          style={styles.ImageBackground_28_1228}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9a467d6-ef39-4226-91ae-6c357dd8422f"
          }}
          style={styles.ImageBackground_28_1229}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47f77f0a-5e03-4f11-a733-eb2f136f2fa9"
          }}
          style={styles.ImageBackground_28_1230}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/479e694a-3d00-4e8d-b16d-5d71a11e4e2a"
          }}
          style={styles.ImageBackground_28_1231}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b57f534-b925-4b63-801d-b3178a2bdc8f"
          }}
          style={styles.ImageBackground_28_1232}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35632fdf-7718-49f3-b8fa-4e84ddf14459"
          }}
          style={styles.ImageBackground_28_1233}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d948acac-2eb8-4ce8-a282-587cd5c0cdc6"
          }}
          style={styles.ImageBackground_28_1234}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e9367e0-1007-414a-84fd-418b4a53c90e"
          }}
          style={styles.ImageBackground_28_1235}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d4b56c2-1e3c-4117-a1a3-ca30dce30111"
          }}
          style={styles.ImageBackground_28_1236}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d1cb312-c0f3-44e1-8616-5c9a1b60e5f6"
          }}
          style={styles.ImageBackground_28_1237}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a111f92b-8ba1-4abb-a9a5-f6bf7dec21bc"
          }}
          style={styles.ImageBackground_28_1238}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/323f2a74-ae33-4e89-b41f-dbba323cd904"
          }}
          style={styles.ImageBackground_28_1239}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07ba6ff3-83f1-404b-9957-aef70ecf7b00"
          }}
          style={styles.ImageBackground_28_1240}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dab9f64f-d567-4529-86a6-bd93459dcf3e"
          }}
          style={styles.ImageBackground_28_1241}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bedbd59d-003a-40ee-a25a-82081cd906fd"
          }}
          style={styles.ImageBackground_28_1242}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3eb9c098-bbb9-466a-970b-5e5329f357ad"
          }}
          style={styles.ImageBackground_28_1243}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25c05a18-1829-4278-8dad-977fa3ec469a"
          }}
          style={styles.ImageBackground_28_1244}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8b994e1-4021-4179-b0d8-fb7c3f0a6b78"
          }}
          style={styles.ImageBackground_28_1245}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f2351d3-a4ad-4ab9-b0a1-3c46e36f564d"
          }}
          style={styles.ImageBackground_28_1246}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64165ca1-3d0e-4368-8ce7-2983ccb0e747"
          }}
          style={styles.ImageBackground_28_1247}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2fe2914-490b-4d3f-84c3-703dc42421c5"
          }}
          style={styles.ImageBackground_28_1248}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d3b6183-5417-4dbb-8890-6587f2a2a823"
          }}
          style={styles.ImageBackground_28_1249}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a77d41de-71df-490f-aa6e-087bba642b0a"
          }}
          style={styles.ImageBackground_28_1250}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ada1706d-18a9-4c14-9203-fb2db5f6a911"
          }}
          style={styles.ImageBackground_28_1251}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c09195f-be2e-41af-b37d-fe08cc04b975"
          }}
          style={styles.ImageBackground_28_1252}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1c97917-bc7b-42de-bc90-a7ffbaa3ee5c"
          }}
          style={styles.ImageBackground_28_1253}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51a12dc2-6926-46a0-9342-95714f5a9394"
          }}
          style={styles.ImageBackground_28_1254}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e737b44a-b32e-483c-8032-3cc3b2a87d55"
          }}
          style={styles.ImageBackground_28_1255}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f388d296-8937-454d-8fe3-1b9e86807131"
          }}
          style={styles.ImageBackground_28_1257}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f2eff94-04af-475c-99f5-f0a9c46c5c41"
          }}
          style={styles.ImageBackground_28_1258}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd50d3e9-583a-41c7-8fa0-8902343dc96c"
          }}
          style={styles.ImageBackground_28_1259}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5203091-ef52-4297-a4a9-eeb1bb0e9059"
          }}
          style={styles.ImageBackground_28_1260}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c352965-3b81-450d-a079-ca71a423bad7"
          }}
          style={styles.ImageBackground_28_1261}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c52198b5-ef80-4bb8-b231-6f30d43c9845"
          }}
          style={styles.ImageBackground_28_1262}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0417fac-9674-4242-ba8d-8a8843c3526b"
          }}
          style={styles.ImageBackground_28_1263}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18f3d4a8-b307-45af-8b78-4c556842b3ac"
          }}
          style={styles.ImageBackground_28_1264}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be3952e7-8558-45e6-8737-442206f11380"
          }}
          style={styles.ImageBackground_28_1265}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd7abd6f-89c7-4e19-9892-2d652b22714d"
          }}
          style={styles.ImageBackground_28_1266}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9b72e9d-4ff4-42a9-8ba8-00368d189dbc"
          }}
          style={styles.ImageBackground_28_1267}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e62d293a-4971-4ff2-9977-662d92790b4f"
          }}
          style={styles.ImageBackground_28_1269}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4928bd64-ba95-4e22-90fa-754ac2a7b441"
          }}
          style={styles.ImageBackground_28_1270}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ae972a6-afdd-47fe-b7b8-66ca49270125"
          }}
          style={styles.ImageBackground_28_1271}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/405362dd-d4de-49ea-88ad-ef734feaf02a"
          }}
          style={styles.ImageBackground_28_1272}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/753fee8b-dadd-41b0-a115-32409d6a8bde"
          }}
          style={styles.ImageBackground_28_1273}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cbdd062-4b8e-4828-bb65-166eb05a5e34"
          }}
          style={styles.ImageBackground_28_1274}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5db8440-325e-4aff-af4b-bd9ba79ef22c"
          }}
          style={styles.ImageBackground_28_1275}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6741235-9528-4438-b97b-49004919e892"
          }}
          style={styles.ImageBackground_28_1276}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/515c903d-be4b-423b-87b4-7af81185d115"
          }}
          style={styles.ImageBackground_28_1277}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4fa164a-6379-439e-bae9-e2f3153d1929"
          }}
          style={styles.ImageBackground_28_1278}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c82a758d-13b8-4628-948f-940953555ef1"
          }}
          style={styles.ImageBackground_28_1279}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a05b867-1d9d-4659-9396-ba6914dd7f1c"
          }}
          style={styles.ImageBackground_28_1280}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a80013f9-e98c-4f3b-80e8-0a23809614ed"
          }}
          style={styles.ImageBackground_28_1281}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/236c375c-240d-486f-b226-8f0f5163f518"
          }}
          style={styles.ImageBackground_28_1282}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/050ec3b8-c20a-4d86-8459-3a35eb0857d7"
          }}
          style={styles.ImageBackground_28_1283}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d0e9029-7e96-485f-af4a-662006c18f6d"
          }}
          style={styles.ImageBackground_28_1284}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7e16cce-ab13-40fa-9f79-7d29568373e5"
          }}
          style={styles.ImageBackground_28_1285}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f929d13c-1edb-467e-9a71-a43311f78c7e"
          }}
          style={styles.ImageBackground_28_1286}
        />
      </View>
      <View style={styles.View_28_1287}>
        <View style={styles.View_28_1288}>
          <Text style={styles.Text_28_1288}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_28_1289}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6ce2368-30c4-41a6-ab9d-ee014a315afe"
          }}
          style={styles.ImageBackground_28_1290}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/637a1b8d-e1db-4ada-97d4-1bb4d730e791"
          }}
          style={styles.ImageBackground_28_1292}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c1753ce-c5ac-4008-88e5-f87db1b947a1"
          }}
          style={styles.ImageBackground_28_1293}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897a280b-3222-4e04-b89c-ac9af4464895"
          }}
          style={styles.ImageBackground_28_1294}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/415cacef-5816-482b-bade-0aefbb05b38d"
          }}
          style={styles.ImageBackground_28_1295}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ade50cc-de60-4c36-9ed9-d513fe627b03"
          }}
          style={styles.ImageBackground_28_1296}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e802239d-9627-4fc4-b15b-7ae44786f48e"
          }}
          style={styles.ImageBackground_28_1297}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/670cb66d-5389-4210-b600-d91248ef3e41"
          }}
          style={styles.ImageBackground_28_1298}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a541f3e-c8a0-46bb-85ad-d1436f91ceba"
          }}
          style={styles.ImageBackground_28_1299}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04b6e9cc-c3a6-4124-ad21-98bfe72e74c6"
          }}
          style={styles.ImageBackground_28_1300}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5defa95c-ada7-4f52-99d0-e2a9f9678fd0"
          }}
          style={styles.ImageBackground_28_1301}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/774ca792-5a0e-4a8e-91a3-bfdcaa4e42d2"
          }}
          style={styles.ImageBackground_28_1302}
        />
      </View>
      <View style={styles.View_28_1307}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27451b12-ea45-4da2-95cd-94e449562653"
          }}
          style={styles.ImageBackground_28_1308}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/570e8a1c-6c3b-4387-9a56-be209f814288"
          }}
          style={styles.ImageBackground_28_1309}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc9191dd-544f-4068-9c39-33521e439ce2"
          }}
          style={styles.ImageBackground_28_1310}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66d3b296-c30f-4436-9b8c-ececc6573913"
          }}
          style={styles.ImageBackground_28_1311}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b58fc79-227a-433d-8713-e15e18fef317"
          }}
          style={styles.ImageBackground_28_1312}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebe964fb-d6fe-49ca-89f8-89233d12b1fd"
          }}
          style={styles.ImageBackground_28_1313}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a54bc2be-529b-465e-99fc-308607afe841"
          }}
          style={styles.ImageBackground_28_1314}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1daf847a-c26b-49f2-93c7-3ccba9ced7eb"
          }}
          style={styles.ImageBackground_28_1315}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be8f606f-1ce4-4503-8e95-035af2bfe939"
          }}
          style={styles.ImageBackground_28_1316}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2988f5b8-3953-4a11-9eb5-02eaeb80dd13"
          }}
          style={styles.ImageBackground_28_1317}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9142ed0-761d-40b9-8b8d-6f5a487aabb1"
          }}
          style={styles.ImageBackground_28_1318}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a2af89e-3295-4710-8277-ddb3c4b76274"
          }}
          style={styles.ImageBackground_28_1319}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4afc9a0f-5794-4178-8a63-0847e0c1205d"
          }}
          style={styles.ImageBackground_28_1320}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d532fd6f-1020-49df-8bf0-b68a8f847028"
          }}
          style={styles.ImageBackground_28_1321}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/508823d9-3a8d-485b-b2be-9d0f739fe593"
          }}
          style={styles.ImageBackground_28_1322}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41938781-5143-4554-b6dc-7124154ddc71"
          }}
          style={styles.ImageBackground_28_1323}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63f88285-5521-4a5e-b615-de2b088128c2"
          }}
          style={styles.ImageBackground_28_1324}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/917f14d1-5a74-4ea2-89df-bb16b2b2a0a2"
          }}
          style={styles.ImageBackground_28_1325}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0e8db4a-5f4b-4aab-9afb-8676fea9ddfc"
          }}
          style={styles.ImageBackground_28_1326}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9319660-0e14-4baf-b535-3f412122b72c"
          }}
          style={styles.ImageBackground_28_1327}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00f34a3e-b515-4260-9ec9-738a9b5b31f3"
          }}
          style={styles.ImageBackground_28_1328}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f6f9dbe-c101-4762-8198-94c45275751f"
          }}
          style={styles.ImageBackground_28_1329}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c13ebc1f-efe5-4c6c-b532-11e174b67b8d"
          }}
          style={styles.ImageBackground_28_1330}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbbdfa93-4ebe-4cbd-a577-285382e5424a"
          }}
          style={styles.ImageBackground_28_1331}
        />
        <View style={styles.View_28_1332}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7b8b8a8-540c-41c0-b93c-57488719ec1b"
            }}
            style={styles.ImageBackground_28_1333}
          />
          <View style={styles.View_28_1335}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7913c43-475f-4f56-afa2-9ed7a10b83fd"
              }}
              style={styles.ImageBackground_28_1336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6eb61344-9ca3-4048-a832-af3fcc5a66b4"
              }}
              style={styles.ImageBackground_28_1337}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d23a1fdc-0cf1-4982-8b05-184bb113eaaf"
              }}
              style={styles.ImageBackground_28_1338}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38e60d4f-fc1e-442a-b476-158c38a7a3f1"
              }}
              style={styles.ImageBackground_28_1339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f8431e0-87ee-4430-a280-256cf9044b2b"
              }}
              style={styles.ImageBackground_28_1340}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c71899e0-40c0-44ba-b7b3-14de70c1feb3"
              }}
              style={styles.ImageBackground_28_1341}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27a0eaea-5475-47f4-9f33-41d81a348f1e"
              }}
              style={styles.ImageBackground_28_1342}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f2f14d6-3ef2-4369-9045-51d6866c454e"
              }}
              style={styles.ImageBackground_28_1343}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75b619d1-f284-4bde-9f6f-bfdcad501554"
              }}
              style={styles.ImageBackground_28_1344}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30f7233e-cf75-413b-8a21-4dfa6235ec72"
              }}
              style={styles.ImageBackground_28_1345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33cffefa-da6c-4ea5-8c93-eb85f8036319"
              }}
              style={styles.ImageBackground_28_1346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/396d537b-8fbf-4449-8861-7fed0329d98c"
              }}
              style={styles.ImageBackground_28_1347}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a04d9d2e-8767-413b-b570-ed0dfebeb063"
              }}
              style={styles.ImageBackground_28_1348}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f247156-7676-47e9-8a1d-b4e076a8def8"
              }}
              style={styles.ImageBackground_28_1349}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a7b1278-ba4a-481f-b3ab-ddeeecc2064f"
              }}
              style={styles.ImageBackground_28_1350}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf238e62-cf07-465b-8f01-d4a1e3d44c5f"
              }}
              style={styles.ImageBackground_28_1351}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9394b8bf-8675-48bf-b4df-e6a9bca1d51a"
              }}
              style={styles.ImageBackground_28_1352}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6b40461-109a-4e95-a4b1-94d8caeb685d"
              }}
              style={styles.ImageBackground_28_1353}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f18b5dee-fbc8-4c4f-8087-66f378bb326d"
              }}
              style={styles.ImageBackground_28_1354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffff2f82-4b37-43d8-94d8-29c467291e8f"
              }}
              style={styles.ImageBackground_28_1355}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97464ad1-fa28-443f-858c-b638fb629521"
              }}
              style={styles.ImageBackground_28_1356}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/475dad30-44be-49f3-bf58-a41884485d87"
              }}
              style={styles.ImageBackground_28_1357}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5937b0e7-308e-4327-97fd-f528e59fa1ab"
              }}
              style={styles.ImageBackground_28_1358}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b030f5f2-c957-4812-bc09-c9f6c358c641"
              }}
              style={styles.ImageBackground_28_1359}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ab08452-4469-45a5-b1cd-ba91bb7c1a09"
              }}
              style={styles.ImageBackground_28_1360}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_1394}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24ad9dce-7482-44d9-9dcf-737a5871b46c"
          }}
          style={styles.ImageBackground_28_1395}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fbeb0e6-0cfd-4328-a6a1-8e13de4a801e"
          }}
          style={styles.ImageBackground_28_1396}
        />
        <View style={styles.View_28_1397}>
          <Text style={styles.Text_28_1397}>Is it easy to fall asleep</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_28_1203: {
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
  View_I28_1203_2_7: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("2%")
  },
  ImageBackground_I28_1203_2_8: {
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
  ImageBackground_I28_1203_2_12: {
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
  ImageBackground_I28_1203_2_16: {
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
  ImageBackground_I28_1203_2_21: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%")
  },
  View_28_1204: {
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
  View_28_1205: {
    width: wp("55%"),
    height: hp("52%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_28_1206: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1207: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1208: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1209: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1211: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1212: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%")
  },
  ImageBackground_28_1213: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_28_1214: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1215: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1216: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1218: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1219: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1220: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1221: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1222: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1224: {
    width: wp("23%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1225: {
    width: wp("28%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1226: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1227: {
    width: wp("22%"),
    height: hp("25%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1228: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1229: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1230: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1231: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1232: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1233: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1234: {
    width: wp("9%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1235: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1236: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1237: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1238: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1239: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1240: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1241: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_28_1242: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1243: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1244: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1245: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1246: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1247: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_28_1248: {
    width: wp("14%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1249: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1250: {
    width: wp("18%"),
    height: hp("15%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1251: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1252: {
    width: wp("11%"),
    height: hp("16%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1253: {
    width: wp("11%"),
    height: hp("13%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1254: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  ImageBackground_28_1255: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1257: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1258: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1259: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_28_1260: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1261: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_28_1262: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_28_1263: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1264: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1265: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1266: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_28_1267: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1269: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1270: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_28_1271: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1272: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1273: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1274: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1275: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1276: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1277: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1278: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_28_1279: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1280: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1281: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1282: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1283: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_28_1284: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1285: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1286: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_28_1287: {
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
  View_28_1288: {
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
  Text_28_1288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_1289: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1290: {
    width: wp("30%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1292: {
    width: wp("26%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1293: {
    width: wp("21%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_28_1294: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1295: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1296: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1297: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1298: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1299: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_28_1300: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1301: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_28_1302: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_28_1307: {
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
  ImageBackground_28_1308: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_28_1309: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_28_1310: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_28_1311: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_28_1312: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_28_1313: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_28_1314: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_28_1315: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_28_1316: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  ImageBackground_28_1317: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1318: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_28_1319: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_28_1320: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_28_1321: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_28_1322: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_28_1323: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_28_1324: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_28_1325: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_28_1326: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_28_1327: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_28_1328: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_28_1329: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_28_1330: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_28_1331: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_28_1332: {
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
  ImageBackground_28_1333: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_28_1335: {
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
  ImageBackground_28_1336: {
    width: wp("0%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_28_1337: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_28_1338: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_28_1339: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%")
  },
  ImageBackground_28_1340: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_28_1341: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_28_1342: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_28_1343: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%")
  },
  ImageBackground_28_1344: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_28_1345: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_28_1346: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_28_1347: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_28_1348: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  ImageBackground_28_1349: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%")
  },
  ImageBackground_28_1350: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1351: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_28_1352: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_28_1353: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_28_1354: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_28_1355: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_28_1356: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1357: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_28_1358: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_28_1359: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  ImageBackground_28_1360: {
    width: wp("122%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_28_1394: {
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
  ImageBackground_28_1395: {
    width: wp("42%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_1396: {
    width: wp("39%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_28_1397: {
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
  Text_28_1397: {
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
