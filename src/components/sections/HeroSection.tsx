'use client';

import { motion } from 'framer-motion';
import { Play, Smartphone, Monitor } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-white/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16"
        >
          {/* Left content */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Main headline */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              시험지 사진 한 장이
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                학습 처방전이 됩니다
              </span>
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl"
            >
              사진만 찍으면 자동 채점, 약점 분석, 학부모 리포트까지.
              <br />
              선생님의 밤샘 오답 노트 작업, 이제 그만하세요.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              {/* Primary CTA */}
              <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                2주 무료로 시작하기
              </button>

              {/* Secondary CTA */}
              <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
                <Play className="h-5 w-5" />
                30초 데모 보기
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 lg:justify-start"
            >
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                500+ 학원 사용 중
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                평균 90% 시간 절감
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                설치 없이 바로 시작
              </span>
            </motion.div>
          </div>

          {/* Right content - Product screenshot placeholder */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-1 items-center justify-center"
          >
            <div className="relative">
              {/* Laptop mockup */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 p-2 shadow-2xl">
                <div className="rounded-xl bg-gray-800 p-1">
                  {/* Screen */}
                  <div className="flex h-[280px] w-[440px] items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 sm:h-[320px] sm:w-[500px]">
                    <div className="flex flex-col items-center gap-3 text-gray-400">
                      <Monitor className="h-16 w-16" />
                      <span className="text-sm font-medium">대시보드 화면</span>
                    </div>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="mx-auto h-3 w-20 rounded-b-lg bg-gradient-to-b from-gray-300 to-gray-400" />
              </div>

              {/* Phone mockup - overlapping */}
              <div className="absolute -bottom-8 -right-8 z-20 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300 p-1.5 shadow-xl sm:-right-12">
                <div className="rounded-[20px] bg-gray-900 p-1">
                  {/* Notch */}
                  <div className="mx-auto mb-1 h-4 w-16 rounded-full bg-gray-800" />
                  {/* Screen */}
                  <div className="flex h-[180px] w-[100px] items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 sm:h-[200px] sm:w-[110px]">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <Smartphone className="h-10 w-10" />
                      <span className="text-xs font-medium">모바일 앱</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-indigo-400/20 blur-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
