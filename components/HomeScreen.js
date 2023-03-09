import { useState, useContext } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import styles, { ACCENT_COLOR, MAIN_COLOR } from "../styles/styles";
import Header from "./Header";
import Footer from "./Footer";
import HomeScreenInput from "./HomeScreenInput";
import HomeScreenRules from "./HomeScreenRules";

export default function HomeScreen() {
	const [showRules, setShowRules] = useState(false);
	
	return (
		<View style={styles.container}>
			<Header />
			<HomeScreenInput />

			{!!showRules && <HomeScreenRules />}

			<Footer />
		</View>
	);
}
