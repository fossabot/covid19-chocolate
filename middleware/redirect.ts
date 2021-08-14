import { Middleware } from '@nuxt/types'

const redirect: Middleware = ({ route, redirect }) => {
  if (route.path.includes('worker')) {
    redirect(
      'https://www.city.sagamihara.kanagawa.jp/sangyo/sangyo/1019826/index.html'
    )
  }
}

export default redirect
