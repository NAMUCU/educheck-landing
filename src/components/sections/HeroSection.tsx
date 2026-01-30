'use client';

import { motion } from 'framer-motion';
import { Play, Camera, BarChart3, FileText, ArrowRight } from 'lucide-react';

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

const steps = [
  {
    icon: Camera,
    title: '시험지 촬영',
    desc: '스마트폰으로 5초',
  },
  {
    icon: BarChart3,
    title: 'AI 자동 분석',
    desc: '채점 + 취약점 파악',
  },
  {
    icon: FileText,
    title: '학습 처방전',
    desc: '맞춤 복습 가이드',
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-transparent to-white/80 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
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
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            사진만 찍으면 자동 채점, 약점 분석, 학부모 리포트까지.
            <br />
            선생님의 밤샘 오답 노트 작업, 이제 그만하세요.
          </motion.p>

          {/* Horizontal Process Flow */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-12 w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
              {steps.map((step, index) => (
                <div key={step.title} className="flex items-center">
                  {/* Step Card */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 shadow-md shadow-blue-500/25">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="mt-2 font-semibold text-gray-900 text-sm">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden sm:block mx-8">
                      <ArrowRight className="h-5 w-5 text-blue-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Time Savings */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-4 rounded-full bg-blue-50 px-5 py-2 text-sm">
                <span className="text-gray-600">매일 <span className="font-bold text-blue-600">2시간+</span> 절약</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">한 달 <span className="font-bold text-blue-600">60시간</span></span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              2주 무료로 시작하기
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">
              <Play className="h-5 w-5" />
              30초 데모 보기
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500"
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
        </motion.div>
      </div>
    </section>
  );
}
