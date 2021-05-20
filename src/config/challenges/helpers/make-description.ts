import { MarkdownUtil } from "utils/markdown";

interface MakeDescriptionParams {
	text: string;
	examples: Array<{
		example: string;
		returnedValue: string;
	}>;
}

export const makeDescription = ({ text, examples }: MakeDescriptionParams) => {
	const examplesFormatted = examples
		.map(({ example, returnedValue }) => `${example} // ${returnedValue}`)
		.join("\n");

	return (
		text + "\n\n**Exemplos:**\n" + MarkdownUtil.codeBlock(examplesFormatted)
	);
};
