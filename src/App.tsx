import { useEffect, useRef, useState } from 'react'
import { Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import ThemeSwitchButton from '@/components/ThemeSwitchButton'
import VideoModal from '@/components/VideoModal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [src, setSrc] = useState<string | undefined>(undefined)

  const bannerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bannerRef.current) return

    // Select div element within the banner
    const elements = bannerRef.current.querySelectorAll('div')

    gsap.to(elements, {
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
      transform: 'scale3d(0.95, 0.95, 1)',
      transformStyle: 'preserve-3d',
      transformOrigin: 'center center',
      ease: 'none',
    })
  }, [])

  useEffect(() => {
    if (!bannerRef.current || !videoRef.current) return

    gsap.to(videoRef.current, {
      yPercent: -10,
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <>
      <div className="min-h-screen relative">
        <Navbar />
        <ThemeSwitchButton />

        <div className="px-20 h-full">
          <div className="flex flex-col min-h-[250vh] relative">
            <section
              id="banner"
              ref={bannerRef}
              className="sticky top-0 min-h-[80vh] max-w-400 p-7 mx-auto flex justify-center items-center z-0"
            >
              <div className="text-center">
                <div className="m-4">
                  <p className="uppercase text-[0.7rem] text-center tracking-wider mb-0 mt-0">
                    Proudly made in Barbados
                  </p>
                </div>

                <div className="m-4">
                  <h2 className="uppercase font-bold text-8xl text-center mb-0 mt-0">
                    Building the future of esports & gaming
                  </h2>
                </div>

                <p className="text-center">
                  A Barbadian group focused on building the local gaming and
                  eSports community through events and organization.
                </p>
              </div>
            </section>

            <section
              id="video"
              ref={videoRef}
              className="h-screen w-full sticky top-[10vh] z-10 flex flex-col justify-center items-center"
            >
              <iframe
                className="w-full h-[80vh]"
                src="https://www.youtube.com/embed/NGlgn8E043c?si=-OmQhXg15Y7zxDvE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </section>
          </div>

          <section id="about" className="my-20 h-160 flex">
            {/* LEFT CONTENT */}
            <div className="w-1/2 h-full flex flex-col justify-center">
              <p className="uppercase">About Us</p>
              <h3 className="mt-4 text-7xl font-bold uppercase">
                We are highnoon
              </h3>
              <p className="mt-6 text-[17px] max-w-[85%]">
                Highnoon Gaming is a Barbadian gaming group co-founded by
                Nicholas Roach and Ricardo Knight, which began as a community
                college project and has grown into an event organizer and
                promoter of eSports in Barbados.
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-1/2 h-full py-7 px-15">
              <div className="h-full w-full flex justify-center items-center bg-oxfordBlue">
                <button
                  onClick={() => {
                    setIsModalOpen(true)
                    setSrc(
                      'https://www.youtube.com/embed/wo-E8bJaUR4?si=EpyN_ngWmBGHvsqE',
                    )
                  }}
                >
                  <Play className="text-white w-16 h-16 m-10" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      {isModalOpen && (
        <VideoModal closeModal={() => setIsModalOpen(false)} src={src} />
      )}
    </>
  )
}

export default App
