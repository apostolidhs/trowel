/// <reference path="INode.ts" />

declare module trl.frontend.syntax {
    
    export interface IParserOptions {
        loc?: boolean;
        tolerateErrors?: boolean;
    }    
    
    export interface IParser {
        parse(): IProgram;
        
        getExceptions(): IExceptionHandler;
    }
    
}