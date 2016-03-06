/// <reference path="values/JSUndefined.ts" />
/// <reference path="values/JSNull.ts" />

module trl.backend {
    
    export type JSPrimitive = JSUndefined | JSNull | JSBoolean | JSNumber | JSString;
    
    export class JSApi {
        
        /////////////////////////////////////
        // Pure JS Value Factory
        private static undefinedValue = new JSUndefined();
        public static createUndefined(): JSUndefined {
            return JSApi.undefinedValue;
        }
        
        public static createString(value: string): JSString {
            return new JSString(value);
        }
        
        public static createObject(): JSObject {
            return new JSObject();
        }
        
        public static createNumber(value: number): JSNumber {
            return new JSNumber(value);
        }
        
        private static nullValue = new JSNull();
        public static createNull(): JSNull {
            return JSApi.nullValue;
        }
        
        public static createBoolean(value: boolean): JSBoolean {
            return new JSBoolean(value);
        } 
        ////////Pure JS Value Factory//////////
        
        /////////////////////////////////////
        // Pure JS Value utilities
        
        public static isString(val: IJSValue): boolean {
            return val.getType() === JSValues.string;
        }
        
        public static isStringWithValue(val: IJSValue, str: string): boolean {
            return val.getType() === JSValues.string
                && (val as JSString).getValue() === str;
        }     
        
        public static isNumber(val: IJSValue): boolean {
            return val.getType() === JSValues.number;
        }
        
        public static isNumberWithValue(val: IJSValue, num: number): boolean {
            return val.getType() === JSValues.string
                && (val as JSNumber).getValue() === num;
        }   
        
        public static isBoolean(val: IJSValue): boolean {
            return val.getType() === JSValues.boolean;
        }
        
        public static isBooleanWithValue(val: IJSValue, is: boolean): boolean {
            return val.getType() === JSValues.string
                && (val as JSBoolean).getValue() === is;
        }        
        
        public static isNull(val: IJSValue): boolean {
            return val.getType() === JSValues.null;
        }   
        
        public static isUndefined(val: IJSValue): boolean {
            return val.getType() === JSValues.undefined;
        }                
        
        public static isObject(val: IJSValue): boolean {
            return val.getType() === JSValues.object;
        }         
        ////////Pure JS Value utilities//////////
        
        public static toObject(val: IJSValue): JSObject {
            return throwNotImplementedYet();
        }
        
        public static toBoolean(val: IJSValue): JSBoolean {
            return throwNotImplementedYet();
        }   
        
        public static isCallable(val: IJSValue): JSBoolean {
            return throwNotImplementedYet();
        }               
        
        /////////////////////////////////////////
        // Exceptions
        
        public static throwReferenceErrorException() {
            throwNotImplementedYet();
        }
        
        public static throwTypeErrorException() {
            throwNotImplementedYet();
        }        
        
        ///////////////Exceptions///////////////
        
        public static callObjectFunction(obj: JSObject, args?: any[]): IJSValue {
            return JSApi.createUndefined();
        }
    }
    
    export function throwNotImplementedYet(): any {
        throw new Error("Not implemented yet");
    }
}