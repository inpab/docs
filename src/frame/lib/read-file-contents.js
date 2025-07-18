import fs from 'fs/promises'

import encodeBracketedParentheses from './encode-bracketed-parentheses'
import fm from './frontmatter'

/**
 * Read only the frontmatter from  file
 */
export default async function fmfromf(filepath) {
  let fileContent = await fs.readFile(filepath, 'utf8')

  fileContent = encodeBracketedParentheses(fileContent)

  return fm(fileContent, { filepath })
}
