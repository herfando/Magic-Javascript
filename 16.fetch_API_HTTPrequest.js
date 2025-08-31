// ===== Fetch API =====
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())   // parse JSON
    .then(data => console.log(data))     // log data
    .catch(err => console.error(err));   // handle error

// ===== Async/Await =====
async function getTodo(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
getTodo();
