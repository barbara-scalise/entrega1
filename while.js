/*let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}*/

let password = "";

do {
  password = prompt("Ingrese su contraseña : ");
  if (password !== "secreto") {
    alert("Contraseña incorrecta,intente nuevamente");
  }
} while (password !== "secreto");
alert("Bienvenido!");
