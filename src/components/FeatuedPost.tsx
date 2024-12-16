
import Image from "next/image";

export default function FeaturedPost() {
  const posts = [
    {
      image: "/post1.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/post2.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/post3.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 flex flex-col">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 font-semibold uppercase">Practice Advice</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Posts
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-500">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Posts Section */}
      <div className="grid grid-cols-1 exsm:grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={`Post ${index + 1}`}
                width={348}
                height={300}
                className="w-full  object-cover"
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                New
              </span>
            </div>
            <div className="p-4 md:p-6 flex flex-col flex-grow">
              <p className="text-xs md:text-sm text-gray-500 mb-1">
                Google Trending New
              </p>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-gray-500">
                {post.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs md:text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                  </svg>
                  <span>{post.date}</span>
                  <span className="hidden exsm:block">|</span>
                  <span>{post.comments}</span>
                </div>
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
