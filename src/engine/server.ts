import { EditorLevelLibrary } from '../objects/editor-level-library'

import * as Bluebird from 'bluebird'

export async function waitServer(delay = 1000, timeout = 0) {
    const ell = new EditorLevelLibrary()

    let wait = true;

    if (timeout) {
        setTimeout(() => { wait = false }, timeout)
    }

    while (wait) {
        try {
            await ell.selectNothing()
            return true
        } catch (error) {
            await Bluebird.delay(delay)
        }
    }

    return false
}
