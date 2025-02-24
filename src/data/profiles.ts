export interface Profile {
  id: number;
  name: string;
  role: string;
  field: string;
  bgColor: string;
  bannerUrl: string;
  avatarUrl: string;
  fullBio: string;
  presentation: string;
  performance?: string;
  socialMedia?: String;
}

const roles = [
  "Desenvolvedora Full Stack",
  "UX Designer",
  "Engenheira de Software",
  "Analista de Dados",
  "Arquiteta de Software",
  "DevOps Engineer",
  "Product Manager",
  "Tech Lead"
];

const fields = [
  "Teólogo, Designer e Jornalista.",
  "Biotecnologia, Mestranda em Medicina Tropical",
  "Matemática, Mestrado em Economia",
  "Gestor Ambiental, com mestrado em Segurança e Saúde do Trabalho"
];

const bgColors = [
  "bg-gradient-to-r from-teal-200 to-teal-500",
  "bg-gradient-to-r from-amber-200 to-yellow-500",
  "bg-gradient-to-r from-slate-300 to-slate-500",
  "bg-gradient-to-r from-indigo-500 to-blue-500",
  "bg-gradient-to-r from-cyan-500 to-blue-500",
  "bg-gradient-to-r from-indigo-400 to-cyan-400",
  "bg-gradient-to-r from-slate-300 to-slate-500",
  "bg-gradient-to-r from-emerald-500 to-emerald-900",
  "bg-gradient-to-r from-slate-800 to-slate-500"
]


const shortBios = [
  "Profissional apaixonada por criar soluções inovadoras e impactantes, com foco em desenvolvimento web e experiência do usuário.",
  "Especialista em transformar desafios complexos em experiências intuitivas e acessíveis para os usuários.",
  "Desenvolvedora experiente com forte background em arquitetura de sistemas e práticas ágeis.",
  "Analista dedicada à extração de insights valiosos a partir de dados complexos.",
  "Profissional com ampla experiência em liderar equipes técnicas e entregar projetos de alta complexidade."
];

const fullBios = [
  "Profissional com vasta experiência no desenvolvimento de aplicações web, destacando-se por sua capacidade de criar soluções elegantes para problemas complexos. Graduada em Ciência da Computação, tem liderado projetos importantes em empresas de tecnologia.",
  "Especialista em design de interfaces com foco em acessibilidade e usabilidade. Com formação em Design Digital e diversos projetos premiados em seu portfólio.",
  "Engenheira de software com mais de 8 anos de experiência em desenvolvimento de sistemas escaláveis. Mestre em Engenharia de Software com foco em arquiteturas distribuídas.",
  "Profissional com expertise em análise de dados e machine learning, contribuindo para decisões estratégicas em grandes empresas. Possui certificações em Data Science e Big Data.",
  "Líder técnica com histórico comprovado em gestão de equipes e implementação de metodologias ágeis. Palestrante em conferências internacionais de tecnologia."
];

const presentations = [
  "Olá! Sou uma profissional apaixonada por tecnologia e inovação. Trabalho principalmente com desenvolvimento web moderno, mas estou sempre aberta para aprender novas tecnologias e enfrentar novos desafios.",
  "Acredito no poder da tecnologia para transformar vidas e negócios. Minha missão é criar soluções que façam a diferença na vida das pessoas.",
  "Busco constantemente aprender e compartilhar conhecimento com a comunidade. Participo ativamente de eventos e contribuo com projetos open source.",
  "Minha jornada na tecnologia começou há mais de 5 anos, e desde então venho me especializando em criar soluções robustas e escaláveis.",
  "Como profissional, valorizo a colaboração, a comunicação clara e o aprendizado contínuo. Estou sempre em busca de novos desafios e oportunidades de crescimento."
];

export const profiles: Profile[] = [
  {
    id: 1,
    name: 'Rafael Fideles',
    role: "Arquiteto de Software",
    field: "ADS, Especialização Banco de Dados",
    bgColor: "bg-gradient-to-r from-slate-500 to-slate-800",
    bannerUrl: `https://media.licdn.com/dms/image/v2/D4D16AQEfUj4H3rKL7g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1728833450878?e=1746057600&v=beta&t=FBriJuPLJwRnrdBbrt6dT5sr2rfxHHi-WT-dkteZNds`,
    avatarUrl: `https://media.licdn.com/dms/image/v2/C4E03AQGMvU_3BYQDTw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598132111668?e=1746057600&v=beta&t=amvBHSM9CX4m0Xpnl7h0HjknX2dJnv-jQiL92UkeytE`,
    // shortBio: 'Iniciei minha trajetória em 2010 na construção e manutenção de aplicações focado em alta disponibilidade e performance, explorando diversas tecnologias desktop e web tanto no front-end quanto no back-end o que me permite compreender a arquitetura e comunicação entre sistemas',
    fullBio: "Atualmente desenvolvedor sênior full stack, atuo em projetos de alto nível utilizando Node.Js e TypeScript. No Front end utilizo framworks como React, VueJs, NextJs e para o back end Adonisjs e NestJs. Realizando testes automatizados com Jest. No meu dia a dia tenho estudado Machine Learning, LLMs, RAG enquanto busco continuamente aprender as melhores praticas, novas tecnologias, Spring Boot e compartilhar conhecimentos promovendo um ambiente colaborativo.",
    presentation: "Sou reconhecido por ser comunicativo gosto de interagir e compartilhar conhecimento, prestativo e ágil para aprender e dominar novas tecnologias. Em resumo sou perseverante, dedicado e atencioso",
    performance: "Desenvolvimento de software, Arquitetura de Sistemas e Consultoria em soluções de sistemas",
    socialMedia: 'https://www.linkedin.com/in/rafael-fideles-costa/'
  },

  ...Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    name: `Profissional ${i + 1}`,
    role: roles[i % roles.length],
    field: fields[i % fields.length],
    bgColor: bgColors[i % bgColors.length],
    // bannerUrl: Math.floor(Math.random() * 300) % 2 == 0 ? `https://picsum.photos/seed/customID/358/96` : '',
    bannerUrl:  '',
    avatarUrl: `https://i.pravatar.cc/400?img=${(i % 70) + 1}`,
    // shortBio: shortBios[i % shortBios.length],
    fullBio: fullBios[i % fullBios.length],
    presentation: presentations[i % presentations.length],
  }))
]