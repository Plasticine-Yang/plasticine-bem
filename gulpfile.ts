import { series, src, dest } from 'gulp'
import { execaCommand } from 'execa'

import { DIST_PATH, SASS_SOURCE_PATH } from './constants'

const execUnbuild = () => {
  return execaCommand('npx unbuild')
}

const copySassSourceCode = () => {
  src(`${SASS_SOURCE_PATH}/**/*`).pipe(dest(`${DIST_PATH}/sass/plasticine-bem`))
  return Promise.resolve()
}

export default series(execUnbuild, copySassSourceCode)
