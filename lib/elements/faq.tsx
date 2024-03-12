import React from "react";
import { Container } from "../layouts";
import { Accordion } from "../components";
import { NewsLetter } from ".";

type Props = {
  newsletter?: React.ReactNode;
  faqQuestion: Array<any>;
};

const faq = ({ faqQuestion, newsletter }: Props) => {
  return (
    <section className="py-10 relative">
      <Container className="flex flex-col items-center">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-bold capitalize">
          Frequently asked questionss
        </h2>
        <p className="text-center md:text-start text-base font-semibold mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          doloremque ratione nam deserunt tempore repudiandae delectus, quisquam
          laboriosam quidem illum at optio ad nobis esse aliquam voluptatibus a
          quae molestias?
        </p>
        <div className="w-full mt-10 flex flex-col gap-3">
          {faqQuestion.map((data, i) => (
            <Accordion key={i} topic={data.question} subTopic={data.answer} />
          ))}
        </div>
      </Container>

      {newsletter && (
        <Container className="static translate-y-[60%]">{newsletter}</Container>
      )}
    </section>
  );
};

export default faq;
