import "./Dashboard.css";

function Dashboard() {
  return (
    <div className=" text-white min-h-screen overflow-x-hidden leading-relaxed">
      {/* Page Container */}
      <div className="bg-[#4b3b8f] flex flex-col md:flex-row min-h-screen mx-auto max-w-[1600px]">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-[#1f1f1f] p-4 flex-shrink-0 md:min-h-screen">
          <div className="text-2xl font-bold mb-4 text-center md:text-left">
            Quizbuzz
          </div>

          <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
            History
          </h3>
          <ul className="flex flex-wrap md:flex-col gap-2 justify-center md:justify-start overflow-y-auto max-h-[300px] md:max-h-none">
            {[
              "Quiz 1 - 80%",
              "Quiz 2 - 100%",
              "Quiz 3 - 60%",
              "Quiz 4 - 90%",
              "Quiz 5 - 75%",
            ].map((item, i) => (
              <li
                key={i}
                className="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all text-sm sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="flex flex-wrap justify-between md:justify-end items-center px-6 lg:px-16 py-4 border-b border-[#ffffff33]">
            <nav className="hidden md:flex gap-8 mr-6 text-base lg:text-lg">
              {["Discover Quiz", "About", "Feature", "Leaderboard"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="relative hover:text-[#f9d835] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f9d835] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex flex-wrap gap-3 mt-2 md:mt-0 justify-center">
              <a
                href="#"
                className="px-4 py-2 rounded-md font-semibold border border-white text-sm md:text-base hover:bg-white hover:text-[#4b3b8f] transition-all duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                className="px-4 py-2 rounded-md font-semibold border border-white text-sm md:text-base hover:bg-[#f9d835] hover:text-[#4b3b8f] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </header>

          {/* Hero */}
          <section className="text-center px-6 sm:px-12 lg:px-32 py-12 sm:py-16 lg:py-24 max-w-[1100px] mx-auto">
            <h1 className="text-[#ffef5e] font-extrabold tracking-[2px] text-4xl sm:text-6xl lg:text-7xl mb-2">
              QUIZ TIME!
            </h1>
            <h2 className="text-[#f9d835] text-xl sm:text-3xl lg:text-4xl my-3">
              Get Ready for an Exciting Quiz Adventure!
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-[#eaeaea] text-sm sm:text-lg lg:text-xl opacity-90">
              Train your brain with smart, scientifically backed games that
              enhance cognitive functions. Start improving your mental fitness
              today.
            </p>
            <a
              href="#"
              className="inline-block bg-[#f9d835] text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 hover:bg-[#ffe43a] hover:shadow-lg transition-all duration-300"
            >
              Start Quiz
            </a>
          </section>

          {/* Category */}
          <section className="bg-white text-[#222] px-6 sm:px-12 lg:px-24 py-10 rounded-t-[30px] mt-auto">
            <h3 className="text-center text-xl sm:text-2xl font-semibold mb-6">
              Select a category
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <select className="px-3 py-2 rounded-md border border-gray-300 text-sm md:text-base hover:border-[#f9d835] focus:outline-none">
                <option>Popular Quiz</option>
                <option>Latest</option>
                <option>Top Rated</option>
              </select>
              <select className="px-3 py-2 rounded-md border border-gray-300 text-sm md:text-base hover:border-[#f9d835] focus:outline-none">
                <option>All Categories</option>
                <option>Science</option>
                <option>Geography</option>
                <option>Math</option>
              </select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 max-w-[1300px] mx-auto">
              {[
                ["🔬", "Science Technology"],
                ["🌍", "Geography Quiz"],
                ["➗", "Mathematics Quiz"],
                ["🎭", "General Culture"],
                ["🖥", "Computer Science"],
              ].map(([icon, title], i) => (
                <div
                  key={i}
                  className="bg-[#f6f6f6] rounded-xl p-6 sm:p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="text-3xl sm:text-4xl mb-3">{icon}</div>
                  <h4 className="font-semibold text-sm sm:text-lg">{title}</h4>
                  <p className="text-xs sm:text-sm">20 Quizzes</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-6 text-gray-300 text-xs sm:text-sm">
            © 2025 Quizbuzz. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
