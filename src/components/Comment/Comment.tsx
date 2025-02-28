import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from '../Avatar/Avatar'
import { useState } from 'react'

interface UIComment {
  content: string
  onDeleteComment: (commentToDelete: string) => void;
}

export default function Comment({ content, onDeleteComment }: UIComment) {

  const [ likeCount, setLikeCount ] = useState(0);

  function handleDeleteComment () {
    onDeleteComment(content)
  }

  function handleLikeComment () {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return(
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} avatar="https://github.com/igormtt.png" alt=""  />

      <div className={styles.commentBox}>
        
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Motta</strong>
              <time title="11 de Maio às 08:14" dateTime="2022-05-11 08:14:32">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp  />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>


    </div>
  )
}