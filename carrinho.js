function calcularTotalCarrinho(itens) {
 if (!Array.isArray(itens)) {
    throw new Error('itens precisa ser um array');
 }

 return itens.reduce((total, itens) =>{
   return total + item.preco * item.quantidade;
 }, 0);
}

module.exports = {calcularTotalCarrinho}
