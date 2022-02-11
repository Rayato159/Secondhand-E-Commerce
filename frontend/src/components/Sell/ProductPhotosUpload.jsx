import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

// Icons
import { BsImages } from 'react-icons/bs'

export const ProductPhotosUpload = ({ props }) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    maxFiles: 5,
  })
  
  useEffect(() => {
    props(acceptedFiles)
  }, [acceptedFiles])

  return (
    <section className="pb-4">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div
            className={
                acceptedFiles.length > 0?
                'flex flex-col items-center space-y-3 border-2 border-black border-dashed rounded-md p-4 text-black duration-300'
                :'flex flex-col items-center space-y-3 border-2 border-dashed rounded-md p-4 text-gray-400 hover:text-black hover:border-black duration-300'
            }
        >
            <BsImages className='h-10 w-10'/>
            <div className='text-sm text-center'>
                ลาก หรือ คลิ๊กที่นี่ เพื่ออัพโหลดรูปภาพสินค้า (ไม่เกิน 5 รูป)
            </div>
            {acceptedFiles.length > 0 &&
                <div className='text-xs text-center'>
                    จำนวนรูปภาพ : {acceptedFiles.length}
                </div>
            }
        </div>
      </div>
    </section>
  );
}