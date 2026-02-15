export function ApplyMetadata<O>(option: O) {
  return function<T extends object>(target: new(...args: any) => T): new (...args: any) => T {
    return new Proxy(target, {
      construct: (ctx, argarray) => new ctx(option, ...argarray),
    });
  }
}
