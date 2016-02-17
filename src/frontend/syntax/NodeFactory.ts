/// <reference path="INode.ts" />

module trl.frontend.syntax {
    
    export class NodeFactory {
        
        constructor(private enablePos: boolean) {}
        
        private createNode(node, loc?: lexical.ITokenSourceLocation) {
            if(this.enablePos) {
                node.loc = loc;
            } 
            return node;
        }
        
        public createProgram(body: IStatement[], loc?: lexical.ITokenSourceLocation): IProgram {
            return this.createNode({
                type: "Program",
                body
            }, loc);
        }      
        
        public createStatementEmpty(loc?: lexical.ITokenSourceLocation): IEmptyStatement {
            return this.createNode({
                type: "EmptyStatement"
            }, loc);            
        }
        
        public createStatementBlock(body: IStatement[], loc?: lexical.ITokenSourceLocation): IBlockStatement {
            return this.createNode({
                type: "BlockStatement",
                body
            }, loc);               
        }
        
        public createStatementExpression(expression: IExpression, loc?: lexical.ITokenSourceLocation): IExpressionStatement {
            return this.createNode({
                type: "ExpressionStatement",
                expression
            }, loc);               
        }
        
        public createStatementIf(test: IExpression, consequent: IStatement, alternate?: IStatement, loc?: lexical.ITokenSourceLocation): IIfStatement {
            return this.createNode({
                type: "IfStatement",
                test,
                consequent,
                alternate
            }, loc); 
        }
        
        public createStatementBreak(label: IIdentifier, loc?: lexical.ITokenSourceLocation): IBreakStatement {
            return this.createNode({
                type: "BreakStatement",
                label
            }, loc); 
        }
        
        public createStatementContinue(label: IIdentifier, loc?: lexical.ITokenSourceLocation): IContinueStatement {
            return this.createNode({
                type: "ContinueStatement",                
                label
            }, loc); 
        }
        
        public createStatementWith(obj: IExpression, body: IStatement, loc?: lexical.ITokenSourceLocation): IWithStatement {
            return this.createNode({
                type: "WithStatement",                
                obj,
                body
            }, loc); 
        }        
        
        public createStatementSwitch(discriminant: IExpression, cases: ISwitchCase[], loc?: lexical.ITokenSourceLocation): ISwitchStatement {
            return this.createNode({
                type: "SwitchStatement",                
                discriminant,
                cases
            }, loc);
        }
        
        public createStatementReturn(argument: IExpression, loc?: lexical.ITokenSourceLocation): IReturnStatement {
            return this.createNode({
                type: "ReturnStatement",                
                argument
            }, loc);
        }
        
        public createStatementLabeled(label: IIdentifier, body: IStatement, loc?: lexical.ITokenSourceLocation): ILabeledStatement {
            return this.createNode({
                type: "LabeledStatement",                
                label,
                body
            }, loc);
        }        
        
        public createStatementThrow(argument: IExpression, loc?: lexical.ITokenSourceLocation): IThrowStatement {
            return this.createNode({
                type: "ThrowStatement",                
                argument
            }, loc);
        }
        
        public createStatementTry(block: IBlockStatement, handler: ICatchClause, finalizer: IBlockStatement, loc?: lexical.ITokenSourceLocation): ITryStatement {
            return this.createNode({
                type: "TryStatement",                
                block,
                handler,
                finalizer
            }, loc);
        }
        
        public createStatementWhile(test: IExpression, body: IStatement, loc?: lexical.ITokenSourceLocation): IWhileStatement {
            return this.createNode({
                type: "WhileStatement",                
                test,
                body
            }, loc);
        }
        
        public createStatementDoWhile(body: IStatement, test: IExpression, loc?: lexical.ITokenSourceLocation): IDoWhileStatement {
            return this.createNode({
                type: "DoWhileStatement",                
                body,
                test
            }, loc);
        }
        
        public createStatementFor(init: IVariableDeclaration | IExpression, test: IExpression, update: IExpression, body: IStatement, loc?: lexical.ITokenSourceLocation): IForStatement {
            return this.createNode({
                type: "ForStatement",                
                init,
                test,
                update,
                body
            }, loc);
        }
        
        public createStatementForIn(left: IVariableDeclaration | IExpression, right: IExpression, body: IStatement, each: boolean, loc?: lexical.ITokenSourceLocation): IForInStatement {
            return this.createNode({
                type: "ForInStatement",                
                left,
                right,
                body,
                each
            }, loc);
        }
        
        public createStatementDebugger(loc?: lexical.ITokenSourceLocation): IDebuggerStatement {
            return this.createNode({
                type: "ForInStatement",
                loc
            }, loc);
        }
        
        public createDeclarationFunction(id: IIdentifier, params: IIdentifier[], body: IBlockStatement, loc?: lexical.ITokenSourceLocation): IFunctionDeclaration {
            return this.createNode({
                type: "FunctionDeclaration",                
                id,
                params,
                body
            }, loc);
        }
        
        public createDeclarationVariable(declarations: IVariableDeclarator[], loc?: lexical.ITokenSourceLocation): IVariableDeclaration {
            return this.createNode({
                type: "VariableDeclaration",                
                declarations,
                kind: "var"
            }, loc);
        }
        
