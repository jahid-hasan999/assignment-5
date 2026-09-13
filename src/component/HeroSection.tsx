import banner from '../assets/banner-stack.png';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-10 flex flex-col-reverse gap-8 items-center md:flex-row md:justify-between">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-4 text-gray-600">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="btn btn-wide bg-gradient-to-r from-red-600 via-pink-600 to-purple-500 text-white border-none">
            Explore Technologies
          </button>

          <button className="btn btn-wide btn-outline">Learn More</button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img src={banner} alt="Development Stack" className="w-full max-w-md" />
      </div>
    </section>
  );
};

export default HeroSection;
