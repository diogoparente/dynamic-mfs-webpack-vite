import { Route } from 'react-router-dom'

interface Route {
  path: string
  Element: any
}

const pages = import.meta.glob('./pages/**/*.{ts,tsx}', { eager: true })

const routes: Route[] = []
let path: string
for (path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*?)(\.[^.]*$|$)/)?.[1]
  if (!fileName) {
    continue
  }

  const isDynamic = fileName.match(/^\[.*\]$/) // Check if the folder name is in [id] format TODO
  const normalizedPathName = isDynamic
    ? `:${fileName.substring(1, fileName.length - 1)}`
    : fileName.replace(/\/?index$/, '')

  routes.push({
    path: `/${normalizedPathName}`,
    Element: (pages[path] as any).default,
  })
}

export default routes
