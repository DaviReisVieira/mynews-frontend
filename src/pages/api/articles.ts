// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NewsProps } from "..";

type Data = {
  articles: NewsProps[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    articles: [
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Yahoo Notícias",
        title:
          'COP26: Bolsonaro "ignora" evento, mas irá à Europa para receber título - Yahoo Noticias Brasil',
        description:
          "Bolsonaro estará na Itália no dia 1º de novembro, primeiro dia de reuniões da COP26, para receber título de cidadão honorário de Anguillara Veneta",
        url: "https://br.noticias.yahoo.com/cop-26-bolsonaro-ignora-evento-mas-ira-a-europa-para-receber-titulo-175315959.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/lMNZL_dSzq13ZCkB9n1FJA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03OTk-/https://s.yimg.com/os/creatr-uploaded-images/2021-10/85ad1980-3817-11ec-bdff-103af36965bc",
        publishedAt: "2021-10-28T17:53:15Z",
        content:
          "Bolsonaro não estará na COP26, mas vai para a Itália receber título (Foto: Andressa Anholete/Getty Images)\r\n<ul><li>Presidente Jair Bolsonaro vai para a Itália receber título de cidadão honorário \r\n<… [+3628 chars]",
      },
      {
        source: {
          id: null,
          name: "Uol.com.br",
        },
        author: "Letícia Naísa",
        title:
          "Facebook muda de nome e agora se chama Meta; foco é o metaverso - Tilt",
        description:
          "O Facebook anunciou nesta quinta-feira (28) novidades sobre seu metaverso durante o evento Facebook Connect 2021. O principal anúncio foi de que, agora, a empresa que é dona da rede social azul, do Instagram e do WhatsApp, passará a se chamar Meta.Segundo",
        url: "https://www.uol.com.br/tilt/noticias/redacao/2021/10/28/facebook-lanca-o-metaverso-veja-as-novidades.htm",
        urlToImage:
          "https://conteudo.imguol.com.br/c/noticias/36/2021/10/28/zuckerberg-1635440886163_v2_615x300.png",
        publishedAt: "2021-10-28T17:19:59Z",
        content:
          "O Facebook anunciou nesta quinta-feira (28) novidades sobre seu metaverso durante o evento Facebook Connect 2021. O principal anúncio foi de que, agora, a empresa que é dona da rede social azul, do I… [+5050 chars]",
      },
      {
        source: {
          id: null,
          name: "Uol.com.br",
        },
        author: "UOL",
        title:
          "Pela 1ª vez em 9 anos, contas do governo registram superávit em setembro - UOL",
        description:
          "As contas do governo central, formado por Tesouro Nacional, Banco Central e Previdência Social, registraram um superávit primário de R$ 303 milhões em setembro, primeiro dado no azul para o mês desde 2012, ajudado pelo aumento na arrecadação, divulgou o T",
        url: "https://economia.uol.com.br/noticias/redacao/2021/10/28/governo-central-contas-tesouro-setembro.htm",
        urlToImage:
          "https://conteudo.imguol.com.br/c/noticias/2a/2021/10/22/8-mai-2020---imagem-de-ilustrativa-de-moedas-de-r-1-caindo-isoladas-em-um-fundo-branco-1634912997080_v2_615x300.jpg",
        publishedAt: "2021-10-28T16:58:00Z",
        content:
          "As contas do governo central, formado por Tesouro Nacional, Banco Central e Previdência Social, registraram um superávit primário de R$ 303 milhões em setembro, primeiro dado no azul para o mês desde… [+1389 chars]",
      },
      {
        source: {
          id: null,
          name: "Espn.com.br",
        },
        author: "Gazeta Press",
        title:
          "Pedri lamenta saída de Koeman e manda recado emocionado ao agora ex-técnico do Barcelona - ESPN.com.br",
        description:
          "Com a saída do holandês, Barça se aproxima de acerto com o ídolo Xavi, que comanda o Al-Sadd, do Catar",
        url: "https://www.espn.com.br/futebol/artigo/_/id/9433262/pedri-lamenta-saida-koeman-manda-recado-emocionado-ex-tecnico-barcelona",
        urlToImage:
          "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1028%2Fr929818_1296x729_16%2D9.jpg",
        publishedAt: "2021-10-28T16:41:26Z",
        content:
          "Nesta quinta-feira, o meio-campista Pedri lamentou a saída do técnico Ronald Koeman do Barcelona e agradeceu ao treinador.\r\nPor meio de suas redes sociais, o jovem atleta blaugrana escreveu uma mensa… [+1744 chars]",
      },
      {
        source: {
          id: "info-money",
          name: "InfoMoney",
        },
        author: null,
        title:
          "15 ações que pagam dividendos acima da Selic, agora em 7,75% ao ano - InfoMoney",
        description:
          "Levantamento da XP mostra empresas do setor elétrico, financeiro e construtoras entre as preferidas para entregarem proventos acima da taxa básica de juros",
        url: "https://www.infomoney.com.br/mercados/15-acoes-que-pagam-dividendos-acima-da-selic-agora-em-775-ao-ano/",
        urlToImage:
          "https://www.infomoney.com.br/wp-content/uploads/2019/11/shutterstock_135285458.jpg?quality=70",
        publishedAt: "2021-10-28T16:35:20Z",
        content:
          "(Shutterstock) \r\nSÃO PAULO O Banco Central elevou novamente, na última quarta-feira (28), a taxa básica de juros para 7,75% ao ano, no sexto aumento consecutivo o primeiro de 1,5 ponto percentual , l… [+7182 chars]",
      },
      {
        source: {
          id: null,
          name: "Techtudo.com.br",
        },
        author: null,
        title:
          "PlayStation (PS5) ultrapassa 13 milhões de unidades vendidas no mundo - TechTudo",
        description:
          "Vendas do console da Sony ultrapassam 13,4 milhões de unidades vendidas, mas empresa continua sem conseguir suprir a demanda do público",
        url: "https://www.techtudo.com.br/noticias/2021/10/playstation-ps5-ultrapassa-13-milhoes-de-unidades-vendidas-no-mundo.ghtml",
        urlToImage:
          "https://s2.glbimg.com/4TtDAJ2ShbPI7v7DFfKyKwrRBAQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/d/Y/V7B5okTFCadCnkbVIBuQ/pfrente.jpg",
        publishedAt: "2021-10-28T16:02:12Z",
        content:
          "O PlayStation 5 (PS5) ultrapassou a marca de 13,4 milhões de unidades vendidas no mundo, segundo o mais recente relatório financeiro da Sony. Desse total, 3,3 milhões de consoles foram vendidos no tr… [+2550 chars]",
      },
      {
        source: {
          id: "globo",
          name: "Globo",
        },
        author: null,
        title:
          "Devolução de Richard é vista como absurda pelo Corinthians, que avalia uso do volante em 2022 - globoesporte.com",
        description:
          "Diretoria alvinegra esperava que Athletico contornasse situação sem rescindir contrato de empréstimo; Timão oferece CT para treinamentos e não descarta permanência",
        url: "https://ge.globo.com/futebol/times/corinthians/noticia/noticias-corinthians-richard-athletico-absurda-rescisao-emprestimo.ghtml",
        urlToImage:
          "https://s2.glbimg.com/kWXE_r3nxJFKBSWQtJ65wOX1ocE=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/J/h/JiExomSJi5wikEsClbDQ/rich2.jpg",
        publishedAt: "2021-10-28T15:18:30Z",
        content:
          "O Corinthians ficou incomodado com a forma como o Athletico conduziu a situação do volante Richard e encarou a devolução do jogador antes do previsto como uma medida absurda. Nesta quinta-feira, o cl… [+2570 chars]",
      },
      {
        source: {
          id: null,
          name: "Torcedores.com",
        },
        author: null,
        title:
          "Demissão de Renato Gaúcho definida, Gabigol agredido e Guerrero em gigantes da Argentina: as últimas do futebol hoje (28) - Torcedores.com",
        description:
          "Torcedores.com traz um resumo das notícias com maior destaque desta quinta-feira A noite foi quente após a eliminação na Copa do Brasil nos lados do",
        url: "https://www.torcedores.com/noticias/2021/10/demissao-de-renato-gaucho-definida-gabigol-agredido-e-guerrero-em-gigantes-da-argentina-as-ultimas-do-futebol",
        urlToImage:
          "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/10/163543398386033.jpg",
        publishedAt: "2021-10-28T15:17:00Z",
        content:
          "Crédito: Montagem/Divulgação\r\nA noite foi quente após a eliminação na Copa do Brasil nos lados do Flamengo e o futuro do técnico Renato Gaúcho está em jogo. Sobrou até para o atacante Gabigol, ídolo … [+3763 chars]",
      },
      {
        source: {
          id: null,
          name: "Em.com.br",
        },
        author: "Cristiane Silva",
        title:
          "Suspeitos de estuprar os filhos são presos em operação da Polícia Civil - Estado de Minas",
        description:
          "Mandados de prisão e busca e apreensão foram cumpridos na manhã desta quinta-feira em Belo Horizonte. Dois dois alvos são pais das vítimas",
        url: "https://www.em.com.br/app/noticia/gerais/2021/10/28/interna_gerais,1317911/suspeitos-de-estuprar-os-filhos-sao-presos-em-operacao-da-policia-civil.shtml",
        urlToImage:
          "https://i.em.com.br/7uI96xlNElFq0p3fNCSRaG8KJl8=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/10/28/1317911/20211028123133404401i.jpg",
        publishedAt: "2021-10-28T15:04:00Z",
        content:
          "Aproveite o melhor do Estado de Minas: contedos exclusivos, colunistas renomados e muitos benefcios para voc.\r\nASSINE AGORAUtilizamos tecnologia e segurana do Google para fazer a assinatura.",
      },
      {
        source: {
          id: "globo",
          name: "Globo",
        },
        author: null,
        title:
          "TSE cassa por 6 votos a 1 deputado do PR acusado de divulgar 'fake news' sobre urnas eletrônicas - G1",
        description:
          "Deputado estadual Fernando Francischini (PSL) afirmou, sem apresentar provas, que urnas foram adulteradas para impedir a eleição do presidente Jair Bolsonaro. Ele disse que recorrerá ao STF.",
        url: "https://g1.globo.com/politica/noticia/2021/10/28/tse-tem-maioria-para-cassar-politico-que-divulgou-fake-news-contra-urnas-eletronicas.ghtml",
        urlToImage:
          "https://s2.glbimg.com/dTceHVzqkUSwdHYer5eInO26yuI=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/9989870.jpg",
        publishedAt: "2021-10-28T15:03:57Z",
        content:
          "O Tribunal Superior Eleitoral (TSE) decidiu nesta quinta-feira (28) cassar o mandato do deputado estadual do Paraná Fernando Francischini (PSL) por propagação de informações falsas sobre a urna eletr… [+4402 chars]",
      },
      {
        source: {
          id: null,
          name: "Verdesmares.com.br",
        },
        author: "Estadão Conteúdo",
        title:
          "Após demissão por homofobia, Maurício Souza posta foto de Superman beijando mulher - Diário do Nordeste",
        description:
          "Um dia após ter sido demitido do Minas Tênis Clube por uma série de comentários homofóbicos, Mau",
        url: "https://diariodonordeste.verdesmares.com.br/jogada/apos-demissao-por-homofobia-mauricio-souza-posta-foto-de-superman-beijando-mulher-1.3153286",
        urlToImage:
          "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3153302:1635431910/image.jpg?h=630&q=0.6&w=1200&$p$h$q$w=f76cc5e",
        publishedAt: "2021-10-28T15:02:00Z",
        content:
          "Um dia após ter sido demitido do Minas Tênis Clube por uma série de comentários homofóbicos, Mauricio Souza se manifestou nesta quinta-feira (28), ironizando o episódio que culminou na sua dispensa. … [+1996 chars]",
      },
      {
        source: {
          id: "globo",
          name: "Globo",
        },
        author: null,
        title:
          "Ingressos do Lollapalooza 2022: Saiba onde comprar e como trocar - G1",
        description:
          "Quem comprou Lolla Day antes da pandemia vai ter entre os dias 3 e 16 de novembro para trocar ingressos. Vendas para público geral serão abertas no dia 18 de novembro.",
        url: "https://g1.globo.com/pop-arte/musica/lollapalooza/2022/noticia/2021/10/28/ingressos-do-lollapalooza-2022-saiba-onde-comprar-e-como-trocar.ghtml",
        urlToImage:
          "https://s2.glbimg.com/YHsW8UT_Oz3yg2A-Yxw13ZupD0Y=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/b/Z/IDs2KyT6unRwsNsUEjnQ/publico-lolla-q98a9933-.jpg",
        publishedAt: "2021-10-28T15:01:12Z",
        content:
          "O Lollapalooza anunciou, nesta quinta-feira (28), o line-up da edição de 2022 e também estabeleceu as regras para a troca de ingressos no evento. O festival acontece nos dias 25, 26 e 27 de março de … [+1597 chars]",
      },
      {
        source: {
          id: null,
          name: "Tecmundo.com.br",
        },
        author: "Gianlucca Del Cielo",
        title:
          "Prime Gaming de novembro tem Control Ultimate, Rise of Tomb Raider e mais! - Voxel",
        description:
          "E não são só esses! Mais vários jogos estarão disponíveis na faixa para os assinantes, confira!",
        url: "https://www.tecmundo.com.br/voxel/227728-prime-gaming-novembro-tem-control-ultimate-rise-of-tomb-raider.htm",
        urlToImage: "https://tm.ibxk.com.br/2021/10/28/28114310132165.jpg",
        publishedAt: "2021-10-28T14:38:56Z",
        content:
          "Todo mundo adora jogos grátis não é mesmo? E para a alegria dos gamers de PC, a Amazon revelou os jogos do Prime Gaming para os seus assinantes, com vários títulos de peso: Control: Ultimate Edition,… [+451 chars]",
      },
      {
        source: {
          id: null,
          name: "R7.com",
        },
        author: "R7.com",
        title:
          "Deolane Bezerra e Virginia Fonseca combinam look de R$ 6 mil - R7",
        description:
          "Viúva de MC Kevin disse que comprou roupa nova para participar do podcast da influenciadora: 'Mulheres chiques'",
        url: "http://entretenimento.r7.com/famosos-e-tv/deolane-bezerra-e-virginia-fonseca-combinam-look-de-r-6-mil-28102021",
        urlToImage:
          "https://img.r7.com/images/virginia-e-deolane-28102021112656284?dimensions=677x677&&amp;&amp;&amp;resize=677x677&amp;crop=722x722+0+53",
        publishedAt: "2021-10-28T14:31:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Em.com.br",
        },
        author: "Estado de Minas",
        title:
          "Bolsonaro diz que quem recebe Bolsa Família 'não sabe fazer quase nada' - Estado de Minas",
        description:
          "Presidente ainda criticou o PT: 'O que a juventude aprendeu com quase 14 anos de PT, tendo o ministro (Fernando) Haddad lá na educação?'",
        url: "https://www.em.com.br/app/noticia/politica/2021/10/28/interna_politica,1317890/bolsonaro-diz-que-quem-recebe-bolsa-familia-nao-sabe-fazer-quase-nada.shtml",
        urlToImage:
          "https://i.em.com.br/86xgovLTA-ayK87hZsoAcNH03fA=/600x315/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/10/28/1317890/presidente-jair-bolsonaro-concedeu-entrevista-ao-apresentador-sikera-jr_0.png",
        publishedAt: "2021-10-28T14:05:00Z",
        content:
          "Em entrevista ao apresentador da\r\nRede TV\r\nSikra Jr., na noite desta quarta-feira (27/10), o presidente Jair Bolsonaro (sem partido) criticou o PT e o Programa Bolsa Famlia - criado no governo do ex-… [+2595 chars]",
      },
      {
        source: {
          id: null,
          name: "Jovempan.com.br",
        },
        author: "Jovem Pan",
        title:
          "Moscou decreta lockdown de 11 dias após recorde de mortes por Covid-19 na Rússia - Jovem Pan",
        description:
          "Moscou decretou um lockdown de 11 dias a partir desta quinta-feira, 28, para conter o aumento de casos de Covid-19 no país. Ainda nesta quinta-feira, a Rússia registrou recorde de mortes pela doença. Foram 1.159 óbitos e 40 mil novos casos nas últimas 24 hora…",
        url: "https://jovempan.com.br/noticias/mundo/moscou-decreta-lockdown-de-11-dias-apos-recorde-de-mortes-por-covid-19-na-russia.html",
        urlToImage:
          "https://jpimg.com.br/uploads/2021/10/4602174370c5c05b447728c17ecac437bfc24911miniw.jpg",
        publishedAt: "2021-10-28T13:46:09Z",
        content:
          "Moscou decretou um lockdown de 11 dias a partir desta quinta-feira, 28, para conter o aumento de casos de Covid-19 no país. Ainda nesta quinta-feira, a Rússia registrou recorde de mortes pela doença.… [+703 chars]",
      },
      {
        source: {
          id: null,
          name: "Cnnbrasil.com.br",
        },
        author: "Will Ripley, Eric Cheung, Ben Westcott",
        title:
          "Presidente de Taiwan confirma presença de instrutores militares dos EUA na ilha - CNN Brasil",
        description:
          "Em entrevista exclusiva à CNN, Tsai Ing-wen diz que ameaça da China aumenta 'a cada dia'; ela defende, no entanto, um diálogo entre Taipei e Pequim",
        url: "https://www.cnnbrasil.com.br/internacional/presidente-de-taiwan-confirma-presenca-de-instrutores-militares-dos-eua-na-ilha/",
        urlToImage:
          "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/10/Tsai-Ing-wen-presidente-de-Taiwan-disse-a-CNN-que-ameaca-da-China-esta-aumentando-‘a-cada-dia-e1635417825374.jpg",
        publishedAt: "2021-10-28T13:43:00Z",
        content:
          "A líder de Taiwan, ilha empurrada para o centro das tensões crescentes entre os Estados Unidos e a China, disse que a ameaça de Pequim cresce “a cada dia” e, pela primeira vez, confirmou a presença d… [+13523 chars]",
      },
      {
        source: {
          id: null,
          name: "Ofuxico.com.br",
        },
        author: null,
        title:
          "Herdeiros de D. Pedro II emitem repúdio à 'Nos Tempos do Imperador' - OFuxico",
        description:
          "A Família Imperial emitiu uma nota de repúdio contra a novela das 18h, afirmando que a trama ataca a honra de D. Pedro II",
        url: "https://www.ofuxico.com.br/polemica/herdeiros-da-familia-imperial-emitem-nota-de-repudio-contra-novela-das-18h/",
        urlToImage:
          "https://www.ofuxico.com.br/wp-content/uploads/2021/10/nos-tempos-do-imperador.jpg",
        publishedAt: "2021-10-28T13:32:00Z",
        content:
          "Afirmando que cenas da novela Nos Tempos do Imperador atacam a honra de seus familiares, os herdeiros da família imperial brasileira assinaram uma nota de repúdio contra a novela exibida na Globo na … [+6551 chars]",
      },
      {
        source: {
          id: null,
          name: "Tudocelular.com",
        },
        author: "TudoCelular.com",
        title:
          "Redmi Note 11, 11 Pro e 11 Pro Plus são lançados oficialmente; confira especificações e preços - Tudocelular.com",
        description:
          "Os novos integrantes da linha Redmi Note 11 finalmente chegaram ao mercado.",
        url: "https://www.tudocelular.com/mercado/noticias/n181520/redmi-note-11-lancados-oficialmente-china.html",
        urlToImage: "https://t2.tudocdn.net/595748?w=1200",
        publishedAt: "2021-10-28T13:07:30Z",
        content:
          "Após muitos vazamentos e teasers, a Redmi finalmente apresentou ao público chinês a nova linha Redmi Note 11. Contando com três aparelhos, a família deu um salto interessante ao adotar display OLED e… [+5240 chars]",
      },
      {
        source: {
          id: "globo",
          name: "Globo",
        },
        author: null,
        title:
          "Polícia investiga desaparecimento de jovem de 16 anos em Copacabana, Zona Sul do Rio - G1",
        description:
          'Sabrina Cartaxo foi vista pela última vez na terça-feira (26). A mochila usada pela jovem acabou encontrada na casa do avô, na Zona Oeste. Antes de partir, a estudante deixou um bilhete: "Fui caminhar, já volto".',
        url: "https://g1.globo.com/rj/rio-de-janeiro/noticia/2021/10/28/policia-investiga-o-desaparecimento-de-jovem-de-16-anos-em-copacabana-zona-sul-do-rio.ghtml",
        urlToImage:
          "https://s2.glbimg.com/5s0Zfem5T0UhwLz6mbu5-LQV264=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Y/7/9WVVoERQ6ecKNKylXYkA/desaparecida-sabrina-cartaxo-2.png",
        publishedAt: "2021-10-28T12:55:19Z",
        content:
          "Desde a última terça-feira (26), cada minuto é uma tortura para a especialista em Tecnologia de Informação, Mariana Cartaxo. Na manhã daquele dia, sua filha, Sabrina Cartaxo Araújo Pereira, de 16 ano… [+2656 chars]",
      },
    ],
  });
}
