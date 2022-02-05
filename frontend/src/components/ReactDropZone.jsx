import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

export const ReactDropZone = ({props}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpeg'
  })

  // Fire images out of this components
  useEffect(() => {
    props(acceptedFiles)
  }, [acceptedFiles])

  return (
    <section className='border-2 border-black border-dashed w-full p-4 active:border-gray-300 hover:border-gray-400 duration-300'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()}/>
        <div className="flex w-full justify-center">
            <div className="flex flex-col space-y-2 bg-mycolor-600 hover:bg-mycolor-500 rounded p-4 md:w-96 w-full duration-300">
                <div className='text-center md:text-sm text-xs text-gray-300'>
                    ลากหรือคลิ๊กที่นี่เพื่ออัพโหลดไฟล์ภาพ
                </div>
                <div className='flex justify-center text-gray-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 md:w-12 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div className='text-center text-xs text-gray-300'>
                    {`จำนวนรูปภาพ: ${acceptedFiles.length}`}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}