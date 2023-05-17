import React from "react";
import { TextInput, ProgressBar } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { Rating } from "../components/Rating";
import { Heading1 } from "../molecules/moleculesFromPaper";
import { BodyMedium18 } from "../molecules/moleculesFromPaper";
import { colors } from "../atoms/theme/colors";
import { BodySemiBold16 } from "../molecules/moleculesFromPaper";
import Cchip from "../molecules/Cchip";
import ReviewDetail from "../components/ReviewDetail";

export default function MenuItemRating({ style, ...props }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/*  rating and line graph start*/}
      <View style={{ paddingTop: 24, flex: 18, backgroundColor: "white" }}>
        {/* creating 2 seperate views  */}
        <View style={{ flexDirection: "row", flex: 1 }}>
          {/* creating seperate vertical view for rating, stars, review text */}
          <View style={{ backgroundColor: "white", flex: 2 }}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Heading1>4.8</Heading1>

              <Rating rating={3} />
              <BodyMedium18>(4.8k reviews)</BodyMedium18>
            </View>
          </View>
          {/* ends -creating seperate vertical view for rating, stars, review text */}

          <View style={{ flex: 2, justifyContent: "flex-start" }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <BodySemiBold16 style={{ marginRight: 10 }}>5</BodySemiBold16>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  height: 5,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "90%",
                    backgroundColor: colors.brand.primary,
                    height: 5,
                  }}
                />
              </View>
            </View>
            {/* second progress bar started*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <BodySemiBold16 style={{ marginRight: 10 }}>4</BodySemiBold16>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  height: 5,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    backgroundColor: colors.brand.primary,
                    height: 5,
                  }}
                />
              </View>
            </View>

            {/*third progress bar started*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <BodySemiBold16 style={{ marginRight: 10 }}>3</BodySemiBold16>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  height: 5,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "70%",
                    backgroundColor: colors.brand.primary,
                    height: 5,
                  }}
                />
              </View>
            </View>
            {/*fourth progress bar started*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <BodySemiBold16 style={{ marginRight: 10 }}>2</BodySemiBold16>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  height: 5,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "60%",
                    backgroundColor: colors.brand.primary,
                    height: 5,
                  }}
                />
              </View>
            </View>
            {/*fifth progress bar started*/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 24,
              }}
            >
              <BodySemiBold16 style={{ marginRight: 10 }}>1</BodySemiBold16>
              <View
                style={{
                  backgroundColor: "lightgrey",
                  height: 5,
                  width: "90%",
                }}
              >
                <View
                  style={{
                    width: "30%",
                    backgroundColor: colors.brand.primary,
                    height: 5,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/*  rating and line graph ends*/}
      {/*  chip area start*/}
      <View
        style={{
          flex: 5,
          backgroundColor: "white",
          paddingTop: 24,
          flexDirection: "row",
        }}
      >
        <Cchip
          style={{ marginRight: 12 }}
          label="Sort by"
          iconName="filter-variant"
        />
        <Cchip label="5" iconName="star" />
        <Cchip label="4" iconName="star" />
        <Cchip label="3" iconName="star" />
        <Cchip label="2" iconName="star" />
        <Cchip label="1" iconName="star" />
      </View>

      {/*  Review started*/}
      <View style={{ flex: 62, backgroundColor: "white" }}>
        <ReviewDetail />
      </View>
    </View>
  );
}
