import './index.scss'
import LogoD from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const didAnimate = useRef(false)

  useEffect(() => {
    if (didAnimate.current) {
      return
    }
    didAnimate.current = true
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 4,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoD} alt="D" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111">
        <g className="svg-container" fill="#022c43">
          <path
            ref={outlineLogoRef}
            d="M55.5,.5H12.29c0,4.3,1.15,8.32,3.16,11.79h0s.02,.04,.03,.05c.75,1.29,1.62,2.49,2.59,3.61,.02,.02,.04,.04,.05,.06,.65,.74,1.35,1.45,2.09,2.1,.03,.02,.05,.04,.08,.07,.33,.29,.66,.57,1.01,.84,.06,.05,.13,.1,.19,.15,.37,.29,.75,.56,1.13,.83,0,0,0,0,0,0,.38,.26,.77,.51,1.17,.74,.12,.07,.24,.14,.36,.21,.27,.16,.55,.31,.82,.45,.16,.08,.31,.16,.47,.24,.27,.13,.54,.26,.81,.38,.27,.12,.54,.24,.82,.35,.25,.1,.5,.2,.75,.29,.24,.09,.48,.17,.73,.25,.17,.06,.35,.11,.52,.16,.27,.08,.54,.16,.81,.23,.12,.03,.24,.06,.36,.09,.63,.15,1.26,.28,1.9,.38,.04,0,.09,.02,.13,.02,.33,.05,.66,.09,1,.13,.11,.01,.21,.02,.32,.03,.34,.03,.68,.06,1.03,.08,.02,0,.05,0,.08,0,.38,.02,.76,.04,1.15,.04h19.64c17.58,0,31.83,14.5,31.42,32.18-.41,17.16-14.85,30.67-32.01,30.67H24.07v-25.19h0c0-.5-.02-.99-.05-1.48,0-.12-.02-.25-.03-.37-.03-.39-.07-.78-.12-1.17-.01-.1-.02-.21-.04-.31-.14-.99-.34-1.96-.6-2.91-.01-.05-.03-.1-.04-.15-.13-.46-.27-.92-.43-1.37,0-.01,0-.03-.01-.04-.22-.64-.48-1.26-.75-1.86-.07-.15-.14-.29-.21-.43-.22-.47-.45-.92-.7-1.37-.08-.15-.17-.3-.26-.45-.26-.44-.53-.88-.82-1.3-.08-.12-.17-.25-.26-.37-.32-.46-.66-.9-1.02-1.34-.06-.07-.12-.15-.18-.22-4.32-5.16-10.8-8.45-18.06-8.45V110.5H54.8c30.28,0,55.41-24.18,55.7-54.46C110.79,25.47,86.01,.5,55.5,.5Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
