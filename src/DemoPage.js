import React, { Component } from "react";
import { Text, View, ImageBackground, Image } from "react-native";
import { Avatar } from "react-native-elements";
import { getImageList } from "./action/fetchingImages";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

export class DemoPage extends Component {
  componentWillMount() {
    this.props.getImageList();
  }

  renderRow({ item }) {
    console.log("item", item.image);
    return (
      <View style={{ margin: 5 }}>
        <Image
          style={{ height: 100, width: 100, padding: 18, borderRadius: 40 / 2 }}
          source={{ uri: item.image }}
        />
      </View>
    );
  }

  ImagerenderRow({ item }) {
    console.log("item", item);
    return (
      <View style={{ margin: 10, flexDirection: "column" }}>
        <Image
          style={{
            borderWidth: 2,
            borderColor: "#999",
            height: 70,
            width: 70,
            borderRadius: 70 / 2
          }}
          source={{ uri: item.image }}
        />
        <Text style={{ fontSize: 10, textAlign: "center" }}>{item.title}</Text>
      </View>
    );
  }
  render() {
    console.log("list", this.props.list);
    return (
      <View style={{ flexDirection: "column", flex: 1 }}>
        <ImageBackground
          style={{
            flex: 0.32,
            justifyContent: "flex-end",
            alignItems: "center"
          }}
          source={require("../src/assets/background.jpg")}
        >
          <Text style={styles.textStyle}>Jyoti Sharma</Text>
        </ImageBackground>
        <View style={styles.avatarStyle}>
          <Avatar
            containerStyle={{
              borderWidth: 2,
              borderColor: "#999",
              shadowOffset: 5,
              shadowRadius: 5,
              shadowColor: "#999",
              shadowOpacity: 0.3
            }}
            rounded
            size={100}
            source={require("../src/assets/girl.jpg")}
          />
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "column",
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
              marginLeft: 30,
              marginTop: 40
            }}
          >
            <Text style={{ fontSize: 15 }}>Followers</Text>
            <Text style={{ fontSize: 20 }}>6999</Text>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              flexDirection: "column",
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
              marginTop: 10
            }}
          >
            <Text style={{ fontSize: 15 }}>Following</Text>
            <Text style={{ fontSize: 20 }}>3000</Text>
          </View>
        </View>
        <View style={{ flex: 0.1 }} />
        <View style={{ flex: 0.5, flexDirection: "column" }}>
          <View style={{ height: 100 }}>
            <FlatList
              data={this.props.list}
              renderItem={item => this.renderRow(item)}
              keyExtractor={(item, index) => index.toString()}
              bounces={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20, padding: 5 }}>Recently Followers</Text>
          </View>
          <View style={{ height: 100, alignContent: "center" }}>
            <FlatList
              data={this.props.list}
              renderItem={item => this.ImagerenderRow(item)}
              keyExtractor={(item, index) => index.toString()}
              bounces={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20, padding: 5 }}>Recently Following</Text>
          </View>
          <View style={{ height: 100 }}>
            <FlatList
              data={this.props.list}
              renderItem={item => this.ImagerenderRow(item)}
              keyExtractor={(item, index) => index.toString()}
              bounces={false}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "serif",
    paddingBottom: 5,
    fontWeight: "400"
  },
  avatarStyle: {
    position: "absolute",
    top: "25%",
    left: 10,
    flexDirection: "row"
  },
  blockContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

function mapStateToProps(state) {
  const { ImageList } = state.Listing;
  return {
    list: ImageList
  };
}

export default connect(
  mapStateToProps,
  { getImageList }
)(DemoPage);

////Jyoti Sharma