import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaPython, FaDatabase, FaTable, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTableau, SiPowerbi, SiTensorflow, SiApachespark } from 'react-icons/si';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white p-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">Venkata Sai Uppu</h1>
        <p className="text-xl text-slate-300">Data Analyst & Data Scientist</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Venkata-Sai-Uppu" target="_blank"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/venkata-sai-uppu/" target="_blank"><FaLinkedin size={24} /></a>
        </div>
      </header>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <Card className="bg-slate-800">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">🌟 About Me</h2>
            <p>I specialize in transforming complex data into actionable insights. With over 3 years of experience, I’ve built scalable machine learning models, deployed interactive dashboards, and solved real-world problems using data.</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">🔧 Technical Skills</h2>
            <div className="grid grid-cols-3 gap-4">
              <FaPython title="Python" size={30} />
              <FaDatabase title="SQL" size={30} />
              <SiTableau title="Tableau" size={30} />
              <SiPowerbi title="Power BI" size={30} />
              <SiTensorflow title="TensorFlow" size={30} />
              <SiApachespark title="Apache Spark" size={30} />
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">📈 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Customer Segmentation",
              description: "K-Means clustering to segment users and improve targeted marketing, boosting acquisition by 25%."
            },
            {
              title: "Business Trade Analytics",
              description: "Python-based tool to analyze profit/loss trends with matplotlib visualizations for financial insights."
            },
            {
              title: "Heart Disease Prediction",
              description: "Random Forest + SVM optimized with GA and PSO, achieving 90% accuracy on medical datasets."
            },
            {
              title: "Performance Dashboards",
              description: "Developed real-time dashboards in Tableau/Python for university services, improving decisions by 13%."
            }
          ].map((project, idx) => (
            <Card key={idx} className="bg-slate-800">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">🌐 3D Visualization</h2>
        <div className="h-64">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh rotation={[Math.PI / 5, Math.PI / 5, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="skyblue" wireframe />
            </mesh>
          </Canvas>
        </div>
      </section>
    </div>
  );
}
