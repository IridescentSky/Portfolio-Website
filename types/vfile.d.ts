import {VFile} from 'vfile'

declare module 'vfile' {
    interface DataMap {
        readingTime: {
            text: string,
            minutes: number,
            time: number,
            words: number,
        }
    }
}