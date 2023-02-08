export default function ({ $axios, redirect, $config }, inject) {
  const errorHandler = (error) => {
    console.log('🐛', error)
  }

  const onRequestHandler = (config) => {
    // get tokens from localStorage
    let tokens = localStorage.getItem('ar-auth')
    tokens = tokens ? JSON.parse(tokens).tokens : { access_token: null, refresh_token: null }

    // add header bearer tokens
    if (tokens.access_token) {
      config.headers = {
        Authorization: `Bearer ${tokens.access_token}`
      }
    }

    console.log('Making request to ' + config.url, tokens)
    return config
  }

  $axios.onRequest(onRequestHandler)
  $axios.onError(errorHandler)
  $axios.setBaseURL(process.env.base_url)

  const baseUrl = $config.base_url || process.env.base_url

  // Create a custom axios instance
  const Api = $axios.create()

  // Set baseURL to something different
  Api.setBaseURL(`${baseUrl}/api/`)
  Api.onError(errorHandler)
  Api.onRequest(onRequestHandler)

  // Inject to context as $Api
  inject('Api', Api)
}
