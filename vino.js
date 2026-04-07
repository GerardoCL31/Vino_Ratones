// Recorremos todas las botellas desde la 1 hasta la 1000
for (let botella = 1; botella <= 1000; botella++) {

  // Convertimos el número de la botella a binario (base 2)
  // y lo rellenamos con ceros a la izquierda hasta tener 10 bits
  const binario = botella.toString(2).padStart(10, "0");

  // Creamos un array vacío donde guardaremos los ratones que deben beber
  const ratones = [];

  // Recorremos los 10 bits del número binario
  // i representa el índice del ratón (de 0 a 9)
  for (let i = 0; i < 10; i++) {

    // Accedemos al bit correspondiente desde la derecha:
    // - binario[9] → ratón 1
    // - binario[8] → ratón 2
    // ...
    // - binario[0] → ratón 10
    if (binario[9 - i] === "1") {

      // Si el bit es 1, ese ratón debe beber de esta botella
      // Añadimos "Ratón X" al array (i+1 porque i empieza en 0)
      ratones.push(`Ratón ${i + 1}`);
    }
  }

  // Mostramos el resultado en consola:
  // - número de botella
  // - su representación binaria
  // - qué ratones deben beber
  console.log(
    `Botella ${botella}: ${binario} -> ${ratones.join(", ") || "ninguno"}`
  );
}