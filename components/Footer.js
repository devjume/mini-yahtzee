import React from 'react'
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Footer() {
  return (
		<View style={component.footer}>
			<Text style={component.title}>Author: Julius Meriläinen</Text>
		</View>
	);
}

const component = StyleSheet.create({
	footer: {
		backgroundColor: "#0f2052",
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		borderTopColor: "#FAFBFF",
		borderTopWidth: 1,
	},
	title: {
		color: "#FAFBFF",
		fontWeight: "bold",
		flex: 1,
		margin: 8,
		fontSize: 18,
		textAlign: "center",
	},
});