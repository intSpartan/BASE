
  const testimonials = [
    {
      body: "I can't thank Interview Buddy enough for the personalized guidance it provided me. The platform's tailored tips and improvement suggestions were instrumental in refining my coding techniques. I appreciated how the platform recognized my strengths and weaknesses, allowing me to focus my efforts efficiently. Interview Buddy truly personalized my preparation journey.",
      author: {
        name: 'Joshua Bharathi',
        handle: 'BlitzJB',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      body: "Interview Buddy's flexibility and accessibility made all the difference in my interview preparation. Being able to practice coding questions anytime, anywhere, was incredibly convenient. Whether I was commuting or taking a break, I could easily access the platform and sharpen my skills. Interview Buddy truly accommodated my busy schedule, allowing me to prepare effectively on my terms",
      author: {
        name: 'Jayashree',
        handle: 'jyce',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        body: "Interview Buddy has truly transformed my approach to technical interviews. The interactive practice sessions allowed me to hone my problem-solving skills effectively. Thanks to the real-time feedback, I gained invaluable insights into optimizing my solutions. With Interview Buddy, I approached interviews with confidence and excelled!",
        author: {
          name: 'Priya',
          handle: 'theperiperi',
          imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
      },
      {
        body: "Interview Buddy's real-time feedback feature was a game-changer for me. As I tackled coding challenges, the platform provided immediate feedback on my solutions, pinpointing areas for improvement and offering helpful suggestions. This instant feedback loop allowed me to iterate quickly, refine my approach, and ultimately, excel in my technical interviews.",
        author: {
          name: 'Aditya A',
          handle: 'nigboi',
          imageUrl:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
      },
      

  ]
  
export default function TestimonialSection() {
    return (
      <div id="testimonials" className="bg-indigo-50 py-24 sm:py-16">
        <div className="mx-24 max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="text-center pr-5 lg:text-left mb-16 lg:mb-0">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
            <p className="mt-2 w-80 text-7xl font-bold text-gray-900 sm:text-4xl">
              People benefited from Interview Buddy share their thoughts
            </p>
          </div>
          <div className="pl-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="flex flex-wrap justify-end">
                <figure className="flex flex-wrap bg-indigo-50 p-6 text-sm leading-6 border border-gray-200 rounded-lg shadow-md transition duration-200 ease-in-out">
                  <blockquote className="text-gray-900">
                    <p className="font-semilight">{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-2 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }