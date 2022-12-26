// eslint-disable-next-line import/no-unresolved
import { defineBuildConfig } from 'unbuild'

import { DIST_PATH } from './constants'

export default defineBuildConfig({
  entries: ['src/index'],
  outDir: DIST_PATH,
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
