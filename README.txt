外觀異常回報 — 上傳到 GitHub Pages 步驟
==========================================
一、上傳
1. 在 GitHub 新增一個 repository（例如 shell-qa），Public。
2. 把本資料夾內「所有檔案」（含 .nojekyll）原樣上傳到 repository 根目錄：
   index.html、sw.js、manifest.json、icon-192.png、icon-512.png、.nojekyll
3. Settings → Pages → Build and deployment → Source 選 "Deploy from a branch"，
   Branch 選 main、資料夾 /(root) → Save。
4. 等 1～2 分鐘，網址是：https://<帳號>.github.io/<repository名稱>/

二、現場使用
- 第一次要「有網路」打開一次，並加入主畫面：
  iPhone：用 Safari 開網址 → 分享鍵 → 加入主畫面
  Android：用 Chrome / 系統瀏覽器開網址 → 選單 → 添加到主屏幕 / 安裝
- 不要在微信內建瀏覽器使用（會下載不了 Excel、也不支援離線）。
- 之後從桌面圖示開啟，沒網路也能作業。
- 資料存在各人手機裡，不會上傳到 GitHub。

三、更新版本
- 把新的 index.html 覆蓋上傳（其他檔案不用動；若要強制更新，把 sw.js 第一行版本號 qa-report-v2.5 改成新的）。
- 現場手機下次「有網路」開啟就會取得新版，已填的資料不會被清掉。

四、確認版本
- 首頁最下方會顯示「版本 … v2.5」。
