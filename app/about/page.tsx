import React from "react";
import LandingNavigation from "@/components/LandingPage/LandingHeader/LandingNavigation";
const About = () => {
  return (
    <>
      <LandingNavigation />
      <div className="bg-secondary_light_color w-full pt-[6rem] h-[calc(100vh-74.3px)]">
        <section className="mb-8 w-[60%] mx-auto max-lg:w-[80%]">
          <div className="my-4">
            <h2 className="text-5xl font-bold mb-4 text-primary_dark_color">
              About Our Company
            </h2>
            <p className="text-tertiary_light_color tracking-widest text-2xl">
              Carefinder is a platform where users can search for hosiptals in
              their areas, export hospital details for your records and enhance
              your healthcare experience by connecting with others and sharing
              valuable resources.
            </p>

            <p className="text-tertiary_light_color tracking-widest text-2xl mt-4">
            Users can easily browse a comprehensive database of hospitals by entering their location or enabling GPS.Each hospital entry in the database provides extensive information, such as address, contact details etc. With these details at their fingertips, users can make informed decisions when selecting a hospital for their healthcare needs.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-5xl font-bold mb-4 text-primary_dark_color">
              Our Vision
            </h2>
            <p className="text-tertiary_light_color tracking-widest text-2xl">
            The primary goal of CareFinder is to empower users by equipping them with the necessary tools to make informed decisions regarding their healthcare needs. By doing so, CareFinder aims to enhance the overall healthcare experience for individuals, enabling them to take control of their health and well-being.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
