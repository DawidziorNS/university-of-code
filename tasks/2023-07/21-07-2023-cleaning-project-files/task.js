const prefix = (files) => {
    const projects = [...new Set(files.map((file) => file.split('.')[0]))]
    return projects.map((p) => files.filter((file) => file.startsWith(p)))
}

const suffix = (files) => {
    const extensions = [...new Set(files.map((file) => file.split('.')[1]))]
    return extensions.map((p) => files.filter((file) => file.endsWith(p)))
}

const sorts = { prefix, suffix }
const cleanup = (files, sort) => sorts[sort](files)

console.log(cleanup(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix"))