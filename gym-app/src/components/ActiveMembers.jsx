import { useState, useEffect, useRef } from "react";

// Import your 4 images
import img1 from "../assets/work.jpg";
import img2 from "../assets/out.jpg";
import img3 from "../assets/tt.jpg";
import img4 from "../assets/ii.jpg";

const images = [img1, img2, img3, img4];

export default function ActiveMembers() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const textRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  const comments = [
    { id: 1, name: "Alice", comment: "Thor Fitness changed my life! The trainers are amazing and supportive." },
    { id: 2, name: "Bob", comment: "Love the variety of training options and the cleanliness here." },
    { id: 3, name: "Clara", comment: "Great gym hours, I can train early mornings and late nights!" },
    { id: 4, name: "Vlara", comment: "Highly motivating environment, especially during group sessions." },
    { id: 5, name: "John", comment: "Friendly staff and quality equipment — what more can you ask for?" },
    { id: 6, name: "Maya", comment: "I feel stronger every week, all thanks to my trainer!" },
    { id: 7, name: "Zoe", comment: "Finally found a gym that fits my schedule and my needs." },
    { id: 8, name: "Mike", comment: "Affordable memberships and great atmosphere." },
  ];

  // Rotate image every 20s
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(imgInterval);
  }, []);

  // Rotate comments every 8s (adjust as needed)
  useEffect(() => {
    const commentInterval = setInterval(() => {
      setCurrentCommentIndex((prev) => (prev + 4) % comments.length);
    }, 8000);
    return () => clearInterval(commentInterval);
  }, [comments.length]);

  // Track content height to size the image block
  useEffect(() => {
    if (textRef.current) {
      setContentHeight(`${textRef.current.offsetHeight}px`);
    }
  }, [textRef, currentCommentIndex]);

  // Slice 4 visible comments
  const visibleComments = comments.slice(
    currentCommentIndex,
    currentCommentIndex + 4
  ).length === 4
    ? comments.slice(currentCommentIndex, currentCommentIndex + 4)
    : [
        ...comments.slice(currentCommentIndex),
        ...comments.slice(0, 4 - (comments.length - currentCommentIndex))
      ];

  return (
    <section className="bg-gray-800 text-white py-16 px-8   flex flex-col md:flex-row  items-center">
      {/* Left Image */}
      <div className="md:w-1/3 w-full md:pr-4 flex justify-center md:justify-start">
        <img
          src={images[currentImageIndex]}
          alt={`Active Member Slide ${currentImageIndex + 1}`}
          className="rounded-lg shadow-lg object-cover w-full md:w-auto"
          style={{ height: contentHeight }}
        />
      </div>

      {/* Right Comments */}
      <div
        ref={textRef}
        className="md:w-2/3 flex flex-col justify-center space-y-6 text-center md:text-left"
      >
        <h3 className="text-3xl font-bold mb-4 text-center md:text-left">What Our Active Members Say</h3>
        {visibleComments.map(({ id, name, comment }) => (
          <blockquote
            key={id}
            className="bg-gray-900 p-6 rounded-lg italic border-l-4 border-blue-500 ml-[2px]"
          >
            <p className="mb-3">"{comment}"</p>
            <footer className="text-sm font-semibold">— {name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
