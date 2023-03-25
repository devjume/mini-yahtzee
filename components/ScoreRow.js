import { useState, useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ACCENT_COLOR, SECONDARY_COLOR } from "../styles/theme";
import { GameContext } from "./GameContextWrapper";

export default function ScoreRow() {

	const { maxSpot, throwCounter } = useContext(GameContext);

	const numberItems = Array.from({ length: maxSpot }, (_, index) => {
		return (
			<View style={styles.childContainer} key={`numberItem${index}`}>
				<Text style={styles.text}>0</Text>
				<Text style={styles.rounded}>{index + 1}</Text>
			</View>
		);
	});

	return <View style={styles.container}>{numberItems}</View>;
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		gap: 20,
		justifyContent: "space-around",
		paddingVertical: 12,
	},
	childContainer: {
		display: "flex",
		flexDirection: "column",
		padding: 6,
		gap: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	rounded: {
		backgroundColor: SECONDARY_COLOR,
		padding: 6,
		borderRadius: 40/2,
		width: 40,
		height: 40,
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold"
	},
	text: {
		color: SECONDARY_COLOR,
		fontSize: 26,
	}
});
