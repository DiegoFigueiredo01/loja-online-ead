function calcularTotalCarrinho(itens) {
  if (!Array.isArray(itens)) {
    throw new Error('itens precisa ser um array');
  }

  return itens.reduce((total, item) => {
    return total + item.preco * item.quantidada;
  }, 0);
}

module.exports = { calcularTotalCarrinho };