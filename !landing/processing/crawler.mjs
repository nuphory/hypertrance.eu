import filehound from "filehound"
import fs from "fs"
const songs = filehound.create().path("./samples").ext("ogg").findSync()
fs.writeFile('songs_list.mjs', `export const songs = ` + JSON.stringify(songs), 'utf8', () => { 1 + 1 })