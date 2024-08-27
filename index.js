// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

const debounce = (func, wait) => {
    let timerId;
    return (...args) => {
        console.log("debounce", func)
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            console.log()
            func(...args)
        }, wait)
    }
}


const handleAPICall = (e) => {
    console.log("value", e.target.value);
}

const debounced = debounce(handleAPICall, 1000)

const ele = document.getElementById("text-type")
ele.addEventListener("keydown", debounced)

