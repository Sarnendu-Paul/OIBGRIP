let outputscreen = document.getElementById("output-screen")
function display(num) {
    outputscreen.value += num;
}
function Calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    }
    catch {
        alert("Syntax Error")
    }
}
function Clear() {
    outputscreen.value = "";
}
function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}