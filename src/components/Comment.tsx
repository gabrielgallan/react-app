import styles from './Comment.module.css'

import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

interface CommentProps {
    content: string
}

export function Comment({ content }: CommentProps) {
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/josepholiveira.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joseph Oliveira</strong>
                            <time
                                title="11 de Maio ás 08:13"
                                dateTime="2026-5-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <TrashIcon size={22} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUpIcon size={22} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}