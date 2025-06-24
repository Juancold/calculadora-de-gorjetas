// =======================================================
// JAVASCRIPT DA CALCULADORA DE GORJETAS
// =======================================================

// PARTE 1: SELECIONANDO OS ELEMENTOS DO HTML
// Aqui, criamos "variáveis" que representam cada elemento da nossa página
// Usamos document.getElementById() para encontrar cada elemento pelo seu "RG" (o id).

const billTotalInput = document.getElementById('billTotal');
const tipPercentageSelect = document.getElementById('tipPercentage');
const numberOfPeopleInput = document.getElementById('numberOfPeople');
const calculateBtn = document.getElementById('calculateBtn');

const tipAmountSpan = document.getElementById('tipAmount');
const totalPerPersonSpan = document.getElementById('totalPerPerson');


// PARTE 2: CRIANDO A FUNÇÃO PRINCIPAL
// Uma função é um bloco de código que executa uma tarefa específica.
// Esta função será nosso "cérebro" principal.

// CÓDIGO NOVO (COLE ESTE NO LUGAR DO ANTIGO)
function calculateTipAndTotal() {
    // 1. PEGAR os valores dos inputs.
    const billValue = billTotalInput.value;
    const tipValue = tipPercentageSelect.value;
    const peopleValue = numberOfPeopleInput.value;

    // 2. CONVERTER os valores de texto (string) para números.
    const bill = parseFloat(billValue);
    const tipPercentage = parseFloat(tipValue);
    const numberOfPeople = parseInt(peopleValue);

    // Validação simples para garantir que os números são válidos
    if (isNaN(bill) || bill <= 0 || numberOfPeople <= 0) {
        alert("Por favor, insira um valor válido para a conta e o número de pessoas.");
        return; // Para a execução da função se os valores forem inválidos
    }

    // 3. CALCULAR a gorjeta e o total
    const tipAmount = bill * tipPercentage;
    const totalBill = bill + tipAmount;

    // 4. DIVIDIR o total pelo número de pessoas
    const totalPerPerson = totalBill / numberOfPeople;

    // 5. MOSTRAR os resultados na tela
    tipAmountSpan.textContent = tipAmount.toFixed(2);
    totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);
}


// PARTE 3: ADICIONANDO O "OUVINTE DE EVENTO" (EVENT LISTENER)
// Esta é a linha que conecta tudo.
// Ela diz ao nosso botão (calculateBtn) para "ouvir" por um evento de 'click'.
// Quando o clique acontecer, ele deve executar a função calculateTipAndTotal.

calculateBtn.addEventListener('click', calculateTipAndTotal);