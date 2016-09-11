module trl.utilities {
    
    export function assert(cond: any, msg?: string) {
        if(!cond) {
            throw new Error(`Assertion fail: ${msg}`);
        }
    }
    
    export function assertUnreachableStatement() {
        throw new Error(`reached unreachable statement`);
    }    
    
}