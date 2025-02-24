"use client";
import React, { useState } from 'react';
import Footer from '../componentes/footer';
import Image from 'next/image';
import Header from '../componentes/header';
const modulo = () => {
    const [selectedModule, setSelectedModule] = useState(null);
  
    const modules = [
      {
        title: 'Primeros días con tu bebé',
        text: 'Aprende a cuidar y entender las primeras necesidades de tu bebé recién nacido.',
        details: 'En este módulo aprenderás sobre los primeros cuidados esenciales, la importancia del contacto piel con piel y cómo establecer una rutina efectiva.'
      },
      {
        title: 'El sueño del recién nacido',
        text: 'Consejos y estrategias para mejorar el descanso de tu bebé y el tuyo.',
        details: 'Explora técnicas comprobadas para ayudar a tu bebé a dormir mejor, crear un ambiente adecuado y entender las fases del sueño infantil.'
      },
      {
        title: 'Alimentación segura',
        text: 'Información esencial sobre lactancia, biberón y nutrición temprana.',
        details: 'Aprende sobre la lactancia materna, fórmulas infantiles, cómo evitar alergias y asegurar una alimentación balanceada.'
      },
      {
        title: 'Cuidados básicos',
        text: 'Cómo manejar el aseo, cambio de pañales y seguridad del bebé.',
        details: 'Descubre las mejores prácticas para el aseo, la higiene diaria, el cambio de pañales y cómo prevenir irritaciones en la piel.'
      },
      {
        title: 'Salud infantil',
        text: 'Vacunas, enfermedades comunes y cómo reaccionar ante emergencias.',
        details: 'Conoce el calendario de vacunación, señales de enfermedades comunes y qué hacer en caso de fiebre o emergencias.'
      },
      {
        title: 'Desarrollo motor',
        text: 'Cómo estimular y apoyar el crecimiento físico de tu bebé.',
        details: 'Aprende sobre hitos del desarrollo, ejercicios para estimular el movimiento y cómo fomentar la coordinación motriz de tu bebé.'
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <section className="w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
            <div className="md:w-1/2 py-12 md:py-20 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#00D4FF]">
                Explora <span className="text-[#FFD700]">Módulos</span> de Aprendizaje<br />
                para Padres <span className="text-[#FFD700]">Primerizos</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed text-gray-300">
                Aprende con módulos interactivos diseñados para ayudarte en la crianza de tu bebé con información confiable y práctica.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#424242] mb-10">
              Módulos de Aprendizaje
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((modulo, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-semibold mb-3 text-[#424242]">
                    {modulo.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm md:text-base">
                    {modulo.text}
                  </p>
                  <button 
                    onClick={() => setSelectedModule(selectedModule === index ? null : index)}
                    className="mt-4 bg-[#00D4FF] hover:bg-[#008CBA] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    {selectedModule === index ? 'Ocultar Información' : 'Más Información'}
                  </button>
                  {selectedModule === index && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md w-full text-center">
                      <p className="text-gray-700">{modulo.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };
  
export default modulo;
