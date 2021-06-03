interface MakeDescriptionParams {
    text: string;
    language?: "java" | "js" | "ts";
    examples: Array<{
        example: string;
        returnedValue: string;
    }>;
}
export declare const makeDescription: ({ language, text, examples, }: MakeDescriptionParams) => string;
export {};
