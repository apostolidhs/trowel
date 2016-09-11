module trl.backend {

    export class JSDeclerativeEnvironmentRecord extends JSEnviromentRecord {

        private mutableBindings: _.Dictionary<IJSValue>;
        private immutableBindings: _.Dictionary<IJSValue>;
        
        private unDeletableMutableBindings: _.Dictionary<boolean>;
        
        constructor() {
            super();
            this.mutableBindings = {};
            this.immutableBindings = {};
            this.unDeletableMutableBindings = {};
        }

        hasBinding(name: string): boolean {
            return _.has(this.mutableBindings, name) || _.has(this.immutableBindings, name);
        }

        createMutableBinding(name: string, del?: boolean) {
            utilities.assert(!_.has(this.immutableBindings, name) && !_.has(this.immutableBindings, name));
            this.mutableBindings[name] = JSApi.createUndefined();
            if (!del) {
                this.unDeletableMutableBindings[name] = true;
            }
        }

        setMutableBinding(name: string, val: IJSValue, strict?: boolean) {
            utilities.assert(_.has(this.mutableBindings, name) || _.has(this.immutableBindings, name));
            if (_.has(this.mutableBindings, name)) {
                this.mutableBindings[name] = val;
            } 
            else if (strict) {
                JSApi.throwReferenceErrorException();
            }
        }

        getBindingValue(name: string, strict?: boolean): IJSValue {
            utilities.assert(_.has(this.mutableBindings, name) || _.has(this.immutableBindings, name));
            if (_.has(this.immutableBindings, name) && this.immutableBindings[name] === undefined) {
                if (strict) {
                    JSApi.throwReferenceErrorException();
                }
                else {
                    return JSApi.createBoolean(false);
                }
            }
            else {
                return this.mutableBindings[name] || this.immutableBindings[name];
            }
        }

        deleteBinding(name: string): boolean {
            if (_.has(this.mutableBindings, name)) {
                if (this.unDeletableMutableBindings[name]) {
                    return false;
                }
                delete this.mutableBindings[name];
            }
            if (_.has(this.immutableBindings, name)) {
                delete this.immutableBindings[name];
            }
            return true;
        }

        implicitThisValue(): IJSValue {
            return JSApi.createUndefined();
        }

        createImmutableBinding(name: string) {
            utilities.assert(!_.has(this.immutableBindings, name));
            this.immutableBindings[name] = undefined;
        }

        initializeImmutableBinding(name: string, val: IJSValue) {
            utilities.assert(this.immutableBindings[name] === undefined);
            this.immutableBindings[name] = val;
        }
    }

}