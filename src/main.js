import App from './App.svelte'

export default process
  ? App
  : new App({
      target: document.body,
    })
