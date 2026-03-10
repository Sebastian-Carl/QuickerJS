export type inferElement<T> =
    T extends Iterable ? Iterable<T> :
    T extends Iterator ? Iterator<T> :
    never[];

export type inferElementType<T, defaultT = unknown> =
    T extends Map<infer K, infer V> ? Map<K, V> :
    T extends Set<infer U> ? Set<U> :
    T extends readonly (infer V)[] ? readonly V[] :
    T extends { [prop in infer PK]: infer D } | ArrayLike<infer D> ? { [pKey in PK]: D } :
    defaultT;

export type inferResult<T, U, defaultT = unknown> =
    T extends U ? T : defaultT;

export type inferFuncResult<F, defaultF = unknown> =
    F extends () => infer R ? () => R : defaultF;

export type inferAsyncFuncResult<AF, defaultAF = unknown> =
    AF extends () => Promise<infer PR> ? () => Promise<PR> : defaultAF;

export type inferKeysOpt<T> =
    T extends { [prop in infer PK]: unknown } ? keyof T : string;
