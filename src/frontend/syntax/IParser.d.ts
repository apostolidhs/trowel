/// <reference path="INode.ts" />

declare module trl.frontend.syntax {
    
    export interface IParserOptions {
        loc?: boolean;
    }    
    
    export interface IParser {
        parse(): IProgram;
    }
    
}