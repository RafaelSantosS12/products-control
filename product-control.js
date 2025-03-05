// Exercicio 1 - Manipulação de Arrays

let produtos = [{nome: 'Camisa', preco: 70, categoria: "Roupas", qtd: 20}];

const adicionarProduto = (nomeProd, precoProd, categoriaProd, qtdProd) => {
    produtos.push({
        nome: nomeProd,
        preco: precoProd,
        categoria: categoriaProd,
        qtd: qtdProd
    });
}

const buscarProduct = (nomeProd) => {
    product = produtos.find(produto => produto.nome === nomeProd);
    console.log(`Produto: ${product.nome} \nPreço: ${product.preco}\nCategoria: ${product.categoria}\nQuantidade: ${product.qtd}\n`);
}

const aumentarQuantidade = (nomeProd, qtd) => {
    product = produtos.find(produto => produto.nome === nomeProd);
    if(product){
        product.qtd += qtd;
        console.log("Quantidade atualizada!");
    }else{
        console.log("Produto não encontrado!");
    }
}

const diminuirQuantidade = (nomeProd, qtd) => {
    product = produtos.find(produto => produto.nome === nomeProd);
    if(product){
        product.qtd -= qtd;
        console.log("Quantidade atualizada!");
    }else{
        console.log("Produto não encontrado!");
    }
}

const listarProdutos = (produtos) => {
    console.log('----- LISTA DE PRODUTOS -----');
    produtos.forEach((produto) => {
        console.log(`Produto: ${produto.nome} \nPreço: ${produto.preco}\nCategoria: ${produto.categoria}\nQuantidade: ${produto.qtd}\n`);
    });
    console.log('-----------------------------');
}

const listarProdutosAteX = (x) => {
    const produtosAteX = produtos.filter((produto) => produto.preco <= x);
    listarProdutos(produtosAteX);
}

const listarPorCategoria = (category) => {
    const produtosCategoriaX = produtos.filter((produto) => produto.categoria == category);
    listarProdutos(produtosCategoriaX);
}

const listarProdutoMaisCaro = () => {
    const produtoMaisCaro = produtos.reduce((maisCaro, produtoAtual) => {
        if(produtoAtual.preco > maisCaro.preco){
            return produtoAtual;
        }else{
            return maisCaro;
        }
    }, produtos[0]);

    console.log(`Produto mais caro: ${produtoMaisCaro.nome}`);
}

const deleteProduct = (nomeProd) => {
    const produtoRemovido = produtos.find(produto => produto.nome === nomeProd);

    if(produtoRemovido){
        produtos = produtos.filter(produto => produto.nome !== nomeProd);
        console.log(`Produto removido: ${produtoRemovido.nome}`);
        listarProdutos(produtos);
    }else{
        console.log("Produto não encontrado!");
    }
    
}

