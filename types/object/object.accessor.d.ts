declare global {
    /**
     *  Returns the computed size of string object.
     *
     *  @param str - The string object.
     *  @returns The computed size of string object.
     */
    function sizeOf(str: string): number;

    /**
     *  Returns the computed argument size of function.
     *
     *  @param func - The function object.
     *  @returns The computed argument size of function.
     */
    function sizeOf(func: () => unknown): number;

    /**
     *  Returns the computed size of map object.
     *
     *  @param map - The map object.
     *  @returns The computed size of map object.
     */
    function sizeOf(map: Map<unknown, unknown>): number;

    /**
     *  Returns the computed size of set object.
     *
     *  @param set - The set object.
     *  @returns The computed size of set object.
     */
    function sizeOf(set: Set<unknown>): number;

    /**
     *  Returns the computed size of array object.
     *
     *  @param arr - The array object.
     *  @returns The computed size of array object.
     */
    function sizeOf(arr: readonly unknown[]): number;

    /**
     *  Returns the computed data size of plain object.
     *
     *  @param obj - The plain data object.
     *  @returns The computed data size of plain object.
     */
    function sizeOf(obj: { [prop: string]: unknown }): number;

    /**
     *  Returns the computed size of argument.
     *
     *  ***Note***:
     *   - Only accepts customized arguments or objects that has 'size' or 'length' property.
     *
     *  @param arg - The custom argument.
     *  @returns The computed size of argument.
     */
    function sizeOf(arg: unknown): number;
}

export {}
