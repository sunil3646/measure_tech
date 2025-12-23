import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Factory,
  Car,
  Plane,
  Building2,
  Lightbulb,
  Heart,
  Ship,
  Smartphone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import industryAutomation from '@/assets/industry-automation.jpg';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing & Automation',
    description: 'Comprehensive automation solutions for modern manufacturing facilities.',
    features: [
      'PLC & SCADA Systems',
      'Industrial IoT Integration',
      'Robotic Control Systems',
      'Production Line Automation',
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Car,
    name: 'Automotive',
    description: 'Advanced electronics for the next generation of vehicles.',
    features: [
      'ECU Development',
      'Sensor Integration',
      'Battery Management',
      'ADAS Components',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Plane,
    name: 'Aerospace & Defense',
    description: 'Mission-critical systems meeting the strictest safety standards.',
    features: [
      'Avionics Systems',
      'Navigation Electronics',
      'Communication Systems',
      'Radar Components',
    ],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    icon: Building2,
    name: 'Smart Infrastructure',
    description: 'Intelligent building and city management solutions.',
    features: [
      'Building Automation',
      'Energy Management',
      'Security Systems',
      'Smart Lighting',
    ],
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    icon: Lightbulb,
    name: 'Energy & Utilities',
    description: 'Power electronics for sustainable energy solutions.',
    features: [
      'Solar Inverters',
      'Grid Management',
      'Power Distribution',
      'Energy Storage',
    ],
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description: 'Reliable electronics for life-saving medical devices.',
    features: [
      'Diagnostic Equipment',
      'Patient Monitoring',
      'Imaging Systems',
      'Lab Automation',
    ],
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    icon: Ship,
    name: 'Marine & Offshore',
    description: 'Rugged electronics designed for harsh marine environments.',
    features: [
      'Navigation Systems',
      'Communication Equipment',
      'Engine Controls',
      'Safety Systems',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    description: 'High-quality components for consumer products.',
    features: [
      'Display Technologies',
      'Audio Systems',
      'Wearable Tech',
      'Smart Home Devices',
    ],
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
];

const Industries = () => {
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
                Industries
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Solutions for Every
                <br />
                <span className="text-gradient">Industry Sector</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From manufacturing floors to healthcare facilities, our electronic solutions 
                power critical operations across diverse industries worldwide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="rounded-2xl overflow-hidden border border-border">
                <img 
                  src={industryAutomation} 
                  alt="Industrial automation and robotics" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-4 border border-primary/20">
                <div className="text-3xl font-display font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Industry Sectors</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-card border border-border overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <div className="relative z-10 p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {industry.description}
                      </p>
                      
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {industry.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button variant="ghost" className="group/btn p-0 h-auto" asChild>
                        <Link to="/contact" className="flex items-center gap-2 text-primary font-medium">
                          Get Solutions
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work with businesses across all sectors. Contact us to discuss 
              your specific electronic solution requirements.
            </p>
            <Button variant="glow" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
