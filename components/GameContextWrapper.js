import { useState, createContext } from "react";

export const GameContext = createContext(null);

export default function GameContextWrapper({children}) {
	
  const [username, setUsername] = useState(null);
  const [showTabBar, setShowTabBar] = useState("none");
  const [throwCounter, setThrowCounter] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const numberOfDices = 5;
  const numberOfThrows = 3;
  const minSpot = 1;
  const maxSpot = 6;
  const bonusPointLimit = 63;
  const bonusPoints = 50;

  return (
		<GameContext.Provider
			value={{
				username,
				setUsername,
				showTabBar,
				setShowTabBar,
				numberOfDices,
				throwCounter,
        totalPoints,
				setThrowCounter,
				numberOfThrows,
				minSpot,
				maxSpot,
				bonusPointLimit,
        bonusPoints
			}}
		>
			{children}
		</GameContext.Provider>
	);
}
