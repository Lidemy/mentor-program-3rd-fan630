## API 文件

Base URL: fan630.com.tw/todo/api/api.php

| 說明     | Method | 路徑      | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有todo | GET    | /     |   無         |      |
| 獲取單一todo | GET    | /:id  |                     |       
| 新增todo   | POST   | /     | content:內容 |               
| 刪除todo   | DELETE   | /:id     |               
| 修改todo   | PATCH   | /:id    |     revise:內容,  state:0(未完成), state:1(已完成) |               


- 新增  

curl -X POST  fan630.com.tw/todo/api/api.php -d "content=homework"

---
- 讀取  

curl -X GET fan630.com.tw/todo/api/api.php

---
- 讀取id為91的todo  

curl -X GET fan630.com.tw/todo/api/api.php/91

---
- 刪除id為92

curl -X DELETE fan630.com.tw/todo/api/api.php/92

---

- 修改todo, id為93

curl -X PATCH fan630.com.tw/todo/api/api.php/93 -d "revise=修改成功&state=1" 

---