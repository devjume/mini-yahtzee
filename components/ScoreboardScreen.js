import { Text, View } from "react-native";
import styles from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

export default function ScoreboardScreen() {
	return (
		<View style={styles.container}>
			<Header />
			<Text style={styles.title}>SCOREESS!</Text>
			<Footer />
		</View>
	)
}
