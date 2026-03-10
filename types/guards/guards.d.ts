import { inferAsyncFuncResult, inferElementType, inferFuncResult, inferKeysOpt, inferResult } from "../inf";

declare global {
    /**
     *  Checks if the given argument is null.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isNull<T = unknown>(arg: T): arg is inferResult<T, null, false>;

    /**
     *  Checks if the given argument is undefined.
     *
     *  @param arg - The argument to check.
     *  @returns  The validated argument result.
     */
    function isUndefined<T = unknown>(arg: T): arg is inferResult<T, undefined, false>;

    /**
     *  Checks if the given argument is either null or undefined.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isNil<T = unknown>(arg: T): inferResult<T, null | undefined, false>;

    /**
     *  Checks if the given argument is string.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isStr<T = unknown>(arg: T): arg is inferResult<T, string, false>;

    /**
     *  Checks if the given string is empty.
     *
     *  @param str - The string to validate.
     *  @returns The validated string result.
     */
    function isEmptyStr(str: string): boolean;

    /**
     *  Checks if the given argument is number.
     *
     *  ***Note***:
     *   - `NaN` is not considered as valid number in this guard.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isNum<T = unknown>(arg: T): arg is inferResult<T, number, false>;

    /**
     *  Checks if the given argument is array object.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isArr<T = unknown>(arg: T): inferElementType<T, false>;

    /**
     *  Checks if the given argument is map object.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isMap<T = unknown>(arg: T): inferElementType<T, false>;

    /**
     *  Checks if the given argument is set oject.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isSet<T = unknown>(arg: T): inferElementType<T, false>;

    /**
     *  Checks if the given argument is plain object.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isObj<T = unknown>(arg: T): inferElementType<T, false>;

    /**
     *  Checks if the given argument is function.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument result.
     */
    function isFunc<T = unknown>(arg: T): arg is inferFuncResult<T, false>;

    /**
     *  Checks if the given function is anonymous.
     *
     *  @param f - The function to validate.
     *  @returns The validated function result.
     */
    function isFuncAnonymous<T = () => unknown>(func: T): func is inferFuncResult<T, false>;

    /**
     *  Checks if the given function is asynchronous.
     *
     *  @param f - The function to validate.
     *  @returns The validated function result.
     */
    function isAsyncFunc<T = () => unknown>(func: T): func is inferAsyncFuncResult<T, false>;

    /**
     *  Checks if the given property key is existing at target object.
     *
     *  @param obj - The target object.
     *  @param key - The property key to check.
     */
    function isMethod<T extends { [prop: string]: unknown }, P extends inferKeysOpt<T>>
        (obj: T, key: P): inferResult<T[P], () => unknown, false>;
}

export { }
