export const codeBlock = (value: string, language?: string) =>
	`\`\`\`${language}${"\n"}${value}${"\n"}\`\`\``;
