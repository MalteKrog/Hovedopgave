import React from 'react'
import './landingpage.css'



const FpBg = () => {
  Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray:'+pathElement.getTotalLength()+';stroke-dashoffset:'+pathElement.getTotalLength())
})
  return (
      <svg clasName='svg' viewBox="0 0 1728 917" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect x="0.00012207" width="1728" height="1117" fill="url(#pattern0)"/>
        <path className='path' data-index="0" d="M-250 575C-36.4998 561 220.9 914.5 528.5 790.5C913 635.5 973 460.5 1825 482" stroke="url(#paint0_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="1" d="M-221.461 455.83C-8.14933 472.455 196.145 859.083 518.297 780.269C920.988 681.751 1005.36 517.11 1845.56 660.029" stroke="url(#paint1_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="8" d="M-219.346 440.305C-6.57775 462.845 186.906 854.994 511.122 785.152C916.392 697.85 1005.3 535.615 1841.21 701.8" stroke="url(#paint2_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="2" d="M-233.666 566.913C-19.8354 559.519 226.513 920.808 537.8 806.376C926.908 663.337 992.289 490.275 1843.22 538.104" stroke="url(#paint3_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="3" d="M-244.274 526.193C-30.6534 514.171 223.461 870.041 532.196 748.896C918.116 597.465 979.734 423.028 1831.5 452.42" stroke="url(#paint4_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="4" d="M-240.451 518.825C-26.5226 522.41 200.969 895.859 517.716 797.546C913.649 674.655 987.821 505.175 1835.18 596.59" stroke="url(#paint5_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="5" d="M-251.876 570.461C-38.9625 549.345 230.09 894.059 533.381 759.865C912.495 592.121 966.622 415.216 1818.86 408.275" stroke="url(#paint6_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="6" d="M-250 575C-36.4998 561 220.9 914.5 528.5 790.5C913 635.5 973 460.5 1825 482" stroke="url(#paint7_linear_2_50)" stroke-width="0.5"/>
        <path className='path' data-index="7" d="M-245.234 575C-32.7075 550.284 242.139 890.397 543.116 751.089C919.337 576.955 970.463 399.16 1822.47 377.799" stroke="url(#paint8_linear_2_50)" stroke-width="0.5"/>
        <rect width="1728" height="1117" fill="url(#pattern1)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use className="rings" xlinkHref="#image0_2_50" transform="scale(0.000578704 0.000895255)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use className="rings" xlinkHref="#image1_2_50" transform="scale(0.000578704 0.000895255)"/>
        </pattern>
        <linearGradient id="paint0_linear_2_50" x1="787.5" y1="480.199" x2="787.5" y2="816.921" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2_50" x1="818.946" y1="510.123" x2="770.872" y2="843.396" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2_50" x1="819.153" y1="523.456" x2="761.847" y2="855.266" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint3_linear_2_50" x1="806.269" y1="504.23" x2="795.859" y2="840.791" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint4_linear_2_50" x1="794.06" y1="441.007" x2="790.94" y2="777.715" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2_50" x1="801.33" y1="509.569" x2="773.67" y2="845.153" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint6_linear_2_50" x1="781.882" y1="441.094" x2="793.118" y2="777.628" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint7_linear_2_50" x1="787.5" y1="480.199" x2="787.5" y2="816.921" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="paint8_linear_2_50" x1="786.188" y1="428.159" x2="803.117" y2="764.456" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0.7"/>
        <stop offset="0.276042" stop-color="white" stop-opacity="0.3"/>
        <stop offset="0.552083" stop-color="white"/>
        <stop offset="0.744792" stop-color="white" stop-opacity="0.8"/>
        <stop offset="0.859375" stop-color="white" stop-opacity="0.8"/>
        <stop offset="1" stop-color="white" stop-opacity="0.7"/>
</linearGradient>

</defs>
</svg>

  ) 
}

export default FpBg