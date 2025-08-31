// ===== Canvas Example =====
const canvas = document.createElement("canvas");
canvas.width = 200; canvas.height = 100;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue"; ctx.fillRect(10,10,150,50);

// ===== Notifications Example =====
if(Notification.permission === "granted"){
    new Notification("MagicJS says Hi!");
}else{
    Notification.requestPermission();
}
