module trl.backend {

    export enum JSSpecificationTypes {
        reference,
        list,
        completion,
        propertyDescriptor,
        propertyIdentifier,
        lexicalEnvironment,
        environmentRecord
    }

    export interface JSSpecificationType {
        getType(): JSSpecificationTypes;
    }

    export function JSGetValue(spec: JSSpecificationType): IJSValue | JSSpecificationType {
        if (spec.getType() !== JSSpecificationTypes.reference) {
            return spec;
        }
        const ref = spec as JSReference;
        let base = ref.getBase();
        if (ref.isUnresolvableReference()) {
            JSApi.throwReferenceErrorException();
            return;
        }
        if (ref.isPropertyReference()) {
            if (ref.hasPrimitiveBase()) {
                const obj = JSApi.toObject(base as IJSValue);
                const desc = obj.objGetProperty(ref.getReferencedName());
                if (desc instanceof JSUndefined) {
                    return desc;
                }
                const propDescr = desc as JSPropertyDescriptor;
                if (propDescr.isDataDescriptor()) {
                    return propDescr.jsvalue;
                }
                if (JSApi.isUndefined(propDescr.jsget)) {
                    return propDescr.jsget;
                }
                return (propDescr.jsget as JSCallableObject).objCall(base as IJSValue);
            }
            else {
                return (base as JSObject).objGet(ref.getReferencedName());
            }
        }
        else {
            return (base as JSEnviromentRecord).getBindingValue(ref.getReferencedName().getValue(), ref.isStrictReference());
        }
    }

    export function JSPutValue(global: JSGlobalObject, spec: JSSpecificationType, val: IJSValue) {
        if (spec.getType() !== JSSpecificationTypes.reference) {
            return spec;
        }
        const ref = spec as JSReference;
        let base = ref.getBase();
        if (ref.isUnresolvableReference()) {
            if (ref.isStrictReference()) {
                JSApi.throwReferenceErrorException();
                return;
            }
            global.objPut(ref.getReferencedName(), val, false);
        }
        else if (ref.isPropertyReference) {
            if(ref.hasPrimitiveBase()) {
                const obj = JSApi.toObject(base as IJSValue);
                if(!obj.objCanPut(ref.getReferencedName())) {
                    if(ref.isStrictReference()) {
                        JSApi.throwReferenceErrorException();
                    }
                    return;
                }
                const ownProp = obj.objGetOwnProperty(ref.getReferencedName());
                if(ownProp instanceof JSPropertyDescriptor && (ownProp as JSPropertyDescriptor).isDataDescriptor()) {
                    if(ref.isStrictReference()) {
                        JSApi.throwReferenceErrorException();
                    }
                    return;
                }
                const prop = obj.objGetProperty(ref.getReferencedName());
                if(prop instanceof JSPropertyDescriptor && (prop as JSPropertyDescriptor).isAccessorDescriptor()) {
                    ((prop as JSPropertyDescriptor).jsset as JSCallableObject).objCall((base as IJSValue), new JSList([ref.getReferencedName()]));
                }
                else {
                    // Else, this is a request to create an own property on the transient object O
                    // If Throw is true, then throw a TypeError exception.
                    throwNotImplementedYet();
                }
            }
            else {
                (base as JSObject).objPut(ref.getReferencedName(), val, ref.isStrictReference());
            }
        }
        else {
            (base as JSEnviromentRecord).setMutableBinding(ref.getReferencedName().getValue(), val, ref.isStrictReference());
        }
    }

}