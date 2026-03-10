/**
 *  Checks if the given argument is null.
 *
 *  @param { unknown } a - The argument to validate.
 *  @returns { a is null } The validated argument result.
 */
export function isNull(a) {
    return a === null;
}

/**
 *  Checks if the given argument is undefined.
 *
 *  @param { unknown } a - The argument to check.
 *  @returns { a is undefined } The validated argument result.
 */
export function isUndefined(a) {
    return a === undefined;
}

/**
 *  Checks if the given argument is either null or undefined.
 *
 *  @template { unknown } T
 *  @param { T } a - The argument to validate.
 *  @returns { a is T extends null ? null : T extends undefined ? undefined : false } The validated argument result.
 */
export function isNil(a) {
    return a === null || a === undefined;
}

/**
 *  Checks if the given argument is string.
 *
 *  @param { unknown } a - The argument to validate.
 *  @returns { a is string } The validated argument result.
 */
export function isStr(a) {
    return typeof a === "string" || a instanceof String;
}

/**
 *  Checks if the given string is empty.
 *
 *  @param { string } s - The string to validate.
 *  @returns { boolean } The validated string result.
 */
export function isEmptyStr(s) {
    return isStr(s) && s.trim().length === 0;
}

/**
 *  Checks if the given argument is number.
 *
 *  ***Note***:
 *   - `NaN` is not considered as valid number in this guard.
 *
 *  @param { unknown } a - The argument to validate.
 *  @returns { a is number } The validated argument result.
 */
export function isNum(a) {
    return (typeof a === "number" || a instanceof Number) && !Number.isNaN(a);
}

/**
 *  Checks if the given argument is array object.
 *
 *  @template { unknown } T
 *  @param { T } a - The argument to validate.
 *  @returns { a is import('../../../types/inf').inferElementType<T, false> } The validated argument result.
 */
export function isArr(a) {
    return typeof a === "object" && Array.isArray(a);
}

/**
 *  Checks if the given argument is map object.
 *
 *  @template { unknown } T
 *  @param { T } a - The argument to validate.
 *  @returns { a is import('../../../types/inf').inferElementType<T, false> } The validated argument result.
 */
export function isMap(a) {
    return typeof a === "object" && typeof a.has === "function" && a instanceof Map;
}

/**
 *  Checks if the given argument is set oject.
 *
 *  @template { unknown } T
 *  @param { T } a - The argument to validate.
 *  @returns { a is import('../../../types/inf').inferElementType<T, false> } The validated argument result.
 */
export function isSet(a) {
    return typeof a === "object" && typeof a.has === "function" && a instanceof Set;
}

/**
 *  Checks if the given argument is plain object.
 *
 *  @template { unknown } T
 *  @param { T } a - The argument to validate.
 *  @returns { a is import('../../../types/inf').inferElementType<T, false> } The validated argument result.
 */
export function isObj(a) {
    return typeof a === "object" && !(isArr(a) || isFunc(a) || isMap(a) || isSet(a));
}

/**
 *  Checks if the given argument is function.
 *
 *  @param { unknown } a - The argument to validate.
 *  @returns { a is Function } The validated argument result.
 */
export function isFunc(a) {
    return typeof a === "function" && typeof a.call === "function";
}

/**
 *  Checks if the given function is anonymous.
 *
 *  @template { () => unknown } T
 *  @param { unknown } f - The function to validate.
 *  @returns { f is T extends () => infer R ? () => R : false } The validated function result.
 */
export function isFuncAnonymous(f) {
    return isFunc(f) && (isNil(a.name) || isEmptyStr(a.name));
}

/**
 *  Checks if the given function is asynchronous.
 *
 *  @template { () => unknown } T
 *  @param { T } f - The function to validate.
 *  @returns { f is T extends () => Promise<infer PT> ? () => Promise<PT> : false } The validated function result.
 */
export function isAsyncFunc(f) {
    return isFunc(f) && !isNil(f?.constructor) && f.constructor.name === "AsyncFunction";
}

/**
 *  Checks if the given property key is existing at target object.
 *
 *  @template {{ [prop: string]: unknown }} T
 *  @template { import('../../types/inf').inferKeysOpt<T> } P
 *  @param { T } o - The target object.
 *  @param { P } mk - The property key to check.
 *  @returns { import('../../../types/inf').inferResult<T[P], () => unknown, false> }
 */
export function isMethod(o = {}, mk) {
    if (!isObj(o))
        throw new TypeError("isMethod(): Expects a valid object ({})!");

    if (!isStr(mk))
        throw new TypeError("isMethod(): Expects a string format key!");

    const O_N = Object.keys(o).length;

    if (O_N === 0) {
        caution("isMethod(): Expects a non-empty object! (Exited with false)");
        return false;
    }

    return isFunc(o[mk]);
}
