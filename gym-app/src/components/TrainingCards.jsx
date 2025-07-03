import { GiWeightLiftingUp, GiCrossedSwords, GiRunningShoe } from "react-icons/gi";

const trainings = [
  {
    id: 1,
    icon: <GiWeightLiftingUp className="text-blue-400 w-12 h-12 mx-auto mb-4" />,
    title: "Weightlifting",
    description:
      "Build strength and muscle mass with personalized weightlifting programs tailored to your goals.",
  },
  {
    id: 2,
    icon: <GiCrossedSwords className="text-green-400 w-12 h-12 mx-auto mb-4" />,
    title: "Crossfit",
    description:
      "High-intensity functional training to improve endurance, strength, and agility in a supportive group environment.",
  },
  {
    id: 3,
    icon: <GiRunningShoe className="text-red-400 w-12 h-12 mx-auto mb-4" />,
    title: "Cardio",
    description:
      "Boost your cardiovascular health with tailored cardio workouts including running, cycling, and more.",
  },
];

export default function TrainingCards() {
  return (
    <section className="bg-gray-800 text-white py-5 px-8 ">
      <div className="grid gap-8 md:grid-cols-3">
        {trainings.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-700 transition"
          >
            {icon}
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>

      <blockquote className="mt-12 text-center italic text-blue-400 font-semibold text-lg">
        “The only bad workout is the one that didn’t happen.”
      </blockquote>
    </section>
  );
}
