import { useState, useEffect, useContext } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme from "../styles/theme";
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomButton";
import { clearAll, saveToScoreboard } from "../lib/scoreboard";

export default function ScoreboardScreen({navigation}) {
	const STORAGE_KEY = "@scoreboard";
	const [scoreboard, setScoreboard] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
		{/*
			saveToScoreboard({
				timestamp: Date.now(),
				player: "KAPPA",
				points: Math.floor(Math.random() * (144 - 10 + 1) + 10),
			});
		*/}

			async function getScoreboard() {
				try {
					const data = await AsyncStorage.getItem(STORAGE_KEY);
					const parsed = JSON.parse(data)
					const sorted = parsed?.sort((a, b) =>
						a.points < b.points ? 1 : b.points < a.points ? -1 : 0
					);
					setScoreboard(sorted);
					setIsLoading(false);
				} catch (error) {
					console.log("Error (getScoreboard) 2:", error);
				}
			}

			getScoreboard()
		});

		return unsubscribe;
	}, [navigation])



	function clearScoreboard() {
		setScoreboard([])
		clearAll()
	}

	function convertTimestamp(ts) {
		let d = new Date(parseInt(ts));
		return `${d.toLocaleString("fi-FI", { year:"numeric", "month": "2-digit", day:"2-digit"})} ${d.toLocaleTimeString("fi-Fi", {hour: "2-digit", minute:"2-digit"})}`;

	}



	function ListItem({item, index}) {
		return (
			<View style={styles.listItem}>
				<Text>
					{index + 1}. {item.player}
				</Text>
				<Text>{convertTimestamp(item.timestamp)}</Text>
				<Text>{item.points}</Text>
			</View>
		);
	}

	return (
		<View style={theme.screenContainer}>
			<Header />
			<View style={[theme.contentContainer, { justifyContent: "space-evenly" }]}>
				{isLoading ? (
					<Text>LOADING...</Text>
				) : (
					<FlatList
						data={scoreboard}
						renderItem={({ item, index }) => <ListItem item={item} index={index} />}
						style={styles.list}
					/>
				)}
				<CustomButton text="Clear All" action={clearScoreboard} />
			</View>
			<Footer />
		</View>
	);
}


const styles = StyleSheet.create({
	list: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
	},

	listItem: {
		display: "flex",
		flexDirection: "row",
		borderBottomWidth: 1,
		backgroundColor: "white",
		borderBottomColor: "black",
		paddingVertical: 24,
		paddingHorizontal: 16,
		justifyContent: "space-around"
	},

	text: {
		fontSize: 24,
		color: "black",
	}
})
