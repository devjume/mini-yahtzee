import React from 'react'
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import styles from "../styles/styles"

export default function Header() {
  return (
		<View style={component.header}>
			<Text style={component.title}>Mini-Yahtzee</Text>
		</View>
	);
}

const component = StyleSheet.create({
	header: {
		marginBottom: 15,
		backgroundColor: "#0f2052",
		flexDirection: "row",
		borderTopColor: "#FAFBFF",
		borderBottomColor: "#FAFBFF",
    borderTopWidth: 1,
    borderBottomWidth: 1,
	},
	title: {
		color: "#FAFBFF",
		fontWeight: "bold",
		flex: 1,
		fontSize: 24,
		textAlign: "center",
		margin: 12,
	},
});