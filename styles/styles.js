import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const MAIN_COLOR = "#0f2052";
export const SECONDARY_COLOR = "#E5ECFF"
export const ACCENT_COLOR = "#071127"

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: MAIN_COLOR,
		alignItems: "center",
		justifyContent: "flex-start",
		color: SECONDARY_COLOR,
	},
	title: {
		color: SECONDARY_COLOR,
		fontSize: 18,
		fontWeight: "bold"
	},
	text: {
		color: SECONDARY_COLOR,
		fontSize: 16,
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

	button: {
		backgroundColor: ACCENT_COLOR,
		borderRadius: 4,
		paddingVertical: 14,
		paddingHorizontal: 34,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: SECONDARY_COLOR,
	},

	buttonText: {
		color: SECONDARY_COLOR,
		fontWeight: "bold",
		fontSize: 24,
		lineHeight: 32,
		letterSpacing: 0.50,
	}
});