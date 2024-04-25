"use client";
import React, { useState } from "react";

const FAQs = () => {
  // State to manage the visibility of each answer
  const [showAnswer, setShowAnswer] = useState<any>({});

  // Function to toggle the visibility of an answer
  const toggleAnswer = (id: number) => {
    setShowAnswer((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Data for FAQ items (questions and answers)
  const faqs = [
    {
      id: 1,
      question:
        "Насколько сильно отличаются наши зарядные станции для электромобилей по стоимости от других станций?",
      answer: `Наши станции находятся в “вилке цен” на российском рынке и отличаются лишь высокими показателями эффективности.

      Есть несколько вариантов зарядных станций от компании-производителя «BENY», которые отличаются
      друг-от-друга типом поставляемого тока, мощностью передачи тока, а также иными определенными функционалами, которые доставляют как для бизнеса, так и для обычного потребителя — исключительное удобство использования.`,
    },
    {
      id: 2,
      question:
        "Какое количество времени необходимо для полной зарядки электромобиля на наших зарядных станции?",
      answer: `Необходимое количество времени зарядки, пропорционально ёмкости электромобиля и мощности электростанции.

      Есть несколько вариантов электростанций в нашем ассортименте, которые отличаются мощностями, а также классификациями и фазами передачи тока, что позволяет заряжать электромобиль с разной скоростью заряда.
      Например, ёмкость батареи составляет 86 кВт, а мощность электростанции 22 кВт, итоговое время зарядки ~3,5 часов.`,
    },
    {
      id: 3,
      question: "Как выбрать электростанцию для своего электромобиля?",
      answer: `Первое, на что стоит обратить внимание, это на качество комплектующих самих зарядных электростанций. 

      Например, наши зарядные электростанций постоянно тока «BENY», оснащены последним силовым модулем 
      от ведущего мирового производителя в сфере робототехники, энергетики и технологии автоматизации «АВВ».
      Помимо этого в наших зарядных электростанциях постоянно тока устанавливается высококачественный контактор 
      от крупнейшего южнокорейского производителя электротехнического оборудования — «LS Electric».
      
      Второе, это на гарантийный срок и сертификацию продукции соответствующей российским стандартам.
      
      Например, гарантийный срок на продукцию «BENY» составляет до трех лет, а срок годности до двадцати лет.
      Вся представленная нами продукция прошла необходимые испытания, подтвержденные сертификатами и декларациями.`,
    },
  ];

  return (
    <div className=" mx-auto">
      <h1 className="text-3xl font-bold mb-4">F.A.Q.</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="mb-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAnswer(faq.id)}
          >
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <svg
              className={`w-6 h-6 ${
                showAnswer[faq.id] ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 1.414L10 11.414l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {showAnswer[faq.id] && <p className="mt-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
