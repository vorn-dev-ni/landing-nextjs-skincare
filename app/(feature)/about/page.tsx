import { Button } from "@/components/ui/button";
import Wrapper from "../../components/Wrapper";
import Image from "next/image";
import { Metadata } from "next";
import { FB_LINK } from "@/utils/constant";
import { Link } from "lucide-react";
export const metadata: Metadata = {
  title: "About",
};
const Page = () => {
  return (
    <Wrapper className="my-20">
      <div className="block sm:grid sm:grid-cols-2  w-full gap-4 mb-64">
        {/* Image Side  */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Decorative diagonal lines */}
          <div className="absolute left-0 top-0 w-full h-full z-0">
            <div className="absolute left-[-50px] top-[100px] w-[300px] h-[300px] bg-blue-100 rotate-[-45deg] opacity-20 rounded-full"></div>
          </div>
          <div className="absolute left-0 top-0 w-full h-full z-[-1]">
            <div className="absolute right-[-50px] top-[300px] w-[300px] h-[300px] bg-blue-100 rotate-[-45deg] opacity-20 rounded-full"></div>
          </div>

          {/* Background Image */}
          <div className="relative z-10 w-[70%] mx-auto">
            <Image
              src="https://plus.unsplash.com/premium_photo-1679046948909-ab47e96082e7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hands with flowers"
              width={600}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full h-auto left-0"
            />
          </div>

          {/* Foreground Image (overlapping) */}
          <div className="absolute right-8 z-20 w-[40%] max-w-md bottom-[-100]">
            <Image
              src="https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Woman in flower bath"
              width={400}
              height={400}
              className="rounded-xl shadow-sm object-cover w-full h-auto border-4 border-white"
            />
          </div>
        </div>

        {/* Content Side  */}

        <div className="right my-18 sm:my-0 space-y-4">
          <h3 className="h5 font-normal">
            ABOUT <span className="text-primary-400">EXLIR</span>
          </h3>

          <h4 className="h3 max-w-lg">
            When You Look Good{" "}
            <span className="text-primary-400">You Feel Good</span>
          </h4>

          <p>
            The top three occupations in the Beauty salons Industry Group are
            Hairdressers, hairstylists, & cosmetologists, Manicurists and
            pedicurists, Receptionists & information clerks, Supervisors of
            personal care and service workers, and Skincare specialists.
          </p>
          <Link href={FB_LINK} target="_blank">
            <Button className="hover:cursor-pointer">Shop Now</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
