import "reflect-metadata"

export function Column(name?: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("column:name", name, target.__proto__, propertyKey);
    };    
   // return Reflect.metadata("column:name", name);
}