// Seleciona o elemento HTML onde o resultado será exibido
const result = document.querySelector(".result");

// Seleciona todos os botões da calculadora
const buttons = document.querySelectorAll(".btn");

// Para cada botão, adiciona um ouvinte de evento para o evento "click"
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtém o conteúdo de texto do botão clicado
    const value = button.textContent;

    // Se o botão clicado for a tecla "C", limpa o resultado
    if (value === "C") {
      result.value = "";
    }

    // Se o botão clicado for a tecla "=", calcula o resultado
    else if (value === "=") {
      // A função "eval" avalia a string passada como um código JavaScript e retorna o resultado
      result.value = eval(result.value);
    }

    // Se o botão clicado for uma operação (+, -, *, /), adiciona a operação ao resultado
    else if (button.classList.contains("operator")) {
      result.value += ` ${value} `;
    }

    // Caso contrário, adiciona o valor do botão ao resultado
    else {
      result.value += value;
    }
  });
});
