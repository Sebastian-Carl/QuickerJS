import * as TG from "./type/types.js";

for (const G of Object.values(TG)) {
    const K = G.name;

    if (TG.isStr(K) && !TG.isEmptyStr(K) && !Object.hasOwn(globalThis, K))
        Object.defineProperty(globalThis, K, {
            value: G, writable: false, configurable: true, enumerable: true
        });
}
