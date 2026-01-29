import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Baby,
  BookOpen,
  GraduationCap,
  Calendar,
  MapPin,
  Utensils,
  Building,
  Laptop,
} from "lucide-react";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import feed1 from "../images/feed1.jpg";
import hero from "../images/hero.jpg";
import feed3 from "../images/feed3.jpg";
import pic7 from "../images/pic7.jpg";
import feed7 from "../images/feed7.jpg";

import washroomInfra from "../images/washroomInfra.jpg";
import orphaDonation from "../images/hero1.jpg";
import feed4 from "../images/feed4.jpg";
import whatWeDo from "../images/whatWeDo.jpg";
import nasikaImage from "../images/Nasika.jpeg";

const OurProjects: React.FC = () => {
  const completedProjects = [
    // {
    //   icon: Utensils,
    //   title: "Feed to Lead Program",
    //   description:
    //     "We built a sanitary kitchen and student cafeteria at Alogboshie Basic School where children can eat hot, nutritious meals in a dignified setting. This initiative addresses the critical issue that children cannot absorb knowledge on an empty stomach.",
    //   regions: "Alogboshie, Ghana",
    //   image: feed1,
    // },
    // {
    //   icon: Building,
    //   title: "Project Dignity",
    //   description:
    //     "We constructed dedicated restroom blocks and a teachers' office at Alogboshie Basic School. This initiative restores privacy and hygiene for students while providing teachers with a dedicated workspace for lesson planning and grading.",
    //   regions: "Alogboshie, Ghana",
    //   image: feed7,
    // },
    // {
    //   icon: Laptop,
    //   title: "The Digital Future",
    //   description:
    //     "We established a fully equipped computer lab with desktops and internet access at Alogboshie Basic School. This initiative gives students essential technical skills for the future and bridges the digital divide.",
    //   regions: "Alogboshie, Ghana",
    //   image: feed3,
    // },
    {
      icon: Heart,
      title: "Launch Event",
      description:
        "We launched in December 2025 with donations of food and school supplies to Alogboshie Basic School, including cultural performances, music, and a student talent showcase. This celebration brought the community together.",
      regions: "Alogboshie, Ghana",
      image: whatWeDo,
    },
    {
      icon: Users,
      title: "VivaLoks Partnership",
      description:
        "In partnership with VivaLoks, we fed thousand children and donated textbooks, exercise books, pens, and pencils. This collaboration demonstrates the power of partnership in creating lasting impact.",
      regions: "Alogboshie, Ghana",
      image: pic7,
    },
    {
      icon: Utensils,
      title: "Feed to Lead Program",
      description:
        "We implemented a comprehensive nutrition program to ensure children receive hot, nutritious meals daily. This initiative addresses the fundamental barrier to learning that hunger creates.",
      regions: "Alogboshie, Ghana",
      image: orphaDonation,
    },
    {
      icon: BookOpen,
      title: "Tools for Tomorrow",
      description:
        "We provided exercise books, pens, pencils, and nap mats to students at Alogboshie Basic School. This ensures children can focus on learning instead of missing resources.",
      regions: "Alogboshie, Ghana",
      image: hero,
    },
    {
      icon: GraduationCap,
      title: "Step Into Learning",
      description:
        "We provided school uniforms for every student and proper shoes to foster equality and school pride. This initiative encourages participation in extracurricular activities like soccer, building confidence and a sense of belonging.",
      regions: "Alogboshie, Ghana",
      image: feed4,
    },
    // {
    //   icon: Building,
    //   title: "Infrastructure Development",
    //   description:
    //     "We identified and addressed critical infrastructure needs including bathrooms, kitchen, teachers' office, computer lab, uniforms, and footwear. This comprehensive approach ensures a complete learning environment.",
    //   regions: "Alogboshie, Ghana",
    //   image: washroomInfra,
    // },
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Programs - Viva Hope Global Foundation | For a Brighter Tomorrow
        </title>
        <meta
          name="description"
          content="Discover the programs and initiatives implemented by VivaHope Foundation to restore dignity, opportunity, and hope for underserved children and youth through education, vocational skills training, nourishment, and sustainable development."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-neutral-900 h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Our <span className="text-primary-600">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the completed programs we've implemented to restore opportunity and improve learning outcomes for underserved children and ensure
              universal access to quality education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects */}
      <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Completed Programs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Educational initiatives that have made a difference in
                children's lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {completedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="relative w-full h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-xl flex-shrink-0">
                        <project.icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-primary-500">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.regions}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
      {/* Upcoming Projects */}
      {/* <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Upcoming Programs
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Planned educational initiatives to further our mission across
                the US and internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  date: "Ongoing",
                  title: "Expand to Additional Schools",
                  description:
                    "Plan to expand our programs to additional schools in Ghana and across Africa.",
                  icon: GraduationCap,
                },
                {
                  date: "Planned",
                  title: "Digital Learning Initiative",
                  description:
                    "Launch of comprehensive digital learning programs to bridge the technology gap.",
                  icon: Laptop,
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary-100 dark:bg-secondary-900 p-3 rounded-xl flex-shrink-0">
                      <project.icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <div className="flex items-center  mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                        <span className="font-medium text-primary-500">
                          {project.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation> */}

      {/* Regional Impact */}
      {/* <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600  mb-4">
                Our Reach
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Our commitment to delivering
                educational services.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Greater Accra",
                  "Central",
                  "Eastern",
                  "Western",
                  "Ashanti",
                  "Northern",
                  "Upper East",
                  "Upper West",
                  "Volta",
                  "Oti",
                  "North East",
                  "Savannah",
                  "Bono",
                  "Ahafo",
                  "Western North",
                ].map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-center p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg"
                  >
                    <MapPin className="w-5 h-5 text-secondary-600 dark:text-secondary-400 mx-auto mb-1" />
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {region}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  We have successfully visited all 16 regions of Ghana,
                  delivering healthcare services where they're needed most.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation> */}

      {/* Partnership Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Our Partnerships
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Collaborating with organizations to amplify our impact.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-primary-600 mb-4">
                Partnership with VivaLoks
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Collaborating to give students in underserved areas access to education under good conditions.
              </p>
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span className="text-primary-500">Ongoing Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurProjects;
