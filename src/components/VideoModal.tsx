import { X } from 'lucide-react'
import { useEffect } from 'react'

interface VideoModalProps {
  closeModal: () => void
  src?: string
}

function VideoModal({ closeModal, src }: VideoModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className="fixed top-0 bg-black/90 min-h-screen w-full flex items-center justify-center z-50">
      <div className="absolute top-5 right-5">
        <X className="text-white cursor-pointer" onClick={closeModal} />
      </div>

      <div className="z-10">
        <iframe
          className="w-[70vw] h-[70vh]"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoModal
