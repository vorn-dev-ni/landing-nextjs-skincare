import Wrapper from "@/app/components/Wrapper";
import React from "react";
import ContactList from "./ContactList";
import GetInTouch from "./GetInTouch";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
};
const page = () => {
  return (
    <main className="my-12">
      <Wrapper className="">
        <div className="block sm:grid sm:grid-cols-2 justify-center gap-2">
          <section className="">
            <h3 className="h4">Contact Info</h3>
            <ContactList />
          </section>

          <section>
            <h3 className="h4">Get in touch</h3>
            <GetInTouch />
          </section>
        </div>
      </Wrapper>
    </main>
  );
};

export default page;
