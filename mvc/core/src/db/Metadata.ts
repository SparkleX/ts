import "reflect-metadata"

export function Column(name: string) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("column:name", name, target.__proto__, propertyKey);
    };    
   // return Reflect.metadata("column:name", name);
}

export function Table(name: string) {
    return function (constructor: Function) {
        Reflect.defineMetadata("table:name", name, constructor.prototype);
    };
}

export function Sql(sql: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata("sql", sql, target.__proto__, descriptor.value.name);
    };
}