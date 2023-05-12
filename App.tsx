import { StyleSheet, Text, View } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./src/screens/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";

const client = new QueryClient();

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <></>;
  }

  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={"#5fa8d3"} />
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fafafa",
  },
});
