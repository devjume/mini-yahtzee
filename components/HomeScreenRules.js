import { useState, useContext} from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import styles, { ACCENT_COLOR, MAIN_COLOR } from "../styles/styles";
import { AppContext } from "./AppContext";



export default function HomeScreenRules() {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Rules</Text>
		</View>
	);
}
