import { useState, useContext} from "react";
import { Text, View, TextInput, Pressable, Keyboard, StyleSheet } from "react-native";
import theme, { ACCENT_COLOR, MAIN_COLOR } from "../styles/theme";
import CustomButton from "./CustomButton";


import { GameContext } from "./GameContextWrapper";


export default function HomeScreenRules({navigation}) {
	const { username, setShowTabBar, numberOfDices, numberOfThrows, minSpot, maxSpot, bonusPointLimit, bonusPoints } =
		useContext(GameContext);

	const startGame = () => {
		navigation.navigate("Gameboard");
		setShowTabBar("flex");
	}

	return (
		<View style={styles.contentContainer}>
			<Text style={styles.title}>Rules of the game:</Text>
			<Text style={styles.text}>
				<Text style={styles.bold}>THE GAME: </Text>
				{`Upper section of the classic Yahtzee dice game. You have ${numberOfDices} dices and for the every dice you have ${numberOfThrows} throws. After each throw you can keep dices in order to get same dice spot counts as many as possible. In the end of the turn you must select your points from ${minSpot} to ${maxSpot}. Game ends when all points have been selected. The order for selecting those is free.`}
			</Text>
			<Text style={styles.text}>
				<Text style={styles.bold}>Points: </Text>{" "}
				{`After each turn game calculates the sum for the dices you selected. Only the dices having the same spot count are calculated. Inside the game you can not select same points from ${minSpot} to ${maxSpot} again.`}
			</Text>
			<Text style={styles.text}>
				<Text style={styles.bold}>GOAL: </Text>{" "}
				{`To get points as much as possible.
				${bonusPointLimit} points is the limit of getting bonus which gives you ${bonusPoints} points more.`}
			</Text>
			<Text style={styles.title}>Good luck, {username}</Text>
			<CustomButton text={"Play"} action={startGame} />
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		...theme.text,
		fontSize: 14,
	},
	title: {
		...theme.title,
		fontSize: 22,
	},
	bold: {
		fontWeight: "bold",
	},
	contentContainer: {
		...theme.contentContainer,
		gap: 10,
	}
})