import React from 'react'
import { FileText, CloudDownload, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Card = ({ desc, filesize, close, tag, reference }) => {
  const colorMap = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    amber: 'bg-amber-600',
    purple: 'bg-purple-600',
  };

  return (
    <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{ scale: 1.1, zIndex: 1000 }}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className='cursor-grab relative shrink-0 w-72 h-80 rounded-[35px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
        <FileText size={24} />
        <p className='text-sm font-semibold leading-tight mt-5'>{desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h2>{filesize}</h2>
                <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                    { close ? <X size={20} className='text-black' /> : <CloudDownload size={20} className='text-black' />}
                </span>
            </div>

            { tag && tag.isOpen && (
                <div className={`tag w-full py-4 ${colorMap[tag.color] || 'bg-gray-600'}`}>
                    <h3 className='text-center font-semibold text-sm'>{tag.tagline}</h3>
                </div>
            ) }
        </div>
    </motion.div>    
  )
}

export default Card