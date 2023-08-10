import Image from 'next/image'
import HoobeIconBtn from './../../../public/images/hoobe-icon-revert.svg'
import s from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.wrap}>
            <button className={s.primary_btn}>
                <Image 
                    src={HoobeIconBtn}
                    alt={"hoobe"}
                    className={s.image_btn}
                />
                create your hoo.be
            </button>
            <button className={s.simple_btn}>login</button>
        </footer>
    )
}