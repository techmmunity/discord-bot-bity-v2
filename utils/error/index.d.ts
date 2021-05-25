export declare const ErrorUtil: {
    badRequest: (errors?: any[]) => never;
    conflict: (errors?: any[]) => never;
    forbidden: (errors?: any[]) => never;
    internal: (errors: any[]) => never;
    unauthorized: (errors: any[]) => never;
    notFound: (errors?: string[]) => never;
};
