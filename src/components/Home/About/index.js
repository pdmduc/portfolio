import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a highly motivated software engineer seeking a challenging role
          in an established IT company. I am passionate about working with the
          latest technologies and tackling diverse projects that push me to
          continuously improve my skills.
        </p>
        <p>
          My background in software engineering has provided me with the skills
          to solve design problems one step at a time. I am naturally curious
          and confident in my ability to make a positive impact on any team.
        </p>
        <p>
          Outside of work, I am a sports fanatic and photography enthusiast. I
          am also tech-obsessed and always eager to explore new technologies and
          gadgets.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EC4D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#161B22" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#356c9b" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
