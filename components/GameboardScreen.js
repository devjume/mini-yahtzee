import { useContext, useState, useEffect } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import theme, { ACCENT_COLOR, SECONDARY_COLOR, MAIN_COLOR } from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";
import { GameContext } from "./GameContextWrapper";
import CustomButton from "./CustomButton";
import DiceRow from "./DiceRow";
import PointsRow from "./PointsRow";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveToScoreboard } from "../lib/scoreboard"


export default function GameboardScreen() {
	const {
		username,
		numberOfDices,
		minSpot,
		maxSpot,
		numberOfThrows,
		bonusPointLimit,
		bonusPoints,
		STORAGE_KEY,
	} = useContext(GameContext);

	const [gameStarted, setGameStarted] = useState(false)
	const [throwsLeftRound, setThrowsLeftRound] = useState(numberOfThrows);
	const [thorwsLeftGame, setThorwsLeftGame] = useState(numberOfThrows * maxSpot);

	const [roundDices, setRoundDices] = useState([]);

	const [message, setMessage] = useState("Start game by clicking the button");
	const [messageColor, setMessageColor] = useState("white");
	const [totalPoints, setTotalPoints] = useState(0);
	const [pointsRow, setPointsRow] = useState(() => generatePointsRow());
	
	function generatePointsRow() {
		let tempObj = {};
		for (let i = minSpot; i <= maxSpot; i++) {
			tempObj[i] = 0;
		}
		return tempObj;
	}


	function startNewGame() {
		setTotalPoints(0)
		setRoundDices([])
		setPointsRow( generatePointsRow())
		setGameStarted(true);
		throwDices(true)
	}

	async function endGame(sumPoints) {
		
		let scoreboardPoints = totalPoints + sumPoints;

		if (scoreboardPoints >= bonusPointLimit) {
			scoreboardPoints += bonusPoints;
		}

		let roundDetails = {
			timestamp: Date.now(),
			player: username,
			points: scoreboardPoints,
		};

		
			try {
				saveToScoreboard(roundDetails);
			} catch (error) {
				console.log("Error", error);
			} finally {
				setGameStarted(false);
				setThrowsLeftRound(numberOfThrows);
				setThorwsLeftGame(numberOfThrows * maxSpot);
			}

	}

	useEffect(() => {
		if(gameStarted === false) {
			setRoundDices([])
			setMessage("Start game by clicking the button");
		}
	}, [gameStarted]);
	

	function throwDices(newGame = false) {
		if (throwsLeftRound > 0 || newGame === true) {
			setRoundDices(generateRandomDices(roundDices));
			setThrowsLeftRound(throwsLeftRound - 1);
			setThorwsLeftGame(thorwsLeftGame - 1);
		} else if (throwsLeftRound === 0) {
			const selectedPoints = roundDices
				.filter((dice) => {
					if (!!dice.selected) {
						return true;
					}
				})
				.map((dice) => {
					return dice.number;
				});
			// When user can't select any points, continue the game (no points fill be added on this round)

			if (cantSelectNewPoints(roundDices, pointsRow) === true) {
				setMessage(
					"There is no dices to select for any points. Continue playing by throwing dices again"
				);
				setMessageColor("red");
			} else {
				if (selectedPoints.length === 0) {
					setMessage("Select points before next throw");
					setMessageColor("red");
					return;
				}

				if (pointsRow[selectedPoints[0].toString()] > 0) {
					setMessage(`You already selected points for ${selectedPoints[0]}`);
					setMessageColor("red");
					return;
				}

				if (new Set(selectedPoints).size > 1) {
					setMessage("You can only select one type of number for points at the time");
					setMessageColor("red");
					return;
				}
			}

			continueGame();

			function cantSelectNewPoints(roundDices, pointsRow) {
				let x = true;

				let emptyPointsSet = new Set();
				for (const key in pointsRow) {
					if (pointsRow[key] === 0) {
						emptyPointsSet.add(parseInt(key));
					}
				}

				const roundDicesSet = new Set(
					roundDices.map((dice) => {
						return dice.number;
					})
				);

				emptyPointsSet.forEach((zeroValue) => {
					roundDicesSet.forEach((diceValue) => {
						if (zeroValue === diceValue) {
							x = false;
						}
					});
				});
				return x;
			}

			function continueGame() {
				const sumPoints = selectedPoints.reduce((a, b) => a + b, 0);
				setPointsRow((oldPoints) => ({
					...oldPoints,
					[selectedPoints[0].toString()]: sumPoints,
				}));

				setTotalPoints(totalPoints + sumPoints);
				setThrowsLeftRound(numberOfThrows);
				setRoundDices(generateRandomDices([]));
			}

			if (thorwsLeftGame === 0) {
				endGame(selectedPoints.reduce((a, b) => a + b, 0));
			}
		}

	}

	function generateRandomDices(currentDices) {
		let numbersArray = [];

		if (!currentDices.length) {
			for (let i = 1; i <= numberOfDices; i++) {
				numbersArray.push({
					index: i,
					number: Math.floor(Math.random() * (maxSpot - minSpot + 1) + minSpot),
					selected: false,
				});
			}
		} else {
			numbersArray = currentDices.map((dice) => {
				if (dice.selected === true) {
					return {
						...dice,
					};
				} else {
					return {
						index: dice.index,
						number: Math.floor(Math.random() * (maxSpot - minSpot + 1) + minSpot),
						selected: false,
					};
				}
			});
		}
		
		return numbersArray;
	}

	

	useEffect(() => {
		if (throwsLeftRound > 0 && gameStarted === true) {
			setMessage(`${throwsLeftRound} throws left for the round. Select points and throw again`);
			setMessageColor("white");
		} else if ( throwsLeftRound === 0 ) {
			setMessage(`0 throws left. Throw again to save points and starting new round`);
			setMessageColor("white");
		}
	}, [throwsLeftRound]);


	return (
		<View style={theme.screenContainer}>
			<Header />
			<View style={styles.contentContainer}>
				<View style={styles.childContainer}>
					{!!gameStarted ? (
						<DiceRow thrownDices={roundDices} setThrownDices={setRoundDices} />
					) : (
						<Text>
							<MaterialCommunityIcons name={"dice-multiple"} size={58} color={SECONDARY_COLOR} />
						</Text>
					)}
					<Text style={[theme.text, { color: messageColor }]}>{message}</Text>
					{!!gameStarted ? (
						<CustomButton text={"Throw Dices"} action={() => throwDices(false)} />
					) : (
						<CustomButton text={"Start game"} action={startNewGame} />
					)}
				</View>
				<View style={styles.childContainer}>
					<Text style={[theme.title, { fontSize: 24 }]}>Total: {totalPoints}</Text>
					<Text style={theme.text}>
						You are {bonusPointLimit - totalPoints} points away from bonus
					</Text>
					<PointsRow points={pointsRow} />
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
