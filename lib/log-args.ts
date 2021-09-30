export function logArgs(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log("Function arguments: " + args);
        let result = originalMethod.apply(this, args);
        return result;
    }
}