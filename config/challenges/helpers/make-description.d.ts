interface MakeDescriptionParams {
    text: string;
    language?: "ts" | "js" | "java";
    examples: Array<{
        example: string;
        returnedValue: string;
    }>;
}
export declare const makeDescription: ({ language, text, examples, }: MakeDescriptionParams) => string;
export {};
