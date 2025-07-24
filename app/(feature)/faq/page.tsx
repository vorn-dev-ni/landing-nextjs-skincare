import Wrapper from "@/app/components/Wrapper";
import Faq1 from "./FQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};
const page = () => {
  return (
    <main className="my-12">
      <Wrapper>
        <Faq1 />
      </Wrapper>
    </main>
  );
};

export default page;
