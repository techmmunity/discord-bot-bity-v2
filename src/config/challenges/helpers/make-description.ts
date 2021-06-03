import { markdownUtil } from "utils/markdown";

interface MakeDescriptionParams {
	text: string;
	language?: "java" | "js" | "ts";
	examples: Array<{
		example: string;
		returnedValue: string;
	}>;
}

export const makeDescription = ({
	language,
	text,
	examples,
}: MakeDescriptionParams) => {
	const examplesFormatted = examples
		.map(({ example, returnedValue }) => `${example} -> ${returnedValue}`)
		.join("\n\n");

	return `${text}\n\n**Exemplos:**\n${markdownUtil.codeBlock(
		examplesFormatted,
		language,
	)}`;
};
