// eslint-disable-next-line no-promise-executor-return
export const requestTimeout = (prom: Promise<any>, time: number) => Promise.race([prom, new Promise((_r, rej) => setTimeout(rej, time))]);
