import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, NFTData } from "../../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../../components";
import { FlatList } from "react-native-gesture-handler";



const Home: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1}}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item}/>}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false} //no scroll-bar
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
