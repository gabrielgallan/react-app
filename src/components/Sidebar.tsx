import styles from './Sidebar.module.css'

export function Sidebar()
{
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
            />

            <div className={styles.profile}>
                <strong>Web Developer</strong>
                <span>Diego</span>
            </div>
        </aside>
    )
}