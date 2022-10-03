import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { format, formatDistanceToNow, } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './style.module.css'

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];  
}


export const Post = ({ author, content, publishedAt } : PostProps) => {

  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState<string[]>(["Post muito bacana, hein?"])

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')

    setNewCommentText(event.target.value)
  }

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório')

  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    console.log(commentsWithoutDeletedOne)

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article
      className={styles.post}
    >
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder={true}
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>


      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return (
              <p key={line.content}>
                {line.content}
              </p>
            )
          }
          if (line.type == 'link') {
            return (
              <p key={line.content}>
                <a href="#">
                  {line.content}
                </a>
              </p>
            )
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            disabled={isNewCommentEmpty}
            type='submit'
          >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(
          comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          }
        )}
      </div>
    </article>
  )
}