## hw4：What is this?

此題程式碼如下
```javascript
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello

obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

分析如下:

**第一個console出來的值是2**

- `obj.inner.hello()` 可以改寫為 `obj.inner.hello.call(obj.inner)`

可以得知這是由`obj.inner`呼叫的, 就代表 `this` => `obj.inner`
所以這一題的`this.value` 就是`obj.inner.value` => 2

**第二個console出來的值也是2**

- `obj2.hello()`可以代換成`obj.inner.hello()` (因為前面有宣告const obj2 = obj.inner)

又可以代換如同第一題的`obj.inner.hello.call(obj.inner)` 等同上一題的形式,所以`this.value`的值一樣是2

**第三個console出來的值是undefined**

- `hello()` 

`hello()`前面沒有任何obejct去呼叫. 
  - 沒有的意思, 就是由全域去呼叫, 就像在全域 call function 一樣。

  - 全域物件, 在瀏覽器下可以當作 `window.hello()`, 或在 node.js 可以看成是 `global.hello()`.

- 既然沒有透過物件呼叫 `hello`，就只是普通執行一個 function 的話，`this` 會為預設值，而預設值會因為執行環境而有所不同。
    - node.js : `global`
    - 瀏覽器 : `window`
    - 嚴格模式 : `undefined`（ 無論 node.js or 瀏覽器 ）



