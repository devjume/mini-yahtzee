import { useContext } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import theme, { ACCENT_COLOR, SECONDARY_COLOR, MAIN_COLOR } from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";
import { GameContext } from "./GameContextWrapper";
import CustomButton from "./CustomButton";
import DiceRow from "./DiceRow";
import ScoreRow from "./ScoreRow";


export default function GameboardScreen() {

	const { username, setThrowCounter, totalPoints } = useContext(GameContext);

	function throwdices() {
		setThrowCounter(3);
	}

	return (
		<View style={theme.screenContainer}>
			<Header />
			<View style={styles.contentContainer}>
				<View style={styles.childContainer}>
					<DiceRow />
					<Text style={theme.text}>Throws left: 3</Text>
					<CustomButton text={"Throw Dices"} action={throwdices} />
				</View>
				<View style={styles.childContainer}>
					<Text style={[theme.title, { fontSize: 24 }]}>Total: {totalPoints}</Text>
					<Text style={theme.text}>You are 63 points away from bonus</Text>
					<ScoreRow />
					<Text style={[theme.text, { marginTop: "auto", paddingVertical: 8 }]}>
						Player: {username}
					</Text>
				</View>
			</View>
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		...theme.contentContainer,
		justifyContent: "space-between"
	},
	childContainer: {
		...theme.contentContainer,
		justifyContent: "space-around"
	},

});
