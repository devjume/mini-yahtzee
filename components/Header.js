import React from 'react'
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { ACCENT_COLOR, MAIN_COLOR, SECONDARY_COLOR } from "../styles/theme";

export default function Header() {
  return (
		<View style={component.header}>
			<Text style={component.title}>Mini-Yahtzee</Text>
		</View>
	);
}

const component = StyleSheet.create({
	header: {
		backgroundColor: MAIN_COLOR,
		flexDirection: "row",
		borderTopColor: SECONDARY_COLOR,
		borderBottomColor: SECONDARY_COLOR,
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	title: {
		color: SECONDARY_COLOR,
		fontWeight: "bold",
		flex: 1,
		fontSize: 24,
		textAlign: "center",
		margin: 12,
	},
});