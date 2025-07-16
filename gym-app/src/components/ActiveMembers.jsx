import { useState, useEffect, useRef } from "react";

// Import your 4 images
import thorcross from "../assets/thorcross.jpeg";
import thorcardio from "../assets/thorcardio.jpeg";
import thorbar from "../assets/thorbar.jpeg";
import img4 from "../assets/ii.jpg";

const images = [thorcross, thorcardio, thorbar, img4];

export default function ActiveMembers() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const textRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  const comments = [
    { id: 1, name: "Deepak Patil", comment: "This gym provides a great workout experience with a clean, well-maintained facility and a positive, supportive atmosphere. The equipments are good and the trainers are knowledgeable, ensuring a safe and effective training environment. Overall, frienndly Owner, staff and value added trainers with a fantastic gym that motivates you to achieve your fitness goals." },
    { id: 2, name: "Ananya Agrawal", comment: "Amazon amazing staff and work ethics. Their equipment is top notch! Would definitely recommend going there, especially women as their environment is pretty good." },
    { id: 3, name: "Shubham singh", comment: "There are altogether 4 trainers on the floor to help you all the time. Trainers are polite and ready to help and also free counselling sessions are held onece in two weeks that to one on one with the dietician.And they have a whole floor for weight Training and another floor for cross fit which was kind of unexpected because of the fee structure.Gym is damn good u should visit one!!" },
    { id: 4, name: "Sanket Deore", comment: "It's been more than 6 months I've been working out here. Based on my past experiences in other gyms I would like to say that this gym is a value for money if you want to make it so!Trainers are good, supportive and always motivational for each and every set you workout. Moreover there is Crossfit which is a unique plus point in this gym. I can do calisthenics exercises using the place provided.All in all it is value for money if you are passionate, deterministic and dedicated to your workout." },
    { id: 5, name: "Sandesh Kolhapure", comment: "Best GYM you can find in Nashik 😁 They have 6 trainer and Cross fit trainer. Very clean gym and big too ✌️." },
    { id: 6, name: "Pranav Deshpande", comment: "Best gym in the area. Huge floor area, brand new equipments covering all exercises for each muscle.Seperate spacious rooms for change for both gents and ladies.Brilliant sound system and a live environment with fresh lights all over the place." },
    { id: 7, name: "Bhagirath Choudhary", comment: "absolutely love the gym!!! The trainers are INCREDIBLY knowledgeable and have helped me achieve some pretty amazing results. They are always there to answer any questions I have and provide me not only with AMAZING workout plans but also with recipes of home-prepared balanced diets.It's the perfect place to get fit and have fun." },
    { id: 8, name: "Adwait Joshi", comment: "I absolutely love the gym!!! The trainers are INCREDIBLY knowledgeable and have helped me achieve some pretty amazing results. They are always there to answer any questions I have and provide me not only with AMAZING workout plans but also with recipes of home-prepared balanced diets.The other members are also really MOTIVATING and friendly. Everyone is there to work hard and push each other to do our best. It's like being part of a big fitness family.😄Some of my favorite FEATURES are the powerful air conditioning and music system. It definitely adds to the overall experience and makes my workouts even more enjoyable. Whether I'm lifting weights or doing cardio, the music really drives me to go harder and faster. The air-conditioner helps a lot in keeping the temperature optimum for the workout.Overall, I can't RECOMMEND this gym enough! It's the perfect place to get fit and have fun." },
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
