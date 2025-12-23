import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AnimatedCard } from "@/components/common/AnimatedCard";
import { Cpu, Shield, Gauge, Wrench, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Process",
    description:
      "Defined workflows and procedures to ensure consistent, repeatable outcomes.",
  },
  {
    icon: Shield,
    title: "Accuracy",
    description:
      "Precision calibration and verification to maintain measurement integrity.",
  },
  {
    icon: Gauge,
    title: "Quality Assurance",
    description:
      "Robust QA checks and traceable documentation for every service.",
  },
  {
    icon: Wrench,
    title: "Feedback",
    description:
      "Customer-driven improvements powered by continuous feedback loops.",
  },
  {
    icon: Globe,
    title: "Monitoring",
    description:
      "Ongoing monitoring and analytics to ensure instrument performance.",
  },
  {
    icon: Headphones,
    title: "Technology",
    description:
      "Modern equipment and skilled engineers delivering reliable solutions.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          badge="We Achieve Customer Satisfaction By"
          title="How We Deliver Value"
          description="Delivering precision, reliability and quality across calibration, maintenance and engineering services."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} delay={index * 0.1}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
