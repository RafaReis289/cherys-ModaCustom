"use strict";


const catalogo = [
  { id: 1, nome: "Regata de sol", marca: "Som & Estampa", lojaId: 2, categoria: "Personalizável", preco: 89.90, tag: "BÁSICA", img: "img/1.jpg", descricao: "Regata branca, leve e versátil, perfeita para dias ensolarados e looks casuais." },
  { id: 2, nome: "Camiseta Rap & Rua", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 99.90, tag: "STREET", img: "img/2.jpg", descricao: "Camiseta inspirada no rap e na cultura urbana." },
  { id: 3, nome: "Regata lisa personalizável", marca: "Formei! Camisetas", lojaId: 3, categoria: "Personalizável", preco: 74.90, tag: "PERSONALIZÁVEL", img: "img/3.jpg", descricao: "Regata lisa que pode ser personalizada com frases ou desenhos." },
  { id: 4, nome: "Camiseta Cultura Pop", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 94.90, tag: "POP CULTURE", img: "img/4.jpg", descricao: "Camiseta com temática de cultura pop." },
  { id: 5, nome: "Camiseta Hello Kitty", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 84.90, tag: "POP", img: "img/5.jpg", descricao: "Camiseta temática da Hello Kitty." },
  { id: 6, nome: "Calça Oversized", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 189.90, tag: "OVERSIZED", img: "img/6.jpg", descricao: "Calça de modelagem ampla e estilo urbano." },
  { id: 7, nome: "Calça Ídolos da Música", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 99.90, tag: "FÃ-CLUBE", img: "img/7.jpg", descricao: "Calça estampada com referências musicais." },
  { id: 8, nome: "Calça Personalizada", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 69.90, tag: "SUA TURMA", img: "img/8.jpg", descricao: "Calça personalizável com nomes, frases ou estampas." },
  { id: 9, nome: "Calça Gamer & Pop", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 109.90, tag: "GEEK", img: "img/9.jpg", descricao: "Calça com estilo gamer e referências à cultura pop." },
  { id: 10, nome: "Jaqueta de caveira", marca: "Traço Livre", lojaId: 5, categoria: "Esporte", preco: 79.90, tag: "ACTIVE", img: "img/10.jpg", descricao: "Jaqueta com estampa de caveira e visual marcante." },
  { id: 11, nome: "Jaqueta Crie Sua Arte", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 64.90, tag: "PERSONALIZE", img: "img/11.jpg", descricao: "Jaqueta personalizável com desenhos ou frases." },
  { id: 12, nome: "Shorts Personalizáveis", marca: "Som & Estampa", lojaId: 2, categoria: "Cultura pop", preco: 74.90, tag: "CUSTOM", img: "img/12.jpg", descricao: "Shorts que podem receber estampas personalizadas." },
  { id: 13, nome: "Camiseta Básica", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 72.90, tag: "FORMATURA", img: "img/13.jpg", descricao: "Camiseta básica para usar ou personalizar." },
  { id: 14, nome: "Jaqueta Michael Jackson", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 89.90, tag: "ARTE AUTORAL", img: "img/14.jpg", descricao: "Jaqueta inspirada em Michael Jackson." },
  { id: 15, nome: "Camiseta Bob Esponja", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 89.90, tag: "POP", img: "img/15.jpg", descricao: "Camiseta temática do Bob Esponja." },
  { id: 16, nome: "Camiseta Mãe e Filha", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 59.90, tag: "BÁSICA", img: "img/16.jpg", descricao: "Camisetas combinando para mães e filhas." },
  { id: 17, nome: "Camiseta do Amor", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 179.90, tag: "AMOR", img: "img/17.jpg", descricao: "Camiseta com tema romântico." },
  { id: 18, nome: "Camiseta de Namoro", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 79.90, tag: "CASAIS", img: "img/18.jpg", descricao: "Camiseta combinando para casais." },
  { id: 19, nome: "Camiseta VELARIS", marca: "Som & Estampa", lojaId: 2, categoria: "Música", preco: 94.90, tag: "LITERATURA", img: "img/19.jpg", descricao: "Camiseta inspirada no universo literário VELARIS." },
  { id: 20, nome: "Camiseta VELARIS Urbana", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 79.90, tag: "URBANO", img: "img/20.jpg", descricao: "Camiseta de estilo urbano para leitores." },
  { id: 21, nome: "Camiseta Secreta PLL", marca: "Formei! Camisetas", lojaId: 3, categoria: "Terceirão", preco: 84.90, tag: "SERIES", img: "img/21.jpg", descricao: "Camiseta inspirada na série PLL." },
  { id: 22, nome: "Pop Style Shirt", marca: "PopLab Studio", lojaId: 4, categoria: "Cultura pop", preco: 109.90, tag: "ANIME", img: "img/22.jpg", descricao: "Camiseta de estilo pop inspirada em animes." },
  { id: 23, nome: "FRIENDS Camiseta", marca: "Traço Livre", lojaId: 5, categoria: "Esporte", preco: 89.90, tag: "FRIENDS", img: "img/23.jpg", descricao: "Camiseta temática inspirada na série FRIENDS." },
  { id: 24, nome: "Camiseta de Anime", marca: "Traço Livre", lojaId: 5, categoria: "Personalizável", preco: 99.90, tag: "CRIATIVO", img: "img/24.jpg", descricao: "Camiseta com temática de anime." },
  { id: 25, nome: "Camiseta de Recado", marca: "Distrito 013", lojaId: 1, categoria: "Streetwear", preco: 199.90, tag: "CLASSIC", img: "img/25.jpg", descricao: "Camiseta com frases ou mensagens criativas." }
];

