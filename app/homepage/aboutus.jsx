const teamMembers = [
  {
    name: "Elon Musk",
    role: "Founder",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/2024-11-19t112000z-427445120-rc2f4bazdq7j-rtrmadp-3-usa-trump-federal-workers.JPG?c=16x9&q=h_833,w_1480,c_fill",
    bio: "Elon Musk is our visionary founder whose passion and experience drive our operations. As a seasoned entrepreneur with a history of success in the education technology sector, he brings his relentless energy and innovative spirit to our team.",
  },
  {
    name: "Sparsh Tandon",
    role: "Founder",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFlxpVkDIymLw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1701613355118?e=1738800000&v=beta&t=QwL2fPlpge3knZ61fu2ia2K0YtNbygecHH3GF_8An0g",
    bio: "Sparsh Tandon is our dynamic founder and marketing genius. His years of experience in the education industry, coupled with his natural flair for sales, makes him an invaluable asset to our team. Sparsh is the driving force behind our marketing strategies.",
  },
];

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At JoBro, we're dedicated to revolutionizing the job search and recruitment process. Our platform offers a seamless experience for both applicants and companies, providing a user-friendly interface to navigate through job openings, assessments, interviews, and more.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-center text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

