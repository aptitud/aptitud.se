import App from './App.svelte'

export default typeof window === undefined
  ? App
  : new App({
      target: document.body,
    })
