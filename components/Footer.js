import React from 'react'
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { ACCENT_COLOR, MAIN_COLOR, SECONDARY_COLOR } from "../styles/theme";

export default function Footer() {
  return (
		<View style={component.footer}>
			<Text style={component.title}>Author: Julius Meriläinen</Text>
		</View>
	);
}

const component = StyleSheet.create({
	footer: {
		backgroundColor: MAIN_COLOR,
		flexDirection: "row",
		borderTopColor: SECONDARY_COLOR,
		borderTopWidth: 1,
	},
	title: {
		color: SECONDARY_COLOR,
		fontWeight: "bold",
		flex: 1,
		margin: 8,
		fontSize: 18,
		textAlign: "center",
	},
});