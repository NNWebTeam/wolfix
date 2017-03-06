import React from 'react'
import fbBtn from '../../assets/social-media/fb-icon.png'
import inBtn from '../../assets/social-media/in-icon.png'
import viBtn from '../../assets/social-media/vi-icon.png'
import './SocialMedia.scss'

const SocialMedia = (props) => 
<div className='socialMedia'>
    <div>
        <a href='https://www.facebook.com/WOLFix.WolfProjectStudio'>
            <img src={fbBtn} />
        </a>
    </div>
    <div>
        <a href=''>
            <img src={inBtn} />
        </a>
    </div>
    <div>
        <a href=''>
            <img src={viBtn} />
        </a>
    </div>
</div>

export default SocialMedia