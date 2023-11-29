# 使用工具
前端: veu3  
後端: NodeJS Express  
資料庫: MongoDB    
採用 MVC & 前後端分離    
網站分為三個部分  
一.後臺頁面(adminapi)
   1. 權限管理: 必須登入成功通過JWT驗證取得Token才會配置route，根據權限加載後臺的頁面。  
   2. 用戶資料儲存: 使用Vuex持續化儲存Token記錄使用者和相關資料。
   3. API: axios根據RestfulAPI規範跟後端發送API
![image](https://github.com/HShaoEn/Backend/assets/152255638/e1cf4ddb-3114-43cd-9cf4-1d85fb854079)   
二. nodeJS & mongoDB後端

三. Client web (webapi)

