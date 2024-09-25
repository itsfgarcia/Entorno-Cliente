var num = parseInt(prompt("Ingrese un número:"));

for (let i = num; i < num + 100; i++) {
    if (i % 2!== 0) {
        document.write(i + "<br>"  );
    }
}