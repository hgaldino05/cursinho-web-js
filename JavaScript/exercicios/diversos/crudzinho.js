const readline = require('readline');

// Array para armazenar os dados
let items = [];

// Cria uma interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para exibir o menu
function showMenu() {
  console.log("===== Menu =====");
  console.log("1. Listar itens");
  console.log("2. Adicionar item");
  console.log("3. Atualizar item");
  console.log("4. Deletar item");
  console.log("5. Sair");
  console.log("=================");
}

// Função para listar todos os itens
function listItems() {
  if (items.length === 0) {
    console.log("Não há itens cadastrados.");
  } else {
    console.log("===== Itens =====");
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
    console.log("=================");
  }
  main(); // Chama novamente o menu após a operação ser realizada
}

// Função para adicionar um novo item
function addItem() {
  rl.question("Digite o novo item: ", (newItem) => {
    items.push(newItem);
    console.log("Item adicionado com sucesso!");
    main(); // Chama novamente o menu após a operação ser realizada
  });
}

// Função para atualizar um item existente
function updateItem() {
  rl.question("Digite o número do item que deseja atualizar: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < items.length) {
      rl.question("Digite o novo valor para o item: ", (updatedItem) => {
        items[index] = updatedItem;
        console.log("Item atualizado com sucesso!");
        main(); // Chama novamente o menu após a operação ser realizada
      });
    } else {
      console.log("Índice inválido. Nenhum item foi atualizado.");
      main(); // Chama novamente o menu após a operação ser realizada
    }
  });
}

// Função para deletar um item
function deleteItem() {
  rl.question("Digite o número do item que deseja deletar: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      console.log("Item deletado com sucesso!");
      main(); // Chama novamente o menu após a operação ser realizada
    } else {
      console.log("Índice inválido. Nenhum item foi deletado.");
      main(); // Chama novamente o menu após a operação ser realizada
    }
  });
}

// Função principal para executar o programa
function main() {
  showMenu();
  rl.question("Escolha uma opção: ", (choice) => {
    choice = parseInt(choice);
    switch (choice) {
      case 1:
        listItems();
        break;
      case 2:
        addItem();
        break;
      case 3:
        updateItem();
        break;
      case 4:
        deleteItem();
        break;
      case 5:
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        main(); // Chama novamente o menu após a operação ser realizada
    }
  });
}

// Inicializar o programa
main();