        public createVariableDeclarator(id: IIdentifier, init: IExpression, loc?: lexical.ITokenSourceLocation): IVariableDeclarator {
            return this.createNode({
                type: "VariableDeclarator",                
                id,
                init
            }, loc);
        }
        
        public createExpressionThis(loc?: lexical.ITokenSourceLocation): IThisExpression {
            return this.createNode({
                type: "ThisExpression",
                loc
            }, loc);
        }
        
        public createExpressionArray(elements: IExpression[], loc?: lexical.ITokenSourceLocation): IArrayExpression {
            return this.createNode({
                type: "ArrayExpression",                
                elements
            }, loc);
        }
        
        public createExpressionObject(properties: IProperty[], loc?: lexical.ITokenSourceLocation): IObjectExpression {
            return this.createNode({
                type: "ObjectExpression",                
                properties
            }, loc);
        }
        
        public createObjectProperty(key: ILiteral | IIdentifier, value: IExpression, kind: string, loc?: lexical.ITokenSourceLocation): IProperty {
            return this.createNode({
                type: "Property",                
                key,
                value,
                kind
            }, loc);
        }
        
        public createExpressionFunction(id: IIdentifier, params: IIdentifier[], body: IBlockStatement, loc?: lexical.ITokenSourceLocation): IFunctionExpression {
            return this.createNode({
                type: "FunctionExpression",                
                id,
                params,
                body
            }, loc);
        }               
        
        public createExpressionSequence(expressions: IExpression[], loc?: lexical.ITokenSourceLocation): ISequenceExpression {
            return this.createNode({
                type: "SequenceExpression",                
                expressions
            }, loc);
        }
        
        public createExpressionUnary(operator: string, prefix: boolean, argument: IExpression, loc?: lexical.ITokenSourceLocation): IUnaryExpression {
            return this.createNode({
                type: "UnaryExpression",                
                operator,
                prefix,
                argument
            }, loc);
        }
        
        public createExpressionBinary(operator: string, left: IExpression, right: IExpression, loc?: lexical.ITokenSourceLocation): IBinaryExpression {
            return this.createNode({
                type: "BinaryExpression",                
                operator,
                left,
                right
            }, loc);
        }
        
        public createExpressionAssignment(operator: string, left: IExpression, right: IExpression, loc?: lexical.ITokenSourceLocation): IAssignmentExpression {
            return this.createNode({
                type: "AssignmentExpression",                
                operator,
                left,
                right
            }, loc);
        }
        
        public createExpressionUpdate(operator: string, argument: IExpression, prefix: boolean, loc?: lexical.ITokenSourceLocation): IUpdateExpression {
            return this.createNode({
                type: "UpdateExpression",                
                operator,
                argument,
                prefix
            }, loc);
        }
        
        public createExpressionLogical(operator: string, left: IExpression, right: IExpression, loc?: lexical.ITokenSourceLocation): ILogicalExpression {
            return this.createNode({
                type: "LogicalExpression",                
                operator,
                left,
                right
            }, loc);
        }
        
        public createExpressionConditional(test: IExpression, alternate: IExpression, consequent: IExpression, loc?: lexical.ITokenSourceLocation): IConditionalExpression {
            return this.createNode({
                type: "ConditionalExpression",                
                test,
                alternate,
                consequent
            }, loc);
        }
        
        public createExpressionNew(callee: IExpression, args: IExpression[], loc?: lexical.ITokenSourceLocation): INewExpression {
            return this.createNode({
                type: "NewExpression",                
                callee,
                arguments: args
            }, loc);
        }
        
        public createExpressionCall(callee: IExpression, args: IExpression[], loc?: lexical.ITokenSourceLocation): ICallExpression {
            return this.createNode({
                type: "CallExpression",                
                callee,
                arguments: args
            }, loc);
        }
        
        public createExpressionMember(object: IExpression, property: IIdentifier | IExpression, computed: boolean, loc?: lexical.ITokenSourceLocation): IMemberExpression {
            return this.createNode({
                type: "MemberExpression",                
                object,
                property,
                computed
            }, loc);
        }
        
        public createSwitchCase(test: IExpression, consequent: IStatement[], loc?: lexical.ITokenSourceLocation): ISwitchCase {
            return this.createNode({
                type: "SwitchCase",                
                test,
                consequent
            }, loc);
        }
        
        public createCatchClause(param: IIdentifier, body: IBlockStatement, loc?: lexical.ITokenSourceLocation): ICatchClause {
            return this.createNode({
                type: "CatchClause",                
                param,
                body
            }, loc);
        }
        
        public createIdentifier(name: string, loc?: lexical.ITokenSourceLocation): IIdentifier {
            return this.createNode({
                type: "Identifier",                
                name
            }, loc);
        }
        
        public createLiteral(value: string | boolean | number | IRegExp, loc?: lexical.ITokenSourceLocation): ILiteral {
            return this.createNode({
                type: "Literal",                
                value
            }, loc);
        }
       
    }
    
}