import "../console/console.js";
import { isArr, isFunc, isMap, isNil, isNum, isObj, isSet, isStr } from '../guards/type/types.js';

/**
 *  Returns the computed size or length of the given object.
 *
 *  ***Note***
 *   - Also accepts customized objects that has size and/or length property.
 *
 *  @overload
 *  @param { unknown } a - The custom object to get its size or length.
 *  @returns { number } The computed size or length of custom object.
 *
 *  @overload
 *  @param { string } s - The string object to get its length.
 *  @returns { number } The computed length of string.
 *
 *  @overload
 *  @param { Function } f - The function to get its arguments length.
 *  @returns { number } The computed length arguments of function.
 *
 *  @overload
 *  @param { Map<unknown, unknown> } m - The map object to get its contents size.
 *  @returns { number } The computed size of map object.
 *
 *  @overload
 *  @param { Set<unknown> } sO - The set object to get its contents size.
 *  @returns { number } The computed size of set object.
 *
 *  @overload
 *  @param { readonly unknown[] } aO - The array object to get its elements length.
 *  @returns { number } The computed length elements of array object.
 *
 *  @overload
 *  @param {{ [prop: string]: unknown }} o - The plain object to get its key-pair data length.
 *  @returns { number } The computed key-pair data length of plain object.
 */
export function sizeOf(a) {
    if (isNil(a))
        return -1;

    if (isSet(a) || isMap(a) || Object.hasOwn(a, "size")) {
        const SIZE = parseInt(a.size, 10);

        if (!isNum(SIZE))
            throw new TypeError("sizeOf(): Expects a size property with valid numeric value!");

        return SIZE;
    }

    if (isArr(a) || isStr(a) || isFunc(a) || isObj(a) || Object.hasOwn(a, "length")) {
        const RAW_LEN = isObj(a) ? Object.keys(a).length : a.length;
        const PARSED_LEN = parseInt(RAW_LEN, 10);

        if (!isNum(PARSED_LEN))
            throw new TypeError("sizeOf(): Expects a length property with valid numeric value!");

        return PARSED_LEN;
    }

    return -1;
}
