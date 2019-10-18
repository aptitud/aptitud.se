import App from './App.svelte'

export default typeof process !== 'undefined'
  ? App
  : new App({
      target: document.body
    })
