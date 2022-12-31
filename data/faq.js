const faq = [
  {
    question: "What is included in my free estimate?",
    answer:
      "You will receive a written scope of your project, including what permits will be required, a basic timeline, and whatever open questions remain for you to decide on before we can begin.",
  },
  {
    question: "How often should my system be serviced?",
    answer:
      "You should have your systems serviced right before each cooling and heating season starts.",
  },
  {
    question: "How do I reduce my cooling costs?",
    answer:
      "Add some attic ventilation! This will reduce moisture and lower your cooling costs.",
  },
  {
    question: "What is included in my free estimate?",
    answer:
      "You will receive a written scope of your project, including what permits will be required, a basic timeline, and whatever open questions remain for you to decide on before we can begin.",
  },
  {
    question: "How often should my system be serviced?",
    answer:
      "You should have your systems serviced right before each cooling and heating season starts.",
  },
  {
    question: "How do I reduce my cooling costs?",
    answer:
      "Add some attic ventilation! This will reduce moisture and lower your cooling costs.",
  },
];

faq.forEach((obj, index) => (obj.id = index + 1));

export default faq;
