import CONF from "../conf.json" with { type: "json" };
import { isStr, isEmptyStr } from '../guards/type/types.js';

/**
 *  Writes a message(s) from console at warning level.
 *
 *  @overload
 *  @param { any } m - The message to write.
 *
 *  @overload
 *  @param { ...any } d - The messages to write.
 */
function caution(...d) {
    if (CONF.CONSOLE.SILENT.WARN)
        return;

    if (d.length === 0) {
        console.warn("<NO_WARNING_DATA>");
        return;
    }

    console.warn(...d);
}

/**
 *  Writes a message(s) from console at info level.
 *
 *  @overload
 *  @param { any } m - The message to write.
 *
 *  @overload
 *  @param { ...any } d - The messages to write.
 */
function notice(...d) {
    if (CONF.CONSOLE.SILENT.INFO)
        return;

    if (d.length === 0) {
        console.info("<NO_NOTICE_DATA>");
        return;
    }

    console.info(...d);
}

/**
 *  Writes a message(s) from console at critical level.
 *
 *  @overload
 *  @param { any } m - The message to write.
 *
 *  @overload
 *  @param { ...any } d - The messages to write.
 */
function report(...d) {
    if (CONF.CONSOLE.SILENT.ERROR)
        return;

    if (d.length === 0) {
        console.error("<NO_REPORT_DATA>");
        return;
    }

    console.error(...d);
}

/**
 *  Writes a detailed message(s) from console at debug level.
 *
 *  @overload
 *  @param { any } m - The message to write.
 *
 *  @overload
 *  @param { ...any } d - The messages to write.
 */
function trace(...d) {
    if (CONF.CONSOLE.SILENT.DEBUG)
        return;

    if (d.length === 0) {
        console.debug("<NO_TRACE_DATA>");
        return;
    }

    console.debug(...d);
}

/**
 *  Writes a detailed message(s) from console at log level.
 *
 *  @param { ...any } d - The detailed messages to write.
 */
function verbose(...d) {
    if (CONF.CONSOLE.SILENT.VERBOSE)
        return;

    if (d.length === 0) {
        write("<NO_VERBOSE_DATA>");
        return;
    }

    write(...d);
}

/**
 *  Writes a message(s) from console at log level.
 *
 *  @overload
 *  @param { any } m - The message to write.
 *
 *  @overload
 *  @param { ...any } d - The messages to write.
 */
function write(...d) {
    if (CONF.CONSOLE.SILENT.LOG)
        return;

    if (d.length === 0) {
        console.log("<NO_WRITE_DATA>");
        return;
    }

    console.log(...d);
}

for (const M of [caution, notice, report, trace, verbose, write]) {
    const K = M.name;

    if (isStr(K) && !isEmptyStr(K) && !Object.hasOwn(globalThis, K))
        Object.defineProperty(globalThis, K, {
            value: M, writable: false, configurable: true, enumerable: true
        });
}
