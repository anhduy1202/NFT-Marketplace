import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES, assets } from "../constants";
import { NFTCardType } from "../interface";
import { useNavigation } from "@react-navigation/native";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

interface IProps {
  data: NFTCardType;
}

const NFTCard: React.FC<IProps> = (props) => {
  const { data } = props;
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price}/>
          <RectButton MINWIDTH={120} fontSize={SIZES.font} handlePress={()=> navigation.navigate("Detail" as never, {data} as never)}/>
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
