## 前四週心得與解題心得

這四週對我來說滿滿的收穫.

把所學到的東西列舉一下: 

#### Command line指令/ Node環境  
在還沒加入課程前,其實我也上過別人教的command line指令,這和GIT 一樣,沒用就會忘記.

但是導入node後,跟本強迫使用.每天碰就很難忘記了.  
一想到我之前如果要寫JS,還要先放在`.html`裡面,在把JS放到`<script>` `</script>`標籤中,再透過網頁渲染,還要再重新整理,現在用了node真的回不去了.  

(今天在外面用電腦,為了寫程式還先在別人電腦上裝了node,以後我自己帶電腦,受不了了)

#### GIT  
我自己之前也有自學過GIT,但是效率無比緩慢.  

印象中至少花了兩個禮拜才知道GIT是在做什麼的,有哪些指令,但是用起來卡頓到不行,根本不知道為什麼要下這個指令

簡單來說就是囫圇吞棗,再加上沒有練習,所以一下子就忘了.但在這個計畫我每個禮拜至少都要用一次,每個禮拜都複習一遍. 
再加上**教蔡哥使用GIT**這個作業,用自己的話講給蔡哥聽.無形之中又會把觀念在複習了一遍

#### eSlint導入  
在沒有導入前不知道哪些地方要空格,要空幾格.  
存粹就是自己覺得OK就OK.哪些地方要加上後綴的分號等等.  
ES6語法知道歸知道,但偶爾就用在組字串.  
現在強迫使用,還要用arrow function,ES6用到的機會高很多. 

#### API 串接  
這堂課是我印象中最深刻的.
`小明傳紙條` 比喻的很好. 在聽故事的同時,也不小心學到了觀念.   
現在買個排骨飯也讓我想到千千要賺大錢發大財(我是中毒多深啊～～)  

再來就是http game了. 我現在的進度到了第12關了,前面幾題基本題,也是審視自己懂不懂的大好機會.

還有像是unit test和解構, Babel, yarn/npm是什麼等等
這幾個感覺在外面購買課程都學不到,要自己研究. 但是老師都有講解
覺得很充實.

讓我繼續下去的動力:

1. #### 宏觀和微觀的進度掌握
- 宏觀面: schedule就擺在那邊,這對自學的人來說算是一顆定心丸
- 微觀面: 每天早上在公司都會先拜讀大家的進度.我都會看有什麼部分可以從中學習.  
另外看到大家都在努力,就有一種不能放棄的感覺! 再加上老師的信心喊話.
記得上禮拜憂心忡忡的想說,怎麼辦我要delay了...本來想說要超前進度,現在維持住已經夠勉強了,現在還要delay..
後來看到老師在slack上po著
  > 交作業的也才30%左右

  這幾個關鍵字  
扣掉一些工程師和舊生,我就放寬心了.沒給自己那麼大的壓力,但功課我還是當週交了XD.


2. #### 小樹屋計畫  
    對我來說小樹屋就是一個問問題的地方,當然也可以回答同學的問題  
    記得我第一次去的時候,幸運的遇到Tian. 馬上抓著他問process.argv的問題  
    雖然說前一天晚上我在家已經看了至少五遍argv的段落,但我還是看不懂為什麼要寫在陣列裡面放"2"  

    Tian也一起看了影片,我驚覺老師有提到
    > 這是一個陣列喔

    這一句話  
    後來Tian很快的把程式碼寫出來,一寫出來我就懂了.

    另外在小樹屋的同時也可以認識到新同學,互相聊一下天,了解不同的背景,同時知道其他人是怎麼安排進度的,這也是對未來寫final project拓展人脈很好的方式.

### 解題心得
分門別類一下

#### 解到一半的題目

1. 聖誕樹（說要印出聖誕樹結果只能印出個旗子...還沒有想好要怎麼解)
2. Lidemy OJ 現在只有解功課要求的基本題..（因為跑去玩了httpgame實在沒什麼時間...)
3. 找出第n小的值

#### 印象深刻的題目:
- #### Week4 HW4 串接Twitch API

這應該是寫題目到目前為止做過最久的題目,堅持不看同學的答案,所以不知道要在裡面加上headers. 我想這樣的堅持是對的,因為我現在也忘不了裡面要加headers. 

- #### httpgame 第九關(這題讓我覺得自己又往"Google"工程師邁進了一大步)

1. > 帶上一個 X-Library-Number 的 header，我們圖書館的編號是 20

我是用[request Github](https://github.com/request/request)這份文件找到的,回傳statusCode是200,只剩下invalid browser,這時我想應該是寫對了
![其中的這個範例](https://i.imgur.com/hYBx915.png)

2. > 伺服器會用 user agent 檢查是否是從 IE6 送出的 Request，不是的話會擋掉

本來想說應該解不出來,所以我就先下了各種關鍵字,什麼IE6 Request api 之類的,但都沒找到或是可以用的.看了hint了解到,關鍵字其實是<mark>user agent</mark>,所以二話不說往這方面查

- 先找到了[第一份文件](http://tech-marsw.logdown.com/blog/2016/01/10/02-post-crawler)
雖然他是用python爬蟲,但是我看到了我要的key:'User-Agent'
接下來就是value了,先找到了[『透過用戶代理偵測瀏覽器』](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Browser_detection_using_the_user_agent)
裡面提到的這一段![](https://i.imgur.com/oo0Evab.png)

- 好巧不巧又喵到'User Agent String'
這個關鍵字,就在這一份[文件](https://i.imgur.com/z9TYPeE.png)中找到了!

#### 結論

謝謝老師開設這個實驗計畫,讓我們這種非本科系,對程式有憧憬,並對未來轉職冀已希望的新手可以有機會觸碰到技術.希望下一個四周能夠維持這幾個禮拜的認真！Keep fighting！GoGoGo!!!

