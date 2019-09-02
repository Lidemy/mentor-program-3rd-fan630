## hw3：Hoisting

按照JS引擎的執行順序,會先把在`fn2`的`a`先console出來,前面加上序號比較容易判別是否和預想的值是否是相同的. 

因此題目先改寫如下:

```javaScript
var a = 1
function fn() {
    console.log(1, a)
    var a = 5 
    console.log(2, a) 
    a++
    var a
    fn2()
    console.log(3, a)
    function fn2() {
        console.log(4, a)
        a = 20 
        b = 100
    }
}
fn()

console.log(5, a) 

a = 10
console.log(6, a)
console.log(7, b)
```

#### 運行規則

1. 在程式碼的運行規則是先進後出的,所以會先從global開始一直往上加到callback stack, 最後才由最上層的stack,  逐一 popout到底層的global, 並釋放出記憶體空間

2. JS的引擎會針對要執行的程式進行初始化, 依照底下的規則

- 如果在呼叫的function有參數, 就會把值直接放到初始化中.
- 如果有和function相同命名的變數,就用function把變數取代
- 是否有變數宣告? 若有,則在初始化階段先定義為undefined. 

3. 每一個function都有一個[[Scope]]屬性, 這個屬性,就是在所處位置的VO值

### 運行順序

1. 初始化
2. 執行
3. 逐條執行程式碼

根據以上的規則和順序, 可以先針對全域寫出如下的EC. 

### global

*初始化*
```
globelEC:{
    VO:{
        a: undefined, 
        fn: func
    }
    scopeChain:[globelEC.VO]
}

fn.[[Scope]] = [globelEC.VO]
```
*執行*
```
globelEC:{
    VO:{
        a: 1, 
        fn: func
    }
    scopeChain:[globelEC.VO]
}

fn.[[Scope]] = [globelEC.VO]
```
逐條執行程式碼後,要進入到fn的函式中

--- 
### fn

*初始化*
```
fnEC:{
    AO: {
        a: undefined, 
        fn2: func
    }
    scopeChain:[fnEC.AO, globelEC.VO]
}

fn2.[[Scope]] = [fnEC.AO, globelEC.VO]
```
**先遇到第一個`a`, 根據現在的`a`值會輸出`undefined`**

*逐條執行程式碼*

遇到`var a = 5`, `a`的值變更. 

```
fnEC:{
    AO: {
        a: 5, 
        fn2: func
    }
    scopeChain:[fnEC.AO, globelEC.VO]
}

fn2.[[Scope]] = [fnEC.AO, globelEC.VO]
```
**遇到第二個`a`, 則會輸出5**

*逐條執行程式碼*

`a++` , 則EC裡面的AO中的`a`內容變更
```
fnEC:{
    AO: {
        a: 6, 
        fn2: func
    }
    scopeChain:[fnEC.AO, globelEC.VO]
}

fn2.[[Scope]] = [fnEC.AO, globelEC.VO]
```

逐條執行函式,這時候要進入到fn2的函式中

--- 
### fn2

*初始化*

因為裡面並沒有宣告任何變數,所以AO為空
```
fn2EC:{
    AO:{

    }
    scopeChain:[fn2EC.AO, fnEC.AO, globelEC.VO]
}
```
*逐條執行函式*
這時候要console出`a`的值, 因為在`fn2EC.AO`沒有任何宣告值, 所以往上找到`fnEC.AO`, 因此`a = 6`

**遇到第4個`a`, 會輸出6**

*執行fn2EC內容*

`a = 20`, 在fn2中沒有任何函數的宣告,所以透過scopeChain會往上找到`fnEC.AO`, 裡面有此函數的宣告, 所以把 `a`的值改為20

```
fnEC:{
    AO: {
        a: 20
        fn2: func
    }
}
```
`b = 100`同理, 因為在fnEC中也找不到, 所以直接把他設定在全域變數中.

```
globelEC:{
    VO:{
        a: 1 
        b: 100
        fn: func
    }
    scopeChain:[globelEC.VO]
}
```
這時候此`fn2`全部執行完畢, POPOUT並釋放記憶體空間

--- 
### fn

在`fn`的程式碼執行中, 還少了第三個的`a`值, 根據這時候的`a`值為20. 

**遇到第3個a, 會輸出20**

執行完後, 整個`fn`也執行完畢, POPOUT釋放記憶體空間

--- 

### global

最後執行外部的global 

第五個`a`, 根據現有的`a`值, 則為1

**遇到第5個a, 會輸出1**

逐條執行程式碼, 因為`a= 10 `, 所以改變程式碼
```
globelEC:{
    VO:{
        a: 10
        b: 100
        fn: func
    }
    scopeChain:[globelEC.VO]
}
```
第六個`a`, 根據現有的`a`值, 則為10  
**遇到第6個a, 會輸出10**

最後一個`b`, 根據現有的`b`值, 則為100  
**遇到第1個b, 會輸出100**

最後函式執行完畢, POPOUT並釋放記憶體空間

最終答案

```javaScript
var a = 1
function fn() {
    console.log(1, a) // undefined 
    var a = 5 
    console.log(2, a) //5 
    a++
    var a
    fn2()
    console.log(3, a) // 20 
    function fn2() {
        console.log(4, a) // 6
        a = 20 
        b = 100
    }
}
fn()

console.log(5, a) // 1

a = 10
console.log(6, a) // 10 
console.log(7, b) // 100
```
以上就是針對本題的分析.