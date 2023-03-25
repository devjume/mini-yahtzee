import { useState, useContext } from "react";
import { Text, View, TextInput, Pressable, Keyboard, Button } from "react-native";
import styles, { ACCENT_COLOR, MAIN_COLOR } from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";
import HomeScreenInput from "./HomeScreenInput";
import HomeScreenRules from "./HomeScreenRules";
import { AppContext } from "./GameContextWrapper";

export default function HomeScreen({navigation}) {
	const [showRules, setShowRules] = useState(false);

	return (
		<View style={styles.screenContainer}>
			<Header />
			<View style={styles.contentContainer}>
				{!showRules && <HomeScreenInput setShowRules={setShowRules} />}
				{!!showRules && <HomeScreenRules navigation={navigation}/>}
			</View>
			<Footer />
		</View>
	);
}
