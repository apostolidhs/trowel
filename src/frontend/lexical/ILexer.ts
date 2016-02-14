module trl.frontend.lexical {
	
    export enum TokenType {
        keyword = 1,
        identifier,
        literal,
        punctuation,
        comment,
        eof,
        error
    }    
    
    export enum LiteralSubType {
        string = 1,
        number,
        null,
        boolean
    };
    
    export interface ITokenPosition  {
        line: number;
        column: number;
    }

    export interface ITokenSourceLocation {
        source?: string;
        start: ITokenPosition;
        end: ITokenPosition;
    }
                
    export interface IToken {
        type: string | TokenType,
        value: any,
        subType?: string | LiteralSubType,
        loc?: ITokenSourceLocation
    }

    export interface ILexerOptions {
        loc?: boolean;
        readableTokensMode?: boolean;
    }

    export interface ILexer {
        //get next token
        nextToken(): IToken;
        
        // check if there is next token
        hasNext(): boolean;
        
        // returns the last parsed token
        latestToken(): IToken;
        
        // acts like looking forward by returning the next token.
        // nextToken(), and hasToken() does not effected
        lookAheadNextToken(): IToken;  
        
        // check if the argument is type of error type
        isError(token: IToken): boolean;
        
        // check if the argument is type of end of file type
        isEof(token: IToken): boolean;
        
        // check if the argument is type of literan type
        isLiteral(token: IToken): boolean;
        
        // check if the argument is type of punctuation type
        isPunctuation(token: IToken): boolean;
        
        // check if the argument is type of keyword type
        isKeyword(token: IToken): boolean;
        
        // check if the argument is type of identifier type
        isIdentifier(token: IToken): boolean;

        // check if the argument is type of punctuation type
        // and is equal with the specific value
        isPunctuationValue(token: IToken, value: string): boolean;
        
        // check if the argument is type of keyword type
        // and is equal with the specific value
        isKeywordValue(token: IToken, value: string): boolean;
        
        // check if the argument is type of identifier type
        // and is equal with the specific value
        isIdentifierValue(token: IToken, value: string): boolean;
        
        // consume the next token if its type is punctuation
        // and is equal with the specific value
        matchPunctuation(value: string);
        
        // consume the next token if its type is keyword
        // and is equal with the specific value
        matchKeyword(value: string);
        
        // returns the current position of cursor is the source stream
        getCurrentCursorPos(): ITokenPosition;
    }
}

