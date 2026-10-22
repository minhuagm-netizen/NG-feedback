const V='qa-report-v2.7'; // 同一網域下可有多個問卷：每個問卷的快取名稱要用不同前綴（例如 qa-report-、survey2-）
const FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('qa-report-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
// 有网络时优先取最新版（更新 GitHub 上的文件后，现场下次联网开启就会拿到新版）；没网络或太慢(3秒)就用本机缓存
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const net=fetch(e.request).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put(e.request,cp));return res});
 const timeout=new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),3000));
 e.respondWith(Promise.race([net,timeout]).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));
});
