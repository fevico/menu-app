import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  // If you want it to behave like a true splash screen and auto-navigate after 2.5 seconds:
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/signin");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Set status bar icons to light so they are visible over the orange background */}
      <StatusBar barStyle="light-content" backgroundColor="#C45A34" />

      {/* Optional decorative background circle arcs */}
      <View style={styles.topRightArc} />
      <View style={styles.bottomLeftArc} />

      <SafeAreaView style={styles.safeArea}>
        {/* Top spacer to balance space-between alignment */}
        <View style={styles.spacer} />

        {/* Center Content: Badge, Title & Tagline */}
        <View style={styles.centerSection}>
          {/* Logo Badge (Organic Egg/Oval Shape) */}
          <View style={styles.logoBadge}>
            <Text style={styles.logoLetter}>E</Text>
          </View>

          {/* Main Title */}
          <Text style={styles.brandTitle}>Ember & Oak</Text>

          {/* Subtitle */}
          <Text style={styles.tagline}>
            Seasonal food, delivered beautifully.
          </Text>
        </View>

        {/* Bottom Footer Text */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>GOOD FOOD · GOOD MOOD</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C45A34", // Terracotta orange background
    position: "relative",
    overflow: "hidden",
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between", // Pushes center to middle and footer to bottom
    alignItems: "center",
    paddingHorizontal: 24,
  },
  spacer: {
    height: 40,
  },
  centerSection: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logoBadge: {
    width: 84,
    height: 98,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)", // Thin semi-transparent ring
    borderRadius: 44, // Gives it an oval / egg shape
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  logoLetter: {
    color: "#FFFFFF",
    fontSize: 42,
    fontStyle: "italic",
    fontFamily: "serif", // Uses system serif font (or your custom loaded serif)
    fontWeight: "600",
  },
  brandTitle: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  tagline: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "400",
  },
  footerSection: {
    paddingBottom: 24,
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.65)",
    fontSize: 11,
    letterSpacing: 3, // Wide character spacing matching the design
    fontWeight: "600",
    textAlign: "center",
  },
  // Subtle decorative background circles
  topRightArc: {
    position: "absolute",
    top: -120,
    right: -120,
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
  bottomLeftArc: {
    position: "absolute",
    bottom: -100,
    left: -100,
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
  },
});