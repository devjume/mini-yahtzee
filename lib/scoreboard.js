import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback } from "react";

const STORAGE_KEY = "@scoreboard";

async function saveToScoreboard(roundata) {

  let tempArray = [];

  try {
    const currentScoreboard = await AsyncStorage.getItem(STORAGE_KEY);
    if (currentScoreboard !== null) {
      tempArray = JSON.parse(currentScoreboard);
    }
    tempArray.push(roundata);

		await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tempArray));
	} catch (error) {
		console.log("Error (saveToScoreboard):", error);
	}
}


async function clearAll() {
  try {
		await AsyncStorage.clear();
	} catch (error) {
		console.log("Error (clearAll):", error);
	}
}

export { saveToScoreboard, clearAll };
