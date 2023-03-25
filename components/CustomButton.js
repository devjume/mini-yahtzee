import { Text, Pressable, StyleSheet } from "react-native";
import { ACCENT_COLOR, SECONDARY_COLOR } from "../styles/theme";

export default function CustomButton({text, action}) {

	return (
		<Pressable
			onPress={action}
			style={({ pressed }) => [styles.button, { opacity: pressed ? 0.4 : 1.0 }]}
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
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

	text: {
		color: SECONDARY_COLOR,
		fontWeight: "bold",
		fontSize: 24,
		lineHeight: 32,
		letterSpacing: 0.5,
	},
});
