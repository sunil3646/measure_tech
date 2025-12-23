import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Industries } from '@/components/home/Industries';
import { CTA } from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Industries />
      <CTA />
    </Layout>
  );
};

export default Index;
