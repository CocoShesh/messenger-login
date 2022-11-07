
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-items')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


// To automatically update the year in footer 
const yearFooter = document.querySelector('#current-year')
yearFooter.innerHTML = new Date().getFullYear()


// Language list
// Generated by : https://www.html-code-generator.com/javascript/json/languages-name-and-code
var languages_list = {
   "ar": "العربية",
   "de": "Deutsch",
   "en-UK": "English (UK)",
   "en-US": "English (US)",
   "es-ES": "Español (España)",
   "fr": "Français (France)",
   "he": "עברית",
   "hi": "हिन्दी",
   "id": "Bahasa Indonesia",
   "it": "Italiano",
   "ja": "日本語",
   "ko": "한국어",
   "no": "Norsk",
   "nn": "Nederlands",
   "pl": "Polski",
   "pt-BR": "Português (Brasil)",
   "pt-PT": "Português (Portugal)",
   "ro": "Română",
   "ru": "Pусский",
   "zh-HK": "中文（香港）",
   "zh-CN": "中文（简体）",
   "zh-TW": "中文（繁體）",
};

function languages_dropdown(user_language_code='') {
   let option = '';
   for (let language_code in languages_list) {
       let selected = (language_code == user_language_code) ? ' selected' : '';
       let value = language_code;
       let text = languages_list[language_code];
       option += '<option value="'+value+'"'+selected+'>'+text+'</option>';
   }
   document.getElementById('languages').innerHTML = option;
}

languages_dropdown("en-US"); // user language code for selected option