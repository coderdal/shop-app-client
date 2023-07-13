import BannerLogo from "@/assets/banner-logo.png";

const Banner = () => {
  return (
    <div className="bg-green-500 w-full px-8 py-1 rounded-md flex justify-between items-center gap-2 max-md:flex-col max-md:py-6 max-md:gap-4">
      <div className="basis-2/3 text">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-wide max-md:text-3xl">
          Free Online Sales
        </h1>
        <p className="text-white text-lg mt-2 max-md:text-base">
          <strong>ErdalShop</strong>, online product listing service. Do you
          want to sell your products?
          <br />
          <span className="italic font-semibold">
            List and sell completely for free!
          </span>
        </p>
      </div>
      <div className="basis-1/3 flex justify-center">
        <img
          src={BannerLogo}
          alt="banner logo"
          className="max-w-[320px] max-h-[230px] max-sm:max-w-[260px] max-sm:max-h-[190px]"
        />
      </div>
    </div>
  );
};

export default Banner;
