// ===== Error Handling =====
try {
    let result = someUndefinedFunction();   // will throw error
} catch (error) {
    console.log("Caught error:", error);    // handle error
} finally {
    console.log("Always runs");             // finally block
}

console.log("Debugging example");           // simple log
