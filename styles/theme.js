import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const MAIN_COLOR = "#0f2052";
export const SECONDARY_COLOR = "#E5ECFF"
export const ACCENT_COLOR = "#071127"

export default StyleSheet.create({
	screenContainer: {
		flex: 1,
		backgroundColor: MAIN_COLOR,
		color: SECONDARY_COLOR,
		alignItems: "stretch",
		justifyContent: "space-between",
	},

	contentContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		paddingHorizontal: 6,
		paddingTop: 6,
	},

	title: {
		color: SECONDARY_COLOR,
		fontSize: 18,
		fontWeight: "bold",
	},

	text: {
		color: SECONDARY_COLOR,
		fontSize: 16,
		textAlign: "center",
		marginHorizontal: 8,
	},

	inputField: {
		borderWidth: 1,
		borderColor: SECONDARY_COLOR,
		fontSize: 28,
		height: 48,
		paddingHorizontal: 12,
		paddingVertical: 8,
		color: "#fff",
		width: "80%",
		marginVertical: 16,
	},
});