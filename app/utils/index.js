import Instagram from './../../public/images/instagram.svg'
import Threads from './../../public/images/threads.svg'
import TikTok from './../../public/images/tiktok.svg'
import Twitter from './../../public/images/twitter.svg'

export const getSocialsImage = {
    [0]: Instagram,
    [59]: Threads,
    [6]: TikTok,
    [7]: Twitter
}


export async function getData() {
    const res = await fetch('/api')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
    