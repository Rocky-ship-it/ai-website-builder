import Hero from "@/components/custom/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Hero />
        {/* Footer text */}
      <p className="text-center text-sm text-gray-500 mt-4">
        © 2025 ROCKYZEN — Built by Radhakrishnan V
      </p>
    </div>
  );
}
