type languageTexts = {
  hun: {
    welcome: String;
    date: String;
    newDeath: String;
    death: String;
    newCase: String;
    cases: String;
    population: String;
    event: String;
  };
  eng: {
    welcome: String;
    date: String;
    newDeath: String;
    death: String;
    newCase: String;
    cases: String;
    population: String;
    event: String;
  };
};
export const texts: languageTexts = {
  hun: {
    welcome: "Üdvözöli a Covid Stat V1",
    date: "Utolsó frissítés: ",
    newDeath: "Új halálesetek:",
    death: "Halálesetek:",
    newCase: "Új esetek:",
    cases: "Összes eset:",
    population: "Népesség:",
    event: "Összes kovid esemény a népességben",
  },
  eng: {
    welcome: "Welcome Covid Stat V1",
    date: "Last update: ",
    newDeath: "New deaths:",
    death: "Deaths:",
    newCase: "New cases:",
    cases: "Total cases:",
    population: "Population:",
    event: "Total covid event in the population",
  },
};
