import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Heart, Award, MapPin, Calendar, BookOpen, GraduationCap, Utensils, Building, Laptop } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollAnimation } from '../hooks/useScrollAnimation';
import hero from '../images/hero.jpg'
import hero1 from '../images/hero1.jpg'
import whatWeDo from '../images/whatWeDo.jpg'
import nasikaImage from '../images/Nasika.jpeg';
import AnimatedCount from '../lib/AnimateCount';
import { Link } from 'react-router-dom';
import Popup from '../components/Popup';

const slides = [
  {
    id: 1,
    image: hero,
    title: "Education for Underserved Children",
    highlight: "Underserved Children",
    description:
      "VivaHope Foundation restores dignity, opportunity, and hope for underserved children by removing barriers to education through nourishment, safe learning environments, and skills for the future.",
    buttonText: "Support Our Mission",
    buttonLink: "get-involved",
  },
  {
    id: 2,
    image: hero1,
    title: "Empowering Local Communities",
    highlight: "Local Communities",
    description:
      "We work directly with communities to improve access to essential education services and programs.",
    buttonText: "Learn About Our Work",
    buttonLink: "our-projects",
  },
];


const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  // const [showPopup, setShowPopup] = React.useState(true);

  // Auto-slide every 8 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} /> */}
      
      <Helmet>
        <title>
          VivaHope Foundation - For a Brighter Tomorrow
        </title>
        <meta
          name="description"
          content="Learn about VivaHope Foundation’s mission to restore dignity, opportunity, and hope for underserved children and youth through education, vocational skills training, nourishment, and sustainable development."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden h-screen">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Centered Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                  <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  >
                    {slide.title
                      .split(slide.highlight)
                      .map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                          {part}
                          {idx < arr.length - 1 && (
                            <span className="text-primary-400">
                              <br /> {slide.highlight}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-white mb-8 max-w-2xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Link to={slide.buttonLink}>
                      <Button
                        size="lg"
                        variant='home'
                        icon={Heart}
                        iconPosition="right"
                        
                      >
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </section>

      {/* Mission Statement Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our <span className="text-primary-600">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Empowering underserved children and youth through education, vocational skills training, nourishment, confidence, opportunity, and sustainable futures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Community Focus",
                  description:
                    "We work directly with local communities to understand their unique educational needs and challenges.",
                },
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description:
                    "Our programs prioritize student-centered learning and holistic educational outcomes.",
                },
                {
                  icon: MapPin,
                  title: "Global Reach",
                  description:
                    "We serve communities locally and internationally, beginning in Ghana and expanding through partnerships and sustainable programs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-neutral-900 rounded-xl shadow-md"
                >
                  <item.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* What We Do Section */}
      <ScrollAnimation>
        <section className="py-20  dark:bg-neutral-900 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our comprehensive approach addresses key educational challenges
                in underserved communities both in the US and internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                      title: "Feed to Lead (Nutrition & Dining)",
                      description:
                        "Providing hot, nutritious meals through sanitary kitchens and student cafeterias, helping children stay focused, healthy, and ready to learn.",
                    },
                    {
                      title: "Project Dignity (Sanitation & Infrastructure)",
                      description:
                        "Improving learning environments by building safe restroom facilities, teachers’ offices, and renovating classrooms for comfort and dignity.",
                    },
                    {
                      title: "The Digital Future (Technology)",
                      description:
                        "Equipping schools with computer labs and internet access to help students develop essential digital and technical skills for the future.",
                    },
                    {
                      title: "Tools for Tomorrow (Supplies)",
                      description:
                        "Providing essential learning supplies such as exercise books, pens, pencils, and nap mats so children can fully participate in class.",
                    },
                    {
                      title: "Step Into Learning (Uniforms & Footwear)",
                      description:
                        "Supplying school uniforms and proper footwear to promote equality, restore dignity, and ensure children feel confident and included.",
                    },
                    {
                      title: "VivaSkills (Vocational Training)",
                      description:
                        "Offering hands-on vocational training in cosmetics and hairstyling to build practical skills, confidence, and pathways to economic independence.",
                    },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary-500 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="relative">
                <img
                  src={whatWeDo}
                  alt="Image of donators carrying donation items."
                  className="rounded-2xl shadow-xl w-full h-[520px] object-cover"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Impact Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold  text-primary-600 mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Making a difference in communities across the US and internationally, starting in Ghana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stat: "1,000+",
                  label: "Children Fed",
                },
                {
                  stat: "50+",
                  label: "School Supplies Donated",
                },
                {
                  stat: "1",
                  label: "Countries Served",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary-500 mb-2">
                    <AnimatedCount value={item.stat} />
                  </div>

                  <div className="text-lg text-gray-600 dark:text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-bold text-primary-500">
                  Community Impact Story
                </h3>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-300 text-center mb-6 italic">
                "Thanks to VivaHope Foundation, our children now
                have access to nutritious meals and essential learning materials. The difference has been life-changing. Attendance has improved, students are more focused, and parents feel hopeful again."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  School Principal
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  Alogboshie Basic School, Ghana
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Upcoming Events */}
      {/* <ScrollAnimation>
        <section className="py-20 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Join us in our upcoming educational initiatives across the US and internationally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  date: "December 2025",
                  title: "Launch in Alogboshie",
                  description:
                    "Launch in December 2025 with donations of food and school supplies to Alogboshie Basic School, including cultural performances, music, and a student talent showcase.",
                },
                {
                  date: "Ongoing",
                  title: "Build Infrastructure",
                  description:
                    "Building bathrooms, kitchen, teachers' office, computer lab, uniforms, and footwear.",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center text-primary-500 mb-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation> */}

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Transforming Education
            </h2>
            <p className="text-xl mb-2 opacity-90">
              Every child deserves dignity, education, and opportunity.
            </p>

            <p className="text-xl mb-8 opacity-90">
              Your support can help us reach more children in need across
              the US and internationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/about-us"}>
                <Button
                  size="lg"
                  icon={Heart}
                  iconPosition="right"
                  aria-label="Donate to support our mission"
                >
                  Our Story
                </Button>
              </Link>

              <Link to={"/get-involved"}>
                <Button
                  size="lg"
                  variant="primary"
                  aria-label="Learn how to get involved"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default Home;