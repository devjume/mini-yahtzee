import { useState, useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import HomeScreen from "./components/HomeScreen";
import GameboardScreen from "./components/GameboardScreen";
import ScoreboardScreen from "./components/GameboardScreen";
import { MAIN_COLOR, SECONDARY_COLOR } from "./styles/styles";

const Tab = createBottomTabNavigator();
import { AppContext } from "./components/AppContext";

export default function App() {
	const [username, setUsername] = useState("HKeepo");

	return (
		<AppContext.Provider value={{ username, setUsername }}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						headerStyle: {
							backgroundColor: MAIN_COLOR,
						},
						headerTintColor: SECONDARY_COLOR,
						headerTitleStyle: {
							fontWeight: "bold",
						},
						tabBarActiveBackgroundColor: SECONDARY_COLOR,
						tabBarActiveTintColor: MAIN_COLOR,
						tabBarInactiveBackgroundColor: MAIN_COLOR,
						tabBarInactiveTintColor: SECONDARY_COLOR,

						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							if (route.name === "Home") {
								iconName = "home";
							} else if (route.name === "Gameboard") {
								iconName = "casino";
							} else if (route.name === "Scoreboard") {
								iconName = "star";
							}

							return <MaterialIcons name={iconName} size={24} color={color} />;
						},
					})}
				>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Gameboard" component={GameboardScreen} />
					<Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
				</Tab.Navigator>
				<StatusBar style="light" backgroundColor={MAIN_COLOR} />
			</NavigationContainer>
		</AppContext.Provider>
	);
}
