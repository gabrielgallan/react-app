import { Header } from "./components/Header"
import { Post } from "./components/Post"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam praesentium ratione distinctio enim illum dolore quo? Veniam consectetur magnam a, vel tempora totam hic quos. Eaque ratione reiciendis consectetur."
          />
          <Post 
            author="Gabriel" 
            content="New post"
          />
        </main>
      </div>
    </>
  )
}

export default App