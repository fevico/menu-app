import { FC } from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  title?: string;
  subtitle?: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
}

const HeroBanner: FC<Props> = ({ title, subtitle, imageSource, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        source={imageSource}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        {/* Dark Gradient Overlay for text contrast */}
        <LinearGradient
          colors={[
            "rgba(15, 15, 15, 0.95)",
            "rgba(15, 15, 15, 0.4)",
            "transparent",
          ]}
          start={{ x: 0.05, y: 0.8 }}
          end={{ x: 0.85, y: 0.1 }}
          style={StyleSheet.absoluteFill}
        />

        {/* Banner Copy */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text className="text-gray-200 text-sm font-medium">{subtitle}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 170,
    borderRadius: 20,
    overflow: "hidden", // Essential for keeping border-radius on iOS/Android
    marginHorizontal: 16,
    // marginVertical: ,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  textContainer: {
    padding: 16,
    zIndex: 2,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "italic", // Matches the refined Figma typography
    marginBottom: 4,
    letterSpacing: 0.3,
  },
  subtitle: {
    color: "#9CA3AF", // Muted slate gray
    fontSize: 13,
    fontWeight: "400",
  },
});

export default HeroBanner;
