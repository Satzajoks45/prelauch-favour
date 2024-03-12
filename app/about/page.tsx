"use client";

import { Button, Input } from "@/lib/components";
import {
  AboutHero,
  FAQ,
  Footer,
  ShopMate,
  ShopmateWorks,
} from "@/lib/elements";
import { Container, Grid } from "@/lib/layouts";
import Image from "next/image";
import Link from "next/link";

const arr = [
  {
    index: 1,
    text: "text-emerald-600",
    details: `You are literally being paid to shop. As an online shopping assistant, you get paid to help customers complete their orders and foresee the delivery process`,
  },
  {
    index: 2,
    text: "text-blue-600",
    details: `You can make as much as #200k monthly without technical skills`,
  },
  {
    index: 3,
    text: "text-yellow-600",
    details: `You get to enjoy flexible working hours either at home, in the office or even in transit. `,
  },
  {
    index: 4,
    text: "text-pink-600",
    details: `You get to join a community of friends. `,
  },
];

const faqQuestion = [
  {
    question: "Who is a Shopmate?",
    answer:
      "A Shopmate is an online shopping assistant who helps to browse through a shopper's products, adds them to their carts, and guides them through the delivery process, ensuring a seamless shopping experience.",
  },
  {
    question: "Who can become a Shopmate?",
    answer:
      "Anyone, whether a student, worker, or business person, can become a Shopmate. We welcome individuals from diverse backgrounds to work with us.",
  },
  {
    question: "How do I sign up to become a Shopmate?",
    answer:
      "Signing up is easy! Just visit our website, fill in the required information, and you'll be on your way to becoming a Shopmate.",
  },
  {
    question: "Do I need any technical skills to be a Shopmate?",
    answer:
      "No, technical skills are not required to start as a Shopmate. We provide training and mentorship to ensure you have the knowledge and confidence to assist online shoppers effectively.",
  },
  {
    question: "How do Shopmates get paid?",
    answer:
      "Shopmates earn commissions for each order they fulfill. Your earnings are directly tied to the number of successful orders you assist with.",
  },
  {
    question: "Where will Shopmates operate?",
    answer:
      "Shopmates will primarily operate around universities, secretariats and local government councils, ensuring convenient assistance for a wide range of busy online shoppers in these areas.",
  },
];

export default function AboutPage() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <>
      <AboutHero />
      <section id="signup">
        <Container className="py-20">
          <Grid className="lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <Input
              placeholder="Enter phone number"
              type="text"
              InputWidth="full"
              className="px-5"
            />
            <Input
              placeholder="Enter full name"
              type="text"
              InputWidth="full"
              className="px-5"
            />
            <Input
              placeholder="Enter email address"
              type="email"
              InputWidth="full"
              className="px-5"
            />
            <Input
              placeholder="Enter occupation"
              type="text"
              InputWidth="full"
              className="px-5"
            />
            <Input
              placeholder="Enter state"
              type="text"
              InputWidth="full"
              className="px-5"
            />
            <Input
              placeholder="select countery"
              type="text"
              InputWidth="full"
              className="px-5"
            />
          </Grid>
          <div className="flex items-center gap-4 mt-7 font-bold text-[#636363]">
            <input type="checkbox" className="h-10 w-10" />
            <p className=" text-center md:text-start text-sm md:text-lg leading-[25px]">
              I have carefully read and thoroughly understand the terms and
              conditions outlined, and I hereby agree to abide by the
              stipulations outlined in this agreement.
            </p>
          </div>

          <div className="max-w-[70%] mx-auto mt-7">
            <Button
              variant="filled"
              rounded="small"
              className="bg-emerald-500 text-white text-lg w-full py-4"
            >
              Sign up as shop mate
            </Button>
          </div>

          <div className="font-medium text-sm  mx-[5%] md:mx-[3%] mt-7 md:text-xl flex items-center justify-center md:justify-start gap-2 text-[#636363]">
            <p>Already have an account?</p>
            <Link href="#">
              <p className="text-[#3BB77E]">Login here</p>
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl text-center md:text-start font-bold capitalize">
            WHY BECOME A KOMAS500 SHOPMATE?
          </h2>
          <p className="text-center md:text-start text-base font-semibold mt-7 text-[#636363]">
            I know at this point you have come across many "life-changing
            opportunities" and are already wondering why you should come on
            board. Here are 4 simple reasons:
          </p>

          <Grid className="lg:grid-cols-2 xl:grid-cols-2 gap-5 mt-7">
            {arr.map((data) => (
              <div
                key={data.index}
                className="flex flex-col items-center md:flex-row md:items-start gap-4"
              >
                <div
                  className={`flex items-center justify-center p-4 rounded-full h-14 w-14 border-[5px] text-3xl ${data.text} font-bold border-current`}
                >
                  {data.index}
                </div>
                <p className="text-center md:text-start text-[#636363] font-bold">
                  {data.details}
                </p>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      <ShopmateWorks />
      <FAQ faqQuestion={faqQuestion} />

      <section
        className={`relative min-h-[100vh] md:bg-[#E7E7E7] bg-[#3BB77E] text-white md:text-[#404040] md:min-h-screen mt-10 `}
      >
        <div className="absolute h-full w-full top-0 left-0 ">
          <div className="h-full w-full overflow-hidden relative">
            {/* image */}
            <div className="absolute invisible lg:visible h-[600px] w-[950px] bottom-0 right-[-5%]">
              <div className="relative h-full w-full scale-x-[-1]">
                <Image
                  src="/images/goodbye.png"
                  alt="background"
                  fill
                  className="object-left object-contain"
                />
              </div>
            </div>

            {/* data */}
            <Container className="h-full flex flex-col">
              <div className="flex-grow flex items-center justify-center lg:justify-start">
                <div className="z-[30] max-w-2xl">
                  <h2 className="flex flex-col items-center lg:items-start mx-auto max-w-[90%] md:mx-0 md:max-w-none">
                    <span className=" text-center md:text-start text-3xl md:text-6xl font-semibold flex flex-col-reverse items-center justify-center lg:items-start">
                      IT'S TIME TO EMBRACE THIS FRESH-OUT-OF-THE-BOX IDEA AND BE
                      AMONG THE FIRST TO EXPERIENCE TRUE FINANCIAL FREEDOM.
                    </span>
                  </h2>

                  <p className="text-center md:text-start text-lg font-semibold mt-4 mx-auto max-w-[90%] md:mx-0 md:max-w-none">
                    Anyone can be a shopmate. Whether you are a worker, business
                    person or student, you can come on board and start earning
                    at your pace We will train you and empower you with the
                    skills to gain financial freedom like no other. No need to
                    work for a boss, no need to sell a product, no need to bring
                    in a referral, you don't even need to market yourself.
                  </p>

                  <div className="flex items-center justify-center gap-5 mt-7 md:mt-auto min-h-[100px] w-full mx-auto max-w-[90%] md:mx-0 md:max-w-none">
                    <Button
                      onClick={() => scrolltoHash("signup")}
                      variant="filled"
                      rounded="small"
                      className="bg-white text-emerald-500 md:bg-emerald-500 md:text-white !text-xl w-full py-4"
                    >
                      Apply now
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
