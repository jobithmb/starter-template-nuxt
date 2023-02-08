export default (context, inject) => {
  const auth = {
    isLoggedIn: false,
    user: null
  }

  // Inject $auth in Vue, context and store.
  inject('auth', auth)
  // For Nuxt <= 2.12, also add 👇
  context.$auth = auth
}
