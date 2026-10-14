import type { Metadata } from "next";
import { CtaBand, PageHero, Section } from "@/components/site/Bits";
import { galleriPage } from "@/lib/content";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: galleriPage.metaTitle,
  description: galleriPage.metaDescription,
  alternates: { canonical: "/galleri" },
};

export default function GalleriPage() {
  return (
    <>
      <PageHero {...galleriPage.hero} priority />

      <Section>
        <GalleryClient />
      </Section>

      <CtaBand />
    </>
  );
}
