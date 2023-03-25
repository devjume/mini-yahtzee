import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MAIN_COLOR, ACCENT_COLOR, SECONDARY_COLOR } from "../styles/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { GameContext } from "./GameContextWrapper";

export default function CustomTabNav({ children, tab }) {
	const { showTabBar } = useContext(GameContext);

	return (
		<NavigationContainer>
			<tab.Navigator
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
					tabBarStyle: { display: showTabBar },

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
				{children}
			</tab.Navigator>
		</NavigationContainer>
	);
}
