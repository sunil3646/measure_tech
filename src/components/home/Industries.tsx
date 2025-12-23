import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Factory,
  Car,
  Plane,
  Building2,
  Lightbulb,
  Heart,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "Automation",
    description: "Industrial automation systems and control solutions.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Plane,
    name: "Aviation, Space & Defence",
    description: "Aerospace-grade instrumentation and calibration services.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Building2,
    name: "IT Hardware",
    description: "Hardware verification, lifecycle support and maintenance.",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    icon: Lightbulb,
    name: "Telecom",
    description: "Telecommunication test, calibration and field services.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Car,
    name: "Railways",
    description: "Railway electronics and instrumentation support.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Heart,
    name: "IoT & Automation",
    description: "Connected device calibration, testing and integration.",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

export const Industries = () => {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          badge="Industries We Serve"
          title="Supporting Critical Sectors"
          description="From automation to aerospace, we provide calibration and maintenance solutions across industries."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-card border border-border overflow-hidden cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {industry.name}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/industries">
              View All Industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
