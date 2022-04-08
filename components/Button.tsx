import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

interface IProps {
  imgUrl: any;
  right: number;
  top: number;
}

export const CircleButton: React.FC<IProps> = (props) => {
  const { imgUrl } = props;
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      // onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

interface RectButtonProps {
  MINWIDTH: number;
  fontSize: number;
  handlePress: any;
}

export const RectButton: React.FC<RectButtonProps> = (props) => {
  const { MINWIDTH, fontSize, handlePress } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: MINWIDTH,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {" "}
        Place a bid{" "}
      </Text>
    </TouchableOpacity>
  );
};
