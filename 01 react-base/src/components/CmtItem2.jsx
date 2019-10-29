import React from 'react'

import styles from '@/components/style'


export default function CmItem(props) {
  return <div>
  <h1>评论人：{props.user}</h1>
  评论内容：{props.content}
  </div>
}