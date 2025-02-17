const Experience = () => {
    return (
      <section id="experience" className="py-12 bg-gray-100 relative top-[-60px]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">💼 Experience</h2>
  
          {/* Experience Card - Physics Wallah */}
          <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              Full-Stack Development Intern – Physics Wallah
              <span className="ml-2 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Internship
              </span>
            </h3>
            <p className="text-gray-600 mt-2">Dec 2024 - Present</p>
            <p className="mt-4 text-gray-700">
              Working on **fullstack development**, optimizing database queries, and integrating **React.js with Node.js** to build scalable applications. Handling **authentication, APIs, and performance optimization** for web applications.
            </p>
            <a className="text-blue-500" href="https://drive.google.com/file/d/1jHU1V7hnglDx5d1X86y4CPuDyCdxqkHx/view?usp=drivesdk">Offer letter</a>
          </div>
  
          {/* HackerRank Badge */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                Problem-Solving Badge – HackerRank
                <span className="ml-2 bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  3★ Badge
                </span>
              </h3>
              <p className="text-gray-600 mt-2">Awarded for problem-solving excellence</p>
              <p className="mt-4 text-gray-700">
                Achieved a **3-star rating** in **Problem-Solving** on HackerRank by solving **algorithmic challenges** and improving logical thinking skills.
              </p>
              <a className="text-blue-500" href="https://www.hackerrank.com/profile/prajapativikran1">Profile Link</a>
            </div>
            <img
              src="data:image/png;base64,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"
              alt="HackerRank Problem Solving Badge"
              className="w-16 h-16 ml-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  