import React from 'react';

export const Sell = () => {
    return (
        <div>
            <div className='max-w-4xl mx-auto md:p-6 p-4'>
                <div className='flex flex-col space-y-1 w-full px-8 py-4 bg-mycolor-600'>
                    <div className='font-bold text-2xl italic text-white'>
                        Mongsue
                    </div>
                    <div className='text-white text-sm'>
                        ***กรุณากรอกข้อมูลของสินค้าตามความเป็นจริง หากสินค้าไม่ตรงตามที่ระบุ ท่านอาจถูกดำเนินการทางกฎหมายได้
                    </div>
                </div>
                <form className='bg-white flex flex-col space-y-6 md:p-8 p-4 shadow-xl'>
                    {/* Name */}
                    <div className='flex space-x-3 items-center'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ระบุชื่อสินค้า</label>
                        <input className='bg-transparent border border-black w-full h-7 text-sm p-2' type="text" />
                    </div>

                    {/* Price */}
                    <div className='flex space-x-3 items-center'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ระบุราคาที่เหมาะสม</label>
                        <input className=' bg-transparent border border-black w-full h-7 text-sm p-2' type="text" />
                    </div>

                    {/* Description */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>คำอธิบายสินค้า</label>
                        <textarea className='bg-transparent border border-black w-full text-sm p-2' rows="5" type="text"></textarea>
                    </div>

                    {/* Picture limit at 6 */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>รูปภาพสินค้า</label>
                        <input className='bg-transparent border-2 border-dashed border-black w-full text-sm p-2 focus:outline-none' type="text" />
                    </div>

                    {/* Address */}
                    <div className='flex space-x-3'>
                        <label className='md:text-sm text-xs text-right md:w-44 w-48'>ที่อยู่สินค้า</label>
                        <textarea className='bg-transparent border border-black w-full text-sm p-2' rows="3" type="text"></textarea>
                    </div>

                </form>
            </div>
        </div>
    )
}
