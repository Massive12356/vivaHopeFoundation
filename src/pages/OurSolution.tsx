import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  BookOpen,
  GraduationCap,
  Calendar,
  Utensils,
  Target,
  Award,
  Globe,
  MapPin,
  CheckCircle,
  Briefcase,
  Sparkles,
  Shield,
  TrendingUp,
  UserCheck,
  Brain,
  DollarSign,
  MessageCircle,
} from "lucide-react";
import { ScrollAnimation } from "../hooks/useScrollAnimation";
import orphaDonation from "../images/hero1.jpg";
import feed4 from "../images/feed4.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import ceo from "../images/ceo.jpg";

const OurSolution: React.FC = () => {
  const vocationalTraining = [
    {
      icon: Sparkles,
      title: "Natural Hair Care",
      description: "Professional training in natural hair care techniques and products",
    },
    {
      icon: Sparkles,
      title: "Hair Locking",
      description: "Specialized skills in hair locking methods and maintenance",
    },
    {
      icon: Sparkles,
      title: "Braiding",
      description: "Comprehensive braiding techniques and styles",
    },
    {
      icon: Sparkles,
      title: "Basic Cosmetology",
      description: "Foundational beauty and skincare services",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship Fundamentals",
      description: "Business skills to launch and manage micro-enterprises",
    },
  ];

  const professionalDevelopment = [
    {
      icon: Shield,
      title: "Hygiene & Professional Standards",
      description: "Sanitation, personal hygiene, and workplace professionalism",
    },
    {
      icon: UserCheck,
      title: "Workplace Readiness",
      description: "Customer service excellence and professional conduct",
    },
    {
      icon: TrendingUp,
      title: "Confidence & Leadership",
      description: "Building self-esteem and leadership capabilities",
    },
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description: "Income planning, budgeting, and financial management",
    },
    {
      icon: Brain,
      title: "Mental Wellness",
      description: "Resilience training and mental health awareness",
    },
    {
      icon: MessageCircle,
      title: "Mentorship",
      description: "Career guidance and ongoing professional support",
    },
  ];

  const globalPrograms = [
    {
      icon: Utensils,
      title: "Nourishment & School Meals",
      description: "Providing nutritious meals to ensure children can focus on learning",
      image: orphaDonation,
    },
    {
      icon: BookOpen,
      title: "School Supplies & Uniforms",
      description: "Essential learning materials and proper attire for dignity and equality",
      image: feed4,
    },
    {
      icon: Users,
      title: "Safe Classrooms",
      description: "Creating supportive and secure learning environments",
      image: pic2,
    },
    {
      icon: GraduationCap,
      title: "Technology Access",
      description: "Computers, internet, and digital learning resources",
      image: `https://res.cloudinary.com/dnwxx9wx5/image/upload/v1773828237/742A9610-2_nphyxh.jpg`,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Our Solution - VivaHope Foundation | Workforce Development & Global Outreach
        </title>
        <meta
          name="description"
          content="VivaHope Foundation operates through two interconnected focus areas: Youth & Workforce Development in Connecticut and Global Outreach in Ghana, providing vocational training, professional development, and educational support."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800 h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Our <span className="text-primary-600">Solution</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We operate through two interconnected focus areas: empowering youth through workforce development in Connecticut 
              and restoring dignity through education in Ghana. Together, we're breaking the cycle of poverty and building sustainable futures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Overview */}
      <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 px-6 py-3 rounded-full w-fit mx-auto">
                <Target className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-primary-700 dark:text-primary-300 font-medium">Two Focus Areas, One Mission</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Connecticut Focus */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-10 shadow-xl border border-primary-100 dark:border-neutral-700 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary-500 p-4 rounded-2xl shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-7 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Youth & Workforce Development</h2>
                    <p className="text-primary-600 font-medium">Connecticut, USA</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-center">
                  In Southeastern Connecticut, many youth and young adults face limited access to trade skills, 
                  high unemployment, and barriers to traditional college pathways.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  VivaHope Foundation provides a structured workforce development pathway designed to prepare youth 
                  for real-world careers and micro-enterprise opportunities.
                </p>
              </motion.div>

              {/* Ghana Focus */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-secondary-50 to-white dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-10 shadow-xl border border-secondary-100 dark:border-neutral-700 text-center"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-secondary-500 p-4 rounded-2xl shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-7 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Global Outreach</h2>
                    <p className="text-secondary-600 font-medium">Ghana, West Africa</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-center">
                  Beyond Connecticut, VivaHope Foundation supports children and youth in underserved communities in Ghana.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                  Our global work is rooted in lived experience. Our founder, Patience Odikah, grew up attending 
                  Alogboshie Basic School in Ghana, the same school where we serve today.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Connecticut Program Details */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 px-6 py-3 rounded-full mb-6">
                <MapPin className="w-5 h-5 text-primary-600 mr-2" />
                <span className="text-primary-700 dark:text-primary-300 font-medium">Connecticut Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                Comprehensive Training Pathway
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Equipping young women and girls ages 16–25 with practical skills for economic independence
              </p>
            </div>

            {/* Vocational Training */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 rounded-2xl shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Vocational Training Includes
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {vocationalTraining.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-xl w-fit mb-4">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 rounded-2xl shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                  Professional & Life Development
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalDevelopment.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-xl w-fit mb-4">
                      <item.icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Who We Serve Section */}
      <ScrollAnimation>
        <section className="py-20 bg-white dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 px-6 py-3 rounded-full mb-6">
                    <Users className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="text-primary-700 dark:text-primary-300 font-medium">Who We Serve</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Empowering Young Women & Girls
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      <strong className="text-primary-600">Ages:</strong> 16–25 years old
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      <strong className="text-primary-600">Locations:</strong> Groton, New London, Waterford, Norwich and surrounding communities in Southeastern Connecticut
                    </p>
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl mt-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-500 mr-2" />
                        Program Progression
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Participants begin with structured classroom learning and mannequin practice, 
                        progressing toward supervised real-world application and mentorship.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={`https://res.cloudinary.com/dnwxx9wx5/image/upload/v1773154037/pexels-rdne-6936069_fx6nwk.jpg`}
                    alt="Youth workforce development program participant"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl max-w-xs">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-6 h-6 text-primary-500 mr-2" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">Pathways to Success</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        Micro-business ownership
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        Livable wage income
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        Workforce entry
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        Long-term economic independence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Global Outreach Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-50 dark:bg-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center bg-secondary-100 dark:bg-secondary-900/30 px-6 py-3 rounded-full mb-6">
                <Globe className="w-5 h-5 text-secondary-600 mr-2" />
                <span className="text-secondary-700 dark:text-secondary-300 font-medium">Global Outreach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-4">
                Restoring Dignity in Ghana
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every child deserves a safe environment to learn, grow, and thrive, no matter where they are born
              </p>
            </div>

            {/* Founder Story */}
            <div className="bg-white dark:bg-neutral-800 rounded-3xl p-10 shadow-xl mb-12">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10 text-secondary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Rooted in Lived Experience
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our work focuses on restoring dignity and access to education through comprehensive support programs. 
                    VivaHope Foundation maintains an ongoing commitment to international outreach focused on dignity, 
                    nourishment, and education in Ghana.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-xl w-fit mb-4">
                      <program.icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {program.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {program.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Impact Summary */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-br from-primary-700 to-secondary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Commitment
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                From Connecticut to Ghana, we believe in creating lasting change through education, 
                skills training, and community empowerment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl font-bold mb-3">1,000+</div>
                <div className="text-lg text-white/90">Lives Impacted</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-5xl font-bold mb-3">2</div>
                <div className="text-lg text-white/90">Countries Served</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-5xl font-bold mb-3">∞</div>
                <div className="text-lg text-white/90">Futures Transformed</div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </>
  );
};

export default OurSolution;
