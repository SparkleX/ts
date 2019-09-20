import "reflect-metadata"

export function Table(name?: string) {
    return function (constructor: Function) {
        Reflect.defineMetadata("table:name", name, constructor.prototype);
    };
}

