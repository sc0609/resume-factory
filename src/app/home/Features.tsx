import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free of Charge Forever",
    text: "The idea behind ResumeFactory was that everyone should be able to get a current, professional resume for free and without much trouble.",
  },
  {
    src: featureUSSrc,
    title: "Best Practices",
    text: "With its integrated best practices for the job market, ResumeFactory integrates seamlessly with leading applicant tracking systems like Greenhouse and Lever.",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy Focused",
    text: "ResumeFactory saves data locally in your browser so that you are the only one with access to it and total control.",
  },
  {
    src: featureOpenSourceSrc,
    title: "Open-Source",
    text: (
      <>
        Since ResumeFactory is an open-source project, anyone can access 
        its source code on its{" "}
        <Link href="https://github.com/sc0609/resume-factory">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  return (
    <section className="py-16 lg:py-36">
      <div className="mx-auto lg:max-w-4xl">
        <dl className="grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-16">
          {FEATURES.map(({ src, title, text }) => (
            <div className="px-2" key={title}>
              <div className="relative w-96 self-center pl-16">
                <dt className="text-2xl font-bold">
                  <Image
                    src={src}
                    className="absolute left-0 top-1 h-12 w-12"
                    alt="Feature icon"
                  />
                  {title}
                </dt>
                <dd className="mt-2">{text}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
