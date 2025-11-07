import projeto1 from '@/assets/projeto_1.png';
import projeto2 from '@/assets/projeto_2.png';
import projeto3 from '@/assets/projeto_3.png';
import projeto4 from '@/assets/projeto_4.png';
import projeto5 from '@/assets/projeto_5.png';

export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  link: string
  tags: string[]
  year: string
  category: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "API para Cadastro de Usuários - MongoDB",
    description: "API para Cadastro de Usuários desenvolvida com React, Node.js, Vite e MongoDB, permitindo o registro e gerenciamento de usuários de forma simples e eficiente, com uma interface moderna e responsiva.",
    fullDescription: "Este projeto Full Stack integra React, Node.js, Vite e MongoDB para criar uma aplicação completa de cadastro de usuários. A API, desenvolvida do zero, realiza operações de CRUD (Create, Read, Update, Delete), garantindo comunicação eficiente entre o front-end e o banco de dados NoSQL. A interface foi projetada com foco em usabilidade e design intuitivo, oferecendo uma experiência fluida e responsiva em diferentes dispositivos. O projeto também abrange manipulação de dados, tratamento de erros, e implementação de boas práticas em arquitetura e segurança. Além disso, foram utilizados frameworks e bibliotecas modernas para otimizar o desempenho e facilitar a manutenção do código, tornando esta aplicação um exemplo sólido de integração entre frontend e backend com tecnologias contemporâneas.",
    image: projeto1,
    link: "https://github.com/Naluaqui/ProjetoBancoDeDados.git",
    tags: ["MongoDB", "React", "API", "FullStack"],
    year: "2025",
    category: "Desenvolvimento Web",
  },
  {
    id: "2",
    title: "Automação Ambev",
    description: "Aplicação de automação para organização de arquivos desenvolvida para a Ambev, utilizando Python para classificar e mover documentos com base em palavras-chave e filtros inteligentes, atingindo 99% de assertividade.",
    fullDescription: "O projeto Automação Ambev foi criado para otimizar a gestão e classificação de arquivos em ambientes corporativos. Desenvolvido integralmente em Python, o sistema organiza documentos e pastas de forma automatizada, aplicando parâmetros de filtragem, análise de nomes de arquivos e geração dinâmica de palavras-chave para determinar o destino correto de cada item. A aplicação possui frontend e backend construídos apenas com bibliotecas Python, garantindo leveza, performance e fácil manutenção. O código foi estruturado para atingir 99% de precisão na identificação e movimentação dos arquivos, reduzindo erros manuais e aumentando a eficiência operacional. Este projeto demonstra a capacidade de aplicar lógica de automação, processamento de dados e organização inteligente de diretórios, servindo como base para soluções corporativas voltadas à eficiência e padronização de processos internos.",
    image: projeto2,
    link: "https://github.com/Naluaqui/automacaoAmbev.git",
    tags: ["Python", "Produtividade", "Backend"],
    year: "2025",
    category: "Automação",
  },
  {
    id: "3",
    title: "Global Solution - Wave Wise",
    description: "Projeto Wave Wise — sistema de lixeiras inteligentes com sensores IoT para monitorar em tempo real o nível de enchimento, integrando simulações em Python, componentes de hardware e cálculos aplicados para promover sustentabilidade e eficiência urbana.",
    fullDescription: "O Global Solution - Wave Wise é um projeto inovador que combina tecnologia IoT (Internet das Coisas) e sustentabilidade para otimizar o gerenciamento de resíduos em ambientes urbanos. A solução utiliza lixeiras inteligentes equipadas com sensores capazes de medir a capacidade de armazenamento em tempo real, transmitindo os dados para sistemas de monitoramento e controle. O projeto inclui simulações desenvolvidas em Python, que reproduzem o comportamento dos sensores e analisam o nível de enchimento, além de modelos de hardware integrados a cálculos aplicados de volume e frequência de coleta. O objetivo é reduzir custos operacionais, melhorar a logística de coleta e contribuir para um ambiente mais limpo e eficiente. Com uma abordagem interdisciplinar, o Wave Wise une engenharia, tecnologia e sustentabilidade, demonstrando o potencial da IoT aplicada à gestão inteligente de resíduos.",
    image: projeto3,
    link: "https://www.figma.com/proto/IYJuWGZLH3JVbRtqmW1xwp/Untitled?node-id=139-53&p=f&t=O2lrSsixVV5jz092-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=139%3A53&show-proto-sidebar=1",
    tags: ["Sustentabilidade", "EcoTech"],
    year: "2025",
    category: "Tecnologia Sustentável",
  },
  {
    id: "4",
    title: "Passa Para Ela",
    description: "Passa Para Ela é uma plataforma dedicada ao futebol feminino, com recursos de automação de peneiras, jogo virtual interativo e painel de dados para impulsionar a visibilidade e valorização das jogadoras.",
    fullDescription: "O projeto ⚽ Passa Para Ela tem como objetivo fortalecer o futebol feminino por meio da tecnologia. A plataforma une automação, gamificação e análise de dados para criar um ecossistema completo de incentivo à modalidade. Entre suas principais funcionalidades estão a automação de peneiras esportivas, facilitando o cadastro, triagem e acompanhamento de atletas; um jogo virtual que conecta entretenimento e conscientização; e um painel de dados que exibe estatísticas e informações relevantes sobre o futebol feminino. Desenvolvido com foco em impacto social e inovação, o projeto está em andamento e busca promover igualdade de oportunidades, visibilidade midiática e engajamento digital no cenário esportivo feminino.",
    image: projeto4,
    link: "https://www.figma.com/proto/TCJWWvJ63dIQ5bgPPyeJF2/passa-a-bola-DEFINITIVO?node-id=116-5&starting-point-node-id=116%3A5&t=RnviC7ojQf4UyApq-1",
    tags: ["InovaçãoSocial", "Gamificação", "TechForGood"],
    year: "2025",
    category: "Esportes & Tecnologia",
  },
  {
    id: "5",
    title: "Viagem no Tempo (IC)",
    description: "Viagem no Tempo (IC) é um game interativo narrativo, desenvolvido para eventos e exposições, combinando programação, design e storytelling para oferecer uma experiência imersiva e educativa.",
    fullDescription: "O projeto 🌀 Viagem no Tempo (IC) é um jogo interativo criado com o propósito de unir entretenimento, aprendizado e tecnologia em um formato envolvente voltado a eventos e exposições educacionais. A experiência transporta o jogador por diferentes épocas históricas, utilizando narrativas dinâmicas, recursos visuais e elementos de programação para criar uma jornada interativa única. O projeto explora a criatividade na narrativa, o desenvolvimento lógico e o uso de linguagens de programação aplicadas à criação de jogos digitais. Atualmente em desenvolvimento, o Viagem no Tempo (IC) reflete a integração entre ciência, arte e tecnologia, promovendo interação, curiosidade e aprendizado imersivo para públicos de todas as idades.",
    image: projeto5,
    link: "",
    tags: ["GameDev", "Tecnologia"],
    year: "2025",
    category: "Desenvolvimento de Jogos",
  },
  
]
