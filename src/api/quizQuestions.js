var quizQuestions = [
  {
      question: "Have you worked with or studied any of the following languages yourself?",
      answers: [
          {
              type: "SWE",
              content: "HTML or Javascript"
          },
          {
              type: "Cloud", 
              content: "Bash/Linux/Unix"
          },
          {
              type: "CySec",
              content: "SQL"
          },
          {
            type: "Other",
            content: "none"
        }
      ]
  },
  {
      question: "Are you excited about creating any of the following on your own?",
      answers: [
          {
              type: "SWE",
              content: "a website"
          },
          {
              type: "Cloud",
              content: "a wifi network"
          },
          {
              type: "CySec",
              content: "a firewall"
          },
          {
            type: "Other",
            content: "no"
        }
      ]
  },
  {
      question: "Do you enjoy creating new content or websites?",
      answers: [
          {
              type: "SWE",
              content: "yes"
          },
          {
              type: ["Cloud","Cysec"],
              content: "no"
          },
      ]
  },
  {
      question: "Are you unemployed, working part-time or working a minimum wage/low-paying job?",
      answers: [
          {
              type: ["SWE", "Cloud", "CySec"],
              content: "yes"
          },
          {
            type: "Other",
            content: "no"
        }
      ]
  },
  {
    question: "Are you are legally authorized to work in the U.S.?",
    answers: [
        {
            type: ["SWE", "Cloud", "CySec"],
            content: "yes"
        },
        {
          type: "Other",
          content: "no"
      }
    ]
},
  {
      question: "Do you have a high school diploma?",
      answers: [
        {
            type: ["SWE", "Cloud", "CySec"],
            content: "yes"
        },
          {
            type: "Other",
            content: "no"
        }
      ]
  }
];

export default quizQuestions;
