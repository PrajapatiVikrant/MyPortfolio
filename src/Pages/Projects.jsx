const projects = [
    {
      title: "Social Media App",
      description:
        "A social media platform with authentication, connections, posts, comments, likes, and real-time chat.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "https://vikrant-socialmedia-frontend.vercel.app",
      demoLink: "https://www.linkedin.com/posts/vikrantprajapati_i-have-updated-my-socialmedia-project-activity-7220008967224086528-yvBp/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Watch Store",
      description:
        "An e-commerce application with product filtering, favorite lists, cart management, payment gateway",
      tech: ["Next.js", "Express.js", "MongoDB"],
      liveLink: "https://ecomerce-blue-two.vercel.app/",
      demoLink: "https://ecomerce-blue-two.vercel.app/",
    },
    {
      title: "Meesho Clone",
      description:
        "An e-commerce application(meesho clone) with product filtering, favorite lists, cart management, order tracking, order management",
      tech: ["React.js", "Express.js", "MongoDB"],
      liveLink: "https://my-meesho-frontend.vercel.app/",
      demoLink: "https://www.linkedin.com/posts/vikrantprajapati_i-have-created-shopping-cart-activity-7201919365670211585-e-Bq/?utm_source=share&utm_medium=member_android",
    },
    {
      title: "File Management",
      description: "File management system provide functionality to add,delete,edit,read data with file name",
      tech: ["React.js", "Node.js", "Mongodb"],
      liveLink: "https://text-editor-vikrant.vercel.app/",
      demoLink: "https://www.linkedin.com/posts/vikrantprajapati_i-have-created-file-management-system-activity-7201896160947572736-dJiu/?utm_source=share&utm_medium=member_android"
    },
    {
      title: "Time Shipping System",
      description:
        "A project management system for employees to submit work details and managers to track progress.",
      tech: ["React.js", "Node.js", "MongoDB"],
      liveLink: "https://time-shipping-frontend.vercel.app",
      demoLink: "https://www.linkedin.com/posts/vikrantprajapati_i-have-created-timeshipping-system-activity-7201945227203387392-Hfsc/?utm_source=share&utm_medium=member_android",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="mt-[-60px] py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">🚀 My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    
                   Demo Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  