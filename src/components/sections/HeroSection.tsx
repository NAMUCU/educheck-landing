'use client';

import { motion } from 'framer-motion';
import { Play, Camera, CheckCircle, TrendingUp, FileText } from 'lucide-react';

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Content */}
          <motion.div
            variants={fadeInLeft}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-blue-200">500+ 학원에서 사용 중</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              시험지 사진 한 장이
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                학습 처방전이 됩니다
              </span>
            </h1>

            {/* Sub copy */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              AI가 5초 만에 채점하고 취약점을 분석합니다.
              <br />
              선생님의 밤샘 오답 노트 작업, 이제 그만하세요.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                2주 무료로 시작하기
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20">
                <Play className="h-5 w-5" />
                30초 데모 보기
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                신용카드 필요 없음
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                5분 안에 시작
              </span>
            </div>
          </motion.div>

          {/* Right - App Mockup with Process */}
          <motion.div
            variants={fadeInRight}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            {/* Main App Screen Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Phone Frame */}
              <div className="relative bg-slate-800 rounded-[2.5rem] p-3 shadow-2xl shadow-black/50">
                <div className="bg-slate-900 rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-2 bg-slate-800">
                    <span className="text-xs text-slate-400">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-slate-400 rounded-sm" />
                    </div>
                  </div>

                  {/* App Content - Dashboard Preview */}
                  <div className="p-4 space-y-4 bg-gradient-to-b from-slate-900 to-slate-800 min-h-[400px]">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-500">오늘의 분석</p>
                        <p className="text-lg font-bold text-white">김민수 학생</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">92</span>
                      </div>
                    </div>

                    {/* Score Card */}
                    <div className="bg-slate-700/50 rounded-2xl p-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-slate-400">수학 중간고사</span>
                        <span className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded-full">+12점</span>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold text-white">92</span>
                        <span className="text-slate-400 text-sm mb-1">/ 100</span>
                      </div>
                      {/* Mini chart bars */}
                      <div className="flex gap-1 mt-3">
                        {[60, 75, 80, 85, 92].map((h, i) => (
                          <div key={i} className="flex-1 bg-slate-600 rounded-full overflow-hidden h-12">
                            <div
                              className="bg-gradient-to-t from-blue-500 to-cyan-400 w-full rounded-full"
                              style={{ height: `${h}%`, marginTop: `${100-h}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Weakness Alert */}
                    <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-amber-200">취약점 발견</span>
                      </div>
                      <p className="text-xs text-amber-100/80">이차방정식 근의 공식 - 복습 권장</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-3 text-left">
                        <FileText className="h-5 w-5 text-blue-400 mb-1" />
                        <p className="text-xs text-blue-200">학부모 리포트</p>
                      </button>
                      <button className="bg-slate-700/50 rounded-xl p-3 text-left">
                        <Camera className="h-5 w-5 text-slate-400 mb-1" />
                        <p className="text-xs text-slate-300">시험지 촬영</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -left-8 top-20 bg-white rounded-xl p-3 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">자동 채점 완료</p>
                    <p className="text-sm font-bold text-gray-900">2.3초</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-32 bg-white rounded-xl p-3 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">시간 절약</p>
                    <p className="text-sm font-bold text-gray-900">90%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