const lojas = [
  {
    id: 1,
    nome: "Distrito 013",
    categoria: "Streetwear",
    cidade: "São Paulo, SP",
    rating: "4,9",
    vendas: "320+",
    descricao: "Streetwear urbano, modelagens amplas e estampas com atitude.",
    capa: "img/19.jpg",
    slogan: "Vista a rua do seu jeito."
  },
  {
    id: 2,
    nome: "Som & Estampa",
    categoria: "Música",
    cidade: "São Paulo, SP",
    rating: "4,8",
    vendas: "280+",
    descricao: "Peças inspiradas em música, livros, shows e universos de fãs.",
    capa: "img/20.jpg",
    slogan: "Sua paixão, sua estampa."
  },
  {
    id: 3,
    nome: "Formei! Camisetas",
    categoria: "Terceirão",
    cidade: "Campinas, SP",
    rating: "4,9",
    vendas: "190+",
    descricao: "Camisetas para formaturas, terceirão e lembranças de turma.",
    capa: "img/21.jpg",
    slogan: "A turma merece uma história."
  },
  {
    id: 4,
    nome: "PopLab Studio",
    categoria: "Cultura pop",
    cidade: "Florianópolis, SC",
    rating: "4,8",
    vendas: "310+",
    descricao: "Estampas com referências a séries, games e cultura pop.",
    capa: "img/22.jpg",
    slogan: "Seu universo, seu estilo."
  },
  {
    id: 5,
    nome: "Traço Livre",
    categoria: "Personalizáveis",
    cidade: "Curitiba, PR",
    rating: "4,8",
    vendas: "210+",
    descricao: "Arte independente e peças para transformar ideias em roupas únicas.",
    capa: "img/23.jpg",
    slogan: "Ideias fora das linhas."
  }
];

/* Os 18 primeiros aparecem em Explorar. */
const catalogoExplorar = catalogo.filter(p => p.id <= 18);

const $ = seletor => document.querySelector(seletor);

const moeda = valor => Number(valor).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function ler(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

let favoritos = ler("mc-favoritos", []);
let carrinho = ler("mc-carrinho", []);
let categoria = "Todos";
let categoriaLoja = "Todas";
let busca = "";

function toast(mensagem) {
  const elemento = $("#toast");
  if (!elemento) return;

  elemento.textContent = mensagem;
  elemento.classList.add("show");

  clearTimeout(window.mcToastTimer);

  window.mcToastTimer = setTimeout(() => {
    elemento.classList.remove("show");
  }, 2600);
}

function salvarEstado() {
  localStorage.setItem("mc-favoritos", JSON.stringify(favoritos));
  localStorage.setItem("mc-carrinho", JSON.stringify(carrinho));
  atualizarContadores();
}

function atualizarContadores() {
  $("#favCount").textContent = favoritos.length;

  $("#cartCount").textContent = carrinho.reduce(
    (total, item) => total + item.qtd,
    0
  );
}

function abrirDialog(id) {
  const dialog = $("#" + id);

  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

/* Imagens que falharem não serão substituídas por outras fotos. */
function tratarErroImagem(img) {
  img.onerror = null;
  img.classList.add("image-missing");
  img.alt = "Imagem indisponível. Confira o arquivo na pasta img.";
}

/* GRADE DE PRODUTOS */

function renderProdutos() {
  const grade = $("#productGrid");

  const produtos = catalogoExplorar.filter(produto => {
    const correspondeCategoria =
      categoria === "Todos" || produto.categoria === categoria;

    const texto = (
      produto.nome + " " +
      produto.marca + " " +
      produto.categoria + " " +
      produto.descricao
    ).toLocaleLowerCase("pt-BR");

    return correspondeCategoria &&
      texto.includes(busca.toLocaleLowerCase("pt-BR"));
  });

  grade.innerHTML = produtos.map(produto => `
    <article class="product">
      <div class="product-image">
        <img
          src="${produto.img}"
          alt="${produto.nome}"
          loading="lazy"
          onerror="tratarErroImagem(this)"
        >

        <span class="tag">${produto.tag}</span>

        <button
          class="heart ${favoritos.includes(produto.id) ? "on" : ""}"
          data-fav="${produto.id}"
          aria-label="Alternar favorito"
        >
          ${favoritos.includes(produto.id) ? "♥" : "♡"}
        </button>
      </div>

      <div class="product-info">
        <span class="product-brand">${produto.marca}</span>
        <h3>${produto.nome}</h3>

        <div class="product-bottom">
          <span class="price">${moeda(produto.preco)}</span>
          <span>★ 4,8</span>
        </div>

        <button class="add" data-add="${produto.id}">
          ＋ ADICIONAR AO CARRINHO
        </button>
      </div>
    </article>
  `).join("");

  $("#emptyState").classList.toggle("hidden", produtos.length > 0);
}

/* CINCO LOJAS */

function renderLojas() {
  const grade = $("#lojasGrid");

  const lista = lojas.filter(loja => {
    const correspondeCategoria =
      categoriaLoja === "Todas" ||
      loja.categoria === categoriaLoja;

    const texto = (
      loja.nome + " " +
      loja.categoria + " " +
      loja.cidade + " " +
      loja.descricao
    ).toLocaleLowerCase("pt-BR");

    return correspondeCategoria &&
      texto.includes(busca.toLocaleLowerCase("pt-BR"));
  });

  grade.innerHTML = lista.map(loja => `
    <article class="store-card">
      <div
        class="store-cover"
        style="background-image:linear-gradient(135deg,#d9b54b44,#070707cc),url('${loja.capa}')"
      >
        <span class="store-category">${loja.categoria.toUpperCase()}</span>
      </div>

      <div class="store-body">
        <h3>${loja.nome}</h3>
        <p>${loja.descricao}</p>

        <div class="store-meta">
          <span>★ ${loja.rating} · ${loja.vendas} vendas</span>
          <span>${loja.cidade}</span>
        </div>

        <button class="button button-outline" data-store="${loja.id}">
          Conhecer loja ↗
        </button>
      </div>
    </article>
  `).join("");

  if (!lista.length) {
    grade.innerHTML = `
      <p class="section-subtitle">
        Nenhuma loja encontrada com esse filtro.
      </p>
    `;
  }
}

/* CARRINHO */

function adicionarCarrinho(id) {
  const produto = catalogo.find(p => p.id === id);
  if (!produto) return;

  const item = carrinho.find(i => i.id === id);

  if (item) {
    item.qtd++;
  } else {
    carrinho.push({ id, qtd: 1 });
  }

  salvarEstado();
  renderCarrinho();
  toast("Produto adicionado ao carrinho.");
}

function renderCarrinho() {
  const lista = $("#cartItems");
  let total = 0;

  carrinho = carrinho.filter(item =>
    catalogo.some(produto => produto.id === item.id)
  );

  if (!carrinho.length) {
    lista.innerHTML = `
      <p class="empty-message">
        Seu carrinho está vazio. Explore as estampas e adicione sua primeira peça.
      </p>
    `;
  } else {
    lista.innerHTML = carrinho.map(item => {
      const produto = catalogo.find(p => p.id === item.id);
      if (!produto) return "";

      total += produto.preco * item.qtd;

      return `
        <div class="cart-row">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            onerror="tratarErroImagem(this)"
          >

          <div class="item-text">
            <strong>${produto.nome}</strong>
            <small>${moeda(produto.preco)} cada</small>
          </div>

          <div class="quantity">
            <button data-minus="${produto.id}" aria-label="Diminuir">−</button>
            <span>${item.qtd}</span>
            <button data-plus="${produto.id}" aria-label="Aumentar">+</button>
          </div>

          <button
            class="remove"
            data-remove-cart="${produto.id}"
            aria-label="Remover produto"
          >×</button>
        </div>
      `;
    }).join("");
  }

  $("#cartTotal").textContent = moeda(total);
  salvarEstado();
}

/* FAVORITOS */

function renderFavoritos() {
  const lista = $("#favoriteItems");

  const produtos = catalogo.filter(produto =>
    favoritos.includes(produto.id)
  );

  lista.innerHTML = produtos.length
    ? produtos.map(produto => `
        <div class="favorite-row">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            onerror="tratarErroImagem(this)"
          >

          <div class="item-text">
            <strong>${produto.nome}</strong>
            <small>${moeda(produto.preco)}</small>
          </div>

          <button class="button button-outline" data-go-product="${produto.id}">
            Ver peça
          </button>

          <button class="remove" data-unfav="${produto.id}">×</button>
        </div>
      `).join("")
    : `<p class="empty-message">Você ainda não favoritou nenhuma peça.</p>`;
}

/* DETALHE DA LOJA */

function renderDetalheLoja(id) {
  const loja = lojas.find(l => l.id === id);
  if (!loja) return;

  const produtos = catalogo.filter(p => p.lojaId === id);

  $("#storeDetails").innerHTML = `
    <div
      class="store-detail-hero"
      style="background-image:linear-gradient(135deg,#d9b54b44,#070707cc),url('${loja.capa}')"
    >
      <span class="store-detail-category">${loja.categoria.toUpperCase()}</span>
    </div>

    <div class="store-detail-heading">
      <div>
        <p class="eyebrow">LOJA INDEPENDENTE · ${loja.cidade.toUpperCase()}</p>
        <h2>${loja.nome}</h2>
      </div>
    </div>

    <p><em>${loja.slogan}</em></p>
    <p class="section-subtitle">${loja.descricao}</p>

    <div class="store-meta">
      <span>★ ${loja.rating} avaliação demonstrativa</span>
      <span>${loja.vendas} vendas demonstrativas</span>
      <span>${produtos.length} peças na vitrine</span>
    </div>

    <div class="store-detail-actions">
      <button class="button button-outline" id="backToStores">
        ← Voltar para todas as lojas
      </button>

      <button class="button button-gold" id="storeCartShortcut">
        Ver carrinho ▱
      </button>
    </div>

    <h3>Conheça as peças desta loja</h3>

    <div class="store-products">
      ${produtos.map(produto => `
        <div class="store-product">
          <img
            src="${produto.img}"
            alt="${produto.nome}"
            loading="lazy"
            onerror="tratarErroImagem(this)"
          >

          <strong>${produto.nome}</strong>
          <small>${moeda(produto.preco)}</small>

          <button class="add" data-add="${produto.id}">
            ＋ Adicionar ao carrinho
          </button>
        </div>
      `).join("")}
    </div>

    <p class="form-note">
      Preços e avaliações são demonstrativos. A loja real será administrada
      pelo vendedor após integração ao backend.
    </p>
  `;

  $("#backToStores").addEventListener("click", () => {
    $("#storeDialog").close();
    $("#lojas").scrollIntoView({ behavior: "smooth" });
  });

  $("#storeCartShortcut").addEventListener("click", () => {
    $("#storeDialog").close();
    renderCarrinho();
    abrirDialog("cartDialog");
  });

  abrirDialog("storeDialog");
}

/* RESUMO DA COMPRA */

function renderResumoPedido() {
  let total = 0;

  const itens = carrinho.map(item => {
    const produto = catalogo.find(p => p.id === item.id);
    if (!produto) return "";

    const subtotal = produto.preco * item.qtd;
    total += subtotal;

    return `
      <div class="cart-row">
        <img
          src="${produto.img}"
          alt="${produto.nome}"
          onerror="tratarErroImagem(this)"
        >

        <div class="item-text">
          <strong>${produto.nome}</strong>
          <small>${item.qtd} unidade(s) · ${moeda(subtotal)}</small>
        </div>
      </div>
    `;
  }).join("");

  $("#checkoutResumo").innerHTML = `
    <h3>Resumo do pedido</h3>
    ${itens}
    <p class="cart-total">
      Total do pedido <strong>${moeda(total)}</strong>
    </p>
  `;
}

/* CPF: SOMENTE 11 NÚMEROS */

function configurarCPF() {
  document.querySelectorAll(".cpf-input").forEach(input => {
    input.inputMode = "numeric";
    input.maxLength = 11;
    input.minLength = 11;
    input.pattern = "[0-9]{11}";

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "").slice(0, 11);

      input.setCustomValidity(
        input.value.length === 11
          ? ""
          : "O CPF deve conter exatamente 11 números."
      );
    });

    input.addEventListener("invalid", () => {
      input.setCustomValidity(
        "Digite exatamente 11 números no CPF, sem pontos ou traço."
      );
    });
  });
}

/* EVENTOS DO CATÁLOGO */

function configurarEventos() {
  $("#productGrid").addEventListener("click", e => {
    const favorito = e.target.closest("[data-fav]");
    const adicionar = e.target.closest("[data-add]");

    if (favorito) {
      const id = Number(favorito.dataset.fav);

      favoritos = favoritos.includes(id)
        ? favoritos.filter(x => x !== id)
        : [...favoritos, id];

      salvarEstado();
      renderProdutos();
      renderFavoritos();

      toast(
        favoritos.includes(id)
          ? "Adicionado aos favoritos."
          : "Removido dos favoritos."
      );
    }

    if (adicionar) {
      adicionarCarrinho(Number(adicionar.dataset.add));
    }
  });

  $("#lojasGrid").addEventListener("click", e => {
    const botao = e.target.closest("[data-store]");

    if (botao) {
      renderDetalheLoja(Number(botao.dataset.store));
    }
  });

  $("#storeDetails").addEventListener("click", e => {
    const botao = e.target.closest("[data-add]");

    if (botao) {
      adicionarCarrinho(Number(botao.dataset.add));
    }
  });

  document.querySelectorAll("#productFilters .filter").forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelectorAll("#productFilters .filter")
        .forEach(b => b.classList.remove("active"));

      botao.classList.add("active");
      categoria = botao.dataset.category;
      renderProdutos();
    });
  });

  document.querySelectorAll("#storeFilters .filter").forEach(botao => {
    botao.addEventListener("click", () => {
      document.querySelectorAll("#storeFilters .filter")
        .forEach(b => b.classList.remove("active"));

      botao.classList.add("active");
      categoriaLoja = botao.dataset.storeCategory;
      renderLojas();
    });
  });

  $("#searchForm").addEventListener("submit", e => {
    e.preventDefault();

    busca = $("#searchInput").value.trim();
    categoria = "Todos";
    categoriaLoja = "Todas";

    document.querySelectorAll("#productFilters .filter")
      .forEach(b => b.classList.toggle(
        "active",
        b.dataset.category === "Todos"
      ));

    document.querySelectorAll("#storeFilters .filter")
      .forEach(b => b.classList.toggle(
        "active",
        b.dataset.storeCategory === "Todas"
      ));

    renderProdutos();
    renderLojas();

    $("#explorar").scrollIntoView({ behavior: "smooth" });
  });

  $("#sellerOpen").addEventListener("click", () => abrirDialog("sellerDialog"));
  $("#sellerOpen2").addEventListener("click", () => abrirDialog("sellerDialog"));
  $("#clientOpen").addEventListener("click", () => abrirDialog("clientDialog"));
  $("#customOpen").addEventListener("click", () => abrirDialog("customDialog"));

  $("#favTop").addEventListener("click", () => {
    renderFavoritos();
    abrirDialog("favoritesDialog");
  });

  $("#cartTop").addEventListener("click", () => {
    renderCarrinho();
    abrirDialog("cartDialog");
  });

  document.querySelectorAll("[data-close]").forEach(botao => {
    botao.addEventListener("click", () => {
      const dialog = $("#" + botao.dataset.close);
      if (dialog) dialog.close();
    });
  });

  $("#cartItems").addEventListener("click", e => {
    const mais = e.target.closest("[data-plus]");
    const menos = e.target.closest("[data-minus]");
    const remover = e.target.closest("[data-remove-cart]");

    if (mais) {
      const item = carrinho.find(i => i.id === Number(mais.dataset.plus));
      if (item) item.qtd++;
    }

    if (menos) {
      const item = carrinho.find(i => i.id === Number(menos.dataset.minus));
      if (item) item.qtd = Math.max(1, item.qtd - 1);
    }

    if (remover) {
      carrinho = carrinho.filter(
        i => i.id !== Number(remover.dataset.removeCart)
      );
    }

    salvarEstado();
    renderCarrinho();
  });

  $("#favoriteItems").addEventListener("click", e => {
    const remover = e.target.closest("[data-unfav]");
    const ver = e.target.closest("[data-go-product]");

    if (remover) {
      favoritos = favoritos.filter(
        id => id !== Number(remover.dataset.unfav)
      );

      salvarEstado();
      renderProdutos();
      renderFavoritos();
    }

    if (ver) {
      $("#favoritesDialog").close();
      busca = "";
      $("#searchInput").value = "";
      categoria = "Todos";
      renderProdutos();
      $("#explorar").scrollIntoView({ behavior: "smooth" });
    }
  });

  $("#checkout").addEventListener("click", () => {
    if (!carrinho.length) {
      toast("Adicione produtos antes de continuar.");
      return;
    }

    $("#cartDialog").close();
    renderResumoPedido();
    abrirDialog("checkoutDialog");
  });

  $("#checkoutForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!carrinho.length) {
      toast("Seu carrinho está vazio.");
      $("#checkoutDialog").close();
      return;
    }

    if (!this.reportValidity()) return;

    const cpf = this.elements.cpf.value;

    if (!/^\d{11}$/.test(cpf)) {
      toast("O CPF precisa conter exatamente 11 números.");
      this.elements.cpf.focus();
      return;
    }

    const pedido = {
      numero: Date.now(),
      data: new Date().toLocaleString("pt-BR"),
      cliente: this.elements.nome.value,
      email: this.elements.email.value,
      cpf,
      cep: this.elements.cep.value,
      endereco: this.elements.endereco.value,
      cidade: this.elements.cidade.value,
      pagamento: this.elements.pagamento.value,
      itens: carrinho.map(item => ({ ...item })),
      total: carrinho.reduce((soma, item) => {
        const produto = catalogo.find(p => p.id === item.id);
        return soma + (produto ? produto.preco * item.qtd : 0);
      }, 0)
    };

    const pedidos = ler("mc-pedidos", []);
    pedidos.push(pedido);

    localStorage.setItem("mc-pedidos", JSON.stringify(pedidos));

    carrinho = [];
    salvarEstado();
    renderCarrinho();

    $("#checkoutDialog").close();
    this.reset();
    configurarCPF();

    toast("Pedido demonstrativo registrado com sucesso.");
  });

  $("#clientForm").addEventListener("submit", e => {
    e.preventDefault();

    if (!e.target.reportValidity()) return;

    const cpf = e.target.querySelector(".cpf-input");

    if (cpf && !/^\d{11}$/.test(cpf.value)) {
      toast("Digite exatamente 11 números no CPF.");
      cpf.focus();
      return;
    }

    $("#clientDialog").close();
    e.target.reset();
    configurarCPF();

    toast("Cadastro demonstrativo preenchido.");
  });

  $("#sellerForm").addEventListener("submit", e => {
    e.preventDefault();

    if (!e.target.reportValidity()) return;

    $("#sellerDialog").close();
    e.target.reset();

    toast("Cadastro demonstrativo preenchido.");
  });

  $("#customForm").addEventListener("submit", e => {
    e.preventDefault();

    const ideia = Object.fromEntries(new FormData(e.target).entries());
    const ideias = ler("mc-personalizacoes", []);

    ideias.push({
      ...ideia,
      criadaEm: new Date().toISOString()
    });

    localStorage.setItem("mc-personalizacoes", JSON.stringify(ideias));

    $("#customDialog").close();
    e.target.reset();

    toast("Sua ideia foi salva nesta demonstração.");
  });
}

/* INICIALIZAÇÃO */

function iniciarModaCustom() {
  configurarEventos();
  configurarCPF();

  renderProdutos();
  renderLojas();
  renderCarrinho();
  renderFavoritos();
  atualizarContadores();

  window.catalogoModaCustom = catalogo;
  window.catalogoExplorar = catalogoExplorar;
  window.lojasModaCustom = lojas;

  console.info("Moda Custom carregada.");
  console.info("Produtos:", catalogo.length);
  console.info("Produtos em Explorar:", catalogoExplorar.length);
  console.info("Lojas:", lojas.length);

  if (new Set(catalogo.map(p => p.img)).size !== 25) {
    console.error("Existem caminhos de imagem repetidos.");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarModaCustom);
} else {
  iniciarModaCustom();
}