// Moda Custom - vitrine, lojas, favoritos e carrinho
// Os dados abaixo são demonstrativos e podem ser alterados conforme o projeto crescer.

const imagensPinterest = [
    "https://i.pinimg.com/736x/4e/ae/e6/4eaee65ce514639057bdf307b4eb0b17.jpg",
    "https://i.pinimg.com/736x/dc/ab/92/dcab924bdc7b10b9ec876775f8a8b123.jpg",
    "https://i.pinimg.com/736x/ee/7c/86/ee7c86e679dfd5d904ac78e949f49db5.jpg",
    "https://i.pinimg.com/1200x/6d/ee/2c/6dee2c6a8b159c1966fb30b3b977967f.jpg",
    "https://i.pinimg.com/736x/00/db/c4/00dbc4faca9f607a1feb9d5c84a4cdb2.jpg",
    "https://i.pinimg.com/736x/14/b5/3a/14b53a3e317f4ff468653fd16966db1a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbVtg5zr_73-bFPsZY5LIvsG6-wyTPwqXgwQ7gnKKYgg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BXE4Dvl6M0ZtRsNbNAU2wIK0AOdt6Kpv2IDpwKWrlA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuitxURewKuYNfnik586gG6KfYzVz63YZCLQU88b0QyA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyy18e-G60jGZtkG0oTiFlV23ebrOEQBcQFVvl8OtgJBcSs4bpi_Ez0h8&s=10",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWUd_SsuteyeWvp14eZwyX5Ib1t5bOx4MK928MzvTzS38tq8ng8q994ztC8pZn2MFIn8jGRan3mMbUOy-hCSxFL3-BvKDyEtFfbfE_e8I",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf1AxAp4fMFvov_CakR7QIw2_P5uYrdqweaoqOfEERQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGHB9BdSeZQtpuYUZppYcWANjNKhWOPvIwpQr8WNTXg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppsu_-oK5tFN_y0W4FRFh7-cdNaC3ZbXh_EJNntrBuQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFh97dBbt8PPRNF8xQMY_rbnI2mpQnN0ktGcPU9zAuqQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMrUT6JXAGACpTrF0dHrPXg7oTuRnS3SqwiPrMIcyHw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVcG7fSdd2pTzSBfGvg7PcPVjZTfPFFWei4ngXC-n3A&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWVWxowhBAZq06RFsJ1ZM5qeiij_B1OkQ1Cx85Lnhxg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHQgUCxYz4pWC_ibnhQ20Vo3pW1234JNWY_ROtrBoSA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSCmT8zViDkIszy0oRRQjoiJGkFqwnMr3VJnRyrs5jw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6LqWvnYSDum_uAED0wIqgfKWvYN1YXNLzYXlzxeBIQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4galnyy8BHWY5wXloZUxLhk53bfgfIK0xtFV7QUkwg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hy_DdtOYuLfQyH-z9qTLb6xP28jeLd7ZIhlnLA257Q&s=10",
    "/images/modacustom-imagem-anexa-1.jpg",
    "/images/modacustom-imagem-anexa-2.jpg"
];

// Links dos pins: são páginas do Pinterest, não arquivos de imagem diretos.
const linksPinterest = [
    "https://pin.it/qifcnNy8F",
    "https://pin.it/3hseC0dD7",
    "https://pin.it/NiGCwQccD",
    "https://pin.it/2cmYidIKE",
    "https://pin.it/6cOK9VxMH",
    "https://pin.it/4DhSzMbG1",
    "https://pin.it/36PIh7Ahv",
    "https://pin.it/32XlWXEE9",
    "https://pin.it/4ih1GiyUn",
    "https://pin.it/6OhB4XL8b",
    "https://pin.it/2sgC3C0s7",
    "https://pin.it/3aG7QFxQj",
    "https://pin.it/7J8wmNR6T",
    "https://pin.it/6Das8NzSY",
    "https://pin.it/7cxqMknBD",
    "https://pin.it/4oTYUNlCb",
    "https://pin.it/LR4y6uvjL",
    "https://pin.it/1pzDPbfXl",
    "https://pin.it/7rjygnXUQ",
    "https://pin.it/2vZbD0lnl",
    "https://pin.it/7e1C0I3yF",
    "https://pin.it/1aTO5d0rJ",
    "https://pin.it/3ggoAWRpI",
    "https://pin.it/7D5LaM0g8",
    "https://pin.it/1lZFeNzVg"
];

// Total: 50 referências únicas (25 imagens/arquivos e 25 pins do Pinterest).
const referenciasImagens = imagensPinterest.concat(linksPinterest);

