/// <reference path="../../src/frontend/syntax/Parser.ts" />

describe('parse js source text', function() {
    
    it('every node in the source should read properly', function() {
        const testingExpects = trl.test.Utilities.getTestingExpects((<any>window).__html__, ["/syntax"]);

        _.each(testingExpects, testingExpect => {
            var parser = new trl.frontend.syntax.Parser(testingExpect.content, {loc: true});
            var parseNodes = parser.parse();
            
            // const stringifiedParseNodes = JSON.stringify(parseNodes);
            // const stringifiedExpectedNodes = JSON.stringify(testingExpect.expect);
            
            trl.test.Utilities.expectJsonEquality(
                parseNodes, 
                testingExpect
            );
        });  
        
    });
    
})