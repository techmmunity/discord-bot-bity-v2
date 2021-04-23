import { Message } from "discord.js";

export const getEmojisLimit = (message: Message) => {
	const boosts = message.guild?.premiumSubscriptionCount || 0;

	if (boosts < 2) {
		return {
			regular: 50,
			animated: 50,
		};
	}

	if (boosts < 15) {
		return {
			regular: 100,
			animated: 100,
		};
	}

	if (boosts < 30) {
		return {
			regular: 150,
			animated: 150,
		};
	}

	// boosts >= 30
	return {
		regular: 250,
		animated: 250,
	};
};
