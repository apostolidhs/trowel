/// <reference path="values/JSUndefined.ts" />
/// <reference path="values/JSNull.ts" />

module trl.backend {

    export type JSFunctionCall = (thisArg: IJSValue, argumentsList: JSList) => IJSValue;

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

        public static createObject(cx: vm.JSExecutionContexts): JSObject {
            return new JSObject(cx);
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
        // object factory
        
        public static createList(vals: IJSValue[]): JSList {
            return new JSList(vals);
        }
        
        public static createArrayObject(cx: vm.JSExecutionContexts): JSArrayObject {
            return new JSArrayObject(cx);
        }
        //////////object factory////////////

        /////////////////////////////////////
        // Pure JS Value utilities

        public static fromNativeValue(val: any): IJSValue {
            if(val === undefined) {
                return JSApi.createUndefined();
            }
            else if(val === null) {
                return JSApi.createNull();
            }
            else if(_.isObject(val)) {
                return throwNotImplementedYet();
            }
            else if(_.isBoolean(val)) {
                return JSApi.createBoolean(val);
            }
            else if(_.isNumber(val)) {
                return JSApi.createNumber(val);
            }
            else if(_.isString(val)) {
                return JSApi.createString(val);
            }
            utilities.assertUnreachableStatement();
        }

        public static toNativeValue(val: IJSValue): any {
            switch (val.getType()) {
                case JSValues.undefined: 
                    return;
                    
                case JSValues.null: 
                    return null;
                    
                case JSValues.object: 
                    return throwNotImplementedYet(); //todo: convert object
                    
                case JSValues.boolean: 
                    return (val as JSBoolean).getValue();
                    
                case JSValues.number:
                    return (val as JSNumber).getValue();
                    
                case JSValues.string:
                    return (val as JSString).getValue();
            }
            utilities.assertUnreachableStatement();
        }

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

        public static isPrimitive(val: IJSValue): boolean {
            return val.getType() !== JSValues.object;
        }

        /////////////////////////////////////////
        // Type Conversion 

        public static toPrimitive(val: IJSValue, hint: JSString | JSNumber): IJSValue {
            return JSApi.isObject(val) ? (val as JSObject).objDefaultValue(hint) : val;
        }

        public static toBoolean(val: IJSValue): JSBoolean {
            switch (val.getType()) {
                case JSValues.undefined:
                case JSValues.null:
                    return JSApi.createBoolean(false);

                case JSValues.object:
                    return JSApi.createBoolean(true);

                case JSValues.boolean:
                    return val as JSBoolean;

                case JSValues.number:
                    const num = (val as JSNumber).getValue();
                    return JSApi.createBoolean(num !== 0 && !isNaN(num));

                case JSValues.string:
                    return JSApi.createBoolean((val as JSString).getValue() as any); // typescript cannot cast it to boolean because it is a string
            }
            utilities.assertUnreachableStatement();
        }

        public static toNumber(val: IJSValue, hint?: JSNumber): JSNumber {
            switch (val.getType()) {
                case JSValues.undefined:
                    return JSApi.createNumber(NaN);

                case JSValues.null:
                    return JSApi.createNumber(0);

                case JSValues.boolean:
                    const bool = (val as JSBoolean).getValue();
                    return JSApi.createNumber(bool ? 1 : 0);

                case JSValues.number:
                    return val as JSNumber;

                case JSValues.string:
                    return JSApi.createNumber(+(val as JSString).getValue());

                case JSValues.object:
                    return JSApi.toNumber(JSApi.toPrimitive(val, hint));
            }
            utilities.assertUnreachableStatement();
        }

        public static toInteger(val: IJSValue, hint?: JSNumber): JSNumber {
            const numVal = JSApi.toNumber(val, hint);
            let num = numVal.getValue();
            if (isNaN(num)) {
                num = 0;
            }
            else if (num === 0 || !isFinite(num)) {
                return numVal;
            }
            const int = Math.sign(num) * Math.floor(Math.abs(num)) as any;
            utilities.assert(Number.isInteger(int));
            return JSApi.createNumber(int);
        }

        private static toInnerNumber(val: IJSValue, mod: number, hint?: JSNumber): number {
            const numVal = JSApi.toNumber(val, hint);
            let num = numVal.getValue();
            if (isNaN(num) || num === 0 || !isFinite(num)) {
                return 0;
            }
            const posInt = Math.sign(num) * Math.floor(Math.abs(num));
            return posInt % Math.pow(2, mod);
        }

        public static toInt32(val: IJSValue, hint?: JSNumber): JSNumber {
            const int32bit = JSApi.toInnerNumber(val, 32, hint);
            return JSApi.createNumber(int32bit > Math.pow(2, 31) ? int32bit - Math.pow(2, 32) : int32bit);
        }

        public static toUint32(val: IJSValue, hint?: JSNumber): JSNumber {
            return JSApi.createNumber(JSApi.toInnerNumber(val, 32, hint));
        }

        public static toUint16(val: IJSValue, hint?: JSNumber): JSNumber {
            return JSApi.createNumber(JSApi.toInnerNumber(val, 16, hint));
        }

        public static toString(val: IJSValue, hint?: JSNumber): JSString {
            switch (val.getType()) {
                case JSValues.undefined:
                    return JSApi.createString("undefined");

                case JSValues.null:
                    return JSApi.createString("null");

                case JSValues.boolean:
                    const bool = (val as JSBoolean).getValue();
                    return JSApi.createString(bool ? "true" : "false");

                case JSValues.number:
                    return JSApi.createString((val as JSNumber).getValue().toString());

                case JSValues.string:
                    return val as JSString;

                case JSValues.object:
                    return JSApi.toString(JSApi.toPrimitive(val, hint));
            }
            utilities.assertUnreachableStatement();
        }

        public static toObject(val: IJSValue, hint?: JSNumber): JSObject {
            switch (val.getType()) {
                case JSValues.undefined:
                case JSValues.null:
                    JSApi.throwTypeErrorException()
                    return;

                case JSValues.boolean:
                    throwNotImplementedYet();

                case JSValues.number:
                    throwNotImplementedYet();

                case JSValues.string:
                    throwNotImplementedYet();

                case JSValues.object:
                    return val as JSObject;
            }
            utilities.assertUnreachableStatement();
        }

        public static checkObjectCoercible(val: IJSValue) {
            const type = val.getType();
            if (type === JSValues.undefined || type === JSValues.null) {
                JSApi.throwTypeErrorException()
            }
        }

        public static isCallable(val: IJSValue): JSBoolean {
            return JSApi.createBoolean(val.getType() === JSValues.object && (val as JSObject).jsCall);
        }

        public static sameValue(val1: IJSValue, val2: IJSValue): boolean {
            const type1 = val1.getType(),
                type2 = val2.getType();
            if (type1 !== type2) {
                return false;
            }
            else if (type1 === JSValues.undefined || type1 === JSValues.null) {
                return true;
            }
            else if (type1 === JSValues.number) {
                return (isNaN(type1) && isNaN(type2)) || (val1 as JSNumber).getValue() === (val2 as JSNumber).getValue();
            }
            else if (type1 === JSValues.string) {
                return (val1 as JSString).getValue() === (val2 as JSString).getValue();
            }
            else if (type1 === JSValues.boolean) {
                return (val1 as JSBoolean).getValue() === (val2 as JSBoolean).getValue();
            }
            utilities.assert(type1 === JSValues.object);
            return val1 === val2;
        }
        
        public static isFunctionObject(val: IJSValue): boolean {
            return JSApi.isObject(val) && val instanceof JSFunctionObject;
        }
        ///////////////Type Conversion///////////////       

        /////////////////////////////////////
        // Object Utilities 

        public static defineImmutableDataPropertyDescriptor(obj: JSObject, name: string, val: IJSValue) {
            obj.objDefineOwnProperty(
                JSApi.createString(name),
                JSPropertyDescriptor.createDataPropertyDescriptor(
                    val,
                    JSApi.createBoolean(false),
                    JSApi.createBoolean(false),
                    JSApi.createBoolean(false)
                ),
                true
            );
        }

        public static createNativeFunctionObject(cx: vm.JSExecutionContexts, nativeFunction: JSFunctionCall): JSNativeFunctionObject {
            return throwNotImplementedYet();
        }

        ///////////Object Utilities///////////       

        /////////////////////////////////////////
        // Exceptions

        public static throwReferenceErrorException(): any {
            throwNotImplementedYet();
        }

        public static throwTypeErrorException(): any {
            throwNotImplementedYet();
        }
        
        public static throwSyntaxError(): any {
            throwNotImplementedYet();
        }

        ///////////////Exceptions///////////////

    }

    export function throwNotImplementedYet(): any {
        throw new Error("Not implemented yet");
    }
}