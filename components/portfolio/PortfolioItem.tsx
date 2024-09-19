import Image from "next/image";
import SectionSubTitle from "../SectionSubTitle";
import Link from "next/link";

const PortfolioItem = ({ item }: { item: any }) => {
  return (
    <div>
      <SectionSubTitle title={item.title} />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="overflow-hidden rounded-t-xl border-2 border-gray-900 h-fit">
          <div className="h-5 bg-gray-700 sticky z-10">
            <h2 className="text-center text-gray-100 text-sm">Home page</h2>
          </div>

          <div className="relative  w-[400px] h-[350px] lg:w-[400px] lg:h-[370px] transition-transform duration-2000 ease-linear hover:-translate-y-full">
            <Image src={item.img} alt="" fill className="" />
          </div>
        </div>
        <div className="overflow-hidden rounded-t-xl border-2 border-gray-900">
          <div className="h-5 bg-gray-700 sticky z-10">
            <h2 className="text-center text-gray-100 text-sm">Dashboard</h2>
          </div>

          <div className="relative  w-[400px] h-[350px] lg:w-[400px] lg:h-[370px] transition-transform duration-2000 ease-linear hover:-translate-y-full">
            <Image src={item.img} alt="" fill className="" />
          </div>
        </div>
        <div className="overflow-hidden rounded-t-xl">
          <div className="h-5 bg-gray-700">
            <h2 className="text-center text-gray-100 text-sm">Features</h2>
          </div>
          <div className="flex flex-col justify-between h-full pb-5">
            <div className="flex flex-col gap-2  items-start">
              <p>feature</p>
              <p>feature</p>
              <p>feature</p>
              <p>feature</p>
              <p>feature</p>
              <p>feature</p>
            </div>
            <div className="flex gap-5">
              <Link href={item?.link}>
                <button className="px-4 py-2 rounded-md  bg-gray-700 hover:bg-gray-800">
                  See Demo
                </button>
              </Link>
              <Link href={item?.link}>
                <button className="px-4 py-2 rounded-md  bg-gray-700 hover:bg-gray-800">
                  Visit Github
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
