/// <reference path="../lexical/ILexer.ts" />

module trl.frontend.syntax {

    export interface INode {
        type: string;
        loc: lexical.ITokenSourceLocation
    }

    export interface IProgram extends INode, IJSContextInfo {
        body: IStatement[];
    }

    export interface IFunction extends INode, IJSContextInfo {
        id: IIdentifier;
        params: IIdentifier[];
        body: IBlockStatement;
    }

    export interface IStatement extends INode { }

    export interface IEmptyStatement extends IStatement { }

    export interface IBlockStatement extends IStatement {
        body: IStatement[];
    }

    export interface IExpressionStatement extends IStatement {
        expression: IExpression;
    }

    export interface IIfStatement extends IStatement {
        test: IExpression;
        consequent: IStatement;
        alternate: IStatement;
    }

    export interface IBreakStatement extends IStatement {
        label: IIdentifier;
    }

    export interface IContinueStatement extends IStatement {
        label: IIdentifier;
    }

    export interface IWithStatement extends IStatement {
        obj: IExpression;
        body: IStatement;
    }

    export interface ISwitchStatement extends IStatement {
        discriminant: IExpression;
        cases: ISwitchCase[];
    }

    export interface IReturnStatement extends IStatement {
        argument: IExpression;
    }
    
    export interface ILabeledStatement extends IStatement {
        label: IIdentifier;
        body: IStatement;
    }    

    export interface IThrowStatement extends IStatement {
        argument: IExpression;
    }

    export interface ITryStatement extends IStatement {
        block: IBlockStatement;
        handler: ICatchClause;
        finalizer: IBlockStatement;
    }

    export interface IWhileStatement extends IStatement {
        test: IExpression;
        body: IStatement;
    }

    export interface IDoWhileStatement extends IStatement {
        body: IStatement;
        test: IExpression;
    }

    export interface IForStatement extends IStatement {
        init: IVariableDeclaration | IExpression;
        test: IExpression;
        update: IExpression;
        body: IStatement;
    }

    export interface IForInStatement extends IStatement {
        left: IVariableDeclaration | IExpression;
        right: IExpression;
        body: IStatement;
        each: boolean;
    }
    
    export interface IDebuggerStatement extends IStatement { }

    export interface IDeclaration extends IStatement { }

    export interface IFunctionDeclaration extends IFunction, IDeclaration { }

    export interface IVariableDeclaration extends IDeclaration {
        declarations: IVariableDeclarator[];
        kind: string; //"var"
    }

    export interface IVariableDeclarator extends INode {
        id: IIdentifier;
        init: IExpression;
    }

    export interface IExpression extends INode { }

    export interface IThisExpression extends IExpression { }

    export interface IArrayExpression extends IExpression {
        elements: IExpression[];
    }

    export interface IObjectExpression extends IExpression {
        properties: IProperty[];
    }

    export interface IProperty extends INode {
        key: ILiteral | IIdentifier;
        value: IExpression;
        kind: string; //"init" | "get" | "set"
    }
    
    export interface IFunctionExpression extends IFunction, IExpression { } 

    export interface ISequenceExpression extends IExpression {
        expressions: IExpression[];
    }

    export interface IUnaryExpression extends IExpression {
        operator: string; //IUnaryOperator;
        prefix: boolean;
        argument: IExpression;
    }

    export interface IBinaryExpression extends IExpression {
        operator: string; //IBinaryOperator;
        left: IExpression;
        right: IExpression;
    }

    export interface IAssignmentExpression extends IExpression {
        operator: string; //IAssignmentOperator;
        left: IExpression;
        right: IExpression;
    }

    export interface IUpdateExpression extends IExpression {
        operator: string; //IUpdateOperator;
        argument: IExpression;
        prefix: boolean;
    }

    export interface ILogicalExpression extends IExpression {
        operator: string; //ILogicalOperator;
        left: IExpression;
        right: IExpression;
    }

    export interface IConditionalExpression extends IExpression {
        test: IExpression;
        alternate: IExpression;
        consequent: IExpression;
    }

    export interface INewExpression extends IExpression {
        callee: IExpression;
        arguments: IExpression[];
    }

    export interface ICallExpression extends IExpression {
        callee: IExpression;
        arguments: IExpression[];
    }

    export interface IMemberExpression extends IExpression {
        object: IExpression;
        property: IIdentifier | IExpression;
        computed: boolean;
    }

    export interface ISwitchCase extends INode {
        test: IExpression;
        consequent: IStatement[];
    }

    export interface ICatchClause extends INode {
        param: IIdentifier;
        body: IBlockStatement;
    }

    export interface IIdentifier extends INode {
        name: string;
    }

    export interface ILiteral extends INode {
        value: string | boolean | number | IRegExp;
    }
    
    export interface IRegExp { }
 
    /////////////////////////////////
    // Javascript runtime necessary information
    export interface IJSContext {
        strict: boolean;
        functionDeclarations: IFunctionDeclaration[];
        variableDeclarations: IVariableDeclaration[];
    }  
    
    export interface IJSContextInfo {
        jscontext?: IJSContext;
    }
}