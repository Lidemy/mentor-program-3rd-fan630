## hw2：Event Loop + Scope

範例程式碼
```javaScript
for(var i=0; i<5; i++) {
  console.log('i: ' + i)

  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
分析如下: 

- `var`的生存範圍是一個function, 此範例沒有被function包覆住,所以可以視為對global宣告,透過hoisting, 宣告會被提升, 因此可以改寫為如下函式

```javaScript
var i; 
for(i=0; i<5; i++) {
  console.log('i: ' + i)

  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
1. for 迴圈第一圈執行

```javascript
// i = 0
console.log('i: ' + i); // 輸出 i:0
setTimeOut(() => {
    console.log(i) // => 建立一個 Timer_1，丟進 Web API 等待時間到
  }, i*1000); 

// Timer 列表：
[ Timer_1 ] callback: console.log(i) 
[ Timer_1 ] 時間: 0 * 1000 => 0 秒 // => 時間只有 0 秒，立刻丟進 Callback Queue
```

3. for 迴圈第二圈執行
```javascript
// i = 1
console.log('i: ' + i); // 輸出 i:1
setTimeOut(() => {
    console.log(i) // => 建立一個 Timer_2，丟進 Web API 等待時間到
  }, i*1000); 

// Timer 列表：
[ Timer_1 ] callback: console.log(i) 
[ Timer_1 ] 時間: 0 * 1000 => 0秒 

[ Timer_2 ] callback: console.log(i) 
[ Timer_2 ] 時間: 1 * 1000 => 1秒 
```

4. 重複動作到第五圈
```javascript
// Timer 列表：
[ Timer_1~5 ] callback: console.log(i) 
// Callback Queue： 等待 Call Stack 清空中

[ Timer_1 ] 時間: 0 * 1000 => 0秒 
[ Timer_2 ] 時間: 1 * 1000 => 1秒 
[ Timer_3 ] 時間: 2 * 1000 => 2秒 
[ Timer_4 ] 時間: 1 * 1000 => 3秒 
[ Timer_5 ] 時間: 2 * 1000 => 4秒 
```

#### Call Stack 清空, 把 Callback Queue 等待中的Timer_1移到 Call Stack 中執行

**迴圈跑完後, 因為閉包的關係,此時的 i 為 5**
```javaScript
// 執行 Timer_1 的 callback
console.log(i) //  輸出 5
```
#### Timer_2移到 Call Stack

```javascript
// i 還是為 5 
console.log(i) // => 輸出 5
// 剩餘Timer 列表：
[ Timer_3 ~ Timer_5 ] call back: console.log(i) 
[ Timer_3 ] 時間: 2 * 1000 => 2秒
[ Timer_4 ] 時間: 3 * 1000 => 3秒
[ Timer_5 ] 時間: 4 * 1000 => 4秒
```
之後往下類推每一圈迴圈, 因此答案為:

```
i: 0
i: 1
i: 2
i: 3
i: 4
5(等i印完後出現)
5
5
5
5
```

