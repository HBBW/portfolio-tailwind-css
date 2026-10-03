import { SKILLS } from "../lib/data.js";

export default function Marquee() {
  const row = [...SKILLS, ...SKILLS];

  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-line bg-coal/40 py-6">
      <div className="marquee-track flex w-max animate-marquee items-center">
        {row.map((skill, index) => (
          <span key={`${skill}-${index}`} className="flex items-center">
            <span className="px-6 font-display text-lg font-medium text-white/60">
              {skill}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
