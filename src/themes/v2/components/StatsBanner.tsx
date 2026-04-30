'use client'

import React from 'react'
import { stats } from '@/data/siteData'

const StatsBanner = () => {
  const showRating = !!stats.rating
  const showSatisfaction = !!stats.satisfactionRate
  const showCases = !!stats.casesHandled

  // If no stats are populated, show a neutral verbalization row instead of
  // 0/0%/0+ — keeps the layout from looking broken when the firm has not
  // confirmed substantiated review/case numbers (CO RPC 7.1 / FL Bar 4-7.13).
  const visibleCount = [showRating, showSatisfaction, showCases].filter(Boolean).length
  if (visibleCount === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 text-center py-8">
        <p className="text-sm text-gray-500 leading-relaxed">
          {stats.ratingVerbalization}
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 py-8">
      {showRating && (
        <div className="p-4">
          <div className="font-heading text-5xl text-[#10284B] mb-2">{stats.rating}</div>
          <div className="text-sm font-bold uppercase tracking-widest text-[#FF9E00] mb-2">Positive Reviews</div>
          <p className="text-xs text-gray-400 max-w-[200px] mx-auto">{stats.ratingVerbalization}</p>
        </div>
      )}
      {showSatisfaction && (
        <div className="p-4">
          <div className="font-heading text-5xl text-[#10284B] mb-2">{stats.satisfactionRate}%</div>
          <div className="text-sm font-bold uppercase tracking-widest text-[#FF9E00] mb-2">{stats.satisfactionLabel}</div>
          <p className="text-xs text-gray-400 max-w-[200px] mx-auto">{stats.satisfactionVerbalization}</p>
        </div>
      )}
      {showCases && (
        <div className="p-4">
          <div className="font-heading text-5xl text-[#10284B] mb-2">{stats.casesHandled}+</div>
          <div className="text-sm font-bold uppercase tracking-widest text-[#FF9E00] mb-2">{stats.casesLabel}</div>
          <p className="text-xs text-gray-400 max-w-[200px] mx-auto">{stats.casesVerbalization}</p>
        </div>
      )}
    </div>
  )
}

export default StatsBanner
