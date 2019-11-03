## React Router 背後的原理你猜是怎麼實作的？

猜不出來, 我直接google了. 

路由簡單來說就是當url發生變化時，web界面也會隨之改變。
React也有自己的路由系統，那就是React Router路由系統。

![](https://upload-images.jianshu.io/upload_images/2913413-0fdeb73beff34294.png?imageMogr2/auto-orient/strip|imageView2/2/w/622/format/webp)

首先，`<Link>` 可以更新 URL，而 `<Route>` 基於 URL 改變 render

`<Route>` 會根據 URL 比對路徑並渲染，`<Link>` 也可以更改 URL，但兩者間並沒有牽起連帶關係

React Router 運作的機制透過 `history` 去監聽瀏覽器 URL 的變化，來實現實現 URL 與 UI 同步。

而這個History 主要分為二種不同的轉址方式：

### browserHistory：
- 原理：利用 HTML5 的 History API (history.pushState(),  replaceState(), popstate()) 進行網址的修改
- 優點：網址簡潔
- 缺點：History API 是 HTML5 的特性，因此較老舊的瀏覽器則不支援，且需要搭配後端轉址設定

### hashHistory：
- 原理：利用瀏覽器不將錨點變化視做頁面變化的特性來轉址，透過onhashchange 來偵測網址變更
- 優點：適用所有瀏覽器，且不需要搭配後端轉址
- 缺點：網址中會有 # ，視覺上較不簡潔


[來源](http://zhenhua-lee.github.io/react/history.html)

## SDK 與 API 的差別是什麼？
總的來說，兩者沒有值得比較的區別，因為是具有關聯性的兩種東西。

### SDK: 
概念：軟件開發工具包（SDK，全稱：Software Development Kit）
翻譯過來——軟件開發工具包,就相當於很多API和其他文件的集合體，你可以用這個完成某一個事情。

整個計算器產品可以看做是一個SDK，它裡面有API集合（計算器），說明文檔（說明書），以及一些其他文件。
這個SDK的功能就是計算，可能要算什麼不確定，但是你可以通過這個SDK中的某個方法完成，實現你的目的。

### API
概念：API（Application Programming Interface,應用程序編程接口）
其實就是別人已經寫好的可以實現特定功能的函數，而你只需要根據他提供好的接口，也就是調用他的方法，傳入他規定的參數，然後這個函數就會幫你實現這些功能。

比如別人寫好了一個數字求和的方法sum(int a, int b)。
提供給你一個API接口——你只需要調用它這個sum()函數，然後傳入這個a，b的值，然後就可以得到計算的結果，你不需要知道這個方法是怎麼實現的，知道該怎麼調用即可。

### SDK和API的區別:

API 是一個具體的函數, 一個確定的功能, 已經明確了它的作用. 
SDK 就是很多方法的集合體, 是一個工具包. 

比如你要做加法，你就調用計算機SDK的加法API，要做減法就調用減法API，無論你想完成什麼計算，SDK裡總有能實現的方法。 



### 如何選擇API和SDK對接

#### 選擇API
優勢:API開發成本低，對接比較簡單，可以快速驗證商業模式和用戶體驗。
劣勢:API會經過對接平台，廠商可以獲取對接平台相關數據信息。

#### 選擇SDK
優勢:SDK對接後的功能比較穩定，響應速度快，而且對接平台相關數據不會被獲取。
劣勢:需要開發的環節較多，開發工作量大，對接週期略長。

所以，在實際開發過程中，如果只是簡單功能調用，還是使用API​​更快速便捷一些；如果是繁瑣複雜的功能，多數情況下還是使用SDK更穩妥一些。

[來源](https://juejin.im/post/5cf63df0f265da1bc94edab0)

## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

前後端都要設定:

### fetch
fetch在某種情況下，無論是同域還是跨域ajax請求都不會帶上cookie，只有當設置了`credentials`時時才會帶上該`ajax`請求所在域的cookie，server端需要設置header `Access-Control-Allow-Credentials: true`，否則瀏覽器會因為安全限製而報錯，拿不到response. 

```javaScript
fetch(url, {
    credentials: "include", // include, same-origin, omit
})
```

後端:
`Access-Control-Allow-Credentials = true`

### axios, jQuery
axios和jQuery在同域ajax請求時會帶上cookie，**跨域請求不會**，**跨域請求需要設置withCredentials和response header**

前端(axios):
```javaScript
axios.get('http://server.com', {withCredentials: true})
```
後端:
`Access-Control-Allow-Credentials = true`

前端:(jQuery)
```javaScript
$.ajax({
    method: 'get',
    url: 'http://server.com',
    xhrFields: {
        withCredentials: true
    }
})
```
後端:
`Access-Control-Allow-Credentials = true`

[來源](https://github.com/yinxin630/blog/issues/2)