const questions = `++++
Главным ограничителем государственных расходов служат
====
#доходы бюджета.
====
расходы бюджета
====
затраты бюджета
====
смета бюджета
++++
Государственный бюджет  имеет  две  взаимодополняющие  и  взаимосвязанные  части:
====
#доходная, расходная.
====
пенсионная
====
расходная
====
профицитная, дефицитная
++++
Что предполагает бюджетный процесс?
====
#балансирование государственных доходов и расходов
====
сокращение расходов бюджета
====
увеличение доходов бюджета
====
сокращение бедности и инфляционное таргетирование`;

const str1 = questions.split("\n").join("").split("++++");

const filtered = str1.filter((i) => i);

const quiz = [];

filtered.forEach((i) => {
  const narmalniyArray = i.split("====");
  quiz.push({
    questionText: narmalniyArray[0],
    answerOptions: narmalniyArray.slice(1).map((answer, idx) => ({
      id: idx + 1,
      answerText: answer,
      isCorrect: answer.includes("#"),
    })),
  });
});

export default quiz;
