import React, { FC, useEffect, useRef, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export interface BannerSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  imageUri: string;
}
const DEFAULT_SLIDES: BannerSlide[] = [
  {
    id: "1",
    tag: "WEEKEND SPECIAL",
    title: "A feast made for sharing",
    subtitle: "Save 20% on orders over $60",
    imageUri:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "2",
    tag: "NEW SEASON",
    title: "Spring has arrived",
    subtitle: "Discover bright, market-led dishes",
    imageUri:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    tag: "ARTISAN COCKTAILS",
    title: "Smoked Botanicals",
    subtitle: "Curated pairings for your table",
    imageUri:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
  },
];

interface Props {
  slides?: BannerSlide[];
  onPress?: (slide: BannerSlide) => void;
  autoPlayInterval?: number; // Duration in ms before sliding (e.g., 3500ms = 3.5s)
}

const HeroBannerSlider: FC<Props> = ({
  slides = DEFAULT_SLIDES,
  onPress,
  autoPlayInterval = 3500,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const activeIndexRef = useRef(0);

  // Keep index ref in sync with state for the interval closure
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Set up auto-scroll interval
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      const nextIndex = (activeIndexRef.current + 1) % slides.length;

      scrollViewRef.current?.scrollTo({
        x: nextIndex * SCREEN_WIDTH,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, autoPlayInterval);

    // Cleanup: clears interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  // Keep pagination dots accurate if the user manually swipes
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    if (index >= 0 && index < slides.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
      >
        {slides.map((item) => (
          <View key={item.id} style={styles.slidePage}>
            <Pressable
              onPress={() => onPress?.(item)}
              style={({ pressed }) => [
                styles.card,
                { opacity: pressed ? 0.95 : 1 },
              ]}
            >
              <ImageBackground
                source={{ uri: item.imageUri }}
                style={styles.imageBackground}
                imageStyle={styles.imageRadius}
                resizeMode="cover"
              >
                <LinearGradient
                  colors={[
                    "rgba(15, 15, 15, 0.85)",
                    "rgba(15, 15, 15, 0.25)",
                    "transparent",
                  ]}
                  start={{ x: 0.05, y: 0.8 }}
                  end={{ x: 0.85, y: 0.1 }}
                  style={StyleSheet.absoluteFill}
                />

                <View style={styles.contentOverlay}>
                  <View>
                    <Text style={styles.tag}>{item.tag}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                  </View>

                  {/* Left-aligned dots */}
                  <View style={styles.dotsRow}>
                    {slides.map((_, i) => (
                      <View
                        key={i}
                        style={[
                          styles.dot,
                          i === activeIndex
                            ? styles.activeDot
                            : styles.inactiveDot,
                        ]}
                      />
                    ))}
                  </View>
                </View>
              </ImageBackground>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 195,
    marginVertical: 10,
  },
  slidePage: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    height: 185,
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
    overflow: "hidden",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  imageRadius: {
    borderRadius: 22,
  },
  contentOverlay: {
    flex: 1,
    padding: 18,
    justifyContent: "space-between",
  },
  tag: {
    color: "#D4A373",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "serif",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 28,
  },
  subtitle: {
    color: "#E5E7EB",
    fontSize: 12,
    marginTop: 2,
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  dot: {
    height: 4,
    borderRadius: 2,
  },
  activeDot: {
    width: 18,
    backgroundColor: "#FFFFFF",
  },
  inactiveDot: {
    width: 6,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
});

export default HeroBannerSlider;