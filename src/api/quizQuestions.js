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
      
      question: "Are you interested in creating secure systems?",
      answers: [
        {
            type: ["SWE", "Cloud", "CySec"],
            content: "yes"
        },
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
