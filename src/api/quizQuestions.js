var quizQuestions = [
  {
      question: "Are you starting your career fresh or building up?",
      answers: [
          {
              type: ["CySec", "SWE", "Cloud"],
              content: "Yes"
          },
          {
              type: ["CySec", "SWE", "Cloud"],
              content: "No"
          }
      ]
  },
  {
      question: "Are you interested in creating secure systems?",
      answers: [
          {
              type: "CySec",
              content: "Yes"
          },
          {
              type: "SWE",
              content: "No"
          },
          {
              type: "Cloud",
              content: "Indifferent"
          }
      ]
  },{
    question: "Do you enjoy troubleshooting and finding flaws in problems?",
    answers: [
        {
            type: "CySec",
            content: "Yes"
        },
        {
            type: "SWE",
            content: "Indifferent"
        },
        {
            type: "Cloud",
            content: "No"
        }
    ]
 },{
    question: "Are you interested in managing data?",
    answers: [
        {
            type: ["SWE", "CySec"],
            content: "No"
        },
        {
            type: "Cloud",
            content: "Yes"
        }
    ]
 },{
    question: "Do you consider yourself as someone with good written and oral communication skills",
    answers: [
        {
            type: ["CySec", "SWE"],
            content: "No"
        },
        {
            type: "Cloud",
            content: "Yes"
        }
    ]
}
];

export default quizQuestions;
