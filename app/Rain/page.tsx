import Rain from "@/components/Rain/Rain";

export const metadata = {
  title: "Rain Test",
  description: "Rain"
}

export default function ProjectHome() {
  return (
    <div className="px-5 py-5">
      <Rain/>
    </div>
  );
}
