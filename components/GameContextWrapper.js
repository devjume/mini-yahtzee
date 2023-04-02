import { useState, createContext } from "react";

export const GameContext = createContext(null);

export default function GameContextWrapper({children}) {
	const numberOfDices = 5;
	const numberOfThrows = 3;
	const minSpot = 1;
	const maxSpot = 6;
	const bonusPointLimit = 63;
	const bonusPoints = 50;
	const STORAGE_KEY = "@scoreboard";

	const [username, setUsername] = useState(null);
	const [showTabBar, setShowTabBar] = useState("none");
	
	return (
		<GameContext.Provider
			value={{
				username,
				setUsername,
				showTabBar,
				setShowTabBar,
				numberOfDices,
				numberOfThrows,
				minSpot,
				maxSpot,
				bonusPointLimit,
				bonusPoints,
				STORAGE_KEY,
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
