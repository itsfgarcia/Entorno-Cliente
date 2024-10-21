var aleatorio = Math.random();

var aleatorio = aleatorio * 2;

aleatorio = Math.trunc(aleatorio);

if (aleatorio === 0) {
    alert("Ha salido cara.");
    document.write("Ha salido cara. <br/> <br/>");
    console.log("Ha salido cara.");
} else if (aleatorio === 1) {
    alert("Ha salido cruz.");
    document.write("Ha salido cruz. <br/> <br/>");
    console.log("Ha salido cruz.");
}