// ===== WebSockets Example =====
const socket = new WebSocket("wss://echo.websocket.org");
socket.onopen = () => socket.send("Hello Server");
socket.onmessage = (msg) => console.log("Received:", msg.data);

// ===== Service Worker Registration =====
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log("SW registered", reg))
        .catch(err => console.error(err));
}

// ===== IndexedDB Example =====
const request = indexedDB.open("MagicDB", 1);
request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};
