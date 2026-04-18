const CACHE='tg-cache';

self.addEventListener('fetch',e=>{
e.respondWith(
caches.match(e.request).then(resp=>{
return resp || fetch(e.request).then(net=>{
if(e.request.url.includes('.mp3') || e.request.url.includes('.ogg')){
caches.open(CACHE).then(c=>c.put(e.request,net.clone()));
}
return net;
});
})
);
});