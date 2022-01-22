import React from 'react'

export const HomeCover = () => {
  return (
      <div className='relative w-full top-0'>
          <div className="bg-mycolor-600">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col py-11 lg:p-12 px-4">
                        <div className='font-extrabold italic md:text-6xl text-4xl text-white'>
                            Mongsue
                        </div>
                        <div className='text-sm md:text-xl text-white py-3'>
                            มองสือ ที่แปลว่ามือสอง ซื้อ-ขาย ของมือสองเพียงเอื้อมมือ
                        </div>
                        <div className='py-2'>
                            <button className='bg-mycolor-200 hover:bg-mycolor-100 text-xl px-10 py-1'>
                                ลงขายเลย
                            </button>
                        </div>
                    </div>
                    <div>
                        <img className='h-auto w-56' src="./assets/logo/rayato.png" alt="logo" />
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}
