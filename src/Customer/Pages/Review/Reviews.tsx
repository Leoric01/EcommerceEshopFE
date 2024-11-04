import ReviewCard from "./ReviewCard";
import Divider from "@mui/material/Divider";

const Reviews = () => {
  return (
    <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-20">
      <section className="w-full md:w-1/2 lg:w-[30%] space-y-2">
        <img
          src="https://images.pexels.com/photos/28981974/pexels-photo-28981974/free-photo-of-sheida-bio-peeling-mask-in-natural-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="commercial lotion cream"
        />
        <div className="">
          <div className="">
            <p className="font-bold text-xl">Derma Shop</p>
            <p className="text-lg text-gray-400">Womens facial cream</p>
          </div>
          <div className="">
            <div className="price flex items-center gap-3 mt-5 text-xl">
              <span className="font-semibold text-gray-800">400 €</span>
              <span className="line-through text-gray-400">999 €</span>
              <span className="text-primary-custom font-semibold">60%</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:w-[60%] space-y-4">
        {[1, 1, 1, 1, 1].map((item) => (
          <>
            <ReviewCard />
            <Divider />
          </>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
