'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { topicalEntryGrid } from '@/data/siteData'

const TopicalEntryGrid = () => {
  const [selectedTab, setSelectedTab] = useState(topicalEntryGrid.tabs[0].label)
  const activeTab = topicalEntryGrid.tabs.find(t => t.label === selectedTab) || topicalEntryGrid.tabs[0]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-3xl text-[#10284B]">{topicalEntryGrid.title}</h2>
        <select
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
          className="bg-white border border-gray-200 rounded px-3 py-1 text-sm text-gray-600"
        >
          {topicalEntryGrid.tabs.map(tab => (
            <option key={tab.label} value={tab.label}>Topic: {tab.label}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6">
        {activeTab.links.slice(0, 3).map((link, i) => {
          const linkImage = (link as { image?: string }).image
          return (
            <Link
              key={i}
              href={link.href}
              className="group flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-[#FF9E00]/20"
            >
              <div className="w-24 h-24 flex-shrink-0 bg-[#FF9E00]/10 rounded-lg overflow-hidden flex items-center justify-center">
                {linkImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={linkImage}
                    alt=""
                    aria-hidden="true"
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF9E00] mb-1 block">{activeTab.label}</span>
                <h3 className="font-heading text-lg font-bold text-[#10284B] leading-tight">{link.title}</h3>
                <p className="text-sm text-gray-400 mt-1 group-hover:text-[#10284B] transition-colors">Read More &rarr;</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TopicalEntryGrid
