import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
// const [sign,setSign]=useState(false)
export const Logo = (
  <svg
    class="_8pSp-"
    viewBox="0 0 559 825"
    height="49"
    width="34"
    fill="#fc8019"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
      fill="url(#paint0_linear_19447_66107)"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_19447_66107"
        x1="445.629"
        y1="63.8626"
        x2="160.773"
        y2="537.598"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF993A"></stop>
        <stop offset="1" stop-color="#F15700"></stop>
      </linearGradient>
    </defs>
  </svg>
);


export const foodApi = "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.4714457%26lng%3D88.3844319%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
export const color = "#ffa700";
export const CDN_url =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_558,h_320,c_fill/";
export const Swigy_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
// import TuneIcon from '@mui/icons-material/Tune';
export const filterObj = [
  {
    name: "Filter",
    icon: <TuneIcon/>,
    function:(cards,setFilterData)=>{

      const filteredCards=cards.filter((item)=>item?.card?.card?.info?.avgRating >=4.3);
      setFilterData(filteredCards)
    }
  },
  {
    name: "Sort by",
    icon: <KeyboardArrowUpIcon/>,
    function:(cards,setFilterData,setSign)=>{

      const filteredCards=cards.filter((item)=>item?.card?.card?.info?.avgRating >=4.3);
      setFilterData(filteredCards)
      setSign(true)
    }

  },
  {
    name: "Pure Veg",
    icon: <CloseIcon/>,
    function:(cards,setFilterData,setSign,sign)=>{

      const filteredCards=cards.filter((item)=>item?.card?.card?.info?.veg === true);
      setFilterData(filteredCards)
      setSign(!sign)
    }

  },
  {
    name: "Rs.300-Rs.600",
    icon: <CloseIcon/>,
    function:(cards,setFilterData,setSign,sign)=>{

      const filteredCards=cards.filter((item)=>item?.card?.card?.info?.veg===true);
      setFilterData(filteredCards)
      setSign(!sign)
    }

  },
  {
    name: "Less than Rs.300",
    icon: <CloseIcon/>,
    function:(cards,setFilterData,setSign,sign)=>{

      const filteredCards=cards.filter((item)=>item?.card?.card?.info?.avgRating >=4.3);
      setFilterData(filteredCards)
      setSign(!sign)

    }

  },
];
export const icon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    role="img"
    aria-hidden="true"
    strokeColor="rgba(2, 6, 12, 0.92)"
    fillColor="rgba(2, 6, 12, 0.92)"
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    ></circle>
    <path
      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
      fill="white"
    ></path>
    <defs>
      <linearGradient
        id="StoreRating20_svg__paint0_linear_32982_71567"
        x1="10"
        y1="1"
        x2="10"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#21973B"></stop>
        <stop offset="1" stop-color="#128540"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const cart = (
  <svg
    class="_1GTCc _173fq"
    viewBox="-1 0 37 32"
    height="20"
    width="20"
    fill="#686b78"
  >
    <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
  </svg>
);
export const loginIcon = (
  <svg class="_1GTCc" viewBox="6 0 12 24" height="19" width="18" fill="#686b78">
    <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
  </svg>
);
export const crosIcon=<svg aria-hidden="true" height="8" width="8" className="sc-gFqAkR pRavv" style={{ fillOpacity: 1, display: 'flex' }}>
<use xlinkHref="/core/sprite-2e61ee4e.svg#close12"></use>
</svg>