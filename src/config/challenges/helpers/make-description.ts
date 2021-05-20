import { MarkdownUtil } from "utils/markdown";

interface MakeDescriptionParams {
	text: string;
	language?: "ts" | "js" | "java";
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

	return (
		text +
		"\n\n**Exemplos:**\n" +
		MarkdownUtil.codeBlock(examplesFormatted, language)
	);
};
