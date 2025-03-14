const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mensagem inicial
console.log('Digite help para ver os comandos (ou "sair" para encerrar):');

rl.on('line', (input) => {
    const [comando, ...args] = input.split(' '); 

    if (input.toLowerCase() === 'sair') {
        console.log('Encerrando...');
        rl.close();
        return;
    }

    const cmd = comandos[comando];

    if(cmd) {
        cmd.funcao(...args);
    }else{
        console.log(`Comando "${comando}" não reconhecido. Digite help para ver a lista de comandos.`)
    }
});


let produtos = [{nome: 'Camisa', preco: 70, categoria: "Roupas", qtd: 20}];

const adicionarProduto = (nomeProd, precoProd, categoriaProd, qtdProd) => {
    produtos.push({
        nome: nomeProd,
        preco: precoProd,
        categoria: categoriaProd,
        qtd: qtdProd
    });
}

const atualizarProduto = (nomeProd, atributo, valorAtribuir) => {
    product = produtos.find(produto => produto.nome === nomeProd);
    product[atributo] = valorAtribuir;
    console.log("Produto atualizado!");
    exibirProduto(product.nome);
}

const buscarProduct = (nomeProd) => {
    product = produtos.find(produto => produto.nome === nomeProd);

    if(product) {
        console.log(`Produto: ${product.nome} \nPreço: ${product.preco}\nCategoria: ${product.categoria}\nQuantidade: ${product.qtd}\n`);
    } else{
        console.log("Produto não encontrado!");
    }
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

const exibirProduto = (nomeProd) => {
    const product = produtos.find(produto => produto.nome === nomeProd);
    console.log(`Produto: ${product.nome} \nPreço: ${product.preco}\nCategoria: ${product.categoria}\nQuantidade: ${product.qtd}\n`);
}

const listarProdutos = () => {
    console.log('----- LISTA DE PRODUTOS -----');
    produtos.forEach((produto) => {
        exibirProduto(produto.nome);
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

const somarValores = () => {
    let valorTotal = 0;
    produtos.forEach((produto) => {
        let valorInd = produto.preco * produto.qtd;
        valorTotal += valorInd;
        exibirProduto(produto.nome);
        console.log(`Valor total do produto: ${valorInd}\n`);
    });
    console.log(`Valor total de todos os produtos: R$${valorTotal}`);
}

const mostrarComandos = () => {
    console.log('\nComandos disponíveis:\n');
    Object.entries(comandos).forEach( ([comando, detalhes] ) => {
    console.log(`${comando}: ${detalhes.descricao}`);
})
}

// Mapeamento de comandos com descrições
const comandos = {
    'help' : {descricao: 'Exibe a lista de comandos', funcao: mostrarComandos},
    'add': { descricao: 'Adiciona um novo produto', funcao: adicionarProduto },
    'remove': { descricao: 'Remove um produto do estoque', funcao: deleteProduct },
    'increase': { descricao: 'Aumenta a quantidade de um produto', funcao: aumentarQuantidade },
    'reduce': { descricao: 'Diminui a quantidade de um produto', funcao: diminuirQuantidade },
    'list': { descricao: 'Lista todos os produtos', funcao: listarProdutos },
    'update': { descricao: 'Atualiza as informações de um produto', funcao: atualizarProduto },
    'search': { descricao: 'Busca um produto específico', funcao: buscarProduct },
    'show': { descricao: 'Exibe os detalhes de um produto', funcao: exibirProduto },
    'listX': { descricao: 'Lista produtos até um valor específico', funcao: listarProdutosAteX },
    'listV': { descricao: 'Exibe o produto mais caro', funcao: listarProdutoMaisCaro },
    'listCat': { descricao: 'Lista produtos por categoria', funcao: listarPorCategoria },
    'sum': { descricao: 'Exibe a soma total dos valores dos produtos', funcao: somarValores },
    'sair': { descricao: 'Encerra o programa', funcao: () => {
        console.log('Encerrando...');
        process.exit();
    }}
};

