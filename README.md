# 工具   
前端: veu3     
後端: NodeJS Express     
資料庫: MongoDB       
架構: MVC & 前後端分離 & RestfulAPI         
# 網站分為三個部分  
一.後臺頁面   
   權限管理: 必須登入成功通過JWT驗證取得Token才會配置route，根據權限加載後臺的頁面，配置axios攔截器會根據req, res刷新Token時效。        
   用戶資料儲存: 使用Vuex持續化儲存Token記錄使用者和相關資料。      
   API: 利用axios跟後端發送/adminapi。   
![image](https://github.com/HShaoEn/Backend/assets/152255638/e1cf4ddb-3114-43cd-9cf4-1d85fb854079)   
   
二. nodeJS & mongoDB後端   
   使用Express框架和MVC架構   
   1. Public: 配置靜態資源。   
      models: mongodb Schema配置。   
      routes: 配置API routes。
      controller: 拿到前端數據處理調用service。   
      service: 操控mongodb進行增刪改查。   
      util: JWT 生成和驗證。   
      
三. Client web   
   客戶端不需要驗證Token   
   onMounted時透過/webapi加載資料庫   
![image](https://github.com/HShaoEn/Backend/assets/152255638/23e6531a-1fed-44f0-b6b7-e8e49f794cae)

