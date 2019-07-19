import * as rm from "reflect-metadata"
var repoMap:any = {};
export function getRepositoryMetadata(clazz:string, func:string):string {
    return repoMap[clazz][func];
}
export function Sql(value: string) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //descriptor.enumerable = value;
       // console.debug(descriptor);
        //console.debug(value);

        var className:string = target['constructor'].name;
        //console.debug(className);
        repoMap[className]= {};
        repoMap[className][descriptor.value.name] = value;
 
    };
}