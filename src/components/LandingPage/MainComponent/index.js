import React from 'react'
import "./styles.css"
import Button from '../../Common/Button'
import TabsComponent from '../../Dashboard/TabsCompnent'
import { motion } from 'framer-motion'
import gradient from "../../../assets/gradient.jpg"
import iphone from "../../../assets/iphone.png"

function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1 className='track-crypto-heading'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1 className='real-time-heading'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.span className='info-text'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to do so!
        </motion.span>

        <motion.div className='buttons'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a href='/Dashboard'> <Button text={"Dashboard"} /> </a>
          <a href='/'> <Button text={"Share"} outlined={true} /> </a>
        </motion.div>
      </div>
      <div className='right-component'>
        <motion.img src={gradient} className='gradient' />
        <motion.img src={iphone} className='iphone'
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />

      </div>
    </div>
  )
}
export default MainComponent