const catalogo = [
    { id: 1, nome: "Camiseta Turnê Pop", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 89.90, tag: "MÚSICA", img: imagensPinterest[0], descricao: "Camiseta com visual de show e cultura musical." },
    { id: 2, nome: "Camiseta Rap & Rua", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 99.90, tag: "STREET", img: imagensPinterest[1], descricao: "Modelagem urbana para quem curte um estilo autêntico." },
    { id: 3, nome: "Terceirão — A Última Dança", marca: "Turma em Cena", lojaId: 4, categoria: "Terceirão", preco: 74.90, tag: "TERCEIRÃO", img: imagensPinterest[2], descricao: "Modelo para formandos com opção de personalização." },
    { id: 4, nome: "Camiseta Cultura Pop", marca: "PopLab Studio", lojaId: 9, categoria: "Cultura pop", preco: 94.90, tag: "POP CULTURE", img: imagensPinterest[3], descricao: "Uma peça para expressar seu universo e sua personalidade." },
    { id: 5, nome: "Camiseta Esporte Club", marca: "Jogo de Rua", lojaId: 6, categoria: "Esporte", preco: 84.90, tag: "ESPORTE", img: imagensPinterest[4], descricao: "Camiseta casual esportiva para usar no treino ou no dia a dia." },
    { id: 6, nome: "Moletom Oversized", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 189.90, tag: "OVERSIZED", img: imagensPinterest[5], descricao: "Moletom de caimento amplo com atitude urbana." },
    { id: 7, nome: "Camiseta Ídolos da Música", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 99.90, tag: "FÃ-CLUBE", img: imagensPinterest[6], descricao: "Modelo com estética inspirada em pôsteres musicais." },
    { id: 8, nome: "Terceirão Personalizado", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 69.90, tag: "SUA TURMA", img: imagensPinterest[7], descricao: "Personalize com nome da sala, ano e frase." },
    { id: 9, nome: "Camiseta Gamer & Pop", marca: "PopLab Studio", lojaId: 9, categoria: "Cultura pop", preco: 109.90, tag: "GEEK", img: imagensPinterest[8], descricao: "Peça para quem gosta de games e cultura pop." },
    { id: 10, nome: "Camiseta Treino", marca: "Arena Custom", lojaId: 7, categoria: "Esporte", preco: 79.90, tag: "ACTIVE", img: imagensPinterest[9], descricao: "Visual esportivo para treinar ou usar no dia a dia." },
    { id: 11, nome: "Camiseta Crie Sua Arte", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 64.90, tag: "PERSONALIZE", img: imagensPinterest[10], descricao: "Modelo básico para receber sua frase ou desenho." },
    { id: 12, nome: "Baby Look Pop", marca: "Vibe de Fã", lojaId: 10, categoria: "Cultura pop", preco: 74.90, tag: "BABY LOOK", img: imagensPinterest[11], descricao: "Modelagem ajustada com inspiração pop." },
    { id: 13, nome: "Camiseta Formandos", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 72.90, tag: "FORMATURA", img: imagensPinterest[12], descricao: "Camiseta para guardar a lembrança do último ano." },
    { id: 14, nome: "Street Art Tee", marca: "Traço Livre", lojaId: 5, categoria: "Streetwear", preco: 89.90, tag: "ARTE AUTORAL", img: imagensPinterest[13], descricao: "Camiseta com inspiração em arte urbana." },
    { id: 15, nome: "Camiseta Torcida", marca: "Arena Custom", lojaId: 7, categoria: "Esporte", preco: 89.90, tag: "TORCIDA", img: imagensPinterest[14], descricao: "Modelo para grupos esportivos e torcidas." },
    { id: 16, nome: "Camiseta Minimal", marca: "Essencial Lab", lojaId: 8, categoria: "Personalizável", preco: 59.90, tag: "BÁSICA", img: imagensPinterest[15], descricao: "Base minimalista para receber sua própria arte." },
    { id: 17, nome: "Moletom Fã de Música", marca: "Vibe de Fã", lojaId: 10, categoria: "Música", preco: 179.90, tag: "FÃ DE MÚSICA", img: imagensPinterest[16], descricao: "Moletom para quem vive a música." },
    { id: 18, nome: "Mascote da Turma", marca: "Turma em Cena", lojaId: 4, categoria: "Terceirão", preco: 79.90, tag: "TURMA", img: imagensPinterest[17], descricao: "Personalize com mascote, número e ano de formatura." }
];

const lojas = [
    { id: 1, nome: "Distrito 013", categoria: "Streetwear", cidade: "São Paulo, SP", rating: "4,9", vendas: "320+", descricao: "Streetwear oversized, arte urbana e camisetas com identidade de rua.", capa: imagensPinterest[18], slogan: "Vista a rua do seu jeito." },
    { id: 2, nome: "Som & Estampa", categoria: "Música & artistas", cidade: "São Paulo, SP", rating: "4,8", vendas: "280+", descricao: "Camisetas e moletons com estética musical.", capa: imagensPinterest[19], slogan: "Sua trilha sonora, sua camiseta." },
    { id: 3, nome: "Formei! Camisetas", categoria: "Terceirão", cidade: "Campinas, SP", rating: "4,9", vendas: "190+", descricao: "Camisetas de terceirão, formatura e lembranças de turma.", capa: imagensPinterest[20], slogan: "A turma merece uma história." },
    { id: 4, nome: "Turma em Cena", categoria: "Terceirão", cidade: "Santos, SP", rating: "4,7", vendas: "150+", descricao: "Estampas para turmas, viagens escolares e último ano.", capa: imagensPinterest[21], slogan: "Memórias que a gente veste." },
    { id: 5, nome: "Traço Livre", categoria: "Streetwear", cidade: "Curitiba, PR", rating: "4,8", vendas: "210+", descricao: "Ilustrações originais, arte independente e peças personalizadas.", capa: imagensPinterest[22], slogan: "Ideias fora das linhas." },
    { id: 6, nome: "Jogo de Rua", categoria: "Esporte", cidade: "Rio de Janeiro, RJ", rating: "4,8", vendas: "260+", descricao: "Moda esportiva casual e estampas de torcida autorais.", capa: imagensPinterest[23], slogan: "Espírito de equipe, estilo próprio." },
    { id: 7, nome: "Arena Custom", categoria: "Esporte", cidade: "Belo Horizonte, MG", rating: "4,9", vendas: "230+", descricao: "Camisetas de treino, corrida, academia e uniformes personalizados.", capa: imagensPinterest[24], slogan: "Vista sua energia." },
    { id: 8, nome: "Essencial Lab", categoria: "Personalizáveis", cidade: "São Paulo, SP", rating: "4,6", vendas: "170+", descricao: "Camisetas lisas e peças-base para receber sua própria arte.", capa: imagensPinterest[0], slogan: "Uma tela em branco para você." },
    { id: 9, nome: "PopLab Studio", categoria: "Cultura pop", cidade: "Florianópolis, SC", rating: "4,8", vendas: "310+", descricao: "Estampas originais inspiradas em games e cultura pop.", capa: imagensPinterest[1], slogan: "Seu universo, seu estilo." },
    { id: 10, nome: "Vibe de Fã", categoria: "Música & artistas", cidade: "Porto Alegre, RS", rating: "4,7", vendas: "200+", descricao: "Moda para fãs de música e festivais.", capa: imagensPinterest[2], slogan: "Leve a música com você." }
];

