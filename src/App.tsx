import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/patrickasafe.png',
      name: "Patrick Asafe",
      role: "WebDev Fullstack"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Só bora!' },
      { type: 'link', content: '#sobora' },
    ],
    publishedAt: new Date('2022-10-01 13:00:00')
  }, {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jaocfilho.png',
      name: "José Augusto",
      role: "WebDev Fullstack"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Só bora!' },
      { type: 'link', content: '#sobora' },
    ],
    publishedAt: new Date('2022-10-01 13:00:00')
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App

