import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'

interface Author {
    name: string
    avatarUrl: string
    role: string
}

interface Content {
    type: 'link' | 'paragraph'
    content: string
}

export interface PostType {
    author: Author
    content: Content[]
    publishedAt: Date
}

export interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: React.SubmitEvent) {
        event.preventDefault()

        setComments([newCommentText, ...comments])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={post.publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(c => {
                    switch (c.type) {
                        case 'paragraph': return (<p>{c.content}</p>)
                        case 'link': return (<p><a href='#'>{c.content}</a></p>)
                    }
                }
                )}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                />

                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => <Comment content={comment} />)}
            </div>
        </article>
    )
}