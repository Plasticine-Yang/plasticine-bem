import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export const PACKAGE_ROOT = resolve(__dirname, '..')
export const SASS_SOURCE_PATH = resolve(PACKAGE_ROOT, 'src/sass')
export const DIST_PATH = resolve(PACKAGE_ROOT, 'dist')