// Cada loja fica com pelo menos cinco peças na vitrine.
function completarProdutosDasLojas() {
    const produtosOriginais = catalogo.slice();

    for (let i = 0; i < lojas.length; i++) {
        const loja = lojas[i];
        let produtosDaLoja = catalogo.filter(function (produto) {
            return produto.lojaId === loja.id;
        });
        let rodada = 0;

        while (produtosDaLoja.length < 5) {
            const base = produtosOriginais[(loja.id + rodada) % produtosOriginais.length];
            let maiorId = 0;

            for (let j = 0; j < catalogo.length; j++) {
                if (catalogo[j].id > maiorId) maiorId = catalogo[j].id;
            }

            const nomes = ["Edição Especial", "Camiseta Exclusiva", "Modelo Autoral", "Coleção Limitada", "Estampa Signature"];
            let categoriaProduto = loja.categoria;
            if (loja.categoria === "Música & artistas") categoriaProduto = "Música";
            if (loja.categoria === "Personalizáveis") categoriaProduto = "Personalizável";

            const novoProduto = {
                id: maiorId + 1,
                nome: nomes[produtosDaLoja.length] + " — " + loja.nome,
                marca: loja.nome,
                lojaId: loja.id,
                categoria: categoriaProduto,
                preco: Math.round((base.preco + produtosDaLoja.length * 7.5) * 100) / 100,
                tag: "DA LOJA",
                img: imagensPinterest[(loja.id + rodada + produtosDaLoja.length) % imagensPinterest.length],
                descricao: "Modelo demonstrativo desta loja. A disponibilidade real depende do vendedor."
            };

            catalogo.push(novoProduto);
            produtosDaLoja.push(novoProduto);
            rodada++;
        }
    }
}
completarProdutosDasLojas();

function selecionar(seletor) {
    return document.querySelector(seletor);
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function lerDados(chave, valorPadrao) {
    try {
        const dados = JSON.parse(localStorage.getItem(chave));
        return dados === null ? valorPadrao : dados;
    } catch (erro) {
        return valorPadrao;
    }
}

let favoritos = lerDados("mc-favoritos", []);
let carrinho = lerDados("mc-carrinho", []);
let categoria = "Todos";
let categoriaLoja = "Todas";
let busca = "";

function mostrarAviso(texto) {
    const aviso = selecionar("#toast");
    if (!aviso) return;
    aviso.textContent = texto;
    aviso.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(function () {
        aviso.classList.remove("show");
    }, 2600);
}

function salvarEstado() {
    localStorage.setItem("mc-favoritos", JSON.stringify(favoritos));
    localStorage.setItem("mc-carrinho", JSON.stringify(carrinho));
    atualizarContadores();
}

function atualizarContadores() {
    const contadorFavoritos = selecionar("#favCount");
    const contadorCarrinho = selecionar("#cartCount");
    if (contadorFavoritos) contadorFavoritos.textContent = favoritos.length;

    let quantidadeTotal = 0;
    for (let i = 0; i < carrinho.length; i++) {
        quantidadeTotal += carrinho[i].qtd;
    }
    if (contadorCarrinho) contadorCarrinho.textContent = quantidadeTotal;
}

function abrirDialog(id) {
    const dialogo = selecionar("#" + id);
    if (dialogo && !dialogo.open) dialogo.showModal();
}

function renderProdutos() {
    const grade = selecionar("#productGrid");
    if (!grade) return;

    const lista = catalogo.filter(function (produto) {
        const combinaCategoria = categoria === "Todos" || produto.categoria === categoria;
        const textoProduto = (produto.nome + " " + produto.marca + " " + produto.categoria + " " + produto.descricao).toLowerCase();
        return combinaCategoria && textoProduto.includes(busca.toLowerCase());
    });

    grade.innerHTML = lista.map(function (produto) {
        const estaFavoritado = favoritos.includes(produto.id);
        return '<article class="product">' +
            '<div class="product-image"><img src="' + produto.img + '" alt="' + produto.nome + '" loading="lazy">' +
            '<span class="tag">' + produto.tag + '</span>' +
            '<button class="heart ' + (estaFavoritado ? 'on' : '') + '" data-fav="' + produto.id + '" aria-label="Favoritar">' + (estaFavoritado ? '♥' : '♡') + '</button></div>' +
            '<div class="product-info"><span class="product-brand">' + produto.marca + '</span><h3>' + produto.nome + '</h3>' +
            '<div class="product-bottom"><span class="price">' + formatarMoeda(produto.preco) + '</span><span>★ 4,8</span></div>' +
            '<button class="add" data-add="' + produto.id + '">＋ ADICIONAR AO CARRINHO</button></div></article>';
    }).join("");

    const vazio = selecionar("#emptyState");
    if (vazio) vazio.classList.toggle("hidden", lista.length > 0);
}

function renderLojas() {
    const grade = selecionar("#lojasGrid");
    if (!grade) return;

    const lista = lojas.filter(function (loja) {
        const combinaCategoria = categoriaLoja === "Todas" || loja.categoria === categoriaLoja;
        const textoLoja = (loja.nome + " " + loja.categoria + " " + loja.cidade + " " + loja.descricao).toLowerCase();
        return combinaCategoria && textoLoja.includes(busca.toLowerCase());
    });

    grade.innerHTML = lista.map(function (loja) {
        return '<article class="store-card"><div class="store-cover" style="background-image:url(\'' + loja.capa + '\')">' +
            '<span class="store-category">' + loja.categoria.toUpperCase() + '</span></div><div class="store-body">' +
            '<h3>' + loja.nome + '</h3><p>' + loja.descricao + '</p><div class="store-meta"><span>★ ' + loja.rating + ' · ' + loja.vendas + ' vendas</span><span>' + loja.cidade + '</span></div>' +
            '<button class="button button-outline" data-store="' + loja.id + '">Conhecer loja ↗</button></div></article>';
    }).join("");

    if (lista.length === 0) {
        grade.innerHTML = '<p class="section-subtitle">Nenhuma loja encontrada com esse filtro.</p>';
    }
}

function renderCarrinho() {
    const area = selecionar("#cartItems");
    if (!area) return;
    let total = 0;

    if (carrinho.length === 0) {
        area.innerHTML = '<p class="empty-message">Seu carrinho está vazio. Explore as estampas e adicione sua primeira peça.</p>';
    } else {
        area.innerHTML = carrinho.map(function (item) {
            const produto = catalogo.find(function (p) { return p.id === item.id; });
            if (!produto) return "";
            total += produto.preco * item.qtd;
            return '<div class="cart-row"><img src="' + produto.img + '" alt="' + produto.nome + '"><div class="item-text"><strong>' + produto.nome + '</strong><small>' + formatarMoeda(produto.preco) + ' cada</small></div>' +
                '<div class="quantity"><button data-minus="' + produto.id + '">−</button><span>' + item.qtd + '</span><button data-plus="' + produto.id + '">+</button></div>' +
                '<button class="remove" data-remove-cart="' + produto.id + '">×</button></div>';
        }).join("");
    }

    const totalArea = selecionar("#cartTotal");
    if (totalArea) totalArea.textContent = formatarMoeda(total);
}

function renderFavoritos() {
    const area = selecionar("#favoriteItems");
    if (!area) return;
    const lista = catalogo.filter(function (produto) { return favoritos.includes(produto.id); });

    if (lista.length === 0) {
        area.innerHTML = '<p class="empty-message">Você ainda não favoritou nenhuma peça.</p>';
        return;
    }

    area.innerHTML = lista.map(function (produto) {
        return '<div class="favorite-row"><img src="' + produto.img + '" alt="' + produto.nome + '"><div class="item-text"><strong>' + produto.nome + '</strong><small>' + formatarMoeda(produto.preco) + '</small></div>' +
            '<button class="button button-outline" data-go-product="' + produto.id + '">Ver peça</button><button class="remove" data-unfav="' + produto.id + '">×</button></div>';
    }).join("");
}

function renderResumoPedido() {
    const area = selecionar("#checkoutResumo");
    if (!area) return;
    let total = 0;
    let itensHtml = "";

    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];
        const produto = catalogo.find(function (p) { return p.id === item.id; });
        if (!produto) continue;
        const subtotal = produto.preco * item.qtd;
        total += subtotal;
        itensHtml += '<div class="cart-row"><img src="' + produto.img + '" alt="' + produto.nome + '"><div class="item-text"><strong>' + produto.nome + '</strong><small>' + item.qtd + ' unidade(s) · ' + formatarMoeda(subtotal) + '</small></div></div>';
    }

    area.innerHTML = '<h3>Resumo do pedido</h3>' + itensHtml + '<p class="cart-total">Total do pedido <strong>' + formatarMoeda(total) + '</strong></p>';
}

