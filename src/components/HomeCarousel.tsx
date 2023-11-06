import Slider from "react-slick";

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings} className="">
        <div className="bg-red-600 h-screen max-h-[550px] relative">
          <div className="p-10 w-[80%] h-[90%] mx-auto flex flex-row items-center justify-between overflow-hidden text-white">
            <div className="w-2/5 overflow-hidden flex flex-col gap-3">
              <h3 className="text-3xl">New Arrival</h3>
              <h2 className="text-4xl font-bold overflow-hidden">
                Women's Fashion
              </h2>
              <p>Up to 25%</p>
              <button className="bg-white w-[150px] text-center p-3 text-black">
                SHOP NOW
              </button>
            </div>
            <div className="w-[50%] h-screen absolute bottom-0 left-[40%]">
              <img
                src="../../femaleFashion.png"
                alt="female fashion"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-600 h-screen max-h-[550px] relative">
          <div className="p-10 w-[80%] h-[90%] mx-auto flex flex-row items-center justify-between overflow-hidden text-white">
            <div className="w-2/5 overflow-hidden flex flex-col gap-3">
              <h3 className="text-3xl">New Trending</h3>
              <h2 className="text-4xl font-bold overflow-hidden">
                Men's Fashion
              </h2>
              <p>Up to 35%</p>
              <button className="bg-white w-[150px] text-center p-3 text-black">
                SHOP NOW
              </button>
            </div>
            <div className="w-[60%] h-screen absolute bottom-0 left-[50%]">
              <img
                src="../../maleFashion.png"
                alt="female fashion"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 h-screen max-h-[550px] relative">
          <div className="p-10 w-[80%] h-[90%] mx-auto flex flex-row items-center justify-between overflow-hidden text-black">
            <div className="w-2/5 overflow-hidden flex flex-col gap-3">
              <h3 className="text-3xl">New Trending</h3>
              <h2 className="text-4xl font-bold overflow-hidden">
                Kid's Fashion
              </h2>
              <p>Discount Up to 25%</p>
              <button className="bg-white w-[150px] text-center p-3 text-black">
                SHOP NOW
              </button>
            </div>
            <div className="w-[50%] h-screen absolute bottom-0 left-[40%]">
              <img
                src="../../childrenFashion.png"
                alt="female fashion"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-green-600 h-screen max-h-[550px] relative">
          <div className="p-10 w-[80%] h-[90%] mx-auto flex flex-row items-center justify-between overflow-hidden text-white">
            <div className="w-2/5 overflow-hidden flex flex-col gap-3">
              <h3 className="text-3xl">New Trending</h3>
              <h2 className="text-4xl font-bold overflow-hidden">
                Home Furniture
              </h2>
              <p>Discount Up to 25%</p>
              <button className="bg-white w-[150px] text-center p-3 text-black">
                SHOP NOW
              </button>
            </div>
            <div className="w-[50%] h-screen absolute bottom-0 left-[40%]">
              <img
                src="../../furniture.png"
                alt="female fashion"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-purple-600 h-screen max-h-[550px] relative">
          <div className="p-10 w-[80%] h-[90%] mx-auto flex flex-row items-center justify-between overflow-hidden text-white">
            <div className="w-2/5 overflow-hidden flex flex-col gap-3">
              <h3 className="text-3xl">New Trending</h3>
              <h2 className="text-4xl font-bold overflow-hidden">
                Electronic Appliances
              </h2>
              <p>Discount Up to 25%</p>
              <button className="bg-white w-[150px] text-center p-3 text-black">
                SHOP NOW
              </button>
            </div>
            <div className="w-[50%] h-screen absolute bottom-0 left-[50%]">
              <img
                src="../../appliances.png"
                alt="female fashion"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
