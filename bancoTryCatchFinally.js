var acesso = false;
var quantiaTotal = 500.0;
do {
  var escolha = prompt(
    'Digite oque quer fazer (depositar / sacar).\nQuantia no deposito atualmente: ' +
      quantiaTotal
  );
  console.log(escolha);
  if (escolha == 'deposito' || escolha == 'depositar') {
    var quantiaDepositar = parseFloat(prompt('Quanto vai depositar?'));
    try {
      if (quantiaDepositar == '') throw 'Vazio';
      if (isNaN(quantiaDepositar)) throw 'Não é um número';
      if (quantiaDepositar == null) throw 'Processo Cancelado';
      quantiaTotal = quantiaTotal + quantiaDepositar;
    } catch (err) {
      alert('Error: ' + err + '.');
    } finally {
      alert(
        'Quantia total guardada: ' +
          quantiaTotal +
          '\nQuantia do deposito: ' +
          quantiaDepositar
      );
    }
  } else if (escolha == 'saque' || escolha == 'sacar') {
    var quantiaSacar = parseFloat(prompt('Quanto vai sacar?'));
    try {
      if (quantiaSacar == '') throw 'Vazio';
      if (isNaN(quantiaSacar)) throw 'Não é um número';
      if (quantiaSacar == null) throw 'Processo Cancelado';
      if (quantiaSacar > quantiaTotal) throw 'Valor de saque maior que quantia armazenada'
      quantiaTotal = quantiaTotal - quantiaSacar;
    } catch (err) {
      alert('Error: ' + err + '.');
    } finally {
      alert(
        'Quantia total sacada: ' +
          quantiaTotal +
          '\nQuantia do saque: ' +
          quantiaSacar
      );
    }
  } else {
    alert("Error, tente novamente.");
  }

  acesso = confirm('Continuar?');
} while (acesso == true);
if (acesso == false) {
  alert('Obrigado por testar meu programa.');
}