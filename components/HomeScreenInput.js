import { useState, useContext } from "react";
import { Text, View, TextInput, Pressable, Keyboard } from "react-native";
import styles, { ACCENT_COLOR, MAIN_COLOR } from "../styles/styles";
import { AppContext } from "./AppContext";


export default function HomeScreenInput() {
	const [inputFocus, setInputFocus] = useState(true);
	const [inputValue, setInputValue] = useState("");
	const { username, setUsername } = useContext(AppContext);
	
	const saveUsername = () => {
		setUsername(inputValue);
		Keyboard.dismiss();
	};

	return (
		<>
			<Text style={styles.title}>Enter your name:</Text>
			<TextInput
				style={styles.inputField}
				keyboardType="default"
				onChangeText={setInputValue}
				autoFocus={inputFocus}
			/>
			<Pressable
				onPress={saveUsername}
				style={({ pressed }) => [styles.button, { opacity: pressed ? 0.4 : 1.0 }]}
			>
				<Text style={styles.buttonText}>Submit</Text>
			</Pressable>
		</>
	);
}
