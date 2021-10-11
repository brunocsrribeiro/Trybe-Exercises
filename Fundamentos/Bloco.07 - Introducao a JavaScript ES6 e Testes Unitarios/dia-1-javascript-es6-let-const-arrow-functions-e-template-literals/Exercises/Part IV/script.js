const arraySkills = ['Estão sendo desenvolvidas'];

const buildSkillsPhrase = (str) => {
    const phraseTest = param => (`Tryber ${param} aqui!`);

    let result = `${phraseTest(str)} Minhas habilidades`;

    arraySkills.forEach((skill, index) =>
    result = `${result} - ${skill}`);

    result = `${result} #goTrybe`;

    return result;
}

console.log(buildSkillsPhrase("Bruno"));
