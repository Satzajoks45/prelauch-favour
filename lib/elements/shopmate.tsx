import React from "react";
import { Container } from "../layouts";
import Image from "next/image";
import { Button } from "../components";

type Props = {};

const shopmate = (props: Props) => {
  return (
    <section className="py-10">
      <Container className="flex flex-col items-center">
        <h2 className="text-2xl font-bold capitalize">Shop mate</h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[0.4] relative min-h-[400px] ">
            <Image
              src="/images/shopmate.png"
              alt="shopmate image"
              className="object-center object-cover"
              fill
            />
          </div>
          <div className="flex-[0.6] md:ps-10 flex flex-col justify-start">
            <h4 className="text-center md:text-start text-xl text-emerald-500 font-bold mt-10">
              Introducing your personal shopping assistant!
            </h4>
            <p className="text-center md:text-start text-base font-semibold mt-5">
              You have run out of foodstuff, but you don't have time to restock.
              Even shopping online can be stressful. Whether you are hopping
              from shop to shop in the market or scrolling through numerous
              products online to find the perfect brand, Who has time for that?
              No need to stress yourself any longer as we introduce you to our
              Shopmates! Get ready to access a one-of-a-kind online shopping
              assistant who is here to shop for you. Your shopmate is available
              to browse through the catalog section, add your preferred products
              to your shopping cart and foresee the delivery process. With just
              a few clicks, you can sit back and have your goods at your door
              within hours! Don't worry about your financial information as you
              are the one who will process all necessary payments when placing
              the order. Shopping just got easier with an online friend to
              assist.
            </p>

            <div className="flex items-center justify-center gap-10 mt-auto min-h-[100px] md:max-w-[80%] md:w-full md:mx-auto">
              <Button
                variant="outline"
                rounded="small"
                className="text-emerald-500 text-lg w-full py-4"
              >
                Learn more
              </Button>

              <Button
                variant="filled"
                rounded="small"
                className="bg-emerald-500 text-white text-lg w-full py-4"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default shopmate;
