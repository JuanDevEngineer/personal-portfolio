import { Suspense, lazy } from 'react';
import { Header } from './shared/components/Header';
import { Footer } from './shared/components/Footer';
import { Loader } from './shared/components/Loader';
import { Layout } from './layout/Layout';

import './App.css';

const Home = lazy(() => import('./features/home/Home'));
const About = lazy(() => import('./features/about/About'));
const Resume = lazy(() => import('./features/resume/Resume'));
const Skills = lazy(() => import('./features/skills/Skills'));
const Work = lazy(() => import('./features/work/Work'));
const Contact = lazy(() => import('./features/contact/Contact'));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Layout>
        <Home />
        <About />
        <Resume />
        <Skills />
        <Work />
        <Contact />
      </Layout>
      <Footer />
    </Suspense>
  );
}
