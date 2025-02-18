import Homepage from "@/components/Homepage";
import Image from "next/image";

export const metadata = {
  title: "Halaman Utama",
  description: "Deskripsi untuk halaman utama yang relevan dan menarik.",
  keywords: ["nextjs", "SEO", "tutorial", "web development"],
};

export default function Home() {
  return <Homepage />;
}
