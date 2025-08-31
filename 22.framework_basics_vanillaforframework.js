// ===== State Management Example =====
let state = { count:0 };

function render(){
    document.getElementById("counter").textContent = state.count;
}

document.getElementById("increment").addEventListener("click", () => {
    state.count++;
    render(); // update DOM
});
render();
