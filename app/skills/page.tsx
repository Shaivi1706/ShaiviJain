import { MeteorsDemo } from "../components/met";

export default function SkillsPage() {
  return (
    <div className="min-h-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center pt-10 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent drop-shadow-md tracking-wide animate-fade-in">
        <span className="inline-block mt-20 animate-glow">Skills</span>
      </h1>
      <MeteorsDemo />
    </div>
  );
}