## 為什麼我們需要 React？可以不用嗎？
React.js 本質為 library，而我們使用 library 的目的在於「方便開發」, 當專案開始複雜，功能越來越多, 不用自己寫一堆 Vanilla JS 語法只為了實現某個功能.
可以, React僅是一種工具, 就算不用React也可以透過vanilla JS 或是 jQuery來達成.

## React 的思考模式跟以前的思考模式有什麼不一樣？

state 和 UI 是相互依存的, 透過state的變化, 才會衍伸出新的UI. 簡言之, 資料的變更會影響畫面. 
若是在之前jQuery中, 操作DOM來更改畫面, 同時還要操作資料, 這兩者很容易就變成雙頭馬車.

## state 跟 props 的差別在哪裡？

### state: 
一開始會被建立在constructor中,元件用來記錄本身的狀態, 透過`setState`可以改變`state`
### props: 
是從子元件接收父元件的方法, 是由父元件傳遞給子元件的一個靜態物件, 父元件可以傳`function, object, string` 傳給子元件

## 請列出 React 的 lifecycle 以及其代表的意義

## 元件的生命週期:

可以分為三個時間點, 並且三個時間點都有對應到的function. 
分別為`Mounting`, `Update`, `UnMounting`

## Mounting 
元件正在被載入Dom的階段

- componentDidMount:
當畫面render完畢後,會觸發該方法. 假設有子元件, 也會等到子元件都render完畢才會去執行. 
大部分Ajax都會在這裡調用. 

## Update

- shouldComponentUpdate(nextProps, nextState)

這個方法是回傳一個布林值, 去比較新舊的props和state是否相同, 並且決定要不要做re-render.
這其實是為了優化所衍伸出來的方法, 假如再面對一堆傳入一樣的props或state都還要re-render, 那就太浪費效能了. 

- componentDidUpdate(preProps, preState)

當元件更新完state後, 就是調用這個方法的時候, 當你的畫面都render出來, 但是想要對Dom再次進行操作,那這些就可以寫在這個方法裡面. 打個比方, 如果在初階段的`componentDidMount`有用jQuery來做了些效果, 所以一旦當你state改變並重新render完, 你還想要做出那些效果, 那你就必須在這個方法裡面再寫一次.

## UnMounting

- componentWillUnmount

這個方法會在元件從DOM移除之後馬上調用，功用就只是用來清除一些可能之前有調用的函數之類的