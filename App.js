import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MAIN_COLOR } from "./styles/theme";

import GameContextWrapper from "./components/GameContextWrapper";
import CustomTabNav from "./components/CustomTabNav";

import HomeScreen from "./components/HomeScreen";
import GameboardScreen from "./components/GameboardScreen";
import ScoreboardScreen from "./components/ScoreboardScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<GameContextWrapper>
			<CustomTabNav tab={Tab}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Gameboard" component={GameboardScreen} />
				<Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
			</CustomTabNav>
			<StatusBar style="light" backgroundColor={MAIN_COLOR} />
		</GameContextWrapper>
	);
}
