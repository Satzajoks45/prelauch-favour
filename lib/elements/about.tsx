import React from "react";
import { Container } from "../layouts";

type Props = {};

const about = (props: Props) => {
  return (
    <section className="py-10">
      <Container className="flex flex-col items-center">
        <h2 className="text-center md:text-start text-2xl font-bold capitalize">
          About Us
        </h2>
        <p className="text-center md:text-start text-base font-semibold mt-10">
          <span>
            KOMAS500, a leading E-commerce innovation is dedicated to offering
            the finest quality products from a diverse range of top-notch brands
            and ensuring customers access excellence at affordable prices. With
            strategically located pick-up centers nationwide, KOMAS500 ensures
            convenience is at the forefront of the customer experience.
          </span>

          <br />

          <span className="mt-3">
            Distinguished by its dedication to efficient logistics, KOMAS500
            manages its delivery services, guaranteeing swift and reliable
            transportation of goods. We manage our inventories hence,
            guaranteeing our customers the product quality they desire. Beyond
            being a shopping destination, KOMAS500 believes in empowerment,
            offering opportunities for individuals to become shopping
            assistants, requiring minimal qualifications and providing a chance
            for financial freedom. KOMAS500 is not just an E-commerce platform.
            It's a commitment to quality, convenience and empowerment.
          </span>
        </p>
      </Container>
    </section>
  );
};

export default about;
