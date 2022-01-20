import React from 'react'

export const HomeCover = () => {
  return (
      <div className='relative w-full top-0'>
          <div className="bg-mycolor-600">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col p-4">
                    <div className='font-extrabold font-serif italic md:text-7xl text-4xl text-white'>
                        Mongsue
                    </div>
                    <div className='text-sm md:text-2xl text-white py-3'>
                        มองสือ ที่แปลว่ามือสอง ซื้อ-ขาย ของมือสองเพียงเอื้อมมือ
                    </div>
                    <div className='py-3'>
                        <button className='bg-mycolor-200 hover:bg-mycolor-100 text-xl px-10 py-1'>
                            ลงขายเลย
                        </button>
                    </div>
                    <div className='hidden md:flex justify-end'>
                        <img className='h-40 w-auto' src="./assets/coverImg/cessnaCitationX.png" alt="cover-img" />
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}
