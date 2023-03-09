import { useContext } from "react";
import { Text, View } from "react-native";
import styles from "../styles/styles";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "./AppContext";

export default function GameboardScreen() {

	const { username, setUsername } = useContext(AppContext);
		const hdd = useContext(AppContext);

		console.log(hdd);



	return (
		<View style={styles.container}>
			<Header />
			<Text style={styles.title}>GAME BOROOR</Text>
			<Text>{username}</Text>
			<Footer />
		</View>
	);
}
