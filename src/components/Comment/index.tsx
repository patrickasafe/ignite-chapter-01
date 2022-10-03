import React, { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './style.module.css'
import { Avatar } from '../Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {

  const [likeCount, setLikeCount] = useState(0)


  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1)
  }

  return (
    <div
      className={styles.comment}
    >
      <Avatar
        hasBorder={false}
        src='https://github.com/patrickasafe.png'
        alt=''
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>Patrick Asafe</strong>
              <time title='28 de Setembro às 18:28' dateTime='2022-09-28 18:28:00'>Publicado há 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>

            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}