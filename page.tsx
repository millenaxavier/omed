/* eslint-disable no-magic-numbers */
"use client";

// pages/index.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useState, useEffect } from "react";

// Custom hook for animation on scroll
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

const Home: FC = () => {
  const scrollY = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      title: "Detecção Precoce",
      description:
        "Identifique sinais potenciais de autismo nas fases iniciais do desenvolvimento",
      icon: "🔍",
    },
    {
      title: "Análise com IA",
      description:
        "Algoritmos avançados analisam padrões comportamentais com alta precisão",
      icon: "🧠",
    },
    {
      title: "Suporte Profissional",
      description:
        "Conecte-se com especialistas com base nos resultados da triagem",
      icon: "👨‍⚕️",
    },
    {
      title: "Aprendizado Contínuo",
      description:
        "Nossa IA melhora constantemente sua precisão através de novos dados de pesquisa",
      icon: "📈",
    },
  ];

  return (
    <>
      <>
        <title>Autinosis | Triagem de Autismo com IA</title>
        <meta
          name="description"
          content="Triagem revolucionária de autismo impulsionada por inteligência artificial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </>

      <AnimatePresence>
        {isLoaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white to-blue-50"
          >
            {/* Hero Section */}
            <section className="relative flex w-full flex-col items-center justify-center px-6 py-16 md:px-12 md:py-24 lg:px-24 lg:py-32">
              {/* Animated background elements */}
              <motion.div
                className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-3xl filter"
                animate={{
                  x: [0, 30, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-300 opacity-20 mix-blend-multiply blur-3xl filter"
                animate={{
                  x: [0, -40, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "easeInOut",
                }}
              />

              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-4 text-center text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
              >
                Autinosis.
                <br className="max-md:hidden" />
                <motion.span
                  custom={1}
                  variants={fadeIn}
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent"
                >
                  Impulsionado por IA
                </motion.span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-8 max-w-2xl text-center text-lg text-gray-600 md:text-xl"
              >
                Revolucionando a triagem de autismo com inteligência artificial
                de ponta. A detecção precoce leva a melhores resultados e
                suporte personalizado.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-col items-center gap-4 sm:flex-row"
              >
                <Link href="/test">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Iniciar Triagem
                  </motion.button>
                </Link>

                <Link href="/learn-more">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-gray-300 px-8 py-4 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50"
                  >
                    Saiba Mais
                  </motion.button>
                </Link>
              </motion.div>
            </section>

            {/* Features Section */}
            <section className="w-full px-6 pb-16 md:px-12 md:pb-24 lg:px-24">
              <motion.div
                initial={false}
                animate={scrollY > 1 ? "visible" : "hidden"}
                variants={staggerContainer}
                className="mx-auto max-w-7xl"
              >
                <motion.div
                  custom={0}
                  variants={fadeIn}
                  className="mb-16 text-center"
                >
                  <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    Nossa Tecnologia
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Como o Autinosis Funciona
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Nossa plataforma impulsionada por IA utiliza algoritmos
                    avançados para analisar padrões comportamentais e fornecer
                    uma detecção precoce e precisa dos transtornos do espectro
                    autista.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      custom={index + 1}
                      variants={fadeIn}
                      whileHover={{ y: -10 }}
                      className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Call To Action */}
            <section className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  scrollY > 600 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-4xl px-6 text-center"
              >
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Encontre as melhores opções para você ou seu filho
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
                  Nosso processo de triagem leva menos de 15 minutos e fornece
                  insights imediatos com próximos passos e recursos
                  personalizados.
                </p>
                <Link href="/test">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Iniciar Triagem Gratuita
                  </motion.button>
                </Link>
              </motion.div>
            </section>

            {/* Testimonials */}
            <section className="w-full bg-gray-50 px-6 py-16 md:px-12 md:py-24 lg:px-24">
              <motion.div
                initial="hidden"
                animate={scrollY > 900 ? "visible" : "hidden"}
                variants={staggerContainer}
                className="mx-auto max-w-6xl"
              >
                <motion.div
                  custom={0}
                  variants={fadeIn}
                  className="mb-16 text-center"
                >
                  <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    Histórias de Sucesso
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                    Confiado por Famílias e Profissionais
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600">
                    Veja como o Autinosis está fazendo a diferença na detecção
                    precoce do autismo
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    {
                      quote:
                        "A detecção precoce por meio do Autinosis nos ajudou a obter apoio para nosso filho 18 meses antes do que poderíamos ter conseguido de outra forma.",
                      author: "Sara M., Responsável",
                      avatar: "/images/avatar1.jpg",
                    },
                    {
                      quote:
                        "Como pediatra, descobri que o Autinosis é uma ferramenta inestimável na minha prática. A triagem impulsionada por IA complementa os métodos tradicionais.",
                      author: "Dr. Daniel Souza, Pediatra",
                      avatar: "/images/avatar2.jpg",
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      custom={index + 1}
                      variants={fadeIn}
                      className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg"
                    >
                      <div className="mb-6 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mb-6 italic text-gray-700">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                          />
                        </div>
                        <p className="font-medium text-gray-900">
                          {testimonial.author}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gray-900 px-6 py-12 text-gray-300 md:px-12 lg:px-24">
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                  <div className="mb-4 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                      <span className="text-lg font-bold text-white">A</span>
                    </div>
                    <span className="text-xl font-bold text-white">
                      Autinosis
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Plataforma revolucionária de triagem e suporte para autismo
                    impulsionada por IA.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="https://millenaxavier.com"
                        className="transition-colors hover:text-blue-400"
                      >
                        Sobre Nós
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://millenaxavier.com/projects"
                        className="transition-colors hover:text-blue-400"
                      >
                        Nossa Tecnologia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://millenaxavier.com/academics"
                        className="transition-colors hover:text-blue-400"
                      >
                        Pesquisa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://google.com"
                        className="transition-colors hover:text-blue-400"
                      >
                        Perguntas Frequentes
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Contato</h3>
                  <ul className="space-y-2">
                    <li>autinosis@gmail.com</li>
                    <li>+55 32 99856-2006</li>
                    <li>
                      Minas Gerais
                      <br />
                      Brasil 
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
                  <div className="flex space-x-4">
                    {["twitter", "facebook", "instagram", "linkedin"].map(
                      (social) => (
                        <a
                          key={social}
                          href={`https://${social}.com/autinosis`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-500"
                        >
                          <span className="sr-only">{social}</span>
                          {/* Social icon would go here - simplified for the example */}
                          <div className="h-5 w-5 rounded-sm bg-white/20"></div>
                        </a>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mx-auto mt-12 max-w-6xl border-t border-gray-800 pt-6 text-sm text-gray-500">
                <div className="flex flex-col items-center justify-between md:flex-row">
                  <p>
                    © {new Date().getFullYear()} Autinosis. Todos os direitos
                    reservados.
                  </p>
                  <div className="mt-4 flex space-x-6 md:mt-0">
                    <Link
                      href="/privacy"
                      className="transition-colors hover:text-gray-300"
                    >
                      Política de Privacidade
                    </Link>
                    <Link
                      href="/terms"
                      className="transition-colors hover:text-gray-300"
                    >
                      Termos de Serviço
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
