import { MutationDefinition, BaseQueryFn } from "@reduxjs/toolkit/query";
import { MutationObserverResult } from "@tanstack/react-query";

export type MutationModelStruct<ReturnValue, EntryValue> = [
    T: MutationDefinition<EntryValue, BaseQueryFn, string, ReturnValue, string>,
    S: MutationObserverResult<ReturnValue>
]