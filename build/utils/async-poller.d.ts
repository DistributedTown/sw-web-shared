export declare const asyncPoll: <T>(fn: () => Promise<T>, fnCondition: (result: T) => boolean, ms?: number, maxRetries?: number) => Promise<T>;
