import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://github.com/gabrielgallan.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div>
                            <strong>Gabriel Gallan</strong>
                            <time
                                title="11 de Maio ás 08:13"
                                dateTime="2026-5-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <TrashIcon size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUpIcon />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}