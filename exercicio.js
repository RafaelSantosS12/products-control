// Exercicio 1 - Manipulação de Arrays

let produtos = [{nome: 'Camisa', preco: 70, categoria: "Roupas"}];

const adicionarProduto = (nomeProd, precoProd, categoriaProd) => {
    produtos.push({
        nome: nomeProd,
        preco: precoProd,
        categoria: categoriaProd
    });
}

const listarProdutos = (produtos) => {
    console.log('----- LISTA DE PRODUTOS -----');
    produtos.forEach((produto) => {
        console.log(`Produto: ${produto.nome} \nPreço: ${produto.preco}\nCategoria: ${produto.categoria}\n`);
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


adicionarProduto("Tênis", 120, "Roupas");
adicionarProduto("Short", 60, "Roupas");
adicionarProduto("Bola", 80, "Esportes");
adicionarProduto("Carteira", 35, "Acessórios");
adicionarProduto("Chuteira", 150, "Esportes");
deleteProduct("Bola");

