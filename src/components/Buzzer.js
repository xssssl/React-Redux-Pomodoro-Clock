import React from 'react'

const Buzzer = React.forwardRef((props, ref) => {
  const audioRef = React.useRef(null)
  const src = 'https://sampleswap.org/samples-ghost/MELODIC%20SAMPLES/GUITARS/98[kb]funky-rhythm-guitar.aif.mp3'
  React.useImperativeHandle(ref, () => ({
    play: () => {
      audioRef.current.currentTime = 0
      const audioPromise = audioRef.current.play()
      audioPromise.catch(error => console.log(error))
    },
    pause: () => {
      audioRef.current.currentTime = 0
      audioRef.current.pause()
    }
  }))
  
  return (
    <audio type="audio/mpeg" id='beep' src={src} ref={audioRef} />
  )
})

export default Buzzer