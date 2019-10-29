import React from 'react'

import styles from '@/components/style'


export default function CmItem(props) {
  return <div style={styles.item}>
  <h3>评论人：{props.user}</h3>
  评论内容：{props.content}
  </div>
}