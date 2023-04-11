import React from 'react'
import Link from 'next/link'
import GetFormattedDate from '@/lib/getFormattedDate'

type Props = {
    post: BlogPost
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = GetFormattedDate(date)
  return (
    <li className='mt-4 text-2xl text-white/90'>
        <Link className='underline hover:text-white' href={`/posts/${id}`}>{title}</Link>
        <br />
        <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  )
}