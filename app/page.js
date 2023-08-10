'use client'

import Image from 'next/image'
import s from './page.module.scss'
import Link from 'next/link'
import { getData, getSocialsImage } from './utils'
import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { motion } from "framer-motion"

import HooBeIcon from './../public/images/hoobe-icon.png'
import ContentImg from './../public/images/content-id-f9wzS1vHcf-image.jpg'
import HooBeWhiteIcon from './../public/images/hoobe-white-icon.svg'
import YoutubeEmbed from './components/YoutubeEmbed'

export default function Home() {
  const [data, setData] = useState({})
  const fetchData = async () => {
    const response = await getData()
    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.top}>
          <motion.div 
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            className={s.image_wrap}>
            <Image 
              src={HooBeIcon}
              alt={'hoo.be'}
              width={104}
              height={104}
            />
          </motion.div>
          <motion.h2 
            animate={{ scale: 1, opacity: 1}}
            initial={{opacity: 0, scale: 0.5}}
          className={s.title}
          >
            hoo.be coding exercise
          </motion.h2>
          <div className={s.socials_list}>
            {data?.userSocialPlatform?.map((item, i) => {
              return (
                <motion.div 
                initial={{x: -2, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{ delay: 0.1 + i/10 }}
                key={item.id} 
                className={s.socials_item}
                >
                  <Link href={item.link} className={s.link} key={item.id}>
                    <Image 
                      src={getSocialsImage[item.socialPlatform]}
                      alt={item.altId}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className={s.center}>
            <ul className={s.base_list}>
            {data?.content?.map((item) => {
               return (
                <li 
                  className={s.base_item} key={item?.content?.id}
                >
                  {item?.content?.hasPhoto 
                  ? <Link href={item?.content?.link}>
                      <div className={s.image_container}>
                        <Image 
                          src={ContentImg}
                          alt={item.altId}
                        />
                        <div className={s.featured_link}>
                          <p className={s.featured_text}>
                            explore hoo.be
                          </p>
                          <div className={s.img_link}>
                            <Image 
                              src={HooBeWhiteIcon}
                              alt={'HooBe'} 
                              height={24}
                              width={24}
                            />
                          </div>
                        </div>
                      </div>

                  </Link>
                  : <div className={s.video}>
                    <YoutubeEmbed videoId={'UUvd_AUR6ErsRblEWHrCxlDQ'} />
                  </div>
                  }
                </li>
               )
              }
              )}
            </ul>
        </div>
      </div>

      <div className={s.bottom}><Footer /></div>
    </main>
  )
}
