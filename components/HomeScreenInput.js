import { useState, useContext } from "react";
import { Text, TextInput, Keyboard, StyleSheet } from "react-native";
import theme from "../styles/theme";
import CustomButton from "./CustomButton";

import { GameContext } from "./GameContextWrapper";


export default function HomeScreenInput({ setShowRules }) {
	const [inputValue, setInputValue] = useState("");
	const { setUsername } = useContext(GameContext);

	const saveUsername = () => {
		setUsername(inputValue);
		setShowRules(true);
		Keyboard.dismiss();
	};

	return (
		<>
			<Text style={theme.title}>Enter your name:</Text>
			<TextInput
				style={theme.inputField}
				keyboardType="default"
				onChangeText={setInputValue}
				autoFocus={true}
			/>
			<CustomButton text={"Submit"} action={saveUsername}/>
		</>
	);
}
