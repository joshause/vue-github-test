import marked from 'marked'

const renderer = new marked.Renderer()

/**
 * modify anchor tag for Non-English languages
 *
 * @override
 * @param {any} text
 * @param {any} level
 * @returns
 */
renderer.heading = (text, level) => {
  const slug = text.replace(/<(?:.|\n)*?>/gm, '').toLowerCase().replace(/[\s\n\t]+/g, '-')
  return `<h${level} id="${slug}">${text}</h${level}>`
}

marked.setOptions({
  renderer,
  breaks: true,
  gfm: true
})

export default marked
