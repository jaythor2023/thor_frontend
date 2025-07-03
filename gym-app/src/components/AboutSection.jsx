import bg1  from "../assets/bike.svg";
import bg2 from "../assets/athelets.svg";
import bg3  from "../assets/walking.svg";
import bg4  from "../assets/workout.svg";

export default function AboutSection() {
  return (
    <section className="relative bg-gray-800 text-white py-10 flex items-center justify-center ">
      
      {/* Background SVGs */}
      <img  
        src={bg1}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-5 left-10 w-32 opacity-60"
      />
      <img
        src={bg2}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-40 opacity-60"
      />
      <img
        src={bg3}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-5 right-20 w-24 opacity-80"
      />
      <img
        src={bg4}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-20 w-28 opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          <span className="text-blue-500">Thor Fitness</span>
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          🏋️‍♂️ Established since <span className="font-semibold text-blue-400">2017</span>, Thor Fitness is committed to helping you reach your fitness goals in a professional and supportive environment.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          👩‍🏫 Our trainers are all <span className="font-semibold text-blue-400">Certified and Experienced</span>, including both female and male trainers to suit your preference.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          🧼 We maintain strict <span className="font-semibold text-blue-400">Hygiene and Cleanliness</span> standards to ensure a safe and comfortable workout experience.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          ⏰ Open daily from <span className="font-semibold text-blue-400">6 AM sharp until 10 PM</span>, providing training throughout the day.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          💪 Our training programs include <span className="font-semibold text-blue-400">Strength, Cardio, and Crossfit</span> to meet all your fitness needs.
        </p>
      </div>
    </section>
  );
}
