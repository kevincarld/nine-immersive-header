const URL = window.location.href;
const TITLE = document.title;
const DOMAIN = document.querySelector('meta[property="og:site_name"]')
  ? document
      .querySelector('meta[property="og:site_name"]')
      .getAttribute("content")
  : "NINE";

export default {
  sites: [
    {
      domain: "https://www.traveller.com.au/",
      urls: ["traveller"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/05/traveller-logo-black-2023.svg"
    },
    {
      domain: "https://www.afr.com",
      urls: ["afr"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/03/AFR-logo.svg"
    },
    {
      domain: "https://www.canberratimes.com.au",
      urls: ["canberratimes"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/canberra-times-logo-1.svg"
    },
    {
      domain: "https://www.essentialbaby.com.au/",
      urls: ["essentialbaby"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/essentialbaby.svg"
    },
    {
      domain: "https://www.essentialkids.com.au/",
      urls: ["essentialkids"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/essentialkids-logo.svg"
    },
    {
      domain: "http://www.executivestyle.com.au/",
      urls: ["executivestyle"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/executivestyle-logo.svg"
    },
    {
      domain: "https://www.goodfood.com.au/",
      urls: ["goodfood"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/goodfood-logo-1.svg"
    },
    {
      domain: "https://www.smh.com.au",
      urls: ["smh"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/smh-logo.svg"
    },
    {
      domain: "https://www.theage.com.au",
      urls: ["theage"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/the-age-logo-1-1.svg"
    },
    {
      domain: "https://www.brisbanetimes.com.au",
      urls: ["brisbanetimes"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/07/brisbanetimes-logo.svg"
    },
    {
      domain: "https://www.watoday.com.au",
      urls: ["watoday"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/wa-today-logo-1-1.svg"
    },
    {
      domain: "https://www.nine.com.au",
      urls: ["nine"],
      logo:
        "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2021/01/nine-logo.svg"
    }
  ],

  assets: {
    back: {
      svg: `<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M25.5 15H19V8.5c0-.3-.2-.5-.5-.5h-13c-.3 0-.5.2-.5.5v16c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V18h6.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm0 2H10.7c1.2 1 4.1 4.1 4.1 4.1.2.2.2.5 0 .7s-.5.2-.7 0l-5-5c-.2-.2-.2-.5 0-.7l5-5c.2-.2.5-.2.7 0s.2.5 0 .7L10.7 16h14.8c.3 0 .5.2.5.5s-.2.5-.5.5z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>`
    },
    facebook: {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-18173.518 10792.771 11.506 20.456"><defs><clipPath id="a"><path data-name="Path 21" d="M228.907 21.606H224.9v-1.79a.927.927 0 01.938-1.065h2.813V15H224.6c-3.665 0-4.39 2.77-4.39 4.56v2.046h-2.81V25.4h2.813v10.056h4.687V25.4h3.622z" transform="translate(-217.4 -15)"/></clipPath><clipPath id="b"><path data-name="Rectangle 38" d="M0 0h11.507v20.456H0z"/></clipPath></defs><g transform="translate(-18173.518 10792.772)" clip-path="url(#a)"><g clip-path="url(#b)"><path data-name="Rectangle 37" class="cls-3" d="M-6.393-6.393h24.292v33.241H-6.393z"/></g></g></svg>`,
      url: `https://www.facebook.com/sharer/sharer.php?u=${URL}&TITLE=${TITLE}`
    },
    twitter: {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-18128.258 10794.689 20.457 16.62">
        <defs><style>.tw-cls-1 {clip-path: url(#tw-clip-path);}.tw-cls-2 {clip-path: url(#tw-clip-path-2);}</style><clipPath id="tw-clip-path">
            <path d="M344.056,21.673a2.173,2.173,0,0,1-2.046,0c.852-.511.895-.895,1.193-1.875a9.455,9.455,0,0,1-2.642,1.023,4.131,4.131,0,0,0-7.16,2.855,3.323,3.323,0,0,0,.128.938,11.6,11.6,0,0,1-8.523-4.39,4.4,4.4,0,0,0-.554,2.131,4.241,4.241,0,0,0,1.833,3.495,4.542,4.542,0,0,1-1.875-.511v.043a4.252,4.252,0,0,0,3.324,4.134,3.971,3.971,0,0,1-1.875.085,4.079,4.079,0,0,0,3.878,2.9,8.285,8.285,0,0,1-6.137,1.747,11.573,11.573,0,0,0,6.35,1.875c7.628,0,11.762-6.393,11.762-11.933v-.554a9.563,9.563,0,0,0,2.344-1.96" transform="translate(-323.6 -19.5)"/></clipPath><clipPath id="tw-clip-path-2"><rect  width="20.456" height="17.899" transform="translate(0 0)"/></clipPath></defs><g transform="translate(-18128.259 10794.69)"><g class="tw-cls-1"><g class="tw-cls-2" transform="translate(0 -1.279)"><rect class="cls-3" width="33.241" height="29.406" transform="translate(-6.393 -5.114)"/></g></g></g></svg>`,
      url: `https://twitter.com/share?url=${URL}&text=${TITLE}&via=${DOMAIN}`
    },
    email: {
      svg: `<svg viewBox="0 0 32 26" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="nonzero"><path d="M16.53 18.447l15.3-15.3V1.37c0-.82-.82-1.366-1.776-1.366H1.776A1.684 1.684 0 000 1.37v1.776l15.3 15.3a1.025 1.025 0 001.23 0v.001z"/><path d="M17.486 20.632c-.392.414-.93.66-1.5.683a2.194 2.194 0 01-1.5-.683L0 6.288v17.35c0 .82.82 1.366 1.776 1.366h28.279a1.684 1.684 0 001.776-1.366V6.288L17.486 20.632z"/></g></svg>`,
      url: `mailto:?subject=${TITLE}&body=Have%20a%20read%20.%0A%0D${URL}`
    },
    linkedin: {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-21978.881 29.847 20.881 19.953"><path d="M-21958 42.086V49.8h-4.466v-7.192c0-1.8-.638-3.045-2.262-3.045a2.445 2.445 0 00-2.291 1.624 3.175 3.175 0 00-.145 1.1v7.511h-4.5s.058-12.209 0-13.457h4.466v1.916c0 .029-.029.029-.029.058h.029v-.058a4.438 4.438 0 014.031-2.233c2.958 0 5.162 1.914 5.162 6.061zm-18.358-12.239a2.345 2.345 0 00-2.523 2.32 2.311 2.311 0 002.465 2.32h.029a2.328 2.328 0 002.523-2.32 2.3 2.3 0 00-2.494-2.32zm-2.262 19.953h4.466V36.347h-4.466zm0 0"/></svg>`,
      url: `https://www.linkedin.com/shareArticle?url=${URL}&title=${TITLE}&mini=true&source=${DOMAIN}`
    }
  }
};
