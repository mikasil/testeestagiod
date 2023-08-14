const cardapio = {
  cafe: { descricao: 'Café', valor: 3.00 },
  chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
  suco : { descricao: 'Suco Natural', valor: 6.20},
  queijo :{ descricao : 'Queijo extra do sanduiche', valor: 2.00},
  salgado :{descricao :'Salgado ', valor: 7.25},
  combo1 : { descricao: '1 Suco e 1 Sanduiche', valor:9.50},
  combo2 : { descricao: '1 cafe e 1 sanduiche', valor:7.50} 

};
class CaixaDaLanchonete 
  
{
  calcularValorDaCompra(formaDePagamento, itens) {
    
    
  }
}
calcularValorDaCompra(formaDePagamento, itens) 
  
  let valorTotal = 0;

  for (const itemInfo of itens) {
    const [codigo, quantidade] = itemInfo.split(',');
    const item = cardapio[codigo];

    if (!item) {
      return "Item inválido!";
    }

    valorTotal += item.valor * parseInt(quantidade);

    if (codigo !== 'chantily' && codigo !== 'queijo') {
      const itemPrincipal = cardapio[codigo];
      if (!itemPrincipal) {
        return "Item extra não pode ser pedido sem o principal";
      }
    }
  }



calcularValorDaCompra(formaDePagamento, itens) 
  


  if (formaDePagamento === 'dinheiro') {
    valorTotal *= 0.95; 
  } else if (formaDePagamento === 'credito') {
    valorTotal *= 1.03; 
  }

calcularValorDaCompra(formaDePagamento, itens, )
  
   if (valorTotal === 0) {
    return "Não há itens no carrinho de compra!";
  } else {
    return `R$ ${valorTotal.toFixed(2)}`;
  }

// testes 
sum.js;
function sum(a, b) {
    return a + b;
  }
  module.exports = sum;


  sum.test.js
  const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const config = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    default: config ,
    get default() {
        return this._default;
    },
    set default(value) {
        this._default = value;
    },


}

