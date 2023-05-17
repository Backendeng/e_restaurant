import { Text } from "react-native";
import create from "zustand";
import styled from "styled-components/native";
import { colors } from "../atoms/theme/colors";
import { fontSizes } from "../atoms/theme/fonts";
import { TextInput, Button } from "react-native-paper";

const fontBold = "Urbanist-Bold";
const fontSemiBold = "Urbanist-SemiBold";
const fontMedium = "Urbanist-Medium";
const fontRegular = "Urbanist-Regular";

export const Heading1Primary = styled.Text`
  color: ${colors.brand.primary};
  font-size: ${fontSizes.fortyEight};
  font-family: ${fontBold};
`;
export const Heading2Primary = styled.Text`
  color: ${colors.brand.primary};
  font-size: ${fontSizes.fortyEight};
  font-family: ${fontBold};
`;

export const Heading5Primary = styled.Text`
  color: ${colors.brand.primary};
  font-size: ${fontSizes.twenty};
  font-family: ${fontBold};
`;
export const BodySemiBold14Primary = styled.Text`
  color: ${colors.brand.primary};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontSemiBold};
`;

export const BodyBold16Primary = styled.Text`
  color: ${colors.brand.primary};
  font-size: ${fontSizes.sixteen};
  font-family: ${fontBold};
`;

export const BodySemiBold10white = styled.Text`
  color: "white;
  font-size: ${fontSizes.ten};
  font-family: ${fontSemiBold};
`;

export const Heading1 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fortyEight};
  font-family: ${fontBold};
`;

export const Heading2 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.forty};
  font-family: ${fontBold};
`;
export const Heading3 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.thirtyTwo};
  font-family: ${fontBold};
`;
export const Heading4 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.twentyFour};
  font-family: ${fontBold};
`;

export const Heading5 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.twenty};
  font-family: ${fontBold};
`;

export const Heading6 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.eighteen};
  font-family: ${fontBold};
`;
/* body font started */
export const BodyBold18 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.eighteen};
  font-family: ${fontBold};
`;
export const BodySemiBold18 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.eighteen};
  font-family: ${fontSemiBold};
`;
export const BodyMedium18 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.eighteen};
  font-family: ${fontMedium};
`;

export const BodyRegular18 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.eighteen};
  font-family: ${fontRegular};
`;

/*body font ended */
/* body large started */

export const BodyBold16 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.sixteen};
  font-family: ${fontBold};
`;

export const BodySemiBold16 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.sixteen};
  font-family: ${fontSemiBold};
`;

export const BodyMedium16 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.sixteen};
  font-family: ${fontMedium};
`;

export const BodyRegular16 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.sixteen};
  font-family: ${fontRegular};
`;

/* large ended*/
/*Medium started */
export const BodyBold14 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontBold};
`;

export const BodySemiBold14 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontSemiBold};
`;

export const BodyMedium14 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontMedium};
`;

export const BodyRegular14 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontRegular};
`;

/*medium ended */
/*small started */
export const BodyBold12 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.fourteen};
  font-family: ${fontBold};
`;

export const BodySemiBold12 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.twelve};
  font-family: ${fontSemiBold};
`;

export const BodyMedium12 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.twelve};
  font-family: ${fontMedium};
`;

export const BodyRegular12 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.twelve};
  font-family: ${fontRegular};
`;

/*small ended */
/*small started */
export const BodyBold10 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.ten};
  font-family: ${fontBold};
`;

export const BodySemiBold10 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.ten};
  font-family: ${fontSemiBold};
`;

export const BodyMedium10 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.ten};
  font-family: ${fontMedium};
`;

export const BodyRegular10 = styled.Text`
  color: ${colors.greyscale.ninehundred};
  font-size: ${fontSizes.ten};
  font-family: ${fontRegular};
`;

/*small ended */
/*
color: colors.greyscale.ninehundred;
  font-size: fontSizes.fortyEight;
  font-family: ${fontBold};


*/
