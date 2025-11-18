"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, Users, Award, BookOpen, ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import CareersApplication from "@/components/CareersApplication";

// Job listings data - Entry-level and Intern positions only
const allJobs = [
  {
    id: 1,
    title: "Marketing Intern",
    location: "Hybrid – Chennai",
    department: "Marketing",
    type: "Internship",
    summary: "Support marketing initiatives and learn digital marketing, content creation, and campaign management in a fast-paced startup environment.",
    responsibilities: [
      "Assist with social media content creation and scheduling",
      "Support email marketing campaigns",
      "Help with market research and competitor analysis",
      "Create marketing materials and presentations",
    ],
  },
  {
    id: 2,
    title: "Software Intern",
    location: "Hybrid – Chennai",
    department: "Engineering",
    type: "Internship",
    summary: "Learn software development by working on real projects, building features, and collaborating with the engineering team.",
    responsibilities: [
      "Write and test code for new features",
      "Participate in code reviews and team meetings",
      "Learn modern development tools and practices",
      "Contribute to documentation and bug fixes",
    ],
  },
  {
    id: 3,
    title: "Junior Developer",
    location: "Hybrid – Chennai",
    department: "Engineering",
    type: "Full-time",
    summary: "Build and maintain features for our enterprise automation platform while learning from experienced developers.",
    responsibilities: [
      "Develop and maintain web applications",
      "Write clean, maintainable code",
      "Collaborate with team members on projects",
      "Participate in agile development processes",
    ],
  },
  {
    id: 4,
    title: "Customer Support Representative",
    location: "Hybrid – Chennai",
    department: "Customer Success",
    type: "Full-time",
    summary: "Help customers succeed by providing excellent support, answering questions, and resolving issues.",
    responsibilities: [
      "Respond to customer inquiries via email and chat",
      "Troubleshoot technical issues and provide solutions",
      "Document customer feedback and issues",
      "Maintain customer satisfaction and relationships",
    ],
  },
  {
    id: 5,
    title: "Operations Associate",
    location: "Hybrid – Chennai",
    department: "Operations",
    type: "Full-time",
    summary: "Support day-to-day operations, help streamline processes, and ensure smooth business functioning.",
    responsibilities: [
      "Assist with operational tasks and processes",
      "Maintain records and documentation",
      "Coordinate with different teams",
      "Help improve operational efficiency",
    ],
  },
  {
    id: 6,
    title: "Sales Representative",
    location: "Hybrid – Chennai",
    department: "Sales",
    type: "Full-time",
    summary: "Connect with potential customers, understand their needs, and help them discover our automation solutions.",
    responsibilities: [
      "Reach out to potential customers",
      "Conduct product demonstrations",
      "Follow up on leads and opportunities",
      "Maintain customer relationships",
    ],
  },
  {
    id: 7,
    title: "Product Analyst",
    location: "Hybrid – Chennai",
    department: "Product",
    type: "Full-time",
    summary: "Analyze product usage, gather user feedback, and help improve our platform based on data insights.",
    responsibilities: [
      "Analyze product metrics and user behavior",
      "Gather and document user feedback",
      "Create reports and presentations",
      "Support product decision-making",
    ],
  },
  {
    id: 8,
    title: "Content Writer",
    location: "Hybrid – Chennai",
    department: "Marketing",
    type: "Full-time",
    summary: "Create engaging content for blogs, social media, and marketing materials to help tell our story.",
    responsibilities: [
      "Write blog posts and articles",
      "Create social media content",
      "Develop marketing copy and materials",
      "Edit and proofread content",
    ],
  },
  {
    id: 9,
    title: "Designer (Generalist)",
    location: "Hybrid – Chennai",
    department: "Design",
    type: "Full-time",
    summary: "Create visual designs for our platform, marketing materials, and brand assets while learning design best practices.",
    responsibilities: [
      "Design user interfaces and components",
      "Create marketing and brand materials",
      "Work with design tools and systems",
      "Collaborate with product and marketing teams",
    ],
  },
  {
    id: 10,
    title: "QA Tester",
    location: "Hybrid – Chennai",
    department: "Engineering",
    type: "Full-time",
    summary: "Ensure our platform works perfectly by testing features, finding bugs, and helping maintain quality standards.",
    responsibilities: [
      "Test new features and functionality",
      "Identify and report bugs",
      "Create test cases and documentation",
      "Work with developers to resolve issues",
    ],
  },
  {
    id: 11,
    title: "Social Media Coordinator",
    location: "Hybrid – Chennai",
    department: "Marketing",
    type: "Full-time",
    summary: "Manage our social media presence, engage with our community, and help grow our online audience.",
    responsibilities: [
      "Create and schedule social media posts",
      "Engage with followers and respond to comments",
      "Monitor social media trends and analytics",
      "Help grow our social media following",
    ],
  },
];

const perks = [
  { icon: Clock, title: "Flexible Hours", description: "Work when you're most productive" },
  { icon: MapPin, title: "Hybrid Work", description: "Balance office and remote work" },
  { icon: Award, title: "Learning Budget", description: "₹50K annual learning & development" },
  { icon: BookOpen, title: "Growth Opportunities", description: "Clear career progression paths" },
  { icon: Users, title: "Team Culture", description: "Collaborative and inclusive environment" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Software Engineer",
    quote: "Working at Galactis has been transformative. The hybrid model gives me flexibility, and the team culture is incredibly supportive.",
    image: "👩‍💻",
  },
  {
    name: "Rahul Kumar",
    role: "Product Designer",
    quote: "I love how we're building products that truly matter for enterprises. The growth opportunities here are unmatched.",
    image: "👨‍🎨",
  },
  {
    name: "Anjali Patel",
    role: "Customer Success Manager",
    quote: "The learning culture here is amazing. I've grown so much professionally in just one year.",
    image: "👩‍💼",
  },
];

const faqs = [
  {
    question: "What is the application process?",
    answer: "Our application process is straightforward: submit your application, we review it within 48 hours, conduct initial screening calls, followed by technical/role-specific interviews, and finally a culture fit conversation. The entire process typically takes 2-3 weeks.",
  },
  {
    question: "Do you offer remote work options?",
    answer: "Yes! We offer hybrid work arrangements for most roles, allowing you to work from our Chennai office and remotely. We believe in flexibility and work-life balance.",
  },
  {
    question: "What benefits do you offer?",
    answer: "We offer flexible working hours, hybrid work options, competitive salaries, outcome-linked bonuses, learning & development budget, and a supportive team culture focused on growth.",
  },
  {
    question: "What is the company culture like?",
    answer: "Our culture is built on collaboration, innovation, and trust. We value diversity, encourage open communication, support work-life balance, and are committed to helping every team member grow and succeed.",
  },
  {
    question: "Are there opportunities for career growth?",
    answer: "Absolutely! We have clear career progression paths, regular performance reviews, mentorship programs, and opportunities to take on leadership roles as we scale. We invest in our people's long-term success.",
  },
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    let filtered = allJobs;

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation !== "All") {
      filtered = filtered.filter((job) => job.location.includes(selectedLocation));
    }

    if (selectedDepartment !== "All") {
      filtered = filtered.filter((job) => job.department === selectedDepartment);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedLocation, selectedDepartment]);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const locations = ["All", "Chennai"];
  const departments = ["All", "Engineering", "Design", "Sales", "Customer Success", "Marketing", "Operations", "Product"];

  return (
    <>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Galactis",
            url: "https://galactis.ai",
            logo: "https://galactis.ai/galactis-logo.svg",
            sameAs: ["https://galactis.ai"],
            jobPosting: allJobs.map((job) => ({
              "@type": "JobPosting",
              title: job.title,
              description: `${job.summary}\n\nResponsibilities:\n${job.responsibilities.join("\n")}`,
              identifier: {
                "@type": "PropertyValue",
                name: "Galactis",
                value: job.id.toString(),
              },
              datePosted: new Date().toISOString(),
              employmentType: job.type,
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chennai",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
              },
            })),
          }),
        }}
      />

    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900 px-4 py-20 sm:px-6 lg:px-8 dark:border-zinc-800">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-white"
              >
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  Build Your Future With Us –{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Careers at Galactis
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                  Join a team that's transforming enterprise automation. Work on cutting-edge AI-powered solutions,
                  collaborate with talented people, and grow your career in a supportive, hybrid work environment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Culture Intro Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
                  Life at Galactis
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  We're building the future of enterprise automation from Chennai, India. Our team values innovation,
                  collaboration, and work-life balance. With hybrid work options, flexible hours, and a culture of
                  continuous learning, we create an environment where everyone can thrive.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Team Members</p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Hybrid</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Work Model</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Team Culture Graphic */}
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 via-indigo-100 to-teal-100 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-teal-900/20">
                  {/* Animated background circles */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-600/20"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-600/20"
                  />
                  
                  {/* Team members illustration */}
                  <div className="relative flex h-full items-center justify-center p-8">
                    <div className="grid grid-cols-3 gap-4">
                      {/* Row 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-purple-300 dark:bg-purple-600" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-teal-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-indigo-300 dark:bg-indigo-600" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-teal-300 dark:bg-teal-600" />
                      </motion.div>
                      
                      {/* Row 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-pink-300 dark:bg-pink-600" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-orange-300 dark:bg-orange-600" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg"
                        >
                          <Users className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="mt-2 h-1 w-12 rounded-full bg-blue-300 dark:bg-blue-600" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-purple-300 bg-white/90 px-4 py-2 backdrop-blur dark:border-purple-700 dark:bg-zinc-900/90"
                  >
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">Team Culture & Diversity</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Search and Filter Bar - Mobile Optimized */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search by role or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white pl-10 pr-4 py-3 text-base focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-purple-500 sm:text-sm sm:py-2.5"
                  />
                </div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-base focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-purple-500 sm:text-sm sm:py-2.5"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc === "All" ? "All Locations" : loc}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-base focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus:border-purple-500 sm:text-sm sm:py-2.5"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept === "All" ? "All Departments" : dept}
                    </option>
                  ))}
                </select>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                {filteredJobs.length} {filteredJobs.length === 1 ? "position" : "positions"} available
              </p>
            </div>
          </section>

          {/* Job Listings */}
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {filteredJobs.length > 0 ? (
                <motion.div
                  key="jobs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredJobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-md transition-all duration-300 hover:border-purple-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-purple-600"
                    >
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{job.title}</h3>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                              <MapPin className="h-3 w-3" />
                              {job.location}
                            </span>
                            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                              {job.department}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{job.summary}</p>
                      <div className="mb-4 flex-grow space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Key Responsibilities:</p>
                        <ul className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300">
                          {job.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-500" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => setSelectedJob(job.id)}
                        className="mt-auto w-full min-h-[44px] rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                        aria-label={`Apply for ${job.title}`}
                      >
                        Apply Now
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-jobs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <Briefcase className="mx-auto h-12 w-12 text-zinc-400" />
                  <p className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">No positions found</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Try adjusting your search or filter criteria.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* Perks Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">Why Join Galactis?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                We offer competitive benefits and a culture that supports your growth and well-being.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all hover:border-purple-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-purple-600"
                >
                  <perk.icon className="mx-auto h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{perk.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{perk.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">Hear From Our Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                See what our team members say about working at Galactis.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="mb-4 text-4xl">{testimonial.image}</div>
                  <p className="mb-4 text-sm italic leading-relaxed text-zinc-700 dark:text-zinc-300">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>


          {/* FAQ Section */}
          <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                Get answers to common questions about working at Galactis.
              </p>
            </motion.div>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-zinc-900 dark:text-white">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-500 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
            ))}
          </div>
        </section>

          {/* CTA Section */}
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50 p-8 text-center dark:border-purple-900 dark:from-purple-950/30 dark:to-indigo-950/30 sm:p-12"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl md:text-4xl">
                Didn't see the right fit?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                We're always looking for talented people. Send us your profile and we'll reach out when a matching role
                opens up.
              </p>
              <a
                href="mailto:hr@galactis.ai"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
              >
                Send General Application
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
        </section>
      </main>

        {/* Sticky Apply Button - Mobile Optimized */}
        <AnimatePresence>
          {showStickyButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const firstJob = filteredJobs[0];
                if (firstJob) setSelectedJob(firstJob.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="fixed bottom-4 left-1/2 z-50 min-h-[48px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/70 sm:bottom-6 sm:px-8 sm:py-4"
              aria-label="Apply Now"
            >
              Apply Now
            </motion.button>
          )}
        </AnimatePresence>

        {/* Job Application Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-h-[95vh] max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 sm:p-6 md:p-8"
              >
                <CareersApplication jobId={selectedJob} onClose={() => setSelectedJob(null)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      <Footer />
    </div>
    </>
  );
}
