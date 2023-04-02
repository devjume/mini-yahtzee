import { useState, useContext } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ACCENT_COLOR, SECONDARY_COLOR } from "../styles/theme";
import { GameContext } from "./GameContextWrapper";

export default function PointsRow({points}) {

	const numberItems = Object.entries(points).map(([key, value]) => {
		return (
			<View style={styles.childContainer} key={`numberItem${key}`}>
				<Text style={styles.text}>{value}</Text>
				<Text style={styles.rounded}>{key}</Text>
			</View>
		);
	})

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
