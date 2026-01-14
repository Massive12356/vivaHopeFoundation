import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Target, Award } from "lucide-react";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import ceo from "../images/ceo.jpg";
import pic1 from "../images/57.webp";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/62.jpg";
import pic6 from "../images/63.jpg";
import pic7 from "../images/pic7.jpg";

const AboutUs: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          About Us - Viva Hope Global Foundation | Education for Underserved
          Children
        </title>
        <meta
          name="description"
          content="Learn about Viva Hope Global Foundation's mission to bridge the gap between global resources and local needs for underserved children. We eliminate barriers to education by providing nutritious meals, safe sanitation, functional classrooms, access to technology, uniforms, footwear, and essential learning materials."
        />
      </Helmet>

      {/* Hero Section */}

      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-neutral-800 h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-snug md:leading-snug lg:leading-none mb-4">
              Restoring Dignity and <br />
              <span className="text-primary-600">Opportunity to Children</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Founded in 2025 by Patience Odikah, Viva Hope Global Foundation is
              dedicated to restoring dignity, opportunity, and hope for children in
              underserved communities. Inspired by her own experiences carrying desks
              to school and witnessing classmates struggle with hunger, lack of
              uniforms, and limited learning resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 0.98 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-primary-100 dark:bg-primary-900 p-4 rounded-xl w-fit mb-6">
                  <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To bridge the gap between global resources and local needs for underserved children. Viva Hope Global Foundation eliminates barriers to education by providing nutritious meals, safe sanitation, functional classrooms, access to technology, uniforms, footwear, and essential learning materials—ensuring that every child can learn with dignity and opportunity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 0.98 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-secondary-100 dark:bg-secondary-900 p-4 rounded-xl w-fit mb-6">
                  <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A world where a child's birthplace does not determine their future—where every student attends school with dignity, nutrition, and the tools they need to become a leader.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Story */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    Founded in 2025 by Patience Odikah, who grew up in Alogboshie, Ghana, Viva Hope Global Foundation is a non-profit charity and humanitarian foundation dedicated to restoring dignity, opportunity, and hope for children in underserved communities. Inspired by her own experiences carrying desks to school and witnessing classmates struggle with hunger, lack of uniforms, and limited learning resources, Patience launched the foundation to create lasting change both in her hometown and abroad.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                    In partnership with VivaLoks, we fed thousand children and donated textbooks, exercise books, pens, and pencils. Launched in December 2025 with donations of food and school supplies to Alogboshie Basic School, including cultural performances, music, and a student talent showcase.
                  </p>
                </div>
              </div>

              <div className="relative w-full max-w-md mx-auto">
                <img
                  src={ceo}
                  alt="Viva Hope Global Foundation team members working with students in a rural community"
                  className="rounded-2xl shadow-xl w-full h-74 object-cover"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Our Goals */}
      <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Our Goals and Objectives
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Working towards sustainable development goal 4 (SDG 4) and
                beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Build sanitary kitchens and student cafeterias to provide nutritious meals for students",
                "Construct dedicated restroom blocks to restore privacy and hygiene",
                "Build teachers' offices for lesson planning and grading",
                "Renovate classrooms by repairing leaking roofs and installing fans to improve learning conditions",
                "Establish fully equipped computer labs with desktops and internet access",
                "Provide exercise books, pens, pencils, and nap mats for younger students",
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
                >
                  <div className="bg-secondary-100 dark:bg-secondary-900 p-2 rounded-lg">
                    <div className="w-6 h-6 text-secondary-600 dark:text-secondary-400 font-bold text-center">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section id="team" className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Meet Our Founder
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Experienced professionals passionate about transforming
                education in Ghana and beyond.
              </p>
            </div>

            {/* CEO Section */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg text-center overflow-hidden max-w-sm"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#987543]/20">
                  <img
                    src={ceo}
                    alt="Patience Odikah - Founder of Viva Hope Global Foundation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Patience Odikah
                </h3>
                <div className="text-primary-500 font-medium mb-3">
                  Founder
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Passionate advocate for children's education with firsthand
                  experience of the challenges faced by underserved communities.
                  Grew up in Alogboshie, Ghana, and is committed to creating lasting
                  change for children both in her hometown and abroad.
                </p>
              </motion.div>
            </div>


          </div>
        </section>
      </ScrollAnimation>

      {/* Recognition & Awards */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                The principles that guide our commitment to transforming
                education for children.
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  value: "Dignity",
                  description:
                    "Every child deserves respect and safe learning environments.",
                  image: pic7,
                },
                {
                  value: "Empathy",
                  description:
                    "We listen and respond to the real needs of children and teachers.",
                  image: pic4,
                },
                {
                  value: "Advocacy",
                  description:
                    "Speaking up for those whose voices are unheard.",
                  image: pic2,
                },
                {
                  value: "Bridge-Building",
                  description:
                    "Connecting global resources to local communities to create lasting impact.",
                  image: pic3,
                },
              ].map((coreValue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/2 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center p-4">
                    <img
                      src={coreValue.image}
                      alt={`${coreValue.value} value image`}
                      className="w-full h-auto max-h-96 object-contain rounded-xl"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <div className="bg-secondary-100 dark:bg-secondary-900/20 p-3 rounded-xl">
                        <Award className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-500 mb-4">
                      {coreValue.value}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                      {coreValue.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default AboutUs;
