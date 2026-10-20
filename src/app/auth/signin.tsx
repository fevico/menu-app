import AppButton from "@/components/AppButton";
import FormInput from "@/components/FormInput";
import { useRouter } from "expo-router";
import { FC, useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

const SignIn: FC<Props> = (props) => {
  const router = useRouter();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleContinue = () => {
    // Navigate to your main tabs/home screen after auth
    // router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ================= TOP HERO SECTION ================= */}
        <View style={styles.heroContainer}>
          <ImageBackground
            // Replace with your local asset: require('@/assets/images/food-hero.jpg')
            // or an external URL:
            source={{
              uri: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          >
            {/* Dark tint overlay so text is readable */}
            <View style={styles.darkOverlay}>
              <SafeAreaView edges={["top"]} style={styles.heroSafeTop}>
                {/* Brand Header */}
                <View style={styles.headerRow}>
                  <View style={styles.miniLogoBadge}>
                    <Text style={styles.miniLogoText}>E</Text>
                  </View>
                  <Text style={styles.headerBrandTitle}>Ember & Oak</Text>
                </View>

                {/* Hero Bottom Copy */}
                <View style={styles.heroBottomCopy}>
                  <Text style={styles.welcomePill}>WELCOME HOME</Text>
                  <Text style={styles.heroHeadline}>
                    Good food is{"\n"}waiting for you.
                  </Text>
                </View>
              </SafeAreaView>
            </View>
            
          </ImageBackground>
        </View>

        {/* ================= BOTTOM FORM SECTION ================= */}
        <View style={styles.formContainer}>
          <Text style={styles.signInTitle}>Sign in</Text>
          <Text style={styles.signInSubtitle}>
            Order your favourites in just a few taps.
          </Text>

          {/* Email Input Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email address</Text>
            <FormInput
              value={email}
              setInput={setEmail}
              placeholder="alex@example.com"
              keyboardType="email-address"
            />
          </View>

          {/* Password Input Field */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <FormInput
              value={password}
              setInput={setPassword}
              placeholder="At least 8 characters"
              keyboardType="default"
            />
          </View>

          {/* Remember Me & Forgot Password Row */}
          <View style={styles.optionsRow}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              activeOpacity={0.8}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                style={[styles.checkbox, rememberMe && styles.checkboxActive]}
              >
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-3 mt-2 mb-4">
            {/* Primary Continue Button */}
            <AppButton
              handleContinue={handleContinue}
              title="Continue"
              variant="primary"
            />

            {/* Secondary Browse as Guest Button */}
            <AppButton
              handleContinue={() => router.push("/(menu)/menu")}
              title="Browse as guest"
              variant="guest"
            />

            <Text className="text-[11px] text-center text-gray-400 mt-2">
              By continuing, you agree to our Terms and Privacy Policy.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
  },

  /* Hero Section */
  heroContainer: {
    height: 380, // Takes roughly the top 45% of the screen
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: "hidden", // Clips the image to the rounded corners
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.45)", // Semi-transparent black
    paddingHorizontal: 24,
  },
  heroSafeTop: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 28,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 8,
  },
  miniLogoBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#C45A34",
    alignItems: "center",
    justifyContent: "center",
  },
  miniLogoText: {
    color: "#FFFFFF",
    fontFamily: "serif",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "700",
  },
  headerBrandTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "serif",
    fontWeight: "600",
  },
  heroBottomCopy: {
    gap: 6,
  },
  welcomePill: {
    color: "#D4A373", // Light gold / bronze accent
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  heroHeadline: {
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "serif",
    fontWeight: "700",
    lineHeight: 34,
  },

  /* Form Section */
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 36,
  },
  signInTitle: {
    fontSize: 26,
    fontFamily: "serif",
    fontWeight: "700",
    color: "#1E1E1E",
    marginBottom: 6,
  },
  signInSubtitle: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
    gap: 8,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2C2C2C",
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 28,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#A0A0A0",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: "#C45A34",
    borderColor: "#C45A34",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
  checkboxLabel: {
    fontSize: 13,
    color: "#6B6B6B",
  },
  forgotPasswordText: {
    fontSize: 13,
    color: "#C45A34",
    fontWeight: "600",
  },
});

export default SignIn;
