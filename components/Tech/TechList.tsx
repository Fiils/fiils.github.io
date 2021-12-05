import Link from 'next/link'

const TechList = () => {
    return (
        <>
            <ul>
                <h3>Programing Languages:</h3>
                <li>Javascript</li>
                <li>C++</li>
                <li><Link href="https://www.typescriptlang.org/"><a target="_blank">TypeScript</a></Link></li>
              </ul>
              <ul>
                <h3>Libraries:</h3>
                <li><Link href="https://reactjs.org"><a target="_blank">React.js</a></Link></li>
                <li><Link href="https://michalsnik.github.io/aos/"><a target="_blank">AOS</a></Link></li>
                <li><Link href="https://axios-http.com/docs/intro"><a target="_blank">Axios</a></Link></li>
                <li><Link href="https://gulpjs.com/"><a target="_blank">Gulp.js</a></Link></li>
                <li><Link href="https://mongoosejs.com/"><a target="_blank">Mongoose</a></Link></li>
                <li><Link href="https://expressjs.com/"><a target="_blank">Express.js</a></Link></li>
              </ul>
              <ul>
                <h3>Frameworks:</h3>
                <li><Link href="https://nextjs.org/"><a target="_blank">Next.js</a></Link></li>
              </ul>
              <ul>
                <h3>Technologies:</h3>
                <li><Link href="https://nodejs.dev/"><a target="_blank">Node.js</a></Link></li>
                <li><Link href="https://www.mongodb.com/"><a target="_blank">MongoDB</a></Link></li>
                <li><Link href="https://sass-lang.com/"><a target="_blank">SCSS</a></Link></li>
                <li><Link href="https://postcss.org/"><a target="_blank">PostCSS</a></Link></li>
              </ul>
              <ul>
                <h3>Tools:</h3>
                <li><Link href="https://git-scm.com/"><a target="_blank">Git</a></Link></li>
                <li><Link href="https://yarnpkg.com/"><a target="_blank">Yarn</a></Link></li>
                <li><Link href="npmjs.com"><a target="_blank">NPM</a></Link></li>
              </ul>
        </>
    )
}

export default TechList;