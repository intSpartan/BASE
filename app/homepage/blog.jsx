const blogPosts = [
    {
      title: "Mastering the Job Interview",
      excerpt: "Learn essential tips and tricks to ace your next job interview and land your dream position.",
      author: "Md Faizan",
      readTime: "5 min read",
      image: "https://career-intelligence.com/wp-content/uploads/2014/02/mastering-job-interview.jpg",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQGVs7QJSrWwEQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1727288810592?e=1733936400&v=beta&t=ssWDKQDM-M9PmcFKNaAOncWU3wRwGpiyUumjvXoFOxc"
    },
    {
      title: "The Future of Remote Work",
      excerpt: "Explore how remote work is shaping the future of employment and what it means for job seekers.",
      author: "Mayank Agarwal",
      readTime: "4 min read",
      image: "https://www.mckinsey.com/~/media/mckinsey/featured%20insights/future%20of%20organizations/whats%20next%20for%20remote%20work%20an%20analysis%20of%202000%20tasks%20800%20jobs%20and%20nine%20countries/mgi-remotework-hero-homepage-1536x1536-option1.png",
      avatar : "https://media.licdn.com/dms/image/v2/D4D03AQEm9oi1TdB8Kw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727618474390?e=1738800000&v=beta&t=g0O6lGjv2v0r_9LiTLoVOd8tliXteGukf3IhjwzktOs"
    },
    {
      title: "Building a Standout Resume",
      excerpt: "Discover key strategies to create a resume that catches the eye of recruiters and hiring managers.",
      author: "Rahul Jain",
      readTime: "6 min read",
      image: "https://motorcycleindustryjobs.ca/wp-content/uploads/2024/07/job-applicant-giving-his-resume-job-interview-office-Motorcycle-career-1118x471.jpg",
      avatar : "https://media.cnn.com/api/v1/images/stellar/prod/2024-11-19t112000z-427445120-rc2f4bazdq7j-rtrmadp-3-usa-trump-federal-workers.JPG?c=16x9&q=h_833,w_1480,c_fill"
    },
  ];
  
  export default function BlogSection() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Blogs</h2>
              <p className="text-xl text-gray-600">
                Explore education, career choices, and more through our insightful blogs.
              </p>
            </div>
            <button className="px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition-colors">
              View All
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  