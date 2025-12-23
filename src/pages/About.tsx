import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Target, Eye, Award, Users, Globe } from "lucide-react";
import aboutFactory from "@/assets/about-factory.jpg";

const timeline = [
  {
    year: "1995",
    title: "Foundation",
    description:
      "Started as a small electronics workshop with a vision to innovate.",
  },
  {
    year: "2002",
    title: "First Export",
    description:
      "Expanded to international markets, serving clients across Asia.",
  },
  {
    year: "2010",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001 certification for quality management systems.",
  },
  {
    year: "2015",
    title: "R&D Center",
    description: "Opened state-of-the-art research and development facility.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Established presence in 30+ countries with local partnerships.",
  },
  {
    year: "2024",
    title: "Innovation Award",
    description: "Recognized as industry leader for sustainable electronics.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every component crafted with micron-level accuracy.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising standards in everything we deliver.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships with our clients.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmentally responsible practices.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-radial-gradient" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Measure Tech
                <br />
                <span className="text-gradient">Excellence Since 2025</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We specialize in precision calibration, industrial maintenance,
                and engineering solutions ensuring reliability, accuracy, and
                safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={aboutFactory}
                  alt="Modern electronics manufacturing facility"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 border border-primary/20">
                {/*<div className="text-3xl font-display font-bold text-primary">
                  28+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Excellence
                </div>
                */}

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide industry-leading calibration, maintenance, and
                engineering services that help organizations maintain accuracy,
                safety, and uptime.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" delay={0.1}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted partner for precision measurement and
                industrial services, enabling customers to operate confidently
                and efficiently.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/*  <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Our Journey"
            title="Milestones That Define Us"
            description="A legacy of innovation, growth, and excellence spanning three decades."
          />

          <div className="relative max-w-4xl mx-auto">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <div className="glass rounded-xl p-6">
                    <span className="text-primary font-display font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-sm" />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="Core principles that guide every decision and innovation at Measure Tech."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedCard
                key={value.title}
                delay={index * 0.1}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
             /* { value: "28+", label: "Years of Excellence" },
              { value: "500+", label: "Projects Completed" },
              { value: "30+", label: "Countries Served" },
              { value: "150+", label: "Team Members" }, */
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
