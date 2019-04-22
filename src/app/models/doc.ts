
export enum DocType {
    TUTORIAL, DEMO, QUESTION, DOCUMENTATION
}

export interface Doc {
    owner_id: number;
    title: string;
    content: string;
    docType: DocType;
    language: string;
    comments: Array<any>;
    created_at: Date;
    modified_at: Date;
}
