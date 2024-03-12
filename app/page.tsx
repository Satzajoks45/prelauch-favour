"use client";

import {
  About,
  FAQ,
  Footer,
  Hero,
  NewsLetter,
  ShopMate,
  TopCategory,
  Why,
} from "@/lib/elements";
import { Container, Grid } from "@/lib/layouts";

const options = [
  {
    img: "/images/grocery.png",
    text: "Get your premium groceries",
    fitImg: true,
    color: "#3BB77E",
  },
  {
    img: "/images/cosmetics.png",
    text: "Buy your quality cosmetics",
    fitImg: false,
    color: "#DEA518",
  },
  {
    img: "/images/food.png",
    text: "You can't run out of foodstuffs",
    fitImg: false,
    color: "#3B6DB7",
  },
];

const faqQuestion = [
  {
    question: "What kinds of products does Komas500 offer?",
    answer:
      "Komas500 specializes in providing a diverse range of foodstuff, groceries, and cosmetics.",
  },
  {
    question: "What is the delivery fee?",
    answer:
      "This ranges from N200 for our pickup points to N400 for direct delivery.",
  },
  {
    question: "What is a fulfillment centre?",
    answer:
      "Our fulfillment centers, strategically located at universities, local government councils, secretariats, and other suitable places, serve as convenient pick-up points for your orders.",
  },
  {
    question: "How do I get connected with a Shopmate?",
    answer:
      "Connecting with your Shopmate is easy. Simply sign up on our website, and once you are ready to place an order, a team of dedicated shopmates will be available for you to select from. When you select one, they proceed to help you place your preferred items in your cart. Afterward, you check out and have them oversee the delivery process.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "If you receive a damaged or defective item, you can initiate a return by going to “ORDERS'' in your KOMAS500 account. We will process a refund for the item.",
  },
  {
    question: "What is your return policy?",
    answer:
      "KOMAS500 accepts returns for ALL eligible items within 7 days after delivery. To be eligible for a return, the product must be in its original condition and packaging, with all accessories in place.To return a product, complete the return form provided and send your product to the pickup centre that fufilled your order.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <section className="py-10 bg-[whitesmoke]">
        <Container className="flex flex-col items-center">
          <h2 className="text-2xl font-bold capitalize">PRODUCTS WE OFFER</h2>

          <Grid className="w-full mt-7 gap-10">
            {options.map((data, i) => (
              <TopCategory
                key={i}
                img={data.img}
                fitImage={data.fitImg}
                desc={data.text}
                color={data.color}
              />
            ))}
          </Grid>
        </Container>
      </section>
      <About />
      <ShopMate />
      <FAQ faqQuestion={faqQuestion} newsletter={<NewsLetter />} />
      
      <Footer topMargin={true} />
    </>
  );
}
