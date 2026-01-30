'use client';

import { motion } from 'framer-motion';
import { Play, CheckCircle, TrendingUp, Camera, FileText } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8fafc]">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-indigo-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-cyan-100 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-sm text-blue-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                500+ 학원에서 사용 중
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6"
            >
              시험지 사진 한 장이
              <br />
              <span className="text-blue-600">학습 처방전</span>이 됩니다
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg"
            >
              AI가 5초 만에 채점하고 취약점을 분석합니다.
              선생님의 밤샘 오답 노트 작업, 이제 그만하세요.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5">
                2주 무료로 시작하기
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50">
                <Play className="h-5 w-5" />
                30초 데모 보기
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                신용카드 필요 없음
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                5분 안에 시작
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                평균 90% 시간 절감
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* App Screen Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                {/* App Header */}
                <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">에듀체크</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-5 space-y-4">
                  {/* Student Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">오늘의 분석 결과</p>
                      <p className="text-xl font-bold text-gray-900">김민수 학생</p>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <span className="text-xl font-bold text-white">92</span>
                    </div>
                  </div>

                  {/* Score Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-gray-700">수학 중간고사</span>
                      <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded">+12점 향상</span>
                    </div>
                    {/* Progress bars */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-16">이차방정식</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '85%'}} />
                        </div>
                        <span className="text-xs font-medium text-gray-700">85%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-16">함수</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}} />
                        </div>
                        <span className="text-xs font-medium text-gray-700">92%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-16">도형</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{width: '68%'}} />
                        </div>
                        <span className="text-xs font-medium text-amber-600">68%</span>
                      </div>
                    </div>
                  </div>

                  {/* Weakness Alert */}
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <TrendingUp className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-amber-800">취약점 발견</p>
                      <p className="text-sm text-amber-600">도형의 닮음 단원 복습 필요</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
                      <Camera className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">시험지 촬영</span>
                    </button>
                    <button className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">리포트 발송</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Single Floating Badge */}
              <motion.div
                className="absolute -left-4 top-1/3 bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">자동 채점 완료</p>
                    <p className="text-lg font-bold text-gray-900">2.3초</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
