# 永豐金 360 評估專案

**國立政治大學 資訊管理學系**  
**日期：2025.02**  

---

## 目標

- 建立多元不同面向的員工評估系統，以提升員工績效管理。
- 針對不同員工客製化專屬的評估報告。
- 建立資料庫，儲存員工過去的填寫記錄，並用於評估過去與目前的員工狀況。
- 提升使用者體驗。

---

## 評估範圍 (1/2)

- 員工上線登入評估
- 相同部門部屬評估
- 同儕評估
- 自我評估
- 主管評估
- 提供多向評估（跨部門評估）
- 提供 Excel 上傳檔案
- 響應式網頁設計 (RWD)

---

## 評估範圍 (2/2)

- 績效報告產出
- 匯出不同面向的評估結果，並比較員工之間的差異
- 設計一套演算法來計算評估結果，並使用 MBTI 進行員工分類
- 根據員工類別提供相關的書籍與課程，幫助員工自我提升

---

## 系統架構

- **前端框架**：React.js
- **後端框架**：Python Django
- **資料庫**：可依需求討論（PostgreSQL、MariaDB、MySQL、SQLite、Oracle）

---

## 初步設計

### 員工上線登錄與評估流程

1. **使用者輸入**（登入界面）
2. **發送請求**（Post）
3. **身份驗證**（Authentication）
4. **跳轉頁面**（Redirect）
5. **填寫表單並提交**（Form Submission）
6. **資料儲存至資料庫**（Database）

---

### 員工績效報表產出流程

1. **選擇員工/管理者**
2. **使用者輸入**（登入界面）
3. **發送請求**（Post）
4. **身份驗證**（Authentication）
5. **提交資料至資料庫**（Database）
6. **演算法計算結果**（Algorithm Processing）
7. **生成績效報告**（Generate Report）

---

## 問題討論

1. **貴公司所使用的資料庫種類**
   - Django 官方支援的資料庫選項：
     - PostgreSQL
     - MariaDB
     - MySQL
     - SQLite
     - Oracle

2. **上下評估範圍**
   - 依據不同需求決定評估範圍，包括是否允許下屬評估上級，或僅限同級評估。

3. **Admin 權限設定**
   - 是否需要 Admin 角色，或者直接透過資料庫來判定權限。

4. **推薦書籍與課程方式**
   - 可自定義推薦內容，並支援不同語言與類型。

---

## 聯繫方式

- **Vincent Hsia**：113356046@g.nccu.edu.tw
- **Jerry Lu**：113791014@g.nccu.edu.tw

---

**翻轉金融，共創美好生活！**
**Together, a better life!**
