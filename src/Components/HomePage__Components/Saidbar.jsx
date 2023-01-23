import React from 'react'
import {useNavigate} from 'react-router-dom'
import Iconsax from "../../assets/Newsstrelka.svg"
import MangaStrelka from "../../assets/MangaStrelka.svg"
import FanficStrelka from "../../assets/FanficStrelka.svg"
import FriendsStrelka from "../../assets/FriendsStrelka.svg"
import Chatstrelka from "../../assets/Chatstrelka.svg"
import Animestrelka from '../../assets/Animestrelka.svg'
import Profilestrelka from '../../assets/Profilestrelka.svg'
import '../../Styles/HomePage2.css'
import { Link } from 'react-router-dom'

const Saidbar = () => {
  const navigate = useNavigate()
    return (
        <div>
              <div className='saidbar'>
                <Link to='/News'>
        <div className='News_hover'>
       <svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg"  className='novosty'>
<path d="M15.5438 11.7937C14.7563 11.7937 14.1375 11.1562 14.1375 10.3875V5.15625C14.1375 4.78329 14.2857 4.4256 14.5494 4.16188C14.8131 3.89816 15.1708 3.75 15.5438 3.75C15.9167 3.75 16.2744 3.89816 16.5381 4.16188C16.8019 4.4256 16.95 4.78329 16.95 5.15625V10.3688C16.95 11.1563 16.3313 11.7937 15.5438 11.7937ZM29.4563 11.7937C28.6688 11.7937 28.05 11.1562 28.05 10.3875V5.15625C28.05 4.78329 28.1982 4.4256 28.4619 4.16188C28.7256 3.89816 29.0833 3.75 29.4563 3.75C29.8292 3.75 30.1869 3.89816 30.4506 4.16188C30.7144 4.4256 30.8625 4.78329 30.8625 5.15625V10.3688C30.8625 11.1563 30.2438 11.7937 29.4563 11.7937ZM40.3125 29.6625C40.3125 29.9438 40.2188 30.225 39.975 30.4688L29.6438 40.875C29.4 41.1375 29.0813 41.25 28.7625 41.25C28.1438 41.25 27.5438 40.7625 27.5438 40.05V33.4875C27.5438 30.75 29.8688 28.4812 32.7188 28.4812C34.5 28.4625 36.975 28.4625 39.0938 28.4625C39.825 28.4625 40.3125 29.0437 40.3125 29.6625Z" className='News'/>
<path d="M40.3125 29.6625C40.3125 29.9437 40.2188 30.225 39.975 30.4687L29.6438 40.875C29.4 41.1375 29.0813 41.25 28.7625 41.25C28.1438 41.25 27.5438 40.7625 27.5438 40.05V33.4875C27.5438 30.75 29.8688 28.4812 32.7188 28.4812C34.5 28.4625 36.975 28.4625 39.0938 28.4625C39.825 28.4625 40.3125 29.0437 40.3125 29.6625Z" className='News'/>
<path d="M36.6937 8.4375C35.4562 7.51875 33.675 8.4 33.675 9.95625V10.1437C33.675 12.3375 32.1 14.3625 29.9062 14.5875C27.375 14.85 25.2375 12.8625 25.2375 10.3875V8.4375C25.2375 7.40625 24.3937 6.5625 23.3625 6.5625H21.6375C20.6062 6.5625 19.7625 7.40625 19.7625 8.4375V10.1437C19.7625 11.7937 18.8813 13.3313 17.5125 14.0813C17.4375 14.1375 17.3625 14.175 17.2875 14.2125C17.2688 14.2125 17.2687 14.2313 17.25 14.2313C17.1187 14.2875 16.9875 14.3437 16.8375 14.4C16.8 14.4187 16.7625 14.4187 16.725 14.4375C16.5 14.5125 16.2562 14.5688 15.9937 14.5875H15.975C15.6938 14.625 15.3938 14.625 15.1125 14.5875H15.0938C14.8313 14.5688 14.5875 14.5125 14.3625 14.4375C14.175 14.3812 13.9875 14.3063 13.8 14.2125C13.0619 13.8823 12.4353 13.3453 11.9961 12.6665C11.5568 11.9877 11.3237 11.1961 11.325 10.3875V9.95625C11.325 8.5125 9.7875 7.65 8.56875 8.26875C8.55 8.2875 8.53125 8.2875 8.5125 8.30625H8.49375C8.3625 8.4 8.25 8.49375 8.11875 8.5875C7.76868 8.866 7.44254 9.17332 7.14375 9.50625C6.99375 9.65625 6.8625 9.80625 6.73125 9.975C6.6375 10.0875 6.525 10.2 6.45 10.3313C6.35625 10.4438 6.28125 10.575 6.20625 10.6875C6.01579 10.9617 5.84655 11.25 5.7 11.55C5.6625 11.5875 5.64375 11.6063 5.64375 11.6438C5.53125 11.8688 5.41875 12.0938 5.34375 12.3375C5.2875 12.4313 5.26875 12.5062 5.23125 12.6C5.19375 12.675 5.175 12.7687 5.1375 12.8438C5.08125 13.0312 5.025 13.2375 4.96875 13.4438C4.89375 13.7063 4.8375 13.9875 4.8 14.2688C4.73183 14.7408 4.69425 15.2168 4.6875 15.6937V32.1187C4.6875 33.3179 4.92369 34.5053 5.38257 35.6131C5.84146 36.721 6.51407 37.7276 7.36198 38.5755C9.07442 40.288 11.397 41.25 13.8187 41.25H22.8562C23.8875 41.25 24.7312 40.4062 24.7312 39.375V33.4875C24.7312 29.175 28.3125 25.6687 32.7188 25.6687C33.7125 25.65 36.1313 25.65 38.4375 25.65C39.4688 25.65 40.3125 24.8063 40.3125 23.775V15.6937C40.3125 12.7125 38.8875 10.1063 36.6937 8.4375ZM20.8687 29.8312C20.7 30.3937 20.175 30.7875 19.5563 30.7875H12.7312C12.6375 30.7875 12.5625 30.7875 12.4875 30.75C12.1604 30.7022 11.862 30.5368 11.6481 30.2849C11.4341 30.033 11.3192 29.7117 11.325 29.3813C11.325 28.5938 11.9437 27.9562 12.7312 27.9562H19.5563C20.325 27.9562 20.9625 28.5938 20.9625 29.3813C20.9625 29.5312 20.9438 29.7 20.8687 29.8312ZM26.0812 22.875C25.9125 23.4375 25.3875 23.8312 24.7687 23.8312H12.7312C12.6375 23.8312 12.5625 23.8312 12.4875 23.7937C12.1604 23.7459 11.862 23.5806 11.6481 23.3287C11.4341 23.0767 11.3192 22.7555 11.325 22.425C11.325 21.6375 11.9437 21 12.7312 21H24.7687C25.5562 21 26.175 21.6375 26.175 22.425C26.175 22.575 26.1562 22.7437 26.0812 22.875Z" className='News'/>
</svg>
<div className='strelka'>
<img src={Iconsax} alt=""  ></img>
<span className='novosty'>Новости</span>
</div>
</div>
</Link>

<Link to="/manga">
<div className='Manga_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" className='manga'>
<g clipPath="url(#clip0_62_133)">
<path d="M6.25554 31.091C4.38914 28.5206 4.57578 21.3603 7.0021 20.9931C6.0689 8.69216 12.7879 4.10224 15.4009 2.08268C18.0139 0.0631114 23.4264 -0.487679 27.1592 0.430305C30.892 1.34829 34.9981 5.75461 36.4912 8.14137C37.6857 10.0508 38.6065 14.6897 38.9176 16.7704C38.9798 21.3603 39.0669 30.8339 38.9176 32.0089C38.7309 33.4777 38.3576 34.3957 37.0512 37.3333C35.7447 40.2708 32.1985 43.2084 30.1455 44.3099C28.503 45.1912 25.4795 45.0443 24.173 44.8607C22.8665 44.6159 19.4697 43.649 16.3341 41.7396C13.1986 39.8302 11.7925 35.3137 11.4815 33.2941C10.9215 34.2121 8.12194 33.6613 6.25554 31.091Z" fill="white"/>
<path d="M10.3616 23.5635C10.0506 22.5843 8.94316 20.6994 7.0021 20.9931M7.0021 20.9931C4.57578 21.3603 4.38914 28.5206 6.25554 31.091C8.12194 33.6613 10.9215 34.2121 11.4815 33.2941C11.7925 35.3137 13.1985 39.8302 16.3341 41.7396C19.4697 43.649 22.8665 44.6159 24.173 44.8607C25.4795 45.0443 28.503 45.1912 30.1455 44.3099C32.1985 43.2084 35.7447 40.2708 37.0512 37.3333C38.3576 34.3957 38.7309 33.4777 38.9176 32.009C39.0669 30.8339 38.9798 21.3603 38.9176 16.7704C38.6065 14.6897 37.6857 10.0508 36.4912 8.14137C34.9981 5.75461 30.892 1.34829 27.1592 0.430305C23.4264 -0.487679 18.0139 0.0631114 15.4009 2.08268C12.7879 4.10224 6.0689 8.69216 7.0021 20.9931ZM6.62882 25.2159C6.87767 23.9307 7.674 22.1314 8.8685 25.2159C9.11735 25.8279 9.57773 27.2722 9.42842 28.1534H8.12194C7.87308 28.8878 7.674 30.43 8.8685 30.7238C10.063 31.0175 10.1128 30.2342 9.98834 29.8058M18.3871 19.5244C19.6936 18.79 23.0531 17.6884 26.0394 19.1572C26.226 20.014 26.0767 21.8744 23.9863 22.4619C21.3734 23.1963 18.3871 21.9111 18.3871 19.5244ZM30.7054 19.8916C31.1409 19.402 32.3105 18.3861 33.505 18.2392C34.9981 18.0556 36.4912 18.4228 37.0512 19.1572C37.1134 20.0752 36.7525 22.0213 34.8115 22.4619C32.3852 23.0127 30.7054 21.5439 30.7054 19.8916Z" stroke="#313131" strokeWidth="0.5"/>
<path d="M29.075 21C29.1148 22.6479 29.2422 26.0901 29.4333 26.6761C29.6721 27.4085 30.5082 28.8732 29.5527 29.2394" stroke="#313131" strokeWidth="0.5"/>
<path d="M28.6901 33.5248C29.0076 33.5262 29.2306 33.5196 29.5171 33.4199C29.5485 33.409 29.5939 33.3513 29.5709 33.3156C29.4586 33.1412 28.9303 33.2338 28.7781 33.249C28.4881 33.2779 28.2191 33.3097 27.9257 33.3084C27.8832 33.3082 27.2941 33.2524 27.2804 33.345C27.2435 33.5959 28.7934 33.6673 29.0091 33.6682" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
<path d="M19.3897 16.952C21.8137 16.6027 24.6154 16.5641 27.2308 16.5641" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
<path d="M30.889 16.5788C32.3485 16.4108 33.883 16.0972 35.3562 16.076C35.947 16.0674 36.3846 16.0739 37.0551 16.0739" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
<path d="M22.9988 20.0681C23.516 20.1935 23.1641 19.8896 23.0495 20.1187" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
<path d="M34.289 19.9669C33.8588 19.9669 33.9527 20.135 34.289 19.9669" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
<path d="M28.0616 28.7762C28.1879 28.8293 28.3332 28.8478 28.4667 28.8774" stroke="#313131" strokeWidth="0.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_62_133">
<rect width="45" height="45" fill="white"/>
</clipPath>
</defs>
</svg>
<div className='strelka1'>
  <img src={MangaStrelka} alt="" />
  <span className='manga'>Манги</span>
</div>
</div>
</Link>

<Link to="fanfic">
<div className='Fanfic_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" className='Fanfic'>
<path d="M17.8125 36.5625V33.75H8.4375C7.40625 33.75 6.46875 33.3375 5.79375 32.6437C5.1 31.9688 4.6875 31.0312 4.6875 30C4.6875 28.0688 6.1875 26.4563 8.08125 26.2688C8.19375 26.25 8.30625 26.25 8.4375 26.25H36.5625C36.6937 26.25 36.8063 26.25 36.9188 26.2688C37.8188 26.3438 38.6063 26.7375 39.2062 27.3563C39.975 28.1063 40.3875 29.175 40.2938 30.3375C40.125 32.3062 38.3438 33.75 36.3562 33.75H27.1875V36.5625C27.1875 37.8057 26.6936 38.998 25.8146 39.8771C24.9355 40.7561 23.7432 41.25 22.5 41.25C21.2568 41.25 20.0645 40.7561 19.1854 39.8771C18.3064 38.998 17.8125 37.8057 17.8125 36.5625ZM32.2313 3.75H24.8438C24.3188 3.75 23.9062 4.1625 23.9062 4.6875V7.5C23.9062 8.26875 23.2687 8.90625 22.5 8.90625C22.3312 8.90625 22.1812 8.86875 22.0312 8.8125C21.4875 8.625 21.0938 8.1 21.0938 7.5V4.6875C21.0938 4.1625 20.6812 3.75 20.1562 3.75H17.325C16.8 3.75 16.3875 4.1625 16.3875 4.6875V13.125C16.3875 13.8938 15.75 14.5312 14.9812 14.5312C14.2125 14.5312 13.575 13.8938 13.575 13.125V4.6875C13.575 4.18125 13.2 3.7875 12.6938 3.75H12.6375C11.8626 3.76711 11.0996 3.94461 10.3967 4.27132C9.69382 4.59802 9.06625 5.06684 8.5536 5.6482C8.04094 6.22956 7.65432 6.91085 7.41812 7.6491C7.18192 8.38734 7.10127 9.16653 7.18125 9.9375L7.875 22.5938C7.93125 23.5875 8.75625 24.375 9.75 24.375H35.25C36.2437 24.375 37.0687 23.5875 37.125 22.5938L37.8187 9.9375C38.1562 6.61875 35.55 3.75 32.2313 3.75Z"/>
</svg>
<div className='strelka2'>
  <img src={FanficStrelka} alt="" />
  <span className='Fanfic'>фанфики</span>
</div>
</div>
</Link>

<Link to="friends">
<div className='Friends_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" className='Friends'>
<path d="M16.875 3.75C11.9625 3.75 7.96874 7.74375 7.96874 12.6562C7.96874 17.475 11.7375 21.375 16.65 21.5437C16.8 21.525 16.95 21.525 17.0625 21.5437H17.1937C19.4988 21.4668 21.6836 20.4965 23.2862 18.8379C24.8887 17.1794 25.7835 14.9626 25.7812 12.6562C25.7812 7.74375 21.7875 3.75 16.875 3.75ZM26.4 26.5294C21.1687 23.0419 12.6375 23.0419 7.36874 26.5294C4.98749 28.1231 3.67499 30.2794 3.67499 32.5856C3.67499 34.8919 4.98749 37.0294 7.34999 38.6044C9.97499 40.3669 13.425 41.2481 16.875 41.2481C20.325 41.2481 23.775 40.3669 26.4 38.6044C28.7625 37.0106 30.075 34.8731 30.075 32.5481C30.0562 30.2419 28.7625 28.1044 26.4 26.5294ZM37.4812 13.7587C37.7812 17.3962 35.1937 20.5837 31.6125 21.015H31.5187C31.4062 21.015 31.2937 21.015 31.2 21.0525C29.3812 21.1462 27.7125 20.565 26.4562 19.4962C28.3875 17.7712 29.4937 15.1838 29.2687 12.3713C29.1401 10.9088 28.6434 9.50261 27.825 8.28375C28.8075 7.80578 29.8915 7.574 30.9835 7.60841C32.0755 7.64283 33.1428 7.9424 34.0933 8.48129C35.0437 9.02017 35.8487 9.78219 36.439 10.7016C37.0292 11.621 37.3869 12.6703 37.4812 13.7587Z" />
<path d="M41.2275 31.1063C41.0775 32.925 39.915 34.5 37.965 35.5688C36.09 36.6 33.7275 37.0875 31.3837 37.0313C32.7337 35.8125 33.5212 34.2938 33.6712 32.6813C33.8587 30.3563 32.7525 28.125 30.54 26.3438C29.2837 25.35 27.8212 24.5625 26.2275 23.9813C30.3712 22.7813 35.5837 23.5875 38.79 26.175C40.515 27.5625 41.3962 29.3063 41.2275 31.1063Z"/>
</svg>
<div className='strelka3'>
  <img src={FriendsStrelka} alt="" />
  <span className='Friends'>Друзья</span>
</div>
</div>
</Link>

<Link to="/chat">
<div className='Chat_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" className='chat'>
<path d="M24.7312 11.25H12.7312C12.2437 11.25 11.775 11.2687 11.325 11.325C6.28125 11.7562 3.75 14.7375 3.75 20.2312V27.7313C3.75 35.2313 6.75 36.7125 12.7312 36.7125H13.4812C13.8938 36.7125 14.4375 36.9937 14.6812 37.3125L16.9312 40.3125C17.925 41.6437 19.5375 41.6437 20.5312 40.3125L22.7812 37.3125C23.0625 36.9375 23.5125 36.7125 23.9813 36.7125H24.7312C30.225 36.7125 33.2063 34.2 33.6375 29.1375C33.6938 28.6875 33.7125 28.2188 33.7125 27.7313V20.2312C33.7125 14.25 30.7125 11.25 24.7312 11.25ZM12.1875 26.25C11.1375 26.25 10.3125 25.4062 10.3125 24.375C10.3125 23.3438 11.1562 22.5 12.1875 22.5C13.2188 22.5 14.0625 23.3438 14.0625 24.375C14.0625 25.4062 13.2188 26.25 12.1875 26.25ZM18.7312 26.25C17.6812 26.25 16.8562 25.4062 16.8562 24.375C16.8562 23.3438 17.7 22.5 18.7312 22.5C19.7625 22.5 20.6062 23.3438 20.6062 24.375C20.6062 25.4062 19.7812 26.25 18.7312 26.25ZM25.2937 26.25C24.2437 26.25 23.4187 25.4062 23.4187 24.375C23.4187 23.3438 24.2625 22.5 25.2937 22.5C26.325 22.5 27.1687 23.3438 27.1687 24.375C27.1687 25.4062 26.325 26.25 25.2937 26.25Z" />
<path d="M41.2125 12.7312V20.2313C41.2125 23.9813 40.05 26.5312 37.725 27.9375C37.1625 28.275 36.5062 27.825 36.5062 27.1687L36.525 20.2313C36.525 12.7312 32.2312 8.4375 24.7312 8.4375L13.3125 8.45625C12.6562 8.45625 12.2062 7.8 12.5437 7.2375C13.95 4.9125 16.5 3.75 20.2312 3.75H32.2312C38.2125 3.75 41.2125 6.75 41.2125 12.7312Z"/>
</svg>
<div className='strelka4'>
  <img src={Chatstrelka} alt="" />
  <span className='chat'>Чат</span>
</div>
</div>
</Link>

<Link to="/anime">
<div className='Anime_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" className='anime'>
<path d="M22.5 3.75C12.15 3.75 3.75 12.15 3.75 22.5C3.75 32.85 12.15 41.25 22.5 41.25C32.85 41.25 41.25 32.85 41.25 22.5C41.25 12.15 32.85 3.75 22.5 3.75ZM27.4875 25.7437L25.0875 27.1313L22.6875 28.5187C19.5938 30.3 17.0625 28.8375 17.0625 25.275V19.725C17.0625 16.1438 19.5938 14.7 22.6875 16.4812L25.0875 17.8687L27.4875 19.2563C30.5812 21.0375 30.5812 23.9625 27.4875 25.7437Z"/>
</svg>
<div className='strelka5'>
    <img src={Animestrelka} alt="" />
    <span className='anime'>Аниме</span>
</div>
</div>
</Link>

<Link to="Register">
<div className='Profile_hover'>
<svg width="45" height="45" viewBox="0 0 45 45" fill="white" xmlns="http://www.w3.org/2000/svg" 
// xmlns:xlink="http://www.w3.org/1999/xlink"
className='Profile'>
<g clipPath="url(#clip0_62_200)" >
<path d="M22.5 3.75C17.5875 3.75 13.5937 7.74375 13.5937 12.6562C13.5937 17.475 17.3625 21.375 22.275 21.5437C22.425 21.525 22.575 21.525 22.6875 21.5437H22.8187C25.1238 21.4668 27.3086 20.4965 28.9112 18.8379C30.5137 17.1794 31.4085 14.9626 31.4062 12.6562C31.4062 7.74375 27.4125 3.75 22.5 3.75ZM32.025 26.5294C26.7937 23.0419 18.2625 23.0419 12.9937 26.5294C10.6125 28.1231 9.29999 30.2794 9.29999 32.5856C9.29999 34.8919 10.6125 37.0294 12.975 38.6044C15.6 40.3669 19.05 41.2481 22.5 41.2481C25.95 41.2481 29.4 40.3669 32.025 38.6044C34.3875 37.0106 35.7 34.8731 35.7 32.5481C35.6812 30.2419 34.3875 28.1044 32.025 26.5294Z"/>

</g>
</svg>
<div className='strelka6'>
<img src={Profilestrelka} alt="" />
<span className='Profile' onClick={navigate('/profile')}>Профиль</span>
</div>
</div>
</Link>
       </div>



        </div>
    );
};

export default Saidbar;