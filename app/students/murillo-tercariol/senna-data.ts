// -----------------------------------------------------------------------------
// Dados da carreira de Ayrton Senna.
//
// As estatísticas "vivas" (vitórias, pódios, pontos, corridas) são calculadas
// a partir da Jolpica-F1 API — sucessora gratuita e sem autenticação da extinta
// Ergast API (desativada no fim de 2024). Poles e voltas mais rápidas usam
// dados de referência, pois o histórico de classificação de 1984–1994 não é
// totalmente coberto pela API pública. Se a rede falhar, tudo cai para os
// valores de referência (FALLBACK_STATS), então a página nunca quebra.
// Docs: https://github.com/jolpica/jolpica-f1
// -----------------------------------------------------------------------------

const JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1";

export interface SennaStats {
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  fastestLaps: number;
  races: number;
  points: number;
  source: "live" | "fallback";
}

export const FALLBACK_STATS: SennaStats = {
  championships: 3,
  wins: 41,
  podiums: 80,
  poles: 65,
  fastestLaps: 19,
  races: 161,
  points: 610,
  source: "fallback",
};

interface JolpicaRace {
  season: string;
  raceName: string;
  Results?: Array<{ position: string; points: string }>;
}

export async function fetchSennaStats(): Promise<SennaStats> {
  try {
    const limit = 100;
    let offset = 0;
    let total = Infinity;
    const races: JolpicaRace[] = [];

    while (offset < total) {
      const res = await fetch(
        `${JOLPICA_BASE}/drivers/senna/results.json?limit=${limit}&offset=${offset}`,
        { next: { revalidate: 60 * 60 * 24 } },
      );
      if (!res.ok) throw new Error(`Jolpica respondeu ${res.status}`);

      const json = await res.json();
      const chunk: JolpicaRace[] = json?.MRData?.RaceTable?.Races ?? [];
      total = Number(json?.MRData?.total ?? chunk.length);
      races.push(...chunk);
      offset += limit;
      if (chunk.length === 0) break;
    }

    if (races.length === 0) throw new Error("Nenhuma corrida retornada");

    let wins = 0;
    let podiums = 0;
    let points = 0;

    for (const race of races) {
      const result = race.Results?.[0];
      if (!result) continue;
      const position = Number(result.position);
      if (position === 1) wins += 1;
      if (position > 0 && position <= 3) podiums += 1;
      points += Number(result.points ?? 0);
    }

    return {
      championships: FALLBACK_STATS.championships,
      wins,
      podiums,
      poles: FALLBACK_STATS.poles,
      fastestLaps: FALLBACK_STATS.fastestLaps,
      races: races.length,
      points,
      source: "live",
    };
  } catch {
    return FALLBACK_STATS;
  }
}

// -----------------------------------------------------------------------------
// Conteúdo editorial da página — carreira, conquistas, desafios e legado.
// -----------------------------------------------------------------------------

export interface TimelineEntry {
  year: string;
  title: string;
  team?: string;
  body: string;
}

export const RISE: TimelineEntry[] = [
  {
    year: "1973",
    title: "As primeiras curvas",
    body: "Aos quatro anos ganha o primeiro kart, presente do pai, num terreno baldio em São Paulo. Aos treze, já disputa o Campeonato Sul-Americano de kart.",
  },
  {
    year: "1981",
    title: "Rumo à Europa",
    body: "Muda-se para a Inglaterra para correr na Fórmula Ford. Vence na estreia e domina as categorias de acesso com uma velocidade que já incomoda os veteranos.",
  },
  {
    year: "1983",
    title: "Campeão da Fórmula 3 britânica",
    body: "Decide o título na última volta, sob chuva, em Thruxton — um prenúncio do piloto que se tornaria referência absoluta em pista molhada.",
  },
  {
    year: "1984",
    title: "Estreia na Fórmula 1",
    body: "Chega à F1 pela Toleman. Em Mônaco, sob temporal, sobe do 13º ao 2º lugar antes da corrida ser interrompida — o mundo passa a prestar atenção.",
  },
];

export const McLAREN: TimelineEntry[] = [
  {
    year: "1985",
    title: "Primeira vitória",
    team: "Lotus-Renault",
    body: "Sob chuva forte em Estoril, vence com uma volta de vantagem sobre o segundo colocado. É a confirmação: Senna e a chuva formam uma dupla imbatível.",
  },
  {
    year: "1988",
    title: "Primeiro título mundial",
    team: "McLaren MP4/4 · TAG Porsche",
    body: "Ao lado de Alain Prost, forma a dupla mais dominante da história: 15 vitórias em 16 corridas. Senna vence 8 delas e conquista seu primeiro campeonato.",
  },
  {
    year: "1989",
    title: "A rivalidade Prost x Senna",
    team: "McLaren MP4/5",
    body: "A parceria racha. A colisão em Suzuka entre os dois companheiros de equipe decide o título a favor de Prost, em uma das polêmicas mais discutidas do esporte.",
  },
  {
    year: "1990",
    title: "Segundo título mundial",
    team: "McLaren MP4/5B",
    body: "Nova batalha decisiva em Suzuka — desta vez o resultado favorece Senna, que conquista seu segundo campeonato em meio a uma disputa igualmente controversa.",
  },
  {
    year: "1991",
    title: "Terceiro título mundial",
    team: "McLaren MP4/6",
    body: "Vence as seis primeiras corridas da temporada e sela o tricampeonato — o auge de sua parceria com a McLaren e o ano de maior domínio absoluto.",
  },
  {
    year: "1993",
    title: "A volta mágica de Donington",
    team: "McLaren MP4/8",
    body: "Larga em quarto sob chuva e ultrapassa todos os rivais na primeira volta. Considerada por muitos a volta de abertura mais espetacular já vista na Fórmula 1.",
  },
];

export const CHALLENGES: TimelineEntry[] = [
  {
    year: "1989 – 1990",
    title: "Suzuka: duas colisões, dois títulos",
    body: "As batidas com Prost no Japão tornaram-se símbolo da rivalidade mais intensa do automobilismo — competitividade levada ao limite entre dois dos maiores nomes do esporte.",
  },
  {
    year: "1992 – 1993",
    title: "A era Williams",
    body: "Com a McLaren perdendo competitividade técnica, Senna enfrenta os Williams dominantes de Mansell e Prost. Ainda assim, vence pela força pura do talento ao volante.",
  },
  {
    year: "1994",
    title: "A pressão de uma nova era",
    body: "Muda-se para a Williams-Renault buscando o quarto título, mas a temporada começa marcada por mudanças regulatórias e um carro ainda em desenvolvimento.",
  },
];

export const QUOTE =
  "Enquanto eu tiver a chance de lutar, vou lutar. Enquanto o coração bater, vou até o limite.";
