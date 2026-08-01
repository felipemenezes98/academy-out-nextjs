"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Barra de progresso vertical, fixa na lateral da tela, que reproduz as
 * faixas do capacete de Senna (amarelo / azul / verde) preenchendo de
 * cima para baixo conforme o usuário rola a página — a linha que guia
 * a "corrida" de leitura, do grid largada até o final da prova.
 */
export function HelmetLine() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-[6px] sm:block md:w-[8px]"
    >
      <div className="absolute inset-0 bg-[#141416]/80" />
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-x-0 top-0 h-full origin-top"
      >
        <div className="h-full w-full bg-[linear-gradient(180deg,#FFD500_0%,#FFD500_33%,#0046AD_33%,#0046AD_66%,#00843D_66%,#00843D_100%)] shadow-[0_0_18px_rgba(255,213,0,0.35)]" />
      </motion.div>
    </div>
  );
}
