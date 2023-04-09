// import React from 'react'
import Image from 'next/image'

export default function ProfilePic() {
  return (
    <section className='w-full mx-auto'>
        <Image
            className='border-4 border-slate-700 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
            src='/images/IMG_20220616_184738_644.jpg'
            width={200}
            height={200}
            alt='Irfan Arrosid'
            priority={true}
        />
    </section>
  )
}
