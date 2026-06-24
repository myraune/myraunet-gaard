import type { Metadata } from "next";
import FamiliebedriftenClient from "./FamiliebedriftenClient";

export const metadata: Metadata = {
  title: "Familiebedriften",
  description:
    "Slekten Myraune driver Myraunet Gård på Frosta. Hanne og Gustav startet RÅGO (Trondheims Kjøkkenhage AS) i 2014. Les om gården, familien og RÅGO.",
  alternates: { canonical: "/familiebedriften" },
  openGraph: {
    title: "Familiebedriften | Myraunet Gård",
    description:
      "Slekten Myraune driver Myraunet Gård på Frosta. Hanne og Gustav startet RÅGO (Trondheims Kjøkkenhage AS) i 2014.",
    url: "/familiebedriften",
    images: ["/lovable-uploads/hanne-gustav-vegetables.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Familiebedriften | Myraunet Gård",
    description:
      "Slekten Myraune driver Myraunet Gård på Frosta. Hanne og Gustav startet RÅGO (Trondheims Kjøkkenhage AS) i 2014.",
    images: ["/lovable-uploads/hanne-gustav-vegetables.jpeg"],
  },
};

export default function Page() {
  return <FamiliebedriftenClient />;
}
