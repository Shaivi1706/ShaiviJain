import { LensDemo } from "../components/lensdemo";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-white text-black">
      <h1 className="text-4xl font-bold text-center pt-10">Projects</h1>
      <LensDemo />
    </div>
  );
}