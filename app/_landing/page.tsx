import Wrapper from "../components/Wrapper";
import Benefit from "./benefit/Benefit";
import Social from "./bottom/Social";
import BottomCTA from "./cta/BottomCTA";
import CleanFeature from "./cta/CleanFeature";
import ScrubFeatures from "./cta/ScrubFeature";
import FeatureProduct from "./features/FeatureProduct";
import HottestProduct from "./features/HottestProduct";
import MySwiper from "./hero/Carousel";

const LandingPage = () => {
  return (
    <section className="w-full ">
      <MySwiper />
      <Wrapper>
        <HottestProduct />
      </Wrapper>

      <Wrapper>
        <Benefit />
      </Wrapper>

      <div className=" ">
        <Wrapper>
          <CleanFeature />
        </Wrapper>
      </div>
      <div className="">
        <Wrapper>
          <ScrubFeatures />
        </Wrapper>
      </div>

      <Wrapper>
        <FeatureProduct />
      </Wrapper>
      <Wrapper>
        <BottomCTA />
      </Wrapper>
      <Social />
    </section>
  );
};

export default LandingPage;
