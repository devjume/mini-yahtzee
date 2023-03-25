import { useState, useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ACCENT_COLOR, SECONDARY_COLOR } from "../styles/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GameContext } from "./GameContextWrapper";

export default function DiceRow() {

	const { numberOfDices, throwCounter } = useContext(GameContext);
	
	function DefaultIcon() {
		return (
			<Text>
				<MaterialCommunityIcons name={"dice-multiple"} size={48} color={SECONDARY_COLOR} />
			</Text>
		)
	}

	const dices = Array.from({length: numberOfDices}, (_, index) => {
		return (
			<Text key={`dice-${index + 1}`}>
				<MaterialCommunityIcons
					name={`dice-${index + 1}`}
					size={48}
					color={SECONDARY_COLOR}
				/>
			</Text>
		);
	})

	return (
		<View style={styles.container}>
			{throwCounter > 0 ? dices: <DefaultIcon />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
	},
});
