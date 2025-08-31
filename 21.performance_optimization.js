// ===== Memory Management =====
let hugeArray = new Array(1000000).fill(0); // create big array
hugeArray = null;                            // free memory

// ===== Loops Optimization =====
const nums = [1,2,3,4,5];
for(let i=0; i<nums.length; i++){           // classic for loop
    console.log(nums[i]);
}

// ===== Async Patterns =====
async function fetchData(url){
    const response = await fetch(url);      // non-blocking fetch
    return response.json();
}

// ===== Throttling / Debouncing =====
function debounce(func, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this,args), delay);
    };
}
const log = debounce(() => console.log("Resize event"), 300);
window.addEventListener("resize", log);
