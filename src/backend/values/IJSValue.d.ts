declare module trl.backend { 
    
    enum JSValues {
        undefined,
        null,
        boolean,
        string,
        number,
        object
    }
    
    interface IJSValue {
        getType(): JSValues;        
    }
    
}