export type FuncModelStruct<T, S = T> = (t?: T) => S extends void ? void : S;