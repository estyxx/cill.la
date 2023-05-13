export default function Home() {
  return (
    <div className="container ">
      <div className="flex min-h-screen h-full">
        <div className="m-4 lg:m-auto ">
          <div className="max-w-5xl  ">
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
              <div className="grid items-center">
                <h1 className="text-8xl mb-14">
                  Hello, I&apos;m <span className=" text-red">Laila</span>
                </h1>
                <p className="text-2xl mb-6">
                  A seasoned professional with broad expertise in customer service,
                  logistics, and multilingual communication.
                </p>
                <p className="text-2xl mb-6">
                  My experience spans several countries, including France, Italy,
                  Germany, and beyond. With fluency in{" "}
                  <span className="font-bold text-red">English</span>,{" "}
                  <span className="font-bold text-red">French</span>,{" "}
                  <span className="font-bold text-red">German</span>, and a grasp of{" "}
                  <span className="font-bold text-red">Spanish</span>, I have deftly
                  handled translations and presentations, as well as logistics and
                  shipments.
                </p>
                <p className="text-2xl">
                  I&apos;m confident that my skills can greatly contribute to your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
