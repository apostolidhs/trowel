module trl.frontend.utilities {
    
    export function assert(cond: any, msg?: string) {
        if(!cond) {
            throw new Error(`Assertion fail: ${msg}`);
        }
    }
    
}