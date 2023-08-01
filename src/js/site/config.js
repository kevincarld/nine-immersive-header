import backBtnSVG from "../../assets/back.svg";

import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";

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
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/03/AFR-logo.svg",
    },
    {
      domain: "https://www.canberratimes.com.au",
      urls: ["canberratimes"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/canberra-times-logo-1.svg",
    },
    {
      domain: "https://www.goodfood.com.au/",
      urls: ["goodfood"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/goodfood-logo.svg",
    },
    {
      domain: "https://www.brisbanetimes.com.au/",
      urls: ["brisbanetimes"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/03/brisbanetimes-logo1.svg",
    },
    {
      domain: "https://www.smh.com.au",
      urls: ["smh"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/06/smh-logo.svg",
    },
    {
      domain: "https://www.theage.com.au",
      urls: ["theage"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/the-age-logo-1-1.svg",
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
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2018/08/wa-today-logo-1-1.svg",
    },
    {
      domain: "https://www.nine.com.au",
      urls: ["nine"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2021/01/nine-logo.svg",
    },
    {
      domain: "https://honey.nine.com.au/",
      urls: ["honey"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9honey-logo.svg",
    },
    {
      domain: "https://style.nine.com.au/",
      urls: ["style"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9style-logob.svg",
    },
    {
      domain: "https://travel.nine.com.au/",
      urls: ["travel"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9travel.svg",
    },
    {
      domain: "https://kitchen.nine.com.au/",
      urls: ["kitchen"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9kitchen.svg",
    },
    {
      domain: "https://honey.nine.com.au/you",
      urls: ["you"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9you.svg",
    },
    {
      domain: "https://honey.nine.com.au/parenting",
      urls: ["parenting"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9parenting.svg",
    },
    {
      domain: "https://coach.nine.com.au/",
      urls: ["coach"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9coach.svg",
    },
    {
      domain: "https://honey.nine.com.au/pets",
      urls: ["pets"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9pets.svg",
    },
    {
      domain: "https://celebrity.nine.com.au/",
      urls: ["celebrity"],
      logo: "https://live-native-paid-content.pantheonsite.io/wp-content/uploads/2023/02/9celebrity.svg",
    },
  ],

  assets: {
    back: {
      svg: backBtnSVG,
    },
    facebook: {
      svg: facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${URL}&TITLE=${TITLE}`,
    },
    twitter: {
      svg: twitter,
      url: `https://twitter.com/share?url=${URL}&text=${TITLE}&via=${DOMAIN}`,
    },
    email: {
      svg: email,
      url: `mailto:?subject=${TITLE}&body=Have%20a%20read%20.%0A%0D${URL}`,
    },
    linkedin: {
      svg: linkedin,
      url: `https://www.linkedin.com/shareArticle?url=${URL}&title=${TITLE}&mini=true&source=${DOMAIN}`,
    },
  },
};