function renderDetalheLoja(id) {
    const loja = lojas.find(function (item) { return item.id === id; });
    if (!loja) return;
    const produtos = catalogo.filter(function (produto) { return produto.lojaId === id; });
    const area = selecionar("#storeDetails");

    area.innerHTML = '<div class="store-detail-hero" style="background-image:url(\'' + loja.capa + '\')"><span class="store-detail-category">' + loja.categoria.toUpperCase() + '</span></div>' +
        '<div class="store-detail-heading"><div><p class="eyebrow">LOJA INDEPENDENTE · ' + loja.cidade.toUpperCase() + '</p><h2>' + loja.nome + '</h2></div></div>' +
        '<p><em>' + loja.slogan + '</em></p><p class="section-subtitle">' + loja.descricao + '</p>' +
        '<div class="store-meta"><span>★ ' + loja.rating + ' avaliação demonstrativa</span><span>' + loja.vendas + ' vendas demonstrativas</span><span>' + produtos.length + ' peças na vitrine</span></div>' +
        '<div class="store-detail-actions"><button class="button button-outline" id="backToStores">← Voltar para todas as lojas</button><button class="button button-gold" id="storeCartShortcut">Ver carrinho ▱</button></div>' +
        '<h3>Conheça as peças desta loja</h3><div class="store-products">' + produtos.map(function (produto) {
            return '<div class="store-product"><img src="' + produto.img + '" alt="' + produto.nome + '" loading="lazy"><strong>' + produto.nome + '</strong><small>' + formatarMoeda(produto.preco) + '</small><button class="add" data-add="' + produto.id + '">＋ Adicionar ao carrinho</button></div>';
        }).join("") + '</div><p class="form-note">Preços, avaliações e produtos são demonstrativos. A loja real será administrada pelo vendedor após integração ao backend.</p>';

    selecionar("#backToStores").addEventListener("click", function () {
        selecionar("#storeDialog").close();
        selecionar("#lojas").scrollIntoView({ behavior: "smooth" });
    });

    selecionar("#storeCartShortcut").addEventListener("click", function () {
        selecionar("#storeDialog").close();
        renderCarrinho();
        abrirDialog("cartDialog");
    });

    abrirDialog("storeDialog");
}

function adicionarCarrinho(id) {
    const item = carrinho.find(function (produto) { return produto.id === id; });
    if (item) item.qtd++;
    else carrinho.push({ id: id, qtd: 1 });
    salvarEstado();
    mostrarAviso("Produto adicionado ao carrinho.");
}

function configurarEventos() {
    const gradeProdutos = selecionar("#productGrid");
    if (gradeProdutos) gradeProdutos.addEventListener("click", function (evento) {
        const botaoFavorito = evento.target.closest("[data-fav]");
        const botaoAdicionar = evento.target.closest("[data-add]");

        if (botaoFavorito) {
            const id = Number(botaoFavorito.dataset.fav);
            if (favoritos.includes(id)) favoritos = favoritos.filter(function (itemId) { return itemId !== id; });
            else favoritos.push(id);
            salvarEstado();
            renderProdutos();
            mostrarAviso(favoritos.includes(id) ? "Adicionado aos favoritos." : "Removido dos favoritos.");
        }

        if (botaoAdicionar) adicionarCarrinho(Number(botaoAdicionar.dataset.add));
    });

    const gradeLojas = selecionar("#lojasGrid");
    if (gradeLojas) gradeLojas.addEventListener("click", function (evento) {
        const botao = evento.target.closest("[data-store]");
        if (botao) renderDetalheLoja(Number(botao.dataset.store));
    });

    const detalhesLoja = selecionar("#storeDetails");
    if (detalhesLoja) detalhesLoja.addEventListener("click", function (evento) {
        const botao = evento.target.closest("[data-add]");
        if (botao) adicionarCarrinho(Number(botao.dataset.add));
    });

    document.querySelectorAll("#productFilters .filter").forEach(function (botao) {
        botao.addEventListener("click", function () {
            document.querySelectorAll("#productFilters .filter").forEach(function (item) { item.classList.remove("active"); });
            botao.classList.add("active");
            categoria = botao.dataset.category;
            renderProdutos();
        });
    });

    document.querySelectorAll("#storeFilters .filter").forEach(function (botao) {
        botao.addEventListener("click", function () {
            document.querySelectorAll("#storeFilters .filter").forEach(function (item) { item.classList.remove("active"); });
            botao.classList.add("active");
            categoriaLoja = botao.dataset.storeCategory;
            renderLojas();
        });
    });

    const formularioBusca = selecionar("#searchForm");
    if (formularioBusca) formularioBusca.addEventListener("submit", function (evento) {
        evento.preventDefault();
        busca = selecionar("#searchInput").value.trim();
        categoria = "Todos";
        categoriaLoja = "Todas";
        document.querySelectorAll("#productFilters .filter").forEach(function (botao) { botao.classList.toggle("active", botao.dataset.category === "Todos"); });
        document.querySelectorAll("#storeFilters .filter").forEach(function (botao) { botao.classList.toggle("active", botao.dataset.storeCategory === "Todas"); });
        renderProdutos();
        renderLojas();
        selecionar("#explorar").scrollIntoView({ behavior: "smooth" });
    });

    const sellerOpen = selecionar("#sellerOpen");
    if (sellerOpen) sellerOpen.addEventListener("click", function () { abrirDialog("sellerDialog"); });
    const sellerOpen2 = selecionar("#sellerOpen2");
    if (sellerOpen2) sellerOpen2.addEventListener("click", function () { abrirDialog("sellerDialog"); });
    const clientOpen = selecionar("#clientOpen");
    if (clientOpen) clientOpen.addEventListener("click", function () { abrirDialog("clientDialog"); });
    const customOpen = selecionar("#customOpen");
    if (customOpen) customOpen.addEventListener("click", function () { abrirDialog("customDialog"); });

    const favTop = selecionar("#favTop");
    if (favTop) favTop.addEventListener("click", function () { renderFavoritos(); abrirDialog("favoritesDialog"); });
    const cartTop = selecionar("#cartTop");
    if (cartTop) cartTop.addEventListener("click", function () { renderCarrinho(); abrirDialog("cartDialog"); });

    document.querySelectorAll("[data-close]").forEach(function (botao) {
        botao.addEventListener("click", function () {
            const dialogo = selecionar("#" + botao.dataset.close);
            if (dialogo) dialogo.close();
        });
    });

    const areaCarrinho = selecionar("#cartItems");
    if (areaCarrinho) areaCarrinho.addEventListener("click", function (evento) {
        const mais = evento.target.closest("[data-plus]");
        const menos = evento.target.closest("[data-minus]");
        const remover = evento.target.closest("[data-remove-cart]");

        if (mais) {
            const itemMais = carrinho.find(function (item) { return item.id === Number(mais.dataset.plus); });
            if (itemMais) itemMais.qtd++;
        }
        if (menos) {
            const itemMenos = carrinho.find(function (item) { return item.id === Number(menos.dataset.minus); });
            if (itemMenos) itemMenos.qtd = Math.max(1, itemMenos.qtd - 1);
        }
        if (remover) carrinho = carrinho.filter(function (item) { return item.id !== Number(remover.dataset.removeCart); });

        salvarEstado();
        renderCarrinho();
    });

    const areaFavoritos = selecionar("#favoriteItems");
    if (areaFavoritos) areaFavoritos.addEventListener("click", function (evento) {
        const remover = evento.target.closest("[data-unfav]");
        const verProduto = evento.target.closest("[data-go-product]");

        if (remover) {
            favoritos = favoritos.filter(function (id) { return id !== Number(remover.dataset.unfav); });
            salvarEstado();
            renderProdutos();
            renderFavoritos();
        }
        if (verProduto) {
            selecionar("#favoritesDialog").close();
            busca = "";
            selecionar("#searchInput").value = "";
            categoria = "Todos";
            renderProdutos();
            selecionar("#explorar").scrollIntoView({ behavior: "smooth" });
        }
    });

    const botaoCheckout = selecionar("#checkout");
    if (botaoCheckout) botaoCheckout.addEventListener("click", function () {
        if (carrinho.length === 0) {
            mostrarAviso("Adicione produtos antes de continuar.");
            return;
        }
        selecionar("#cartDialog").close();
        renderResumoPedido();
        abrirDialog("checkoutDialog");
    });

    const formularioCheckout = selecionar("#checkoutForm");
    if (formularioCheckout) formularioCheckout.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (carrinho.length === 0) {
            mostrarAviso("Seu carrinho está vazio.");
            selecionar("#checkoutDialog").close();
            return;
        }

        let total = 0;
        const itensPedido = carrinho.map(function (item) {
            const produto = catalogo.find(function (p) { return p.id === item.id; });
            if (produto) total += produto.preco * item.qtd;
            return { id: item.id, qtd: item.qtd };
        });

        const pedido = {
            numero: Date.now(),
            data: new Date().toLocaleString("pt-BR"),
            cliente: this.elements.nome.value,
            email: this.elements.email.value,
            cep: this.elements.cep.value,
            endereco: this.elements.endereco.value,
            cidade: this.elements.cidade.value,
            pagamento: this.elements.pagamento.value,
            itens: itensPedido,
            total: total
        };

        const pedidos = lerDados("mc-pedidos", []);
        pedidos.push(pedido);
        localStorage.setItem("mc-pedidos", JSON.stringify(pedidos));
        carrinho = [];
        salvarEstado();
        selecionar("#checkoutDialog").close();
        this.reset();
        mostrarAviso("Pedido demonstrativo registrado com sucesso.");
    });

    const formularioCliente = selecionar("#clientForm");
    if (formularioCliente) formularioCliente.addEventListener("submit", function (evento) {
        evento.preventDefault();
        selecionar("#clientDialog").close();
        evento.target.reset();
        mostrarAviso("Cadastro demonstrativo preenchido. Conecte ao backend para registrar.");
    });

    const formularioVendedor = selecionar("#sellerForm");
    if (formularioVendedor) formularioVendedor.addEventListener("submit", function (evento) {
        evento.preventDefault();
        selecionar("#sellerDialog").close();
        evento.target.reset();
        mostrarAviso("Cadastro demonstrativo preenchido. Conecte ao backend para criar uma loja real.");
    });

    const formularioPersonalizacao = selecionar("#customForm");
    if (formularioPersonalizacao) formularioPersonalizacao.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const ideia = Object.fromEntries(new FormData(evento.target).entries());
        const ideiasSalvas = lerDados("mc-personalizacoes", []);
        ideia.criadaEm = new Date().toISOString();
        ideiasSalvas.push(ideia);
        localStorage.setItem("mc-personalizacoes", JSON.stringify(ideiasSalvas));
        selecionar("#customDialog").close();
        evento.target.reset();
        mostrarAviso("Sua ideia foi salva nesta demonstração.");
    });
        const grade = selecionar("#productGrid");
    if (!grade) return;

    const lista = catalogo.filter(function (produto) {
        const combinaCategoria = categoria === "Todos" || produto.categoria === categoria;
        const textoProduto = (
            produto.nome + " " +
            produto.marca + " " +
            produto.categoria + " " +
            produto.descricao
        ).toLowerCase();

        return combinaCategoria && textoProduto.includes(busca.toLowerCase());
    });

    grade.innerHTML = lista.map(function (produto) {
        const estaFavoritado = favoritos.includes(produto.id);

        return '<article class="product">' +
            '<div class="product-image">' +
            '<img src="' + produto.img + '" alt="' + produto.nome + '" loading="lazy">' +
            '<span class="tag">' + produto.tag + '</span>' +
            '<button class="heart ' + (estaFavoritado ? 'on' : '') +
            '" data-fav="' + produto.id + '" aria-label="Favoritar">' +
            (estaFavoritado ? '♥' : '♡') + '</button></div>' +
            '<div class="product-info">' +
            '<span class="product-brand">' + produto.marca + '</span>' +
            '<h3>' + produto.nome + '</h3>' +
            '<div class="product-bottom">' +
            '<span class="price">' + formatarMoeda(produto.preco) + '</span>' +
            '<span>★ 4,8</span></div>' +
            '<button class="add" data-add="' + produto.id + '">' +
            '＋ ADICIONAR AO CARRINHO</button></div></article>';
    }).join("");

    const vazio = selecionar("#emptyState");
    if (vazio) {
        vazio.classList.toggle("hidden", lista.length > 0);
    }
}

function renderLojas() {
    const grade = selecionar("#lojasGrid");
    if (!grade) return;

    const lista = lojas.filter(function (loja) {
        const combinaCategoria =
            categoriaLoja === "Todas" || loja.categoria === categoriaLoja;

        const textoLoja = (
            loja.nome + " " +
            loja.categoria + " " +
            loja.cidade + " " +
            loja.descricao
        ).toLowerCase();

        return combinaCategoria && textoLoja.includes(busca.toLowerCase());
    });

    grade.innerHTML = lista.map(function (loja) {
        return '<article class="store-card">' +
            '<div class="store-cover" style="background-image:url(\'' + loja.capa + '\')">' +
            '<span class="store-category">' + loja.categoria.toUpperCase() + '</span>' +
            '</div><div class="store-body">' +
            '<h3>' + loja.nome + '</h3>' +
            '<p>' + loja.descricao + '</p>' +
            '<div class="store-meta">' +
            '<span>★ ' + loja.rating + ' · ' + loja.vendas + ' vendas</span>' +
            '<span>' + loja.cidade + '</span></div>' +
            '<button class="button button-outline" data-store="' + loja.id + '">' +
            'Conhecer loja ↗</button></div></article>';
    }).join("");

    if (lista.length === 0) {
        grade.innerHTML =
            '<p class="section-subtitle">Nenhuma loja encontrada com esse filtro.</p>';
    }
}

function renderCarrinho() {
    const area = selecionar("#cartItems");
    if (!area) return;

    let total = 0;

    if (carrinho.length === 0) {
        area.innerHTML =
            '<p class="empty-message">Seu carrinho está vazio. Explore as estampas e adicione sua primeira peça.</p>';
    } else {
        area.innerHTML = carrinho.map(function (item) {
            const produto = catalogo.find(function (p) {
                return p.id === item.id;
            });

            if (!produto) return "";

            total += produto.preco * item.qtd;

            return '<div class="cart-row">' +
                '<img src="' + produto.img + '" alt="' + produto.nome + '">' +
                '<div class="item-text"><strong>' + produto.nome + '</strong>' +
                '<small>' + formatarMoeda(produto.preco) + ' cada</small></div>' +
                '<div class="quantity">' +
                '<button data-minus="' + produto.id + '">−</button>' +
                '<span>' + item.qtd + '</span>' +
                '<button data-plus="' + produto.id + '">+</button></div>' +
                '<button class="remove" data-remove-cart="' + produto.id + '">×</button>' +
                '</div>';
        }).join("");
    }

    const totalArea = selecionar("#cartTotal");
    if (totalArea) totalArea.textContent = formatarMoeda(total);
}

function renderFavoritos() {
    const area = selecionar("#favoriteItems");
    if (!area) return;

    const lista = catalogo.filter(function (produto) {
        return favoritos.includes(produto.id);
    });

    if (lista.length === 0) {
        area.innerHTML =
            '<p class="empty-message">Você ainda não favoritou nenhuma peça.</p>';
        return;
    }

    area.innerHTML = lista.map(function (produto) {
        return '<div class="favorite-row">' +
            '<img src="' + produto.img + '" alt="' + produto.nome + '">' +
            '<div class="item-text"><strong>' + produto.nome + '</strong>' +
            '<small>' + formatarMoeda(produto.preco) + '</small></div>' +
            '<button class="button button-outline" data-go-product="' + produto.id + '">' +
            'Ver peça</button>' +
            '<button class="remove" data-unfav="' + produto.id + '">×</button></div>';
    }).join("");
}

function renderResumoPedido() {
    const area = selecionar("#checkoutResumo");
    if (!area) return;

    let total = 0;
    let itensHtml = "";

    for (let i = 0; i < carrinho.length; i++) {
        const item = carrinho[i];

        const produto = catalogo.find(function (p) {
            return p.id === item.id;
        });

        if (!produto) continue;

        const subtotal = produto.preco * item.qtd;
        total += subtotal;

        itensHtml += '<div class="cart-row">' +
            '<img src="' + produto.img + '" alt="' + produto.nome + '">' +
            '<div class="item-text"><strong>' + produto.nome + '</strong>' +
            '<small>' + item.qtd + ' unidade(s) · ' +
            formatarMoeda(subtotal) + '</small></div></div>';
    }

    area.innerHTML = '<h3>Resumo do pedido</h3>' +
        itensHtml +
        '<p class="cart-total">Total do pedido <strong>' +
        formatarMoeda(total) + '</strong></p>';
}

function renderDetalheLoja(id) {
    const loja = lojas.find(function (item) {
        return item.id === id;
    });

    if (!loja) return;

    const produtos = catalogo.filter(function (produto) {
        return produto.lojaId === id;
    });

    const area = selecionar("#storeDetails");

    area.innerHTML =
        '<div class="store-detail-hero" style="background-image:url(\'' + loja.capa + '\')">' +
        '<span class="store-detail-category">' + loja.categoria.toUpperCase() + '</span></div>' +
        '<div class="store-detail-heading"><div>' +
        '<p class="eyebrow">LOJA INDEPENDENTE · ' + loja.cidade.toUpperCase() + '</p>' +
        '<h2>' + loja.nome + '</h2></div></div>' +
        '<p><em>' + loja.slogan + '</em></p>' +
        '<p class="section-subtitle">' + loja.descricao + '</p>' +
        '<div class="store-meta">' +
        '<span>★ ' + loja.rating + ' avaliação demonstrativa</span>' +
        '<span>' + loja.vendas + ' vendas demonstrativas</span>' +
        '<span>' + produtos.length + ' peças na vitrine</span></div>' +
        '<div class="store-detail-actions">' +
        '<button class="button button-outline" id="backToStores">← Voltar para todas as lojas</button>' +
        '<button class="button button-gold" id="storeCartShortcut">Ver carrinho ▱</button></div>' +
        '<h3>Conheça as peças desta loja</h3>' +
        '<div class="store-products">' +
        produtos.map(function (produto) {
            return '<div class="store-product">' +
                '<img src="' + produto.img + '" alt="' + produto.nome + '" loading="lazy">' +
                '<strong>' + produto.nome + '</strong>' +
                '<small>' + formatarMoeda(produto.preco) + '</small>' +
                '<button class="add" data-add="' + produto.id + '">' +
                '＋ Adicionar ao carrinho</button></div>';
        }).join("") +
        '</div><p class="form-note">Preços, avaliações e produtos são demonstrativos. A loja real será administrada pelo vendedor após integração ao backend.</p>';

    selecionar("#backToStores").addEventListener("click", function () {
        selecionar("#storeDialog").close();
        selecionar("#lojas").scrollIntoView({ behavior: "smooth" });
    });

    selecionar("#storeCartShortcut").addEventListener("click", function () {
        selecionar("#storeDialog").close();
        renderCarrinho();
        abrirDialog("cartDialog");
    });

    abrirDialog("storeDialog");
}

function adicionarCarrinho(id) {
    const item = carrinho.find(function (produto) {
        return produto.id === id;
    });

    if (item) {
        item.qtd++;
    } else {
        carrinho.push({ id: id, qtd: 1 });
    }

    salvarEstado();
    mostrarAviso("Produto adicionado ao carrinho.");
}

function configurarEventos() {
    const gradeProdutos = selecionar("#productGrid");

    if (gradeProdutos) {
        gradeProdutos.addEventListener("click", function (evento) {
            const botaoFavorito = evento.target.closest("[data-fav]");
            const botaoAdicionar = evento.target.closest("[data-add]");

            if (botaoFavorito) {
                const id = Number(botaoFavorito.dataset.fav);

                if (favoritos.includes(id)) {
                    favoritos = favoritos.filter(function (itemId) {
                        return itemId !== id;
                    });
                } else {
                    favoritos.push(id);
                }

                salvarEstado();
                renderProdutos();

                mostrarAviso(
                    favoritos.includes(id)
                        ? "Adicionado aos favoritos."
                        : "Removido dos favoritos."
                );
            }

            if (botaoAdicionar) {
                adicionarCarrinho(Number(botaoAdicionar.dataset.add));
            }
        });
    }

    const gradeLojas = selecionar("#lojasGrid");

    if (gradeLojas) {
        gradeLojas.addEventListener("click", function (evento) {
            const botao = evento.target.closest("[data-store]");

            if (botao) {
                renderDetalheLoja(Number(botao.dataset.store));
            }
        });
    }

    const detalhesLoja = selecionar("#storeDetails");

    if (detalhesLoja) {
        detalhesLoja.addEventListener("click", function (evento) {
            const botao = evento.target.closest("[data-add]");

            if (botao) {
                adicionarCarrinho(Number(botao.dataset.add));
            }
        });
    }

    document.querySelectorAll("#productFilters .filter").forEach(function (botao) {
        botao.addEventListener("click", function () {
            document.querySelectorAll("#productFilters .filter").forEach(function (item) {
                item.classList.remove("active");
            });

            botao.classList.add("active");
            categoria = botao.dataset.category;
            renderProdutos();
        });
    });

    document.querySelectorAll("#storeFilters .filter").forEach(function (botao) {
        botao.addEventListener("click", function () {
            document.querySelectorAll("#storeFilters .filter").forEach(function (item) {
                item.classList.remove("active");
            });

            botao.classList.add("active");
            categoriaLoja = botao.dataset.storeCategory;
            renderLojas();
        });
    });

    const formularioBusca = selecionar("#searchForm");

    if (formularioBusca) {
        formularioBusca.addEventListener("submit", function (evento) {
            evento.preventDefault();

            busca = selecionar("#searchInput").value.trim();
            categoria = "Todos";
            categoriaLoja = "Todas";

            document.querySelectorAll("#productFilters .filter").forEach(function (botao) {
                botao.classList.toggle(
                    "active",
                    botao.dataset.category === "Todos"
                );
            });

            document.querySelectorAll("#storeFilters .filter").forEach(function (botao) {
                botao.classList.toggle(
                    "active",
                    botao.dataset.storeCategory === "Todas"
                );
            });

            renderProdutos();
            renderLojas();
            selecionar("#explorar").scrollIntoView({ behavior: "smooth" });
        });
    }

    const sellerOpen = selecionar("#sellerOpen");
    if (sellerOpen) {
        sellerOpen.addEventListener("click", function () {
            abrirDialog("sellerDialog");
        });
    }

    const sellerOpen2 = selecionar("#sellerOpen2");
    if (sellerOpen2) {
        sellerOpen2.addEventListener("click", function () {
            abrirDialog("sellerDialog");
        });
    }

    const clientOpen = selecionar("#clientOpen");
    if (clientOpen) {
        clientOpen.addEventListener("click", function () {
            abrirDialog("clientDialog");
        });
    }

    const customOpen = selecionar("#customOpen");
    if (customOpen) {
        customOpen.addEventListener("click", function () {
            abrirDialog("customDialog");
        });
    }

    const favTop = selecionar("#favTop");
    if (favTop) {
        favTop.addEventListener("click", function () {
            renderFavoritos();
            abrirDialog("favoritesDialog");
        });
    }

    const cartTop = selecionar("#cartTop");
    if (cartTop) {
        cartTop.addEventListener("click", function () {
            renderCarrinho();
            abrirDialog("cartDialog");
        });
    }

    document.querySelectorAll("[data-close]").forEach(function (botao) {
        botao.addEventListener("click", function () {
            const dialogo = selecionar("#" + botao.dataset.close);
            if (dialogo) dialogo.close();
        });
    });

    const areaCarrinho = selecionar("#cartItems");

    if (areaCarrinho) {
        areaCarrinho.addEventListener("click", function (evento) {
            const mais = evento.target.closest("[data-plus]");
            const menos = evento.target.closest("[data-minus]");
            const remover = evento.target.closest("[data-remove-cart]");

            if (mais) {
                const itemMais = carrinho.find(function (item) {
                    return item.id === Number(mais.dataset.plus);
                });

                if (itemMais) itemMais.qtd++;
            }

            if (menos) {
                const itemMenos = carrinho.find(function (item) {
                    return item.id === Number(menos.dataset.minus);
                });

                if (itemMenos) {
                    itemMenos.qtd = Math.max(1, itemMenos.qtd - 1);
                }
            }

            if (remover) {
                carrinho = carrinho.filter(function (item) {
                    return item.id !== Number(remover.dataset.removeCart);
                });
            }

            salvarEstado();
            renderCarrinho();
        });
    }

    const areaFavoritos = selecionar("#favoriteItems");

    if (areaFavoritos) {
        areaFavoritos.addEventListener("click", function (evento) {
            const remover = evento.target.closest("[data-unfav]");
            const verProduto = evento.target.closest("[data-go-product]");

            if (remover) {
                favoritos = favoritos.filter(function (id) {
                    return id !== Number(remover.dataset.unfav);
                });

                salvarEstado();
                renderProdutos();
                renderFavoritos();
            }

            if (verProduto) {
                selecionar("#favoritesDialog").close();
                busca = "";
                selecionar("#searchInput").value = "";
                categoria = "Todos";

                renderProdutos();
                selecionar("#explorar").scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const botaoCheckout = selecionar("#checkout");

    if (botaoCheckout) {
        botaoCheckout.addEventListener("click", function () {
            if (carrinho.length === 0) {
                mostrarAviso("Adicione produtos antes de continuar.");
                return;
            }

            selecionar("#cartDialog").close();
            renderResumoPedido();
            abrirDialog("checkoutDialog");
        });
    }

    const formularioCheckout = selecionar("#checkoutForm");

    if (formularioCheckout) {
        formularioCheckout.addEventListener("submit", function (evento) {
            evento.preventDefault();

            if (carrinho.length === 0) {
                mostrarAviso("Seu carrinho está vazio.");
                selecionar("#checkoutDialog").close();
                return;
            }

            let total = 0;

            const itensPedido = carrinho.map(function (item) {
                const produto = catalogo.find(function (p) {
                    return p.id === item.id;
                });

                if (produto) {
                    total += produto.preco * item.qtd;
                }

                return { id: item.id, qtd: item.qtd };
            });

            const pedido = {
                numero: Date.now(),
                data: new Date().toLocaleString("pt-BR"),
                cliente: this.elements.nome.value,
                email: this.elements.email.value,
                cep: this.elements.cep.value,
                endereco: this.elements.endereco.value,
                cidade: this.elements.cidade.value,
                pagamento: this.elements.pagamento.value,
                itens: itensPedido,
                total: total
            };

            const pedidos = lerDados("mc-pedidos", []);
            pedidos.push(pedido);

            localStorage.setItem("mc-pedidos", JSON.stringify(pedidos));
            carrinho = [];
            salvarEstado();

            selecionar("#checkoutDialog").close();
            this.reset();

            mostrarAviso("Pedido demonstrativo registrado com sucesso.");
        });
    }

    const formularioCliente = selecionar("#clientForm");

    if (formularioCliente) {
        formularioCliente.addEventListener("submit", function (evento) {
            evento.preventDefault();
            selecionar("#clientDialog").close();
            evento.target.reset();

            mostrarAviso(
                "Cadastro demonstrativo preenchido. Conecte ao backend para registrar."
            );
        });
    }

    const formularioVendedor = selecionar("#sellerForm");

    if (formularioVendedor) {
        formularioVendedor.addEventListener("submit", function (evento) {
            evento.preventDefault();
            selecionar("#sellerDialog").close();
            evento.target.reset();

            mostrarAviso(
                "Cadastro demonstrativo preenchido. Conecte ao backend para criar uma loja real."
            );
        });
    }

    const formularioPersonalizacao = selecionar("#customForm");

    if (formularioPersonalizacao) {
        formularioPersonalizacao.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const ideia = Object.fromEntries(
                new FormData(evento.target).entries()
            );

            const ideiasSalvas = lerDados("mc-personalizacoes", []);
            ideia.criadaEm = new Date().toISOString();
            ideiasSalvas.push(ideia);

            localStorage.setItem(
                "mc-personalizacoes",
                JSON.stringify(ideiasSalvas)
            );

            selecionar("#customDialog").close();
            evento.target.reset();

            mostrarAviso("Sua ideia foi salva nesta demonstração.");
        });
    }
}

configurarEventos();
renderProdutos();
renderLojas();
atualizarContadores();


