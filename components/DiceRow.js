import { useState, useContext, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { MAIN_COLOR, ACCENT_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_DARK } from "../styles/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GameContext } from "./GameContextWrapper";

export default function DiceRow({ thrownDices, setThrownDices }) {
	
	function diceSelected(selectedDice) {
		const updatedDices = thrownDices.map((dice) => {
			if (dice.index === selectedDice.index) {
				return {
					...dice,
					selected: !dice.selected,
				};
			} else {
				return dice;
			}
		});
		setThrownDices(updatedDices);
	}

	return (
		<View style={styles.container}>
			{thrownDices.map((dice, index) => {
				return (
					<Pressable onPress={() => diceSelected(dice)} key={`dice-${index + 1}`}>
						<Text>
							<MaterialCommunityIcons
								name={`dice-${dice.number}`}
								size={64}
								color={!!dice.selected ? SECONDARY_COLOR_DARK : SECONDARY_COLOR}
							/>
						</Text>
					</Pressable>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		gap: 12
	},
});
