## Redux 如何解決非同步（例如說 call API 拿資料）的問題

Redux 在沒有引入 middleware 前的運作都是同步的，引入非同步的 middleware 就可以派分出非同步的 action。讓 action 傳到 reducer 以前再做一些額外的處理，把處理完後產出的新 action 傳到 reducer。

Redux Middleware 的威力很強，讓第三方的程式嵌入 Redux 的運作中。而 redux-thunk 和 redux-promise 兩套 redux middleware 的 library 可以解決非同步的問題。