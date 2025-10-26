import "./Dashboard.css";

function Dashboard() {
  return (
    <div class="bg-[#4b3b8f] text-white overflow-x-hidden leading-relaxed">
      {/* Page Container: Left sidebar + Main content */}
      <div class="flex min-h-screen">
        {/* Left Sidebar: History panel */}

        <aside class="w-64 bg-[#1f1f1f] p-4 flex flex-col">
          {/* Website name */}

          <div class="text-2xl font-bold mb-6">Quizbuzz</div>

          {/* History List */}

          <h3 class="text-lg font-semibold mb-3">History</h3>
          <ul class="flex flex-col gap-2 overflow-y-auto">
            <li class="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all">
              Quiz 1 - 80%
            </li>
            <li class="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all">
              Quiz 2 - 100%
            </li>
            <li class="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all">
              Quiz 3 - 60%
            </li>
            <li class="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all">
              Quiz 4 - 90%
            </li>
            <li class="bg-[#4b3b8f] px-3 py-2 rounded hover:bg-[#f9d835] hover:text-[#4b3b8f] cursor-pointer transition-all">
              Quiz 5 - 75%
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}

        <div class="flex-1 flex flex-col">
          {/* Navbar */}

          <header class="flex justify-end items-center px-[6%] py-4 flex-wrap anim-down">
            <nav class="hidden md:flex gap-6 mr-4">
              <a
                href="#"
                class="relative hover:text-[#f9d835] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f9d835] hover:after:w-full after:transition-all after:duration-300"
              >
                Discover Quiz
              </a>
              <a
                href="#"
                class="relative hover:text-[#f9d835] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f9d835] hover:after:w-full after:transition-all after:duration-300"
              >
                About
              </a>
              <a
                href="#"
                class="relative hover:text-[#f9d835] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f9d835] hover:after:w-full after:transition-all after:duration-300"
              >
                Feature
              </a>
              <a
                href="#"
                class="relative hover:text-[#f9d835] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#f9d835] hover:after:w-full after:transition-all after:duration-300"
              >
                Leaderboard
              </a>
            </nav>
            <div class="flex gap-4 mt-2 md:mt-0">
              <a
                href="#"
                class="px-4 py-2 rounded-md font-semibold border border-white text-white hover:bg-white hover:text-[#4b3b8f] transition-all duration-300"
              >
                Sign In
              </a>
              <a
                href="#"
                class="px-4 py-2 rounded-md font-semibold border border-white text-white hover:bg-[#f9d835] hover:text-[#4b3b8f] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </header>
          {/* Hero Section(Middle Part of the page with context) */}
          <section class="text-center px-[8%] py-16 anim-up">
            <h1 class="text-[#ffef5e] font-extrabold tracking-[3px] text-5xl md:text-6xl anim-bounce">
              QUIZ TIME!
            </h1>
            <h2 class="text-[#f9d835] text-2xl md:text-3xl my-4">
              Get Ready for an Exciting Quiz Adventure!
            </h2>
            <p class="max-w-2xl mx-auto mb-8 text-[#eaeaea] opacity-0 anim-fade text-base md:text-lg">
              Train your brain with smart, scientifically backed games that
              enhance various cognitive functions. Start improving your mental
              fitness with us today.
            </p>
            <a
              href="#"
              class="inline-block bg-[#f9d835] text-black font-semibold px-8 py-3 rounded-lg hover:scale-105 hover:bg-[#ffe43a] hover:shadow-lg transition-all duration-300"
            >
              Start Quiz
            </a>
          </section>
          {/* Category Section */}
          <section class="bg-white text-[#222] px-[8%] py-12 rounded-t-[30px] mt-12 anim-up">
            <h3 class="text-center text-2xl font-semibold mb-6">
              Select a category
            </h3>
            <div class="flex justify-center flex-wrap gap-4 mb-8">
              <select class="px-4 py-2 rounded-md border border-gray-300 text-base transition-transform hover:scale-105 hover:border-[#f9d835] focus:outline-none">
                <option>Popular Quiz</option>
                <option>Latest</option>
                <option>Top Rated</option>
              </select>
              <select class="px-4 py-2 rounded-md border border-gray-300 text-base transition-transform hover:scale-105 hover:border-[#f9d835] focus:outline-none">
                <option>All Categories</option>
                <option>Science</option>
                <option>Geography</option>
                <option>Math</option>
              </select>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 opacity-0 anim-fade">
              <div class="bg-[#f6f6f6] rounded-xl p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div class="text-4xl mb-4 anim-float">🔬</div>
                <h4 class="font-semibold text-lg">Science Technology</h4>
                <p>20 Quizzes</p>
              </div>
              <div class="bg-[#f6f6f6] rounded-xl p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div class="text-4xl mb-4 anim-float">🌍</div>
                <h4 class="font-semibold text-lg">Geography Quiz</h4>
                <p>20 Quizzes</p>
              </div>
              <div class="bg-[#f6f6f6] rounded-xl p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div class="text-4xl mb-4 anim-float">➗</div>
                <h4 class="font-semibold text-lg">Mathematics Quiz</h4>
                <p>20 Quizzes</p>
              </div>
              <div class="bg-[#f6f6f6] rounded-xl p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div class="text-4xl mb-4 anim-float">🎭</div>
                <h4 class="font-semibold text-lg">General Culture</h4>
                <p>20 Quizzes</p>
              </div>
              <div class="bg-[#f6f6f6] rounded-xl p-8 text-center hover:bg-[#f9d835] hover:text-black transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div class="text-4xl mb-4 anim-float">🖥</div>
                <h4 class="font-semibold text-lg">Computer Science</h4>
                <p>20 Quizzes</p>
              </div>
            </div>
          </section>
          {/* Footer Section */}
          <footer class="text-center py-6 text-gray-300 text-sm anim-fade">
            © 2025 Quezi. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
