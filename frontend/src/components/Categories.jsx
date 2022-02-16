import React from 'react'

// Components
import { Card } from './Card'

export const Categories = () => {
  return (
      <div>
          <div className='relative max-w-7xl mx-auto p-6 -top-16'>
              <div className='flex flex-col items-center'>
                <div className='font md:text-2xl text-xl text-center'>
                    สนใจอะไรอยู่หรอ? เลือกซื้อเลยสิ อย่าไปรอ!!!
                </div>

                {/* Grid */}
                <div className='grid md:grid-cols-5 grid-cols-1 md:gap-x-14 gap-y-8 p-10'>
                    <Card link={'/products?category=car'} image={'./assets/coverImg/car.png'} message={'รถมือสอง'}/>
                    <Card link={'/products?category=plane'} image={'./assets/coverImg/plane.png'} message={'เครื่องบินมือสอง'}/>
                    <Card link={'/products?category=mobile'} image={'./assets/coverImg/mobile.png'} message={'มือถือ แท็บเล็ต'}/>
                    <Card link={'/products?category=computer'} image={'./assets/coverImg/computer.png'} message={'คอมพิวเตอร์'}/>
                    <Card link={'/products?category=shoes'} image={'./assets/coverImg/shoes.png'} message={'รองเท้ามือสอง'}/>
                </div>
            </div>
          </div>
      </div>
  )
}
