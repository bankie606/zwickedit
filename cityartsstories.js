var app = angular.module('zwickCityArts', ['ngRoute']);

(function(angular){
app.controller('myCtrl', function($scope) {
    $scope.stories = [

//{
// "selection1": [
  
  {
   "name": "A Peaceful Rumble",
   "url": "http://www.cityartsonline.com/articles/peaceful-rumble",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/421011_10150652217349324_560605376_n.jpg?itok=4ctW4boh",
   "storypic_url": "http://www.cityartsonline.com/articles/peaceful-rumble"
  },
  {
   "name": "Bumbershoot! Sept. 1-3",
   "url": "http://www.cityartsonline.com/articles/bumbershoot-sept-1-3",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NEW-PRESS-SHOT-General-Use-Credit_-Brendan-Walter-1-600s.jpg?itok=5IqfDN6e",
   "storypic_url": "http://www.cityartsonline.com/articles/bumbershoot-sept-1-3"
  },
  {
   "name": "King Of The Hill",
   "url": "http://www.cityartsonline.com/articles/king-hill",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Will%20Jordan_Byron%20Israel_600.jpg?itok=LcpVluml",
   "storypic_url": "http://www.cityartsonline.com/articles/king-hill"
  },
  {
   "name": "Attractive Singles: August 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-august-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Unknown_0.jpeg?itok=wxWqTlbF",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-august-2017"
  },
  {
   "name": "'The Charcoal Sky' Captures Changing Relationships to Meaningful Places",
   "url": "http://www.cityartsonline.com/articles/charcoal-sky-captures-changing-relationships-meaningful-places",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Khalil_Lighter_Final1.jpg?itok=v0sVe3tM",
   "storypic_url": "http://www.cityartsonline.com/articles/charcoal-sky-captures-changing-relationships-meaningful-places"
  },
  {
   "name": "By the People, For the People",
   "url": "http://www.cityartsonline.com/articles/people-people",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Lifestylebars_Screwdriver_KellyO_600.jpg?itok=XTQjKjJc",
   "storypic_url": "http://www.cityartsonline.com/articles/people-people"
  },
  {
   "name": "Shabazz Palaces Strike Twice",
   "url": "http://www.cityartsonline.com/articles/shabazz-palaces-strike-twice",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/shabazzpalaces-2017-promo-03-photo-victoriakovios-1500x2106-300.jpg?itok=7Hzgmxh2",
   "storypic_url": "http://www.cityartsonline.com/articles/shabazz-palaces-strike-twice"
  },
  {
   "name": "Set It On Fire",
   "url": "http://www.cityartsonline.com/articles/set-it-fire",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/DSC_7704_crop-600w.jpg?itok=hpljDaUR",
   "storypic_url": "http://www.cityartsonline.com/articles/set-it-fire"
  },
  {
   "name": "Album of the Month: 'Plastic Cough' by Great Grandpa",
   "url": "http://www.cityartsonline.com/articles/album-month-plastic-cough-great-grandpa",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/greatgrandpa-plasticcough-600s.jpg?itok=bWajMfmN",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-plastic-cough-great-grandpa"
  },
  {
   "name": "Attractive Singles: July 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-july-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-Lydia-Ramsey-600w.jpg?itok=sacmbegS",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-july-2017"
  },
  {
   "name": "In the UW Archive of a Northwest Recording Icon",
   "url": "http://www.cityartsonline.com/articles/uw-archive-northwest-recording-icon",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Kearney_Barton.jpg?itok=5RlImh-G",
   "storypic_url": "http://www.cityartsonline.com/articles/uw-archive-northwest-recording-icon"
  },
  {
   "name": "Cocktail Immersion",
   "url": "http://www.cityartsonline.com/articles/cocktail-immersion",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NavyStrength1_KellyO-600v.jpg?itok=oNRL-Aie",
   "storypic_url": "http://www.cityartsonline.com/articles/cocktail-immersion"
  },
  {
   "name": "Album of the Month: 'El Radio' by Vince Mira",
   "url": "http://www.cityartsonline.com/articles/album-month-el-radio-vince-mira",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/vince%20mira%20final%20art%20cmyk-600w.jpg?itok=mf1yvQub",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-el-radio-vince-mira"
  },
  {
   "name": "Attractive Singles: June 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-june-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-tinyvipers-600w.jpg?itok=u3enL4oY",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-june-2017"
  },
  {
   "name": "The Northwest’s Best Summer Fests",
   "url": "http://www.cityartsonline.com/articles/northwest%E2%80%99s-best-summer-fests",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/fest-manateecommune_bridgetbaker-600w_0.jpg?itok=ZA8YmW48",
   "storypic_url": "http://www.cityartsonline.com/articles/northwest%E2%80%99s-best-summer-fests"
  },
  {
   "name": "Draze: \"Ain't Nobody Talking About No Real Shit\"",
   "url": "http://www.cityartsonline.com/articles/draze-aint-nobody-talking-about-no-real-shit",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed_4.jpg?itok=GBHl46xq",
   "storypic_url": "http://www.cityartsonline.com/articles/draze-aint-nobody-talking-about-no-real-shit"
  },
  {
   "name": "Electric Sky Turns On",
   "url": "http://www.cityartsonline.com/articles/electric-sky-turns",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lumgaratlusio3.jpg?itok=IJMduRBA",
   "storypic_url": "http://www.cityartsonline.com/articles/electric-sky-turns"
  },
  {
   "name": "Ongoing Anachronism",
   "url": "http://www.cityartsonline.com/articles/ongoing-anachronism",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NightJar-1%20Kelly%20O-600w.jpg?itok=kKBfliSl",
   "storypic_url": "http://www.cityartsonline.com/articles/ongoing-anachronism"
  },
  {
   "name": "'Animal Skin': Your Ticket to Interdimensional Travel",
   "url": "http://www.cityartsonline.com/articles/animal-skin-your-ticket-interdimensional-travel",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202017-05-17%20at%2012.35.39%20PM.png?itok=coIE8-05",
   "storypic_url": "http://www.cityartsonline.com/articles/animal-skin-your-ticket-interdimensional-travel"
  },
  {
   "name": "Instant Classic",
   "url": "http://www.cityartsonline.com/articles/instant-classic",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qna_jordan_rathke_600v%20-%20Copy.png?itok=cMxxa6ed",
   "storypic_url": "http://www.cityartsonline.com/articles/instant-classic"
  },
  {
   "name": "Supra-Human",
   "url": "http://www.cityartsonline.com/articles/supra-human",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/AD_SALT_02_0102-600w.jpg?itok=MMvi_NyF",
   "storypic_url": "http://www.cityartsonline.com/articles/supra-human"
  },
  {
   "name": "Album of the Month: 'No Shape' by Perfume Genius",
   "url": "http://www.cityartsonline.com/articles/album-month-no-shape-perfume-genius",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/perfume-genius-600s%20-%20Copy_0.jpg?itok=_VqQ6B3G",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-no-shape-perfume-genius"
  },
  {
   "name": "Attractive Singles: May 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-may-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-ora-corgan-600s%20-%20Copy.jpg?itok=eyMQLVhc",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-may-2017"
  },
  {
   "name": "Surfing Upstream",
   "url": "http://www.cityartsonline.com/articles/surfing-upstream",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Upstream.png?itok=y-1YtphF",
   "storypic_url": "http://www.cityartsonline.com/articles/surfing-upstream"
  },
  {
   "name": "Seattle Women’s Steel Pan Project Steps Up",
   "url": "http://www.cityartsonline.com/articles/seattle-women%E2%80%99s-steel-pan-project-steps",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/SteelPan-Group022.jpg?itok=0KstObmE",
   "storypic_url": "http://www.cityartsonline.com/articles/seattle-women%E2%80%99s-steel-pan-project-steps"
  },
  {
   "name": "\"Keys to the City\" by Bread & Butter",
   "url": "http://www.cityartsonline.com/articles/keys-city-bread-butter",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202017-04-06%20at%2010.42.39%20AM.png?itok=wNC6zRFX",
   "storypic_url": "http://www.cityartsonline.com/articles/keys-city-bread-butter"
  },
  {
   "name": "Sera Cahoone",
   "url": "http://www.cityartsonline.com/articles/sera-cahoone",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Sera_Cahoone-600v.png?itok=VxH1dSP9",
   "storypic_url": "http://www.cityartsonline.com/articles/sera-cahoone"
  },
  {
   "name": "Moon Palace Meets Pierced Ears",
   "url": "http://www.cityartsonline.com/articles/moon-palace-meets-pierced-ears",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/AaronSchroeder_SteveKorn-600w.jpg?itok=DkmjWAEE",
   "storypic_url": "http://www.cityartsonline.com/articles/moon-palace-meets-pierced-ears"
  },
  {
   "name": "Northern Natives",
   "url": "http://www.cityartsonline.com/articles/northern-natives",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Northern_kyo_ken-600s.png?itok=6ymeZwRU",
   "storypic_url": "http://www.cityartsonline.com/articles/northern-natives"
  },
  {
   "name": "Best New Music 2017",
   "url": "http://www.cityartsonline.com/articles/best-new-music-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NewMusic_NightShiftHands_Toryan%20Dixon-600w.jpg?itok=6KL13_aW",
   "storypic_url": "http://www.cityartsonline.com/articles/best-new-music-2017"
  },
  {
   "name": "Goodsteph",
   "url": "http://www.cityartsonline.com/articles/goodsteph",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Goodsteph-600v.jpg?itok=nQVbY6xa",
   "storypic_url": "http://www.cityartsonline.com/articles/goodsteph"
  },
  {
   "name": "Attractive Singles: April 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-april-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/chastitybelt4-600w.jpg?itok=Dvo_0oVW",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-april-2017"
  },
  {
   "name": "The Evolution of OK Sweetheart",
   "url": "http://www.cityartsonline.com/articles/evolution-ok-sweetheart-0",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/OK%20Sweetheart%20by%20Carmen%20Holt_0.jpg?itok=tmM0E1AV",
   "storypic_url": "http://www.cityartsonline.com/articles/evolution-ok-sweetheart-0"
  },
  {
   "name": "ShabazzoCat Taco Palaces",
   "url": "http://www.cityartsonline.com/articles/shabazzocat-taco-palaces",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/GoodshipSessions_04.jpg?itok=KEox-6KH",
   "storypic_url": "http://www.cityartsonline.com/articles/shabazzocat-taco-palaces"
  },
  {
   "name": "Documentary Filmmaker + Blues Musician: Tracy Rector and Ben Hunter",
   "url": "http://www.cityartsonline.com/articles/documentary-filmmaker-blues-musician-tracy-rector-and-ben-hunter",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/TRACY-BEN.jpg?itok=G-sS-f7w",
   "storypic_url": "http://www.cityartsonline.com/articles/documentary-filmmaker-blues-musician-tracy-rector-and-ben-hunter"
  },
  {
   "name": "Enlightened Capitalism",
   "url": "http://www.cityartsonline.com/articles/enlightened-capitalism",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news_StarbucksFerguson-600s.jpg?itok=o26WUKQn",
   "storypic_url": "http://www.cityartsonline.com/articles/enlightened-capitalism"
  },
  {
   "name": "Album of the Month: 'Watercolor' by Porter Ray",
   "url": "http://www.cityartsonline.com/articles/album-month-watercolor-porter-ray",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/PorterRay_JayScroggins-600w.jpg?itok=dJOMawII",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-watercolor-porter-ray"
  },
  {
   "name": "Attractive Singles: March 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-march-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/allredbroderick_1-600w.jpg?itok=uefr0fXY",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-march-2017"
  },
  {
   "name": "Infinite Power",
   "url": "http://www.cityartsonline.com/articles/infinite-power",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/EricLiu_NateGowdy-600v.jpg?itok=vQgS4uWA",
   "storypic_url": "http://www.cityartsonline.com/articles/infinite-power"
  },
  {
   "name": "The Price of Freedom",
   "url": "http://www.cityartsonline.com/articles/price-freedom",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/chicano_batman_shoot%20-4.jpg?itok=MZ5ZrxzZ",
   "storypic_url": "http://www.cityartsonline.com/articles/price-freedom"
  },
  {
   "name": "Brenda Xu, \"Lovely Storm\"",
   "url": "http://www.cityartsonline.com/articles/brenda-xu-lovely-storm",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Brenda-Xu-590x891.jpg?itok=ckESe0Z_",
   "storypic_url": "http://www.cityartsonline.com/articles/brenda-xu-lovely-storm"
  },
  {
   "name": "Activist Rapper + Ephemeral Revolutionary: Yirim Seck and D.K. Pan",
   "url": "http://www.cityartsonline.com/articles/activist-rapper-ephemeral-revolutionary-yirim-seck-and-dk-pan",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/DK-YIRIM.jpg?itok=INldB5om",
   "storypic_url": "http://www.cityartsonline.com/articles/activist-rapper-ephemeral-revolutionary-yirim-seck-and-dk-pan"
  },
  {
   "name": "\"Trapped\" by Alicia Mullikin, Amos Miller and Ryan Hills",
   "url": "http://www.cityartsonline.com/articles/trapped-alicia-mullikin-amos-miller-and-ryan-hills",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202017-02-02%20at%2010.49.40%20AM.png?itok=SWq_Zbl6",
   "storypic_url": "http://www.cityartsonline.com/articles/trapped-alicia-mullikin-amos-miller-and-ryan-hills"
  },
  {
   "name": "Louden Up",
   "url": "http://www.cityartsonline.com/articles/louden",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/loudenup-600w.jpg?itok=jPFgiv4L",
   "storypic_url": "http://www.cityartsonline.com/articles/louden"
  },
  {
   "name": "Avant Gardener",
   "url": "http://www.cityartsonline.com/articles/avant-gardener",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/RIZ%20cutting_Kelly%20O-600w.jpg?itok=r6iJoNYf",
   "storypic_url": "http://www.cityartsonline.com/articles/avant-gardener"
  },
  {
   "name": "Pop Intuition",
   "url": "http://www.cityartsonline.com/articles/pop-intuition",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/AndrewJoslin_SteveKorn-600w.jpg?itok=c2xHIsfi",
   "storypic_url": "http://www.cityartsonline.com/articles/pop-intuition"
  },
  {
   "name": "Album of the Month: 'Sincerely' by Dude York",
   "url": "http://www.cityartsonline.com/articles/album-month-sincerely-dude-york",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/dudeyork-lp1-600s.jpg?itok=jZdM4bQI",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-sincerely-dude-york"
  },
  {
   "name": "Attractive Singles: February 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-february-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-kellischaefer-600s.jpg?itok=rR3QsxZA",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-february-2017"
  },
  {
   "name": "Kitsch *NSYNC",
   "url": "http://www.cityartsonline.com/articles/kitsch-nsync",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed_3.jpg?itok=iHdrRn-l",
   "storypic_url": "http://www.cityartsonline.com/articles/kitsch-nsync"
  },
  {
   "name": "Music to Do on New Year's Eve",
   "url": "http://www.cityartsonline.com/articles/music-do-new-years-eve",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/TangoThunderGoodness-4_0.jpg?itok=3FAHl9dv",
   "storypic_url": "http://www.cityartsonline.com/articles/music-do-new-years-eve"
  },
  {
   "name": "The Year in Listening",
   "url": "http://www.cityartsonline.com/articles/year-listening",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Obama_listening.jpg?itok=wiJg2iW0",
   "storypic_url": "http://www.cityartsonline.com/articles/year-listening"
  },
  {
   "name": "Attractive Singles: January 2017",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-january-2017",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-jvon-600v.jpg?itok=RD6HvzXR",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-january-2017"
  },
  {
   "name": "Album of the Month: 'Sewn Me Anew' by Emma Lee Toyoda",
   "url": "http://www.cityartsonline.com/articles/album-month-sewn-me-anew-emma-lee-toyoda",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ELT%20CD%20FRONT-600s.png?itok=USoKeoV2",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-sewn-me-anew-emma-lee-toyoda"
  },
  {
   "name": "Greener Pastures",
   "url": "http://www.cityartsonline.com/articles/greener-pastures",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Goodship-Sessions_Tokeland_BenLindbloom-600w.jpg?itok=vRbYWpkK",
   "storypic_url": "http://www.cityartsonline.com/articles/greener-pastures"
  },
  {
   "name": "Ian Cunningham: Drummer, Designer, Boss",
   "url": "http://www.cityartsonline.com/articles/ian-cunningham-drummer-designer-boss",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Ian%20Cunnigham%20-%20Final-600w.jpg?itok=2mRTDwFJ",
   "storypic_url": "http://www.cityartsonline.com/articles/ian-cunningham-drummer-designer-boss"
  },
  {
   "name": "Ari Glass: Spiritual Painter",
   "url": "http://www.cityartsonline.com/articles/ari-glass-spiritual-painter",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Ari%20Glass%20-%20Final-600w.jpg?itok=q3lQJ-W2",
   "storypic_url": "http://www.cityartsonline.com/articles/ari-glass-spiritual-painter"
  },
  {
   "name": "ATTRACTIVE SINGLES YEAR-END APOCALYPSE MEGAMIXXX",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-year-end-apocalypse-megamixxx",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Doomsday-1.jpg?itok=HhGc9qnl",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-year-end-apocalypse-megamixxx"
  },
  {
   "name": "\"Ain't Going Nowhere Blues\" by Mindie Lind",
   "url": "http://www.cityartsonline.com/articles/aint-going-nowhere-blues-mindie-lind",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-12-14%20at%201.15.58%20PM.png?itok=XRiyIUTl",
   "storypic_url": "http://www.cityartsonline.com/articles/aint-going-nowhere-blues-mindie-lind"
  },
  {
   "name": "David Byrne, Imelda Marcos and Seattle Rep",
   "url": "http://www.cityartsonline.com/articles/david-byrne-imelda-marcos-and-seattle-rep",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/45be4bbe49d67ca2d53dbdc90b9b8362.jpg?itok=bQqlYmny",
   "storypic_url": "http://www.cityartsonline.com/articles/david-byrne-imelda-marcos-and-seattle-rep"
  },
  {
   "name": "The True Loves Rise",
   "url": "http://www.cityartsonline.com/articles/true-loves-rise",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-11-23%20at%2011.11.53%20AM.png?itok=C5bt8_P6",
   "storypic_url": "http://www.cityartsonline.com/articles/true-loves-rise"
  },
  {
   "name": "Video Premiere: \"Trails\" by SISTERS",
   "url": "http://www.cityartsonline.com/articles/video-premiere-trails-sisters",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-11-22%20at%2012.10.00%20PM.png?itok=AEOJ-RbF",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-trails-sisters"
  },
  {
   "name": "All You Can Eat",
   "url": "http://www.cityartsonline.com/articles/all-you-can-eat",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news-P-028_2000.107.139.xx_.03_PellegriniAngelo-600v.jpg?itok=6tWOxl1H",
   "storypic_url": "http://www.cityartsonline.com/articles/all-you-can-eat"
  },
  {
   "name": "Album of the Month: 'Northern Natives EP' by Various Artists",
   "url": "http://www.cityartsonline.com/articles/album-month-northern-natives-ep-various-artists",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-Northern%20Natives%20album%20cover-600w.jpg?itok=Vf3flmZz",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-northern-natives-ep-various-artists"
  },
  {
   "name": "Attractive Singles: December 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-december-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-Moon_Duo_2014-600w.jpg?itok=0Je-7ySu",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-december-2016"
  },
  {
   "name": "\"2 Live for the City\"",
   "url": "http://www.cityartsonline.com/articles/2-live-city",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/130531_RADIORAHEEM_1369_RF_0.jpg?itok=dSgiuz6m",
   "storypic_url": "http://www.cityartsonline.com/articles/2-live-city"
  },
  {
   "name": "'Breathe, Just Breathe'",
   "url": "http://www.cityartsonline.com/articles/breathe-just-breathe",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-11-14%20at%203.08.16%20PM.png?itok=5fDbQDP4",
   "storypic_url": "http://www.cityartsonline.com/articles/breathe-just-breathe"
  },
  {
   "name": "Grace Love Lasts",
   "url": "http://www.cityartsonline.com/articles/grace-love-lasts",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/373c180e5ffe82390b67aa0c64172303.jpg?itok=5IG8CeBA",
   "storypic_url": "http://www.cityartsonline.com/articles/grace-love-lasts"
  },
  {
   "name": "Grassroots Revolution",
   "url": "http://www.cityartsonline.com/articles/grassroots-revolution",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Black%26Tan_SteveKorn-600w.jpg?itok=sA_coN0A",
   "storypic_url": "http://www.cityartsonline.com/articles/grassroots-revolution"
  },
  {
   "name": "Album of the Month: 'Red World' by Merso",
   "url": "http://www.cityartsonline.com/articles/album-month-red-world-merso",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Merso-Redworld-web-600w.jpg?itok=8DSKwHn4",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-red-world-merso"
  },
  {
   "name": "Attractive Singles: November 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-november-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-raven-matthews-600w.jpg?itok=Jf8BhL9H",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-november-2016"
  },
  {
   "name": "Video Premiere: \"Falling Apart\" by Maiah Manser",
   "url": "http://www.cityartsonline.com/articles/video-premiere-falling-apart-maiah-manser",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unspecified_1.jpg?itok=E4YEbEmf",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-falling-apart-maiah-manser"
  },
  {
   "name": "Exit Interview: Larry Mizell, Jr.",
   "url": "http://www.cityartsonline.com/articles/exit-interview-larry-mizell-jr",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feat-Lar%20on%20the%20street_AviLoud-600_0.jpg?itok=zH0Xgwos",
   "storypic_url": "http://www.cityartsonline.com/articles/exit-interview-larry-mizell-jr"
  },
  {
   "name": "Deli Diaspora",
   "url": "http://www.cityartsonline.com/articles/deli-diaspora",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/deli_DanPaulus-600w.jpg?itok=2KBspafU",
   "storypic_url": "http://www.cityartsonline.com/articles/deli-diaspora"
  },
  {
   "name": "New Power Generation",
   "url": "http://www.cityartsonline.com/articles/new-power-generation",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Louie_Gong_opener_JohnKeatley-600w.jpg?itok=p59KLrch",
   "storypic_url": "http://www.cityartsonline.com/articles/new-power-generation"
  },
  {
   "name": "Album of the Month: 'Leavings' by Tay Sean",
   "url": "http://www.cityartsonline.com/articles/album-month-leavings-tay-sean",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-TaySean_Leavings-cover-600w.jpg?itok=dFsXe_nj",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-leavings-tay-sean"
  },
  {
   "name": "Attractive Singles: October 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-october-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-wiscon-600w.jpg?itok=bw8KOs8x",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-october-2016"
  },
  {
   "name": "The Art of Revolution",
   "url": "http://www.cityartsonline.com/articles/art-revolution",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Emory-Douglas-01.png?itok=jJsuPWv5",
   "storypic_url": "http://www.cityartsonline.com/articles/art-revolution"
  },
  {
   "name": "Album of the Month: 'Dying Stars' by Evening Bell",
   "url": "http://www.cityartsonline.com/articles/album-month-dying-stars-evening-bell",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-cover-600.png?itok=2z24SGj-",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-dying-stars-evening-bell"
  },
  {
   "name": "Attractive Singles: September 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-september-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-jennchampion-600.jpg?itok=1jJiFsIl",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-september-2016"
  },
  {
   "name": "Gamelan Pacifica",
   "url": "http://www.cityartsonline.com/articles/gamelan-pacifica",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/fallarts-Gamelan_LilaHurwitz-540.jpg?itok=3OVDO4f4",
   "storypic_url": "http://www.cityartsonline.com/articles/gamelan-pacifica"
  },
  {
   "name": "There Is No Fear",
   "url": "http://www.cityartsonline.com/articles/there-no-fear",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/5610683.jpg?itok=OlsIOF4Y",
   "storypic_url": "http://www.cityartsonline.com/articles/there-no-fear"
  },
  {
   "name": "Swimming Upstream",
   "url": "http://www.cityartsonline.com/articles/swimming-upstream",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qna-melidarby-540.png?itok=IPpjZXrK",
   "storypic_url": "http://www.cityartsonline.com/articles/swimming-upstream"
  },
  {
   "name": "Interbay Refined",
   "url": "http://www.cityartsonline.com/articles/interbay-refined",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Interbay-number6cider_BruceClaytonTom-540.jpg?itok=lMYdhjxd",
   "storypic_url": "http://www.cityartsonline.com/articles/interbay-refined"
  },
  {
   "name": "Moondoggies Re-Release Debut Album on Vinyl",
   "url": "http://www.cityartsonline.com/articles/moondoggies-re-release-debut-album-vinyl",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Moondoggies_LP1cover_2016.jpg?itok=SK5ODi6w",
   "storypic_url": "http://www.cityartsonline.com/articles/moondoggies-re-release-debut-album-vinyl"
  },
  {
   "name": "Mizell Madness",
   "url": "http://www.cityartsonline.com/articles/mizell-madness",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/51834PTARZL.jpg?itok=QVKX6pLf",
   "storypic_url": "http://www.cityartsonline.com/articles/mizell-madness"
  },
  {
   "name": "Video Premiere: Two from Tenderfoot",
   "url": "http://www.cityartsonline.com/articles/video-premiere-two-tenderfoot",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/tenderfoot_rooftop_2000px.jpg?itok=V7gJZIEL",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-two-tenderfoot"
  },
  {
   "name": "Video Premiere: \"Nostalgia\" by Fine Prince",
   "url": "http://www.cityartsonline.com/articles/video-premiere-nostalgia-fine-prince",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/static1.squarespace_1.jpg?itok=pvM7Mhbf",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-nostalgia-fine-prince"
  },
  {
   "name": "Video Premiere: \"Alleyways\" by Ravenna Woods",
   "url": "http://www.cityartsonline.com/articles/video-premiere-alleyways-ravenna-woods",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-07-29%20at%2012.36.03%20PM.png?itok=p62ZTA7E",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-alleyways-ravenna-woods"
  },
  {
   "name": "More Martyr Sauce",
   "url": "http://www.cityartsonline.com/articles/more-martyr-sauce",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Miguel%20Edwards-6575.jpg?itok=zeByq8Ss",
   "storypic_url": "http://www.cityartsonline.com/articles/more-martyr-sauce"
  },
  {
   "name": "Studio Time",
   "url": "http://www.cityartsonline.com/articles/studio-time",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Postcard-Front-smaller-425x270.jpg?itok=YZRXnvLV",
   "storypic_url": "http://www.cityartsonline.com/articles/studio-time"
  },
  {
   "name": "Album of the Month: 'Selva City' by Big Phone",
   "url": "http://www.cityartsonline.com/articles/album-month-selva-city-big-phone",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album_selvacity-500.jpg?itok=VnQpMUbd",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-selva-city-big-phone"
  },
  {
   "name": "Attractive Singles: August 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-august-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_TwoTonBoa-600.jpg?itok=fDLO_qqF",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-august-2016"
  },
  {
   "name": "Scandinavian Soul Food",
   "url": "http://www.cityartsonline.com/articles/scandinavian-soul-food",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-Scandi%202-600.jpg?itok=35CfAQKD",
   "storypic_url": "http://www.cityartsonline.com/articles/scandinavian-soul-food"
  },
  {
   "name": "Video Premiere: \"Knife Thrower II\" by Ben von Wildenhaus",
   "url": "http://www.cityartsonline.com/articles/video-premiere-knife-thrower-ii-ben-von-wildenhaus",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-07-22%20at%203.52.36%20PM.png?itok=vvtieyi5",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-knife-thrower-ii-ben-von-wildenhaus"
  },
  {
   "name": "Timber Achieves Apotheosis",
   "url": "http://www.cityartsonline.com/articles/timber-achieves-apotheosis",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/13731493_1079989312089770_7821329880331790000_n.jpg?itok=saj1t0e6",
   "storypic_url": "http://www.cityartsonline.com/articles/timber-achieves-apotheosis"
  },
  {
   "name": "Ravenna Woods Plus Giant Drums",
   "url": "http://www.cityartsonline.com/articles/ravenna-woods-plus-giant-drums",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/static1.squarespace_0.jpg?itok=glPHrKS_",
   "storypic_url": "http://www.cityartsonline.com/articles/ravenna-woods-plus-giant-drums"
  },
  {
   "name": "Video Premiere: \"Nothing to Say\" by Spekulation",
   "url": "http://www.cityartsonline.com/articles/video-premiere-nothing-say-spekulation",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-07-06%20at%202.57.06%20PM.png?itok=dcvpVmLt",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-nothing-say-spekulation"
  },
  {
   "name": "Vital Signs",
   "url": "http://www.cityartsonline.com/articles/vital-signs",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feat_VitalSigns_ChristianPetersen-600.jpg?itok=YswETZpE",
   "storypic_url": "http://www.cityartsonline.com/articles/vital-signs"
  },
  {
   "name": "The Spirit Moves",
   "url": "http://www.cityartsonline.com/articles/spirit-moves",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qna_Simone_rathke-600.png?itok=l54ElxpO",
   "storypic_url": "http://www.cityartsonline.com/articles/spirit-moves"
  },
  {
   "name": "Winner Winner",
   "url": "http://www.cityartsonline.com/articles/winner-winner",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news_Sunset_LouDaprile-600.jpg?itok=5DBDkvZB",
   "storypic_url": "http://www.cityartsonline.com/articles/winner-winner"
  },
  {
   "name": "Attractive Singles: July 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-july-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_fearcevill-500.jpg?itok=NWVvQIcM",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-july-2016"
  },
  {
   "name": "Album of the Month: 'See Sharp' by Tiffany Wilson",
   "url": "http://www.cityartsonline.com/articles/album-month-see-sharp-tiffany-wilson",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album_seesharp-600_0.jpg?itok=a9vVuL4c",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-see-sharp-tiffany-wilson"
  },
  {
   "name": "Sounds of Summer",
   "url": "http://www.cityartsonline.com/articles/sounds-summer",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/%27.jpg?itok=N5vE3oPo",
   "storypic_url": "http://www.cityartsonline.com/articles/sounds-summer"
  },
  {
   "name": "Song Premiere: \"2 Live for the City\" by Radio Raheem",
   "url": "http://www.cityartsonline.com/articles/song-premiere-2-live-city-radio-raheem",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/130531_RADIORAHEEM_1369_RF.jpg?itok=FsmTamK2",
   "storypic_url": "http://www.cityartsonline.com/articles/song-premiere-2-live-city-radio-raheem"
  },
  {
   "name": "Premiere: \"See Thru Me\" by Cock & Swan",
   "url": "http://www.cityartsonline.com/articles/premiere-see-thru-me-cock-swan",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-06-08%20at%2011.15.51%20AM.png?itok=iPwQjBwk",
   "storypic_url": "http://www.cityartsonline.com/articles/premiere-see-thru-me-cock-swan"
  },
  {
   "name": "Song Premiere: \"This Might Be My Breakdown\" by the Wild Lips",
   "url": "http://www.cityartsonline.com/articles/song-premiere-might-be-my-breakdown-wild-lips",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/The%20Wild%20Lips%20by%20Tim%20Bishop.jpg?itok=2I_ynMuE",
   "storypic_url": "http://www.cityartsonline.com/articles/song-premiere-might-be-my-breakdown-wild-lips"
  },
  {
   "name": "Album of the Month: ‘Come to Life’ by Eliot Lipp",
   "url": "http://www.cityartsonline.com/articles/album-month-%E2%80%98come-life%E2%80%99-eliot-lipp",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album_eliot_lipp-600.jpg?itok=JwUmKgHZ",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-%E2%80%98come-life%E2%80%99-eliot-lipp"
  },
  {
   "name": "Attractive Singles: June 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-june-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_navvi-500.jpg?itok=1DgeFdsO",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-june-2016"
  },
  {
   "name": "Northwest Film Forum's Courtney Sheehan Promoted to Executive Director",
   "url": "http://www.cityartsonline.com/articles/northwest-film-forums-courtney-sheehan-promoted-executive-director",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Courtney2.png?itok=ae0tV8nl",
   "storypic_url": "http://www.cityartsonline.com/articles/northwest-film-forums-courtney-sheehan-promoted-executive-director"
  },
  {
   "name": "La Pata Negra",
   "url": "http://www.cityartsonline.com/articles/la-pata-negra",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-JarrBar_20151106_barrypenland-600.jpg?itok=wHn7Yfud",
   "storypic_url": "http://www.cityartsonline.com/articles/la-pata-negra"
  },
  {
   "name": "Beyonce Is Real",
   "url": "http://www.cityartsonline.com/articles/beyonce-real",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/IMG_4617%20copy.jpg?itok=dscvh-ko",
   "storypic_url": "http://www.cityartsonline.com/articles/beyonce-real"
  },
  {
   "name": "Everett: The Second Coming",
   "url": "http://www.cityartsonline.com/articles/everett-second-coming",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/everett_music_initiative1%20%281%29%202.jpg?itok=uWqFTeIl",
   "storypic_url": "http://www.cityartsonline.com/articles/everett-second-coming"
  },
  {
   "name": "Video Premiere: \"Irony on 23rd\" by Draze",
   "url": "http://www.cityartsonline.com/articles/video-premiere-irony-23rd-draze",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-05-17%20at%2012.00.17%20PM.png?itok=Y2Hzrf9y",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-irony-23rd-draze"
  },
  {
   "name": "Black Brilliance: 'Young Blood' at the Frye",
   "url": "http://www.cityartsonline.com/articles/black-brilliance-young-blood-frye",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unspecified-1.jpg?itok=BRWYdlZs",
   "storypic_url": "http://www.cityartsonline.com/articles/black-brilliance-young-blood-frye"
  },
  {
   "name": "No Secrets, Only Basics",
   "url": "http://www.cityartsonline.com/articles/no-secrets-only-basics",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Abdullah_Ibrahim-1.jpg?itok=QbnrOP5-",
   "storypic_url": "http://www.cityartsonline.com/articles/no-secrets-only-basics"
  },
  {
   "name": "Food of the Gods",
   "url": "http://www.cityartsonline.com/articles/food-gods",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_ellenos_store-600.jpg?itok=yrH6VhOX",
   "storypic_url": "http://www.cityartsonline.com/articles/food-gods"
  },
  {
   "name": "Taste Test with Melenie Yap",
   "url": "http://www.cityartsonline.com/articles/taste-test-melenie-yap",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste_Melenie_DylanPriest-500.jpg?itok=_TXvTWRu",
   "storypic_url": "http://www.cityartsonline.com/articles/taste-test-melenie-yap"
  },
  {
   "name": "Album of the Month: 'Introducing Karl Blau' by Karl Blau",
   "url": "http://www.cityartsonline.com/articles/album-month-introducing-karl-blau-karl-blau",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/cal_karl-blau-album-500_0.jpg?itok=AiC5xUzE",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-introducing-karl-blau-karl-blau"
  },
  {
   "name": "Attractive Singles: May 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-may-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/cal_singles_mward-600.jpg?itok=L9zC_hCK",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-may-2016"
  },
  {
   "name": "With an Intellect and a Savoir Faire",
   "url": "http://www.cityartsonline.com/articles/intellect-and-savoir-faire",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/0a3d1ca0c1a4334cb6e2d5ff6ce52308.jpg?itok=XlGTVgby",
   "storypic_url": "http://www.cityartsonline.com/articles/intellect-and-savoir-faire"
  },
  {
   "name": "Video Premiere: \"Grown Man\" by Fly Moon Royalty",
   "url": "http://www.cityartsonline.com/articles/video-premiere-grown-man-fly-moon-royalty",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-04-13%20at%205.27.36%20PM.png?itok=NGx181Vj",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-grown-man-fly-moon-royalty"
  },
  {
   "name": "Acid Tongue: \"i died dreaming\"",
   "url": "http://www.cityartsonline.com/articles/acid-tongue-i-died-dreaming",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/11152681_833313806761297_5820141345259630140_n.jpg?itok=leFiRJCb",
   "storypic_url": "http://www.cityartsonline.com/articles/acid-tongue-i-died-dreaming"
  },
  {
   "name": "\"Lost\" by Kris Orlowski",
   "url": "http://www.cityartsonline.com/articles/lost-kris-orlowski",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/3ed3257e-f8be-4058-a539-d479c922e682.jpg?itok=LqmDVbG4",
   "storypic_url": "http://www.cityartsonline.com/articles/lost-kris-orlowski"
  },
  {
   "name": "\"Chase the Clouds\" by Erik Blood, dir. by Peter Edlund",
   "url": "http://www.cityartsonline.com/articles/chase-clouds-erik-blood-dir-peter-edlund",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/f7622051-e30d-4d13-b221-e1b596a7951b.jpg?itok=bd9KaMxH",
   "storypic_url": "http://www.cityartsonline.com/articles/chase-clouds-erik-blood-dir-peter-edlund"
  },
  {
   "name": "Kurosawa at SIFF, Prom Queen at Vito's, Moondoggies at Neumos, Youth Speaks at Town Hall",
   "url": "http://www.cityartsonline.com/articles/kurosawa-siff-prom-queen-vitos-moondoggies-neumos-youth-speaks-town-hall",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/12745687_1045471078809348_7948604590996799783_n.jpg?itok=Ybm-oEmA",
   "storypic_url": "http://www.cityartsonline.com/articles/kurosawa-siff-prom-queen-vitos-moondoggies-neumos-youth-speaks-town-hall"
  },
  {
   "name": "Attractive Singles: April 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-april-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Singles_TheThermals_Dec15_057_JasonQuigley-500.jpg?itok=gGkiO7CH",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-april-2016"
  },
  {
   "name": "DoNormaal & Raven Matthews",
   "url": "http://www.cityartsonline.com/articles/donormaal-raven-matthews",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Music_DoNormaal_KellyO-500.jpg?itok=z-EWvGxX",
   "storypic_url": "http://www.cityartsonline.com/articles/donormaal-raven-matthews"
  },
  {
   "name": "Fauna Shade",
   "url": "http://www.cityartsonline.com/articles/fauna-shade",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Music_FaunaShade_AndrewImanaka-500.jpg?itok=vcrDLkur",
   "storypic_url": "http://www.cityartsonline.com/articles/fauna-shade"
  },
  {
   "name": "Evening Bell",
   "url": "http://www.cityartsonline.com/articles/evening-bell",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Music_Evening-Bell_HayleyYoung-600.jpg?itok=AZKbjS6H",
   "storypic_url": "http://www.cityartsonline.com/articles/evening-bell"
  },
  {
   "name": "Manatee Commune",
   "url": "http://www.cityartsonline.com/articles/manatee-commune",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Music_ManateeCommune_LOUDAPRILE-600.jpg?itok=nFNuFUgn",
   "storypic_url": "http://www.cityartsonline.com/articles/manatee-commune"
  },
  {
   "name": "Crater",
   "url": "http://www.cityartsonline.com/articles/crater",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Music_Crater_Nate-Gowdy-500.jpg?itok=zTkSQcJo",
   "storypic_url": "http://www.cityartsonline.com/articles/crater"
  },
  {
   "name": "Song Premiere: \"Neonerd\" by Onry Ozzborn feat. Kimya Dawson",
   "url": "http://www.cityartsonline.com/articles/song-premiere-neonerd-onry-ozzborn-feat-kimya-dawson",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Ca5sEAoW8AEMpR6.jpg?itok=GkLPgUw3",
   "storypic_url": "http://www.cityartsonline.com/articles/song-premiere-neonerd-onry-ozzborn-feat-kimya-dawson"
  },
  {
   "name": "Album of the Month: 'Marble Mouth' by Pillar Point",
   "url": "http://www.cityartsonline.com/articles/album-month-marble-mouth-pillar-point",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album_marblemouth-600.jpg?itok=SZ34bxLG",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-marble-mouth-pillar-point"
  },
  {
   "name": "The Voice of Authenticity",
   "url": "http://www.cityartsonline.com/articles/voice-authenticity",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qna_GregVandy_Rathke-replace_500.png?itok=qK4-bcuG",
   "storypic_url": "http://www.cityartsonline.com/articles/voice-authenticity"
  },
  {
   "name": "Africa Global",
   "url": "http://www.cityartsonline.com/articles/africa-global",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news_goldCoast2_KentAndreasen-600.jpg?itok=CPTssXxZ",
   "storypic_url": "http://www.cityartsonline.com/articles/africa-global"
  },
  {
   "name": "Taste Test with Ariel Glassman",
   "url": "http://www.cityartsonline.com/articles/taste-test-ariel-glassman",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste_Ariel-Glassman_DavidWentworth-replace_500.jpg?itok=0PhGN9Vp",
   "storypic_url": "http://www.cityartsonline.com/articles/taste-test-ariel-glassman"
  },
  {
   "name": "Attractive Singles: March 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-march-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_CharlieHilton_BrianneWills-600.jpg?itok=CcfOWo9p",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-march-2016"
  },
  {
   "name": "Ritualist Meets Durationalist: Timothy White Eagle and Alice Gosti",
   "url": "http://www.cityartsonline.com/articles/ritualist-meets-durationalist-timothy-white-eagle-and-alice-gosti",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/GB16_Alice_Timothy_MegumiShaunaArai_square.jpg?itok=Qv_fp8pI",
   "storypic_url": "http://www.cityartsonline.com/articles/ritualist-meets-durationalist-timothy-white-eagle-and-alice-gosti"
  },
  {
   "name": "System Restart",
   "url": "http://www.cityartsonline.com/articles/system-restart",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CreativeJustice_logo.png?itok=1hkcEX50",
   "storypic_url": "http://www.cityartsonline.com/articles/system-restart"
  },
  {
   "name": "Dancer/Choreographer Meets Musician/Producer: Markeith Wiley and Erik Blood",
   "url": "http://www.cityartsonline.com/articles/dancerchoreographer-meets-musicianproducer-markeith-wiley-and-erik-blood",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed_0.png?itok=HoBaww33",
   "storypic_url": "http://www.cityartsonline.com/articles/dancerchoreographer-meets-musicianproducer-markeith-wiley-and-erik-blood"
  },
  {
   "name": "Identity Lock",
   "url": "http://www.cityartsonline.com/articles/identity-lock",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/pillar-point_credit-scott-everett.jpg?itok=4IldXBy9",
   "storypic_url": "http://www.cityartsonline.com/articles/identity-lock"
  },
  {
   "name": "Know Justice, Know Peace",
   "url": "http://www.cityartsonline.com/articles/know-justice-know-peace",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/316c94dfbece8fe69eb58ba9ddc81e48.jpg?itok=HjYI-eYz",
   "storypic_url": "http://www.cityartsonline.com/articles/know-justice-know-peace"
  },
  {
   "name": "Now Pass the Mic",
   "url": "http://www.cityartsonline.com/articles/now-pass-mic",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-02-01%20at%203.03.40%20PM.png?itok=thSbff16",
   "storypic_url": "http://www.cityartsonline.com/articles/now-pass-mic"
  },
  {
   "name": "A Storm Is Brewing",
   "url": "http://www.cityartsonline.com/articles/storm-brewing",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Lifestyle_cedar-river-sake500.jpg?itok=thVtMWJg",
   "storypic_url": "http://www.cityartsonline.com/articles/storm-brewing"
  },
  {
   "name": "Attractive Singles: February 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-february-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Singles_pale-noise-Ashley-Campbell600.jpg?itok=c-_CYLzi",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-february-2016"
  },
  {
   "name": "A Raucous Note",
   "url": "http://www.cityartsonline.com/articles/raucous-note",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/MarshallTod-enewsletter.jpg?itok=np-CgQG2",
   "storypic_url": "http://www.cityartsonline.com/articles/raucous-note"
  },
  {
   "name": "Effing the Ineffable",
   "url": "http://www.cityartsonline.com/articles/effing-ineffable",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CfAD-Jan-20-exterior-photo-with-black-logo.png?itok=WbTt5MME",
   "storypic_url": "http://www.cityartsonline.com/articles/effing-ineffable"
  },
  {
   "name": "Dancing About Architecture",
   "url": "http://www.cityartsonline.com/articles/dancing-about-architecture",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202016-01-14%20at%201.10.57%20PM.png?itok=--ugYZBf",
   "storypic_url": "http://www.cityartsonline.com/articles/dancing-about-architecture"
  },
  {
   "name": "Ephemeral, Unchanging",
   "url": "http://www.cityartsonline.com/articles/ephemeral-unchanging",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/24625dc8-c327-4cc7-97d2-02b50683456c.jpg?itok=E00_caP9",
   "storypic_url": "http://www.cityartsonline.com/articles/ephemeral-unchanging"
  },
  {
   "name": "The Wunderkind: Will Toledo",
   "url": "http://www.cityartsonline.com/articles/wunderkind-will-toledo",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/FUT-Carseat-Head-Rest_DavidBelisle-500.jpg?itok=YRbZ5H58",
   "storypic_url": "http://www.cityartsonline.com/articles/wunderkind-will-toledo"
  },
  {
   "name": "Some Impossible Vision",
   "url": "http://www.cityartsonline.com/articles/some-impossible-vision",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/KEXP_MegumiShaunArai-600.jpg?itok=-IA1Kpe3",
   "storypic_url": "http://www.cityartsonline.com/articles/some-impossible-vision"
  },
  {
   "name": "Album of the Month: 'Jump or Die' by DoNormaal",
   "url": "http://www.cityartsonline.com/articles/album-month-jump-or-die-donormaal",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ALBUM-Jump-or-Die-album-cover-500.jpg?itok=az7UmNJ6",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-jump-or-die-donormaal"
  },
  {
   "name": "Attractive Singles: January 2016",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-january-2016",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-dexamora-500.jpg?itok=YFR1omQh",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-january-2016"
  },
  {
   "name": "Odesza at the Paramount",
   "url": "http://www.cityartsonline.com/articles/odesza-paramount",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CVh1psWWsAAVLUm.jpg?itok=ZsyjbzRB",
   "storypic_url": "http://www.cityartsonline.com/articles/odesza-paramount"
  },
  {
   "name": "Here’s the Beef",
   "url": "http://www.cityartsonline.com/articles/here%E2%80%99s-beef",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-heres-the-beef-600.jpg?itok=uabU3I2I",
   "storypic_url": "http://www.cityartsonline.com/articles/here%E2%80%99s-beef"
  },
  {
   "name": "Attractive Singles: December 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-december-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles-pillarpoint-600.jpg?itok=BMmT-Bgp",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-december-2015"
  },
  {
   "name": "Shaprece Unwinds in Los Angeles",
   "url": "http://www.cityartsonline.com/articles/shaprece-unwinds-los-angeles",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-11-24%20at%202.37.38%20PM.png?itok=vKnHdDhb",
   "storypic_url": "http://www.cityartsonline.com/articles/shaprece-unwinds-los-angeles"
  },
  {
   "name": "A Playground of Food and Booze",
   "url": "http://www.cityartsonline.com/articles/playground-food-and-booze",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-mcmenamins-600.jpg?itok=Q2RAYNcy",
   "storypic_url": "http://www.cityartsonline.com/articles/playground-food-and-booze"
  },
  {
   "name": "Taste Test with DV One",
   "url": "http://www.cityartsonline.com/articles/taste-test-dv-one",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste-DV-One_David-Wentworth-500.jpg?itok=9aqWldFh",
   "storypic_url": "http://www.cityartsonline.com/articles/taste-test-dv-one"
  },
  {
   "name": "Album of the Month: 'Teens of Style' by Car Seat Headrest",
   "url": "http://www.cityartsonline.com/articles/album-month-teens-style-car-seat-headrest",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/calendar-Car-Seat-Headrest-album-500.jpg?itok=yiYKZ9v9",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-teens-style-car-seat-headrest"
  },
  {
   "name": "Attractive Singles: November 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-november-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractivesingles-BlitzenTrapper_JasonQuigley-500.jpg?itok=KI7CBfpx",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-november-2015"
  },
  {
   "name": "The Shoe Fits",
   "url": "http://www.cityartsonline.com/articles/shoe-fits",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/efqenhYAokh79jgD0dTTLF9a6odOkKkN9UDnOJq8jg0_0.jpg?itok=-IL5MuGZ",
   "storypic_url": "http://www.cityartsonline.com/articles/shoe-fits"
  },
  {
   "name": "'Mr. Burns' at ACT Theatre",
   "url": "http://www.cityartsonline.com/articles/mr-burns-act-theatre",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ACT_MrBurns_2015_PR-087.jpg?itok=TmPf97P_",
   "storypic_url": "http://www.cityartsonline.com/articles/mr-burns-act-theatre"
  },
  {
   "name": "'Product 3' by Beat Connection",
   "url": "http://www.cityartsonline.com/articles/product-3-beat-connection",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed-3_0.jpg?itok=iT1zr9F2",
   "storypic_url": "http://www.cityartsonline.com/articles/product-3-beat-connection"
  },
  {
   "name": "Everyone's Thing",
   "url": "http://www.cityartsonline.com/articles/everyones-thing",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/dungen2.jpg?itok=i_KVMGVm",
   "storypic_url": "http://www.cityartsonline.com/articles/everyones-thing"
  },
  {
   "name": "Polyrhythmics, \"Octagon Pt. 2\"",
   "url": "http://www.cityartsonline.com/articles/polyrhythmics-octagon-pt-2",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Poly%20High%20Res%20Press%202014.jpg?itok=NOMnXcrJ",
   "storypic_url": "http://www.cityartsonline.com/articles/polyrhythmics-octagon-pt-2"
  },
  {
   "name": "Savor the Moment",
   "url": "http://www.cityartsonline.com/articles/savor-moment",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-moment-jonathan-zwickel-600.jpg?itok=ReOucm3f",
   "storypic_url": "http://www.cityartsonline.com/articles/savor-moment"
  },
  {
   "name": "Can't Fake the Funk",
   "url": "http://www.cityartsonline.com/articles/cant-fake-funk",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-FunkTown_LOU_DAPRILE-600.jpg?itok=awbZPQup",
   "storypic_url": "http://www.cityartsonline.com/articles/cant-fake-funk"
  },
  {
   "name": "Attractive Singles: October 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-october-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractivesingles-PONYTIME_ShaineTruscott-600.jpg?itok=iVXfKSQ3",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-october-2015"
  },
  {
   "name": "A Bite of Pike",
   "url": "http://www.cityartsonline.com/articles/bite-pike",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-bitepike-eatseattle-600.jpg?itok=n_wcuQuY",
   "storypic_url": "http://www.cityartsonline.com/articles/bite-pike"
  },
  {
   "name": "Taste Test with Chris Alderson",
   "url": "http://www.cityartsonline.com/articles/taste-test-chris-alderson",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste-Chris-Aldersen_DavidWentworth-500.jpg?itok=xfw080Lj",
   "storypic_url": "http://www.cityartsonline.com/articles/taste-test-chris-alderson"
  },
  {
   "name": "Taste Test with Whitney Williams",
   "url": "http://www.cityartsonline.com/articles/taste-test-whitney-williams",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste-test-whitney-williams-david-wentworth-500.jpg?itok=bllZOCtg",
   "storypic_url": "http://www.cityartsonline.com/articles/taste-test-whitney-williams"
  },
  {
   "name": "Where Beer Flows in Streams",
   "url": "http://www.cityartsonline.com/articles/where-beer-flows-streams",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-beer-hall-lou-daprile-600.jpg?itok=OuW8wfXZ",
   "storypic_url": "http://www.cityartsonline.com/articles/where-beer-flows-streams"
  },
  {
   "name": "Sonic Evolution: Under the Influence",
   "url": "http://www.cityartsonline.com/articles/sonic-evolution-under-influence",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-fall-arts-jacob-lawrence-brooklyn-benjestorf-600.jpg?itok=y3iIg65u",
   "storypic_url": "http://www.cityartsonline.com/articles/sonic-evolution-under-influence"
  },
  {
   "name": "Album of the Month: 'This Wilderness' by Midday Veil",
   "url": "http://www.cityartsonline.com/articles/album-month-wilderness-midday-veil",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-midday-veil-cover-600.jpg?itok=SE6iBmob",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-wilderness-midday-veil"
  },
  {
   "name": "Attractive Singles: September 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-september-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-briana-marela-600.jpg?itok=ODbmKGEI",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-september-2015"
  },
  {
   "name": "Not Lonely, Just Alone",
   "url": "http://www.cityartsonline.com/articles/not-lonely-just-alone",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/11407223_882768048451245_6070469503966708598_n.jpg?itok=Si-Tsfyn",
   "storypic_url": "http://www.cityartsonline.com/articles/not-lonely-just-alone"
  },
  {
   "name": "Pickathon Goes Black",
   "url": "http://www.cityartsonline.com/articles/pickathon-goes-black",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed-1_2.jpg?itok=rbS_gTmK",
   "storypic_url": "http://www.cityartsonline.com/articles/pickathon-goes-black"
  },
  {
   "name": "Attractive Singles: August 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-august-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-pete-quirk-600.jpg?itok=qtf5Q1y4",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-august-2015"
  },
  {
   "name": "Endless Summer Festival Guide",
   "url": "http://www.cityartsonline.com/articles/endless-summer-festival-guide",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/20140808-BlackJoeLewis-MattMcDonald-033-copy.JPG?itok=be4bb388",
   "storypic_url": "http://www.cityartsonline.com/articles/endless-summer-festival-guide"
  },
  {
   "name": "Album of the Month: 'Weirdo Shrine' by La Luz",
   "url": "http://www.cityartsonline.com/articles/album-month-weirdo-shrine-la-luz",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-la-luz-cover-600.jpg?itok=sbupyeCw",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-weirdo-shrine-la-luz"
  },
  {
   "name": "Dark Dream",
   "url": "http://www.cityartsonline.com/articles/dark-dream",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/14bpp_belongings-workshop_0053.jpg?itok=kbuMsVY0",
   "storypic_url": "http://www.cityartsonline.com/articles/dark-dream"
  },
  {
   "name": "Wine City",
   "url": "http://www.cityartsonline.com/articles/wine-city",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-wine-jason-neuerburg-500.jpg?itok=_wdV1e5r",
   "storypic_url": "http://www.cityartsonline.com/articles/wine-city"
  },
  {
   "name": "Come Out and Play",
   "url": "http://www.cityartsonline.com/articles/come-out-and-play",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/10403218_10153083472038661_5504660290196828888_n.jpg?itok=U8uhIUwE",
   "storypic_url": "http://www.cityartsonline.com/articles/come-out-and-play"
  },
  {
   "name": "Nothing's Shocking at Showbox Sodo",
   "url": "http://www.cityartsonline.com/articles/nothings-shocking-showbox-sodo",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Janes-Addiction-Jane-Says-official-live-video_0.jpg?itok=YVzM3P5E",
   "storypic_url": "http://www.cityartsonline.com/articles/nothings-shocking-showbox-sodo"
  },
  {
   "name": "Video Premiere: \"In the Background\" by Eggshells",
   "url": "http://www.cityartsonline.com/articles/video-premiere-background-eggshells",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-07-17%20at%204.22.33%20PM.png?itok=G0CowyHg",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-background-eggshells"
  },
  {
   "name": "Bubbles and Soft Daylight",
   "url": "http://www.cityartsonline.com/articles/bubbles-and-soft-daylight",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/15984371344_f86377b72c.jpg?itok=Ee0bsjYp",
   "storypic_url": "http://www.cityartsonline.com/articles/bubbles-and-soft-daylight"
  },
  {
   "name": "Album of the Month: 'Wild Knights' by Aqueduct",
   "url": "http://www.cityartsonline.com/articles/album-month-wild-knights-aqueduct",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-aqueduct-wild-knights-cover-600.jpg?itok=O82lICu7",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-wild-knights-aqueduct"
  },
  {
   "name": "Attractive Singles: July 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-july-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-gyasi-ross-600.jpg?itok=3hGkav-_",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-july-2015"
  },
  {
   "name": "Spiritual Weather",
   "url": "http://www.cityartsonline.com/spiritual-weather",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1-motopony-john-margaretten-600.jpg?itok=oMNbYGlR",
   "storypic_url": "http://www.cityartsonline.com/spiritual-weather"
  },
  {
   "name": "Urban Art Assimilation",
   "url": "http://www.cityartsonline.com/articles/urban-art-assimilation",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/passage_PhotoEricTra_0.jpg?itok=sRrDz2DF",
   "storypic_url": "http://www.cityartsonline.com/articles/urban-art-assimilation"
  },
  {
   "name": "\"The Ballad of Barbarella\" by Aqueduct",
   "url": "http://www.cityartsonline.com/articles/ballad-barbarella-aqueduct",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/pYmEwikNKoxr6g0ALHmOJZ1ElFVxe24-7YZtiKa7Ab4.jpg?itok=w2z0pmL6",
   "storypic_url": "http://www.cityartsonline.com/articles/ballad-barbarella-aqueduct"
  },
  {
   "name": "Walk It Out",
   "url": "http://www.cityartsonline.com/articles/walk-it-out",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/elizabethausten.jpg?itok=wTAaxsq9",
   "storypic_url": "http://www.cityartsonline.com/articles/walk-it-out"
  },
  {
   "name": "\"Starry Skies Opened Eyes Pt. 2\" by Silver Jackson",
   "url": "http://www.cityartsonline.com/articles/starry-skies-opened-eyes-pt-2-silver-jackson",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/static1.squarespace.jpg?itok=vG04-XlC",
   "storypic_url": "http://www.cityartsonline.com/articles/starry-skies-opened-eyes-pt-2-silver-jackson"
  },
  {
   "name": "\"Drink Up and Be Somebody\" by Kinski",
   "url": "http://www.cityartsonline.com/articles/drink-and-be-somebody-kinski",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-06-16%20at%201.14.54%20PM.png?itok=zUupfVr2",
   "storypic_url": "http://www.cityartsonline.com/articles/drink-and-be-somebody-kinski"
  },
  {
   "name": "\"Baby Marmalade\" by Smokey Brights",
   "url": "http://www.cityartsonline.com/articles/baby-marmalade-smokey-brights",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-06-08%20at%2011.22.36%20AM.png?itok=TbUFgQ1p",
   "storypic_url": "http://www.cityartsonline.com/articles/baby-marmalade-smokey-brights"
  },
  {
   "name": "Attractive Singles: June 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-june-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-aeon-fux-600.jpg?itok=aePssE_d",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-june-2015"
  },
  {
   "name": "Dropping Bombs",
   "url": "http://www.cityartsonline.com/articles/dropping-bombs",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/bio_pic.jpg?itok=1EZMl04V",
   "storypic_url": "http://www.cityartsonline.com/articles/dropping-bombs"
  },
  {
   "name": "\"Mutual Admiration Society\" by Future Fridays",
   "url": "http://www.cityartsonline.com/articles/mutual-admiration-society-future-fridays",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-05-12%20at%2011.33.58%20AM.png?itok=UHS8WLz-",
   "storypic_url": "http://www.cityartsonline.com/articles/mutual-admiration-society-future-fridays"
  },
  {
   "name": "Folklife Eternal",
   "url": "http://www.cityartsonline.com/articles/folklife-eternal",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Q%26A_KelliFaryar_ShannonPerry_500.jpg?itok=TXLZbrv0",
   "storypic_url": "http://www.cityartsonline.com/articles/folklife-eternal"
  },
  {
   "name": "Hearing Voices",
   "url": "http://www.cityartsonline.com/articles/hearing-voices",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Yesler1_600.jpg?itok=_LXXxaQy",
   "storypic_url": "http://www.cityartsonline.com/articles/hearing-voices"
  },
  {
   "name": "Album of Month: 'Super Square' by Amos Miller",
   "url": "http://www.cityartsonline.com/articles/album-month-super-square-amos-miller",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Album_AmosMiller_600.jpg?itok=h4B8xsWC",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-super-square-amos-miller"
  },
  {
   "name": "Attractive Singles: May 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-may-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Singles_Friends%26FamilyBand_600.jpg?itok=mjW5kbSD",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-may-2015"
  },
  {
   "name": "Suicide Nostalgia",
   "url": "http://www.cityartsonline.com/articles/suicide-nostalgia",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/6194bde7-c61b-4a7c-9f32-f18b82e85eba.jpg?itok=cfVvgJew",
   "storypic_url": "http://www.cityartsonline.com/articles/suicide-nostalgia"
  },
  {
   "name": "Unlocking the Mysteries",
   "url": "http://www.cityartsonline.com/articles/unlocking-mysteries",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future-list-garek-jon-druss-megumi-shauna-arai-600_0.jpg?itok=ZSEP6cO1",
   "storypic_url": "http://www.cityartsonline.com/articles/unlocking-mysteries"
  },
  {
   "name": "All Our Songs: Doug Martsch of Built to Spill",
   "url": "http://www.cityartsonline.com/articles/all-our-songs-doug-martsch-built-spill",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-04-21%20at%2012.14.22%20PM.png?itok=kkbnJkza",
   "storypic_url": "http://www.cityartsonline.com/articles/all-our-songs-doug-martsch-built-spill"
  },
  {
   "name": "\"Smoke by Day\" Video by Real Don Music",
   "url": "http://www.cityartsonline.com/articles/smoke-day-video-real-don-music",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/10941850_1049630088396387_234633146145629600_n.jpg?itok=DYCCljBc",
   "storypic_url": "http://www.cityartsonline.com/articles/smoke-day-video-real-don-music"
  },
  {
   "name": "\"The Darkest of Seasons\" by Tomo Nakayama",
   "url": "http://www.cityartsonline.com/articles/darkest-seasons-tomo-nakayama",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/a3138507867_10.jpg?itok=tlN0UZDL",
   "storypic_url": "http://www.cityartsonline.com/articles/darkest-seasons-tomo-nakayama"
  },
  {
   "name": "A Culmination of Evolution",
   "url": "http://www.cityartsonline.com/articles/culmination-evolution",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/allen%20hi%20res.jpg?itok=FjJ6upJN",
   "storypic_url": "http://www.cityartsonline.com/articles/culmination-evolution"
  },
  {
   "name": "\"Sensation\" feat. Sarsha Simone (Manatee Commune Remix)",
   "url": "http://www.cityartsonline.com/articles/sensation-feat-sarsha-simone-manatee-commune-remix",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/manatee-commune.jpg?itok=rJXif-ae",
   "storypic_url": "http://www.cityartsonline.com/articles/sensation-feat-sarsha-simone-manatee-commune-remix"
  },
  {
   "name": "The Funk Shall Be Within You",
   "url": "http://www.cityartsonline.com/articles/funk-shall-be-within-you",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Kendrick-Lamar-King-Kunta.jpg?itok=v4eugGkI",
   "storypic_url": "http://www.cityartsonline.com/articles/funk-shall-be-within-you"
  },
  {
   "name": "Song Premiere: \"Quotient\" by Sax G",
   "url": "http://www.cityartsonline.com/articles/song-premiere-quotient-sax-g",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_saxg2_blakediamond_600_0.jpg?itok=kVKeZ7Ad",
   "storypic_url": "http://www.cityartsonline.com/articles/song-premiere-quotient-sax-g"
  },
  {
   "name": "Strange Attractor",
   "url": "http://www.cityartsonline.com/articles/strange-attractor",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-new-music-maiah-manser-sevlynn-photography-500.jpg?itok=-bf-4awa",
   "storypic_url": "http://www.cityartsonline.com/articles/strange-attractor"
  },
  {
   "name": "Attractive Singles: April 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-april-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-sol-500.jpg?itok=I4_LzjTY",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-april-2015"
  },
  {
   "name": "Hit Machine",
   "url": "http://www.cityartsonline.com/articles/hit-machine",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-new-music-beat-connection-avi-loud-600.jpg?itok=_I8PqMeg",
   "storypic_url": "http://www.cityartsonline.com/articles/hit-machine"
  },
  {
   "name": "Endless Transcendence",
   "url": "http://www.cityartsonline.com/articles/endless-transcendence",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-new-music-mammifer-ryan-furbush-600.jpg?itok=21LnUCOW",
   "storypic_url": "http://www.cityartsonline.com/articles/endless-transcendence"
  },
  {
   "name": "Antagonize Me",
   "url": "http://www.cityartsonline.com/articles/antagonize-me",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-new-music-constant-lovers-david-cho-600.jpg?itok=pXD5k8Vv",
   "storypic_url": "http://www.cityartsonline.com/articles/antagonize-me"
  },
  {
   "name": "Welcome to the Island",
   "url": "http://www.cityartsonline.com/articles/welcome-island",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-new-music-smoky-brights-andrew-js-600.jpg?itok=CTgpA475",
   "storypic_url": "http://www.cityartsonline.com/articles/welcome-island"
  },
  {
   "name": "Best New Music SNEAK PEEK",
   "url": "http://www.cityartsonline.com/articles/best-new-music-sneak-peek",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-03-23%20at%204.37.42%20PM.png?itok=pkc3Jg7D",
   "storypic_url": "http://www.cityartsonline.com/articles/best-new-music-sneak-peek"
  },
  {
   "name": "Spring Album Preview",
   "url": "http://www.cityartsonline.com/articles/spring-album-preview",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-1-spring-albums-black-giraffe-300.jpg?itok=rEcFduJh",
   "storypic_url": "http://www.cityartsonline.com/articles/spring-album-preview"
  },
  {
   "name": "The Legend of Café Nordo",
   "url": "http://www.cityartsonline.com/articles/legend-caf%C3%A9-nordo",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-2-nordo-opan-peachey-bruce-clayton-tom-500.jpg?itok=ZrYATKn5",
   "storypic_url": "http://www.cityartsonline.com/articles/legend-caf%C3%A9-nordo"
  },
  {
   "name": "Attractive Singles: March 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-march-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-sun-breaks-600.jpg?itok=hlEvG7rG",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-march-2015"
  },
  {
   "name": "Hallowed Ground",
   "url": "http://www.cityartsonline.com/articles/hallowed-ground",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa-nathan-marion-shannon-perry-500.jpg?itok=w4Wr8zTx",
   "storypic_url": "http://www.cityartsonline.com/articles/hallowed-ground"
  },
  {
   "name": "Instant Composition",
   "url": "http://www.cityartsonline.com/articles/instant-composition",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed-1.jpg?itok=7r3x9oas",
   "storypic_url": "http://www.cityartsonline.com/articles/instant-composition"
  },
  {
   "name": "Beer Central",
   "url": "http://www.cityartsonline.com/articles/beer-central",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-beer-central-1-miguel-edwards-600.jpg?itok=CQLFX4A7",
   "storypic_url": "http://www.cityartsonline.com/articles/beer-central"
  },
  {
   "name": "A Beautiful Explosion",
   "url": "http://www.cityartsonline.com/articles/beautiful-explosion",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1-electric-coffin-2-steve-korn-500.jpg?itok=a7XkKpWv",
   "storypic_url": "http://www.cityartsonline.com/articles/beautiful-explosion"
  },
  {
   "name": "Attractive Singles: February 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-february-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-attractive-singles-kultur-shock-krk-nordenstrom-600.jpg?itok=4ZLEg2gB",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-february-2015"
  },
  {
   "name": "Paying the Price for Anthony Bourdain's Mistake",
   "url": "http://www.cityartsonline.com/articles/paying-price-anthony-bourdains-mistake",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/TarikAbdullah_TheTasteKitchen_ABC.jpg?itok=8BEB1_vD",
   "storypic_url": "http://www.cityartsonline.com/articles/paying-price-anthony-bourdains-mistake"
  },
  {
   "name": "MOTOR Mixtape",
   "url": "http://www.cityartsonline.com/articles/motor-mixtape",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-01-13%20at%201.09.26%20PM.png?itok=d5CVuNbt",
   "storypic_url": "http://www.cityartsonline.com/articles/motor-mixtape"
  },
  {
   "name": "Let My Children Hear Music",
   "url": "http://www.cityartsonline.com/articles/let-my-children-hear-music",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/boyd.jpg?itok=_ZwdKRe8",
   "storypic_url": "http://www.cityartsonline.com/articles/let-my-children-hear-music"
  },
  {
   "name": "Video Premiere: Dark Hip Falls, \"Lam2: Red Hands\"",
   "url": "http://www.cityartsonline.com/articles/video-premiere-dark-hip-falls-lam2-red-hands",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Screen%20Shot%202015-01-07%20at%201.14.09%20PM.png?itok=er3TqEao",
   "storypic_url": "http://www.cityartsonline.com/articles/video-premiere-dark-hip-falls-lam2-red-hands"
  },
  {
   "name": "The Year in Music",
   "url": "http://www.cityartsonline.com/articles/year-music",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/newzealandtsunamidrill.jpg?itok=DQ886nVm",
   "storypic_url": "http://www.cityartsonline.com/articles/year-music"
  },
  {
   "name": "Engine of Progress",
   "url": "http://www.cityartsonline.com/articles/engine-progress",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/motor.jpg?itok=IZu7HIWS",
   "storypic_url": "http://www.cityartsonline.com/articles/engine-progress"
  },
  {
   "name": "Ms. Marvelous",
   "url": "http://www.cityartsonline.com/articles/ms-marvelous",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news-notes-ms-marvel-courtesy-marvel-500.jpg?itok=YAXYwdez",
   "storypic_url": "http://www.cityartsonline.com/articles/ms-marvelous"
  },
  {
   "name": "The Musician: Lena Simon",
   "url": "http://www.cityartsonline.com/articles/musician-lena-simon",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future-list-lena-simon-megumi-shauna-arai-600.jpg?itok=gO7A6VO7",
   "storypic_url": "http://www.cityartsonline.com/articles/musician-lena-simon"
  },
  {
   "name": "The Mystic: Garek Jon Druss",
   "url": "http://www.cityartsonline.com/articles/mystic-garek-jon-druss",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future-list-garek-jon-druss-megumi-shauna-arai-600.jpg?itok=BXy2ckX1",
   "storypic_url": "http://www.cityartsonline.com/articles/mystic-garek-jon-druss"
  },
  {
   "name": "The Animator: Clyde Petersen",
   "url": "http://www.cityartsonline.com/articles/animator-clyde-petersen",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future-list-clyde-petersen-megumi-shauna-arai-500.jpg?itok=38RYuE0a",
   "storypic_url": "http://www.cityartsonline.com/articles/animator-clyde-petersen"
  },
  {
   "name": "The Beginner: Adam Boehmer",
   "url": "http://www.cityartsonline.com/articles/beginner-adam-boehmer",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future-list-adam-boehmer-megumi-shauna-arai-500.jpg?itok=ayjSYfwl",
   "storypic_url": "http://www.cityartsonline.com/articles/beginner-adam-boehmer"
  },
  {
   "name": "Attractive Singles: January 2015",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-january-2015",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-sleater-kinney-brigitte-sire-600.jpg?itok=8IqFDeeL",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-january-2015"
  },
  {
   "name": "\"Is This Christmas\"",
   "url": "http://www.cityartsonline.com/articles/christmas",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed_1.jpg?itok=EoUvIRPM",
   "storypic_url": "http://www.cityartsonline.com/articles/christmas"
  },
  {
   "name": "More Songs About the Seahawks",
   "url": "http://www.cityartsonline.com/articles/more-songs-about-seahawks",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/richard-sherman-biting-tounge.jpg?itok=v-R7T0Qg",
   "storypic_url": "http://www.cityartsonline.com/articles/more-songs-about-seahawks"
  },
  {
   "name": "It's Hard to Be Humble",
   "url": "http://www.cityartsonline.com/articles/its-hard-be-humble",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Flavr-Blue.jpg?itok=gDKXUuN2",
   "storypic_url": "http://www.cityartsonline.com/articles/its-hard-be-humble"
  },
  {
   "name": "Cracked Frame",
   "url": "http://www.cityartsonline.com/articles/cracked-frame",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifetyle-restaurant-marron-jonathan-zwickel-500.jpg?itok=EC117_HL",
   "storypic_url": "http://www.cityartsonline.com/articles/cracked-frame"
  },
  {
   "name": "Album of the Month: DJAO",
   "url": "http://www.cityartsonline.com/articles/album-month-djao",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-djao-cover-300.jpg?itok=xI2khfDo",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-djao"
  },
  {
   "name": "Attractive Singles: December 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-december-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-attractive-singles-mamifer-500.jpg?itok=KwlYCY8C",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-december-2014"
  },
  {
   "name": "Panabrite's Headphone Astronautica",
   "url": "http://www.cityartsonline.com/articles/panabrites-headphone-astronautica",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/panabrite%20pavilion.jpg?itok=BUGH41Ai",
   "storypic_url": "http://www.cityartsonline.com/articles/panabrites-headphone-astronautica"
  },
  {
   "name": "Seldom Seen Seattle",
   "url": "http://www.cityartsonline.com/articles/seldom-seen-seattle",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed-2.jpg?itok=63T_NDAC",
   "storypic_url": "http://www.cityartsonline.com/articles/seldom-seen-seattle"
  },
  {
   "name": "The Goddess Is Alive and I'm Not Afraid",
   "url": "http://www.cityartsonline.com/articles/goddess-alive-and-im-not-afraid",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NIFalbumcoverFINAL.jpg?itok=j6RQf9sf",
   "storypic_url": "http://www.cityartsonline.com/articles/goddess-alive-and-im-not-afraid"
  },
  {
   "name": "American Roots",
   "url": "http://www.cityartsonline.com/articles/american-roots",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/uploads_2F1410282662589-wuc1jg4p784ims4i-7a280b8032a1fd46525aec8412e52d07_2FNNA_WillyMitchell%2BBand_sRGB.jpg?itok=1byIHLX5",
   "storypic_url": "http://www.cityartsonline.com/articles/american-roots"
  },
  {
   "name": "Bomb Brunch",
   "url": "http://www.cityartsonline.com/articles/bomb-brunch",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-bomb-brunch-dan-paulus-500.jpg?itok=qv0TJWeP",
   "storypic_url": "http://www.cityartsonline.com/articles/bomb-brunch"
  },
  {
   "name": "Album of the Month: Murder Vibes",
   "url": "http://www.cityartsonline.com/articles/album-month-murder-vibes",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-album-murder-vibes-500.jpg?itok=yspiIXQi",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-murder-vibes"
  },
  {
   "name": "Attractive Singles: November 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-november-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-attractive-singles-jamie-aaron-aux-600.jpg?itok=kLwQe-mK",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-november-2014"
  },
  {
   "name": "Bahamas Celebrates the Broken Bits",
   "url": "http://www.cityartsonline.com/articles/bahamas-celebrates-broken-bits",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/bahamas_4681.jpg?itok=AJ56LTNA",
   "storypic_url": "http://www.cityartsonline.com/articles/bahamas-celebrates-broken-bits"
  },
  {
   "name": "Take a Hike",
   "url": "http://www.cityartsonline.com/articles/take-hike",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/mt-whitney6-e1405041853939-1024x768.jpeg?itok=jgPiaB5U",
   "storypic_url": "http://www.cityartsonline.com/articles/take-hike"
  },
  {
   "name": "Body in Motion",
   "url": "http://www.cityartsonline.com/articles/body-motion",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/10273752_239845332883855_9043684889119934314_n.jpg?itok=ET2GhulJ",
   "storypic_url": "http://www.cityartsonline.com/articles/body-motion"
  },
  {
   "name": "Fear No Fun",
   "url": "http://www.cityartsonline.com/articles/fear-no-fun",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/10702009_1563008053920122_3370842554444358530_n.jpg?itok=mpmPnMS3",
   "storypic_url": "http://www.cityartsonline.com/articles/fear-no-fun"
  },
  {
   "name": "More than Swing-a-ding",
   "url": "http://www.cityartsonline.com/articles/more-swing-ding",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/q-a-john-gilbreath-shannon-perry-500.jpg?itok=9iJ8Ea4M",
   "storypic_url": "http://www.cityartsonline.com/articles/more-swing-ding"
  },
  {
   "name": "Get Down Tonight",
   "url": "http://www.cityartsonline.com/articles/get-down-tonight",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature-get-down-tonight-mohai-seattle-pi-collection-grant-m.-haller-500.jpg?itok=BPyrW8gu",
   "storypic_url": "http://www.cityartsonline.com/articles/get-down-tonight"
  },
  {
   "name": "Attractive Singles: October 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-october-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-the-shivas-sarah-cass-600.jpg?itok=MNLdcn4P",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-october-2014"
  },
  {
   "name": "The Best of Earshot",
   "url": "http://www.cityartsonline.com/articles/best-earshot",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/calendar-earshot-pharoah-sanders-500.jpg?itok=eDtCz-ql",
   "storypic_url": "http://www.cityartsonline.com/articles/best-earshot"
  },
  {
   "name": "More Things You Should Definitely Do This Weekend",
   "url": "http://www.cityartsonline.com/articles/more-things-you-should-definitely-do-weekend",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Sidhu---%28Re%29-Confirmation-A.jpg?itok=sFHx_z2W",
   "storypic_url": "http://www.cityartsonline.com/articles/more-things-you-should-definitely-do-weekend"
  },
  {
   "name": "Attractive Singles: September 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-september-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive-singles-earth-samantha-muljat-600.jpg?itok=-50b78--",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-september-2014"
  },
  {
   "name": "Lush Life",
   "url": "http://www.cityartsonline.com/articles/lush-life",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa-renee-erickson-shannon-perry-500.jpg?itok=yAxMkpFT",
   "storypic_url": "http://www.cityartsonline.com/articles/lush-life"
  },
  {
   "name": "Time for Coffee",
   "url": "http://www.cityartsonline.com/articles/time-coffee",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-mmhmm-coffee-casey-reid-500.jpg?itok=8W4QFgk_",
   "storypic_url": "http://www.cityartsonline.com/articles/time-coffee"
  },
  {
   "name": "The Ultimate Leather Jacket",
   "url": "http://www.cityartsonline.com/articles/ultimate-leather-jacket",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle-leather-jacket-eleanor-petry-600.jpg?itok=qZVczl_o",
   "storypic_url": "http://www.cityartsonline.com/articles/ultimate-leather-jacket"
  },
  {
   "name": "Jherek Bischoff Walks a Tricky Line",
   "url": "http://www.cityartsonline.com/articles/jherek-bischoff-walks-tricky-line",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1-jherek-bischoff-angel-ceballos-600.jpg?itok=PM59ix1P",
   "storypic_url": "http://www.cityartsonline.com/articles/jherek-bischoff-walks-tricky-line"
  },
  {
   "name": "Album of the Month: The Murder City Devils",
   "url": "http://www.cityartsonline.com/articles/album-month-murder-city-devils",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now-album-of-month-debi-del-grande-600.jpg?itok=K7EeOWKz",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-murder-city-devils"
  },
  {
   "name": "Beck at Marymoor Park",
   "url": "http://www.cityartsonline.com/articles/beck-marymoor-park",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/1973677_10152417938322158_5227964125210121128_o-890x395_c-1.jpg?itok=3lVkPVBI",
   "storypic_url": "http://www.cityartsonline.com/articles/beck-marymoor-park"
  },
  {
   "name": "Easy Does It",
   "url": "http://www.cityartsonline.com/articles/easy-does-it",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1_shaprece_manuela_insixiengmay_500.jpg?itok=CKf3nCiO",
   "storypic_url": "http://www.cityartsonline.com/articles/easy-does-it"
  },
  {
   "name": "Attractive Singles: August 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-august-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_singles_adrien_leavitt_500.jpg?itok=sv34zVux",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-august-2014"
  },
  {
   "name": "Triumph of Unambition",
   "url": "http://www.cityartsonline.com/articles/triumph-unambition",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_fiddlers_miguel_edwards_600.jpg?itok=WPkqm1j4",
   "storypic_url": "http://www.cityartsonline.com/articles/triumph-unambition"
  },
  {
   "name": "How to Do This Weekend",
   "url": "http://www.cityartsonline.com/articles/how-do-weekend",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/554868_496666003755440_1408048943_n-1.jpg?itok=nxk7-6jB",
   "storypic_url": "http://www.cityartsonline.com/articles/how-do-weekend"
  },
  {
   "name": "Odesza + Shaprece",
   "url": "http://www.cityartsonline.com/articles/odesza-shaprece",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Singles_Shaprece_ManuelaInsixiengmay_0.jpg?itok=B3rX0DWX",
   "storypic_url": "http://www.cityartsonline.com/articles/odesza-shaprece"
  },
  {
   "name": "Attractive Singles: July 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-july-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_naomi_punk_600_0.jpg?itok=vlmGVNMD",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-july-2014"
  },
  {
   "name": "Q&A with Ishmael Butler",
   "url": "http://www.cityartsonline.com/articles/qa-ishmael-butler",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_ishmael_butler_shannon_perry_500.jpg?itok=a3z7sRj0",
   "storypic_url": "http://www.cityartsonline.com/articles/qa-ishmael-butler"
  },
  {
   "name": "Sayulita North",
   "url": "http://www.cityartsonline.com/articles/sayulita-north",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_sayulita_north_carmelitos_nate_watters_600.jpg?itok=jZIsLCIJ",
   "storypic_url": "http://www.cityartsonline.com/articles/sayulita-north"
  },
  {
   "name": "Album of the Month: 'SIMISM' by USF",
   "url": "http://www.cityartsonline.com/articles/album-month-simism-usf",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_album_usf_simism_600.jpg?itok=5XzQ5_Sl",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-simism-usf"
  },
  {
   "name": "Try the Ice Cream Hot Dog",
   "url": "http://www.cityartsonline.com/articles/try-ice-cream-hot-dog",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/unnamed.jpg?itok=ENNII3vt",
   "storypic_url": "http://www.cityartsonline.com/articles/try-ice-cream-hot-dog"
  },
  {
   "name": "videOasis Vol. II: Call for Entries",
   "url": "http://www.cityartsonline.com/articles/videoasis-vol-ii-call-entries",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/3.jpg?itok=WXZkTKPQ",
   "storypic_url": "http://www.cityartsonline.com/articles/videoasis-vol-ii-call-entries"
  },
  {
   "name": "Time Out Orcas Island",
   "url": "http://www.cityartsonline.com/articles/time-out-orcas-island",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_-doe_bay_cafe_600.jpg?itok=DhClN89G",
   "storypic_url": "http://www.cityartsonline.com/articles/time-out-orcas-island"
  },
  {
   "name": "Attractive Singles: June 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-june-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_attractive_deep_creep_600.jpg?itok=p9jes3qH",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-june-2014"
  },
  {
   "name": "Post-production Post",
   "url": "http://www.cityartsonline.com/articles/post-production-post",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Romaro-tn112.jpg?itok=thzFKDXY",
   "storypic_url": "http://www.cityartsonline.com/articles/post-production-post"
  },
  {
   "name": "The Road to Destiny",
   "url": "http://www.cityartsonline.com/articles/road-destiny",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Tendai_MegumiShaunaArai_600.jpg?itok=KAIHRNn8",
   "storypic_url": "http://www.cityartsonline.com/articles/road-destiny"
  },
  {
   "name": "Album of the Month: Kairos",
   "url": "http://www.cityartsonline.com/articles/album-month-kairos",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Kairos_600.jpg?itok=g6nOC7wA",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-kairos"
  },
  {
   "name": "Attractive Singles: May 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-may-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Singles_Shaprece_ManuelaInsixiengmay.jpg?itok=syiS_PoZ",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-may-2014"
  },
  {
   "name": "Dive-Bar Divas",
   "url": "http://www.cityartsonline.com/articles/dive-bar-divas",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/N%26N_BlueMoon_ChonaKasinger-600.jpg?itok=gacijAuE",
   "storypic_url": "http://www.cityartsonline.com/articles/dive-bar-divas"
  },
  {
   "name": "Spirit of the Age",
   "url": "http://www.cityartsonline.com/articles/spirit-age",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Mezcaleria_Spike%20Mafford_courtesy%20of%20Mezcaleria%20Oaxaca_600.jpg?itok=W0Nm0Zex",
   "storypic_url": "http://www.cityartsonline.com/articles/spirit-age"
  },
  {
   "name": "videOasis Cometh!",
   "url": "http://www.cityartsonline.com/articles/videoasis-cometh",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/tumblr_mp8drtCwt41rc6ezao1_500.jpg?itok=bhK9c2rB",
   "storypic_url": "http://www.cityartsonline.com/articles/videoasis-cometh"
  },
  {
   "name": "They Came from the Future",
   "url": "http://www.cityartsonline.com/articles/they-came-future",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/hightekphotobw%20%281%29.jpg?itok=4OB_mgZg",
   "storypic_url": "http://www.cityartsonline.com/articles/they-came-future"
  },
  {
   "name": "Outer Spaces",
   "url": "http://www.cityartsonline.com/articles/outer-spaces",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_wishbeard_tom_dougherty_500.jpg?itok=UTEff4rE",
   "storypic_url": "http://www.cityartsonline.com/articles/outer-spaces"
  },
  {
   "name": "The Outsiders",
   "url": "http://www.cityartsonline.com/articles/outsiders",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_industrial_detail_tom_dougherty_600.jpg?itok=j51yapdl",
   "storypic_url": "http://www.cityartsonline.com/articles/outsiders"
  },
  {
   "name": "Ways to Be",
   "url": "http://www.cityartsonline.com/articles/ways-be",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_dude_york_tom_dougherty_500.jpg?itok=1wx7COmi",
   "storypic_url": "http://www.cityartsonline.com/articles/ways-be"
  },
  {
   "name": "Attractive Singles: April 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-april-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_queennes_tracy_consolo_600.jpg?itok=Fxrn976p",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-april-2014"
  },
  {
   "name": "The Rise of Locomotive Punk",
   "url": "http://www.cityartsonline.com/articles/rise-locomotive-punk",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_nighttrain_alex_crick_600.jpg?itok=RJ4DGcmZ",
   "storypic_url": "http://www.cityartsonline.com/articles/rise-locomotive-punk"
  },
  {
   "name": "Ready for Takeoff",
   "url": "http://www.cityartsonline.com/articles/ready-takeoff",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/AirportRig_01distort_AlexCrick_FINALFlat.jpg?itok=lcpmblBQ",
   "storypic_url": "http://www.cityartsonline.com/articles/ready-takeoff"
  },
  {
   "name": "Triumph of the Will-not",
   "url": "http://www.cityartsonline.com/articles/triumph-will-not",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_posse_megumi_aria_600.jpg?itok=Y8sDGess",
   "storypic_url": "http://www.cityartsonline.com/articles/triumph-will-not"
  },
  {
   "name": "Exclusive Album Stream: Constant Lovers' 'Experience Feelings'",
   "url": "http://www.cityartsonline.com/articles/exclusive-album-stream-constant-lovers-experience-feelings",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/COVER-High%20Res_0.jpg?itok=nc6pVjSC",
   "storypic_url": "http://www.cityartsonline.com/articles/exclusive-album-stream-constant-lovers-experience-feelings"
  },
  {
   "name": "Balkanize Seattle",
   "url": "http://www.cityartsonline.com/articles/balkanize-seattle",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/IMG_4982.jpg?itok=Zo98os0S",
   "storypic_url": "http://www.cityartsonline.com/articles/balkanize-seattle"
  },
  {
   "name": "The Sound of Spring",
   "url": "http://www.cityartsonline.com/articles/sound-spring",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Chimurenga-Renaissance-The-B.A.D.-Is-Good-608x608.jpg?itok=Ec3e6Vrp",
   "storypic_url": "http://www.cityartsonline.com/articles/sound-spring"
  },
  {
   "name": "Attractive Singles: March 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-march-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_singles_bill_patton_500.jpg?itok=O_Hzqbz4",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-march-2014"
  },
  {
   "name": "Q&A: Adam Sekuler",
   "url": "http://www.cityartsonline.com/articles/qa-adam-sekuler",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_pandemic_shannon_perry_500.jpg?itok=-IyD8kb5",
   "storypic_url": "http://www.cityartsonline.com/articles/qa-adam-sekuler"
  },
  {
   "name": "Bubble Up",
   "url": "http://www.cityartsonline.com/articles/bubble",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_bubble_up_chona_kasinger_600.jpg?itok=Q3RTsfPv",
   "storypic_url": "http://www.cityartsonline.com/articles/bubble"
  },
  {
   "name": "Far Out, Close In",
   "url": "http://www.cityartsonline.com/articles/far-out-close",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature2_far_out_sam_boshnack__daniel_sheehan_600.jpg?itok=ATR1Z01f",
   "storypic_url": "http://www.cityartsonline.com/articles/far-out-close"
  },
  {
   "name": "Album of the Month: \"Isaac Loves You, Especially You,\" V/A on BLDGs",
   "url": "http://www.cityartsonline.com/articles/album-month-isaac-loves-you-especially-you-va-bldgs",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_album_detective_agency_aaron_schroeder_600.jpg?itok=EJbCQhdV",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-isaac-loves-you-especially-you-va-bldgs"
  },
  {
   "name": "Room to Grow",
   "url": "http://www.cityartsonline.com/articles/room-grow",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1_room_to_grow_avi_strong_600.jpg?itok=A--4oq7S",
   "storypic_url": "http://www.cityartsonline.com/articles/room-grow"
  },
  {
   "name": "Attractive Singles: February 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-february-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_single_tenderfoot_rafael_soldi_600.jpg?itok=OKQ8T1xy",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-february-2014"
  },
  {
   "name": "The Connector: 2013's Best Songs",
   "url": "http://www.cityartsonline.com/articles/connector-2013s-best-songs",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/arcade-fire-2_2712949b.jpg?itok=49ysz3Lk",
   "storypic_url": "http://www.cityartsonline.com/articles/connector-2013s-best-songs"
  },
  {
   "name": "Album of the Month: \"Dehumanize\" by Dude York",
   "url": "http://www.cityartsonline.com/articles/album-month-dehumanize-dude-york",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_album_dude_york_angel_ceballos__600.jpg?itok=WHbmf1dm",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-dehumanize-dude-york"
  },
  {
   "name": "Attractive Singles: January 2014",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-january-2014",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_attractive_singles_kairos_500.jpg?itok=rT-hH0Ly",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-january-2014"
  },
  {
   "name": "The Activist: Aaron Huey",
   "url": "http://www.cityartsonline.com/articles/activist-aaron-huey",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future_list_aaron_huey_mike_hipple_600.jpg?itok=zN0XgXgv",
   "storypic_url": "http://www.cityartsonline.com/articles/activist-aaron-huey"
  },
  {
   "name": "The Producer: Sam Anderson",
   "url": "http://www.cityartsonline.com/articles/producer-sam-anderson",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future_list_sam_anderson_mike_hipple_500.jpg?itok=ecdzuLjp",
   "storypic_url": "http://www.cityartsonline.com/articles/producer-sam-anderson"
  },
  {
   "name": "The Alchemist: Alex Osuch aka DJAO",
   "url": "http://www.cityartsonline.com/articles/alchemist-alex-osuch-aka-djao",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future_list_alex_osuch_mike_hipple_500.jpg?itok=JQ3cGou-",
   "storypic_url": "http://www.cityartsonline.com/articles/alchemist-alex-osuch-aka-djao"
  },
  {
   "name": "The Designer: Matthew Parker",
   "url": "http://www.cityartsonline.com/articles/designer-matthew-parker",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/future_list_matthew_parker_mike_hipple_500.jpg?itok=zwwI3Gec",
   "storypic_url": "http://www.cityartsonline.com/articles/designer-matthew-parker"
  },
  {
   "name": "Q&A: Damien Jurado",
   "url": "http://www.cityartsonline.com/articles/qa-damien-jurado",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_damien_jurado_shannon_perry_600.jpg?itok=i6KmqZOA",
   "storypic_url": "http://www.cityartsonline.com/articles/qa-damien-jurado"
  },
  {
   "name": "Southern Comfort",
   "url": "http://www.cityartsonline.com/articles/southern-comfort",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_roux_miguel_edwards_600.jpg?itok=hYsVNDw5",
   "storypic_url": "http://www.cityartsonline.com/articles/southern-comfort"
  },
  {
   "name": "Walking Ghosts of American Music",
   "url": "http://www.cityartsonline.com/articles/walking-ghosts-american-music",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/old_weird_america.jpg?itok=TncDp5pK",
   "storypic_url": "http://www.cityartsonline.com/articles/walking-ghosts-american-music"
  },
  {
   "name": "Pearl Jam at the Center of the Universe",
   "url": "http://www.cityartsonline.com/articles/pearl-jam-center-universe",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Pearl%20Jam%20-%20Seattle%202013%20%28By%20Morgan%20Keuler%29%20-%20005.jpg?itok=ggoAH1c8",
   "storypic_url": "http://www.cityartsonline.com/articles/pearl-jam-center-universe"
  },
  {
   "name": "Morgan Henderson Is Your Favorite Band's Secret Weapon",
   "url": "http://www.cityartsonline.com/articles/morgan-henderson-your-favorite-bands-secret-weapon",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/DSC_6227.jpg?itok=dVk_5dVJ",
   "storypic_url": "http://www.cityartsonline.com/articles/morgan-henderson-your-favorite-bands-secret-weapon"
  },
  {
   "name": "More in Store",
   "url": "http://www.cityartsonline.com/articles/more-store",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/glasswing_miguel_edwards_600.jpg?itok=Z0KMULas",
   "storypic_url": "http://www.cityartsonline.com/articles/more-store"
  },
  {
   "name": "Winter Creature",
   "url": "http://www.cityartsonline.com/articles/winter-creature",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/nakayama_steve_korn_600.jpg?itok=p1f6wyJn",
   "storypic_url": "http://www.cityartsonline.com/articles/winter-creature"
  },
  {
   "name": "Book of the Month: \"Hip Hop Family Tree\"",
   "url": "http://www.cityartsonline.com/articles/book-month-hip-hop-family-tree",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_hiphop_detail_600.jpg?itok=csSuSYkX",
   "storypic_url": "http://www.cityartsonline.com/articles/book-month-hip-hop-family-tree"
  },
  {
   "name": "Attractive Singles: December 2013",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-december-2013",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/attractive_singles_dreamsalon_600.jpg?itok=nne-Z_TC",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-december-2013"
  },
  {
   "name": "Living 'The Motel Life'",
   "url": "http://www.cityartsonline.com/articles/living-motel-life",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/the-motel-life-emile-hirsch-e-dakota-fanning-nella-prima-immagine-del-film-255843_zps0d183b00.jpg?itok=tEoNVZCh",
   "storypic_url": "http://www.cityartsonline.com/articles/living-motel-life"
  },
  {
   "name": "Attractive Singles: November 2013",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-november-2013",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_dex_amora_600.jpg?itok=roUfhXgj",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-november-2013"
  },
  {
   "name": "Lasting Transcendence",
   "url": "http://www.cityartsonline.com/articles/lasting-transcendence",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/here_simeon_leif_engberg_600.jpg?itok=bGfvlM0e",
   "storypic_url": "http://www.cityartsonline.com/articles/lasting-transcendence"
  },
  {
   "name": "Overton Berry: Classic Entertainer",
   "url": "http://www.cityartsonline.com/articles/overton-berry-classic-entertainer",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_overton_verry_shannon_perry_500.jpg?itok=v-gaizLB",
   "storypic_url": "http://www.cityartsonline.com/articles/overton-berry-classic-entertainer"
  },
  {
   "name": "Prescriptions Filled",
   "url": "http://www.cityartsonline.com/articles/prescriptions-filled",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/news_bartell_detail_nate_watters_600.jpg?itok=D4puvJV4",
   "storypic_url": "http://www.cityartsonline.com/articles/prescriptions-filled"
  },
  {
   "name": "Album of the Month: \"Libra Stripes\" by Polyrhythmics",
   "url": "http://www.cityartsonline.com/articles/album-month-libra-stripes-polyrhythmics",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_polyrhythmics_600.jpg?itok=wXsxRgaY",
   "storypic_url": "http://www.cityartsonline.com/articles/album-month-libra-stripes-polyrhythmics"
  },
  {
   "name": "Attractive Singles: October 2013",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-october-2013-0",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/MusicLead_FuckingDykeBitches__MollyBauer-CLICK.jpg?itok=8-8-MunF",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-october-2013-0"
  },
  {
   "name": "Raw Beauty",
   "url": "http://www.cityartsonline.com/articles/raw-beauty",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_raw_beauty_steve_korn_600.jpg?itok=ghQEnCml",
   "storypic_url": "http://www.cityartsonline.com/articles/raw-beauty"
  },
  {
   "name": "It's Pronounced \"Gooeyduck\"",
   "url": "http://www.cityartsonline.com/articles/its-pronounced-gooeyduck",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_geoduck_600.jpg?itok=fpM684Qx",
   "storypic_url": "http://www.cityartsonline.com/articles/its-pronounced-gooeyduck"
  },
  {
   "name": "Double Down",
   "url": "http://www.cityartsonline.com/articles/double-down",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_doubledown_miguel_edwards_600.jpg?itok=dLawhCT8",
   "storypic_url": "http://www.cityartsonline.com/articles/double-down"
  },
  {
   "name": "Attractive Singles October 2013",
   "url": "http://www.cityartsonline.com/articles/attractive-singles-october-2013",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/singles_wishbeard_600.jpg?itok=3Eep0oGr",
   "storypic_url": "http://www.cityartsonline.com/articles/attractive-singles-october-2013"
  },
  {
   "name": "10 Years of Justice & Treasure",
   "url": "http://www.cityartsonline.com/articles/10-years-justice-treasure",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/justice_treasure.fw_.png?itok=1g1GnCzB",
   "storypic_url": "http://www.cityartsonline.com/articles/10-years-justice-treasure"
  },
  {
   "name": "Q&A with Hanna Benn",
   "url": "http://www.cityartsonline.com/articles/qa-hanna-benn",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_classical_hannah_benn2_nate_watters.jpg?itok=jhDk_8OB",
   "storypic_url": "http://www.cityartsonline.com/articles/qa-hanna-benn"
  },
  {
   "name": "Hanna Benn with Kelly Wyse at Chapel",
   "url": "http://www.cityartsonline.com/articles/hanna-benn-kelly-wyse-chapel",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_classical_hannah_benn1_miguel_edwards_600.jpg?itok=cvV0WJRd",
   "storypic_url": "http://www.cityartsonline.com/articles/hanna-benn-kelly-wyse-chapel"
  },
  {
   "name": "Stop Dying to Live",
   "url": "http://www.cityartsonline.com/articles/stop-dying-live",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_danny_bland_mark_kaufman_500.jpg?itok=0Zf2B-ls",
   "storypic_url": "http://www.cityartsonline.com/articles/stop-dying-live"
  },
  {
   "name": "Eating Underground America",
   "url": "http://www.cityartsonline.com/articles/eating-underground-america",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_langdon_cook_sam_alden_500.jpg?itok=ElzuCx8X",
   "storypic_url": "http://www.cityartsonline.com/articles/eating-underground-america"
  },
  {
   "name": "Pickathon Is the New Festival Ideal",
   "url": "http://www.cityartsonline.com/pickathon-new-festival-ideal",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/photo-1%205.07.05%20PM.JPG?itok=Wxr7wXxn",
   "storypic_url": "http://www.cityartsonline.com/pickathon-new-festival-ideal"
  },
  {
   "name": "The Long Way Home",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/08/long-way-home",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1_Moodoggies_Jake_Clifford_600.jpg?itok=LkO40Kfm",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/08/long-way-home"
  },
  {
   "name": "Not Shaken, Not Stirred",
   "url": "http://www.cityartsonline.com/articles/not-shaken-not-stirred",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_buddha_randy_wood_600.jpg?itok=Wl9MwW8U",
   "storypic_url": "http://www.cityartsonline.com/articles/not-shaken-not-stirred"
  },
  {
   "name": "Fred Armisen: Nothing Is Bullshit",
   "url": "http://www.cityartsonline.com/fred-armisen-nothing-bullshit",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/punk.jpg?itok=HdhHDHzo",
   "storypic_url": "http://www.cityartsonline.com/fred-armisen-nothing-bullshit"
  },
  {
   "name": "Attractive Singles",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/07/attractive-singles",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_singles_bukkake_600_0.jpg?itok=83V4zNxq",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/07/attractive-singles"
  },
  {
   "name": "Album of the Month: White Rainbow",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/07/album-month-white-rainbow",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/now_white_rainbow_350_redo_0.jpg?itok=q9cn2xMk",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/07/album-month-white-rainbow"
  },
  {
   "name": "Brisket Dreams",
   "url": "http://www.cityartsonline.com/articles/brisket-dreams",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/qa_timmons_sam_alden_350_redo_0.jpg?itok=daqZD-ht",
   "storypic_url": "http://www.cityartsonline.com/articles/brisket-dreams"
  },
  {
   "name": "Taste Test with Luuvu Hoang",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/06/taste-test-luuvu-hoang",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/taste_luuvu_hoang_chona_kasinger_350_0.jpg?itok=55ea3p2V",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/06/taste-test-luuvu-hoang"
  },
  {
   "name": "Mad Explosive Spontaneity",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/06/mad-explosive-spontaneity",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature1_jazz_shanna_petersen_600_0.jpg?itok=GjMzeUyQ",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/06/mad-explosive-spontaneity"
  },
  {
   "name": "World Premiere Video: Tilson XOXO, \"Away the Sun/Letterman's Jacket\"",
   "url": "http://www.cityartsonline.com/tilson-xoxo",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/img_3304_0.jpg?itok=Mh62u_LY",
   "storypic_url": "http://www.cityartsonline.com/tilson-xoxo"
  },
  {
   "name": "Don Rickles at Snoqualmie Casino",
   "url": "http://www.cityartsonline.com/don-rickles-snoqualmie-casino",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/1peop0225_0.jpg?itok=Zcrofx8k",
   "storypic_url": "http://www.cityartsonline.com/don-rickles-snoqualmie-casino"
  },
  {
   "name": "Standing Out in the Sea of Bizarre",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/05/standing-out-sea-bizarre",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature2_musvid_tallmountain_600_0.jpg?itok=Dt2x1HDi",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/05/standing-out-sea-bizarre"
  },
  {
   "name": "Taste Test with Catharina Manchanda",
   "url": "http://www.cityartsonline.com/taste-test-catharina-manchanda",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_catharina_chonakassinger_600_0.jpg?itok=grrxGJT8",
   "storypic_url": "http://www.cityartsonline.com/taste-test-catharina-manchanda"
  },
  {
   "name": "'Buzz' by Robert Zverina",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/05/buzz-robert-zverina",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/buzz_0.png?itok=B9VhokPd",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/05/buzz-robert-zverina"
  },
  {
   "name": "Smalltime",
   "url": "http://www.cityartsonline.com/articles/smalltime",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_nanobrew_natewatters_600_0.jpg?itok=hpF-gFDs",
   "storypic_url": "http://www.cityartsonline.com/articles/smalltime"
  },
  {
   "name": "The Death of Fun",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/05/death-fun",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature2_funhouse_danbennett_600_0.jpg?itok=2XWy7gT_",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/05/death-fun"
  },
  {
   "name": "The Moondoggies' Acoustical Acoustics",
   "url": "http://www.cityartsonline.com/moondoggies-acoustical-acoustics",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/525448_10102982506145623_1035570516_n_4.jpg?itok=rb5oEoXX",
   "storypic_url": "http://www.cityartsonline.com/moondoggies-acoustical-acoustics"
  },
  {
   "name": "There You Are, Bernadette: Maria Semple at Town Hall",
   "url": "http://www.cityartsonline.com/there-you-are-bernadette-maria-semple-town-hall",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/41uz1fht6bl._sl500__0.jpg?itok=32RR6zju",
   "storypic_url": "http://www.cityartsonline.com/there-you-are-bernadette-maria-semple-town-hall"
  },
  {
   "name": "Ride Free",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/04/ride-free",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_car2go_natewatters_600_0.jpg?itok=Hh_J50m7",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/04/ride-free"
  },
  {
   "name": "Precious Pork",
   "url": "http://www.cityartsonline.com/articles/precious-pork",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_pig-cracklins_cormacmahoney_600_0.jpg?itok=2QdCtA3X",
   "storypic_url": "http://www.cityartsonline.com/articles/precious-pork"
  },
  {
   "name": "Creative Class",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/03/creative-class",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature3_artsed_natewatters_350_0.jpg?itok=gVAFoOhU",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/03/creative-class"
  },
  {
   "name": "Cochon 555: Swine-centric Food Fight Returns",
   "url": "http://www.cityartsonline.com/articles/cochon-555-swine-centric-food-fight-returns",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/fp-good-breeding-608.jpg?itok=1GMLOUyV",
   "storypic_url": "http://www.cityartsonline.com/articles/cochon-555-swine-centric-food-fight-returns"
  },
  {
   "name": "Otherhalf: Ryan Lewis",
   "url": "http://www.cityartsonline.com/otherhalf",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/tumblr_lzrq0xqrah1rpn3ivo1_1280.jpg?itok=MfwM8UFJ",
   "storypic_url": "http://www.cityartsonline.com/otherhalf"
  },
  {
   "name": "Crepe Expectations",
   "url": "http://www.cityartsonline.com/articles/crepe-expectations",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_crepe_natewatters_600.jpg?itok=E6YlgkoC",
   "storypic_url": "http://www.cityartsonline.com/articles/crepe-expectations"
  },
  {
   "name": "Key to the Kingdom",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/03/key-kingdom",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_kingdomcrumbs_chonakasinger_600.jpg?itok=603c-i00",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/03/key-kingdom"
  },
  {
   "name": "Best New Music 2013",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/03/best-new-music-2013",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/bnm_opener_600.jpg?itok=bSIR0BIP",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/03/best-new-music-2013"
  },
  {
   "name": "Further Than Left Field",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/03/further-left-field",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/feature_kidsmpl_davelichterman_600.jpg?itok=QPVZJmOW",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/03/further-left-field"
  },
  {
   "name": "STS9: Hyperlinking through the Years",
   "url": "http://www.cityartsonline.com/sts9-wormholing-through-years",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/myspace_new_999b.jpg?itok=MuidJhNB",
   "storypic_url": "http://www.cityartsonline.com/sts9-wormholing-through-years"
  },
  {
   "name": "Soundgarden at the Paramount",
   "url": "http://www.cityartsonline.com/soundgarden-paramount",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/beunsrwoskqivmxian9ipvd6a8exoy24bqepqu4f_eg.jpg?itok=YSasUAyZ",
   "storypic_url": "http://www.cityartsonline.com/soundgarden-paramount"
  },
  {
   "name": "Wrestlemania at LTD Gallery",
   "url": "http://www.cityartsonline.com/wrestlemania-ltd-gallery",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/photo-3.jpg?itok=nJ7MLcSh",
   "storypic_url": "http://www.cityartsonline.com/wrestlemania-ltd-gallery"
  },
  {
   "name": "Practically Exotic",
   "url": "http://www.cityartsonline.com/articles/practically-exotic",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/lifestyle_mamnoon_natewatters_350.jpg?itok=IfsyODwS",
   "storypic_url": "http://www.cityartsonline.com/articles/practically-exotic"
  },
  {
   "name": "(Industrial) Revelation at the Comet",
   "url": "http://www.cityartsonline.com/industrial-revelation-comet",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/710811_4453736296402_1284845939_n.jpg?itok=ocd5EDsw",
   "storypic_url": "http://www.cityartsonline.com/industrial-revelation-comet"
  },
  {
   "name": "Black Constellation at the Frye",
   "url": "http://www.cityartsonline.com/black-constellation-frye",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/-2_2.jpg?itok=fn95j-zc",
   "storypic_url": "http://www.cityartsonline.com/black-constellation-frye"
  },
  {
   "name": "The Composer: Ahamefule J. Oluo",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/01/composer-aham",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/List_Aham_Dylan-Priest_600.jpg?itok=liV4VOns",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/01/composer-aham"
  },
  {
   "name": "The Tastemaker: Alex Ruder",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/01/tastemaker-alex-ruder",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/List_Alex_Dylan-Priest_460_1.jpg?itok=O1QLzSKU",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/01/tastemaker-alex-ruder"
  },
  {
   "name": "'Remable' by PonyHomie",
   "url": "http://www.cityartsonline.com/issues/seattle/2013/01/remable-ponyhomie",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Now_Homie_cover_600.jpg?itok=_X80nh19",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2013/01/remable-ponyhomie"
  },
  {
   "name": "'Now I'm Fine' Is a Triumph",
   "url": "http://www.cityartsonline.com/now-im-fine-triumph",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/-2_1_2.jpg?itok=yZPWZDHQ",
   "storypic_url": "http://www.cityartsonline.com/now-im-fine-triumph"
  },
  {
   "name": "Hendrix at Woodstock at Cinerama",
   "url": "http://www.cityartsonline.com/hendrix-woodstock-cinerama",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/JimmyHendrix1_1.jpg?itok=S-RZvX-6",
   "storypic_url": "http://www.cityartsonline.com/hendrix-woodstock-cinerama"
  },
  {
   "name": "Q&A with Matt Owen of 'Elf: The Musical'",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/12/qa-matt-owen-elf-musical",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NOW_Q%26A_ELF_350.jpg?itok=wk-Dv9No",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/12/qa-matt-owen-elf-musical"
  },
  {
   "name": "Ballet Meets Burlesque",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/12/ballet-meets-burlesque",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Burlesque_MichaelDoucett_600.jpg?itok=PgQ1pRcW",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/12/ballet-meets-burlesque"
  },
  {
   "name": "'Skylight' by Kid Smpl",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/12/skylight-kid-smpl",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NOW_review_KidSmpl_600.jpg?itok=l7kvg6QX",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/12/skylight-kid-smpl"
  },
  {
   "name": "Q&A with Beat Connection",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/11/qa-beat-connection",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Now_BeatConnection_350.jpg?itok=pZjPggtf",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/11/qa-beat-connection"
  },
  {
   "name": "Not a Badass, a Baker",
   "url": "http://www.cityartsonline.com/articles/not-badass-baker",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Eat_NeilRobertson_Watters_600.jpg?itok=oV6kxau5",
   "storypic_url": "http://www.cityartsonline.com/articles/not-badass-baker"
  },
  {
   "name": "Fish for Days",
   "url": "http://www.cityartsonline.com/articles/fish-days",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Eat_Fish_Mashiko_DylanPriest_600.jpg?itok=B_qKrrkJ",
   "storypic_url": "http://www.cityartsonline.com/articles/fish-days"
  },
  {
   "name": "10 Years of Treasure Pt. 5: Stay Human",
   "url": "http://www.cityartsonline.com/10-years-treasure-pt-5-dreamin-wild",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/600_1.jpg?itok=oHE_ca0h",
   "storypic_url": "http://www.cityartsonline.com/10-years-treasure-pt-5-dreamin-wild"
  },
  {
   "name": "10 Years of Treasure Pt. 4: Wheedle's Groove",
   "url": "http://www.cityartsonline.com/10-years-treasure-pt-4-wheedles-groove",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/WheedlesGroove_Main2_1.jpg?itok=UD1YgiTv",
   "storypic_url": "http://www.cityartsonline.com/10-years-treasure-pt-4-wheedles-groove"
  },
  {
   "name": "10 Years of Treasure Pt. 3: So Hyped",
   "url": "http://www.cityartsonline.com/10-years-treasure-pt-3-fresh-and-original",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/628x471_1.jpg?itok=84zXoDkg",
   "storypic_url": "http://www.cityartsonline.com/10-years-treasure-pt-3-fresh-and-original"
  },
  {
   "name": "10 Years of Treasure Pt. 2: Jamaica to Toronto",
   "url": "http://www.cityartsonline.com/10-years-treasure-jamaica-toronto",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/JamaicaToronto_Main2_1.jpg?itok=G-T9KIeW",
   "storypic_url": "http://www.cityartsonline.com/10-years-treasure-jamaica-toronto"
  },
  {
   "name": "10 Years of Treasure Pt. 1",
   "url": "http://www.cityartsonline.com/light-attics-golden-touch",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/552739_10152150953140193_203543360_n.jpg?itok=aQqCygT5",
   "storypic_url": "http://www.cityartsonline.com/light-attics-golden-touch"
  },
  {
   "name": "Separate but Equal",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/10/separate-equal",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAF_Truckadives__KyleJohnson_DavidLichterman_600.jpg?itok=Xh0dC7oe",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/10/separate-equal"
  },
  {
   "name": "Shabazz Jacket @ Marymoor Park",
   "url": "http://www.cityartsonline.com/shabazz-jacket-marymoor-park",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/james_1.jpg?itok=9Xx9tAGS",
   "storypic_url": "http://www.cityartsonline.com/shabazz-jacket-marymoor-park"
  },
  {
   "name": "Q&A with Foxy Shazam",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/09/qa-foxy-shazam",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Q%26A_FoxyShazam_600.jpg?itok=gr3nxeE8",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/09/qa-foxy-shazam"
  },
  {
   "name": "Elles",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/09/elles",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Elles_NuschEluard_DoraMaar_460.jpg?itok=TRwjjAiO",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/09/elles"
  },
  {
   "name": "New Club to Amplify Capitol Hill",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/09/new-club-amplify-capitol-hill",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ClubQ_NateWatters_600.jpg?itok=wVNqNmqb",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/09/new-club-amplify-capitol-hill"
  },
  {
   "name": "Doe Bay Fest: What's the Opposite of FOMO?",
   "url": "http://www.cityartsonline.com/doe-bay-fest-whats-opposite-fomo",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/WTDB-600x337.jpg?itok=aQtM9xB2",
   "storypic_url": "http://www.cityartsonline.com/doe-bay-fest-whats-opposite-fomo"
  },
  {
   "name": "Polyamorous",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/08/polyamorous",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Feature_ErikBlood1_DylanPriest_350.jpg?itok=eYQfuSKU",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/08/polyamorous"
  },
  {
   "name": "Taco Salvation",
   "url": "http://www.cityartsonline.com/articles/taco-salvation",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/FoodFollow_NateWatters_600.jpg?itok=PIUae-Mf",
   "storypic_url": "http://www.cityartsonline.com/articles/taco-salvation"
  },
  {
   "name": "Q&A with Phosphorescent",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/08/qa-phosphorescent",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Q%26A1_460_1.jpg?itok=w45-ThF5",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/08/qa-phosphorescent"
  },
  {
   "name": "Nothing Gold Can't Stay",
   "url": "http://www.cityartsonline.com/nothing-gold-cant-stay",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Shut_Up_And_Play_The_Hits_filmstill4_James_Murphy_slide.jpg?itok=UpS0uyeY",
   "storypic_url": "http://www.cityartsonline.com/nothing-gold-cant-stay"
  },
  {
   "name": "The Humanity of Hedda Gabler",
   "url": "http://www.cityartsonline.com/humanity-hedda-gabler",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Marya%20Sea%20Kaminski-Hedda%20Gabler%2C%20%20Photo%20by%20Chris%20Bennion_1.jpg?itok=zwrSZknf",
   "storypic_url": "http://www.cityartsonline.com/humanity-hedda-gabler"
  },
  {
   "name": "Listen to Thin Lizzy",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/07/listen-thin-lizzy",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/album-thin-lizzy.jpg?itok=ktGgCgAG",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/07/listen-thin-lizzy"
  },
  {
   "name": "Block Party Reconsidered",
   "url": "http://www.cityartsonline.com/block-party-rethought",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/5975537745_21e2e0a77c.jpg?itok=v7O6ZyI4",
   "storypic_url": "http://www.cityartsonline.com/block-party-rethought"
  },
  {
   "name": "Aesop Rock",
   "url": "http://www.cityartsonline.com/aesop-rock",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/AesopRock.jpg?itok=nYe3KK_N",
   "storypic_url": "http://www.cityartsonline.com/aesop-rock"
  },
  {
   "name": "Bringing Up Barbecue",
   "url": "http://www.cityartsonline.com/articles/bringing-barbecue",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/nate-waters-bbq_1.jpg?itok=3rsvheMF",
   "storypic_url": "http://www.cityartsonline.com/articles/bringing-barbecue"
  },
  {
   "name": "Bill Frisell Plays John Lennon @ Jazz Alley",
   "url": "http://www.cityartsonline.com/pools-sorrow-waves-joy-bill-frisell-plays-john-lennon-jazz-alley",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/frisell_bill.jpg?itok=8OAthtaF",
   "storypic_url": "http://www.cityartsonline.com/pools-sorrow-waves-joy-bill-frisell-plays-john-lennon-jazz-alley"
  },
  {
   "name": "Enter the Void: A Q&A with Dan Bejar of Destroyer",
   "url": "http://www.cityartsonline.com/enter-void-qa-dan-bejar-destroyer",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/destroyer_daniel_bejar_googleganger_1-1.jpg?itok=T58oy2Bk",
   "storypic_url": "http://www.cityartsonline.com/enter-void-qa-dan-bejar-destroyer"
  },
  {
   "name": "Easy, Breezy, Strong",
   "url": "http://www.cityartsonline.com/articles/easy-breezy-strong",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Coterie-398_adjust_1.jpg?itok=aPhcblG_",
   "storypic_url": "http://www.cityartsonline.com/articles/easy-breezy-strong"
  },
  {
   "name": "The Joan Miró of Bagel Bakeries",
   "url": "http://www.cityartsonline.com/articles/joan-mir%C3%B3-bagel-bakeries",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/food_bagel_natewatters.jpg?itok=FN05qWK8",
   "storypic_url": "http://www.cityartsonline.com/articles/joan-mir%C3%B3-bagel-bakeries"
  },
  {
   "name": "Fun Times in Babylon",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/05/fun-times-babylon",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/misty_bryansheffield_1.jpg?itok=uunedrMK",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/05/fun-times-babylon"
  },
  {
   "name": "Peace in Little Mezze",
   "url": "http://www.cityartsonline.com/articles/peace-little-mezze",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/food_greek_natewatters.jpg?itok=wZEle6jx",
   "storypic_url": "http://www.cityartsonline.com/articles/peace-little-mezze"
  },
  {
   "name": "Q&A: Kay Kay and His Weathered Underground",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/05/qa-kay-kay-and-his-weathered-underground",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/kk_hayleyyoung.jpg?itok=EOpq9eX_",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/05/qa-kay-kay-and-his-weathered-underground"
  },
  {
   "name": "Show Me the Money",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/04/crowd-funding-show-me-money",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CityArts_Kickstarter_paulus_1.jpg?itok=SqeTnWBF",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/04/crowd-funding-show-me-money"
  },
  {
   "name": "A Legacy of Northwest Soul",
   "url": "http://www.cityartsonline.com/issues/eastside/2009/04/legacy-northwest-soul",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/WoodyCarr_small_1.jpg?itok=Ah1fhIXg",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2009/04/legacy-northwest-soul"
  },
  {
   "name": "Why Doesn't Seattle Dance?",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/03/why-doesnt-seattle-dance",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/dance_christopherneslon_500.jpg?itok=Si_0vTd-",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/03/why-doesnt-seattle-dance"
  },
  {
   "name": "Stupid Genius",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/03/stupid-genius",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/dtttc_opener_natewatters_500_0.jpg?itok=E7ZEnmoQ",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/03/stupid-genius"
  },
  {
   "name": "Escape Artist",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/02/escape-artist",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/jurado_swift_studio_1.jpg?itok=uM9e3Z-p",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/02/escape-artist"
  },
  {
   "name": "Hand-Made, Mass Produced",
   "url": "http://www.cityartsonline.com/articles/hand-made-mass-produced",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/theo_1.jpg?itok=nMNQ_baA",
   "storypic_url": "http://www.cityartsonline.com/articles/hand-made-mass-produced"
  },
  {
   "name": "Enter Space Buddha",
   "url": "http://www.cityartsonline.com/issues/seattle/2012/01/enter-space-buddha",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/pavitt_1.jpg?itok=AGjrT4Dk",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2012/01/enter-space-buddha"
  },
  {
   "name": "Q&A with Wild Flag's Rebecca Cole",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/11/wild-flag-qa",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/wild_flag%40JohnClark_1.jpg?itok=gPpqry8Q",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/11/wild-flag-qa"
  },
  {
   "name": "Greatest, Oldest, Grandmotherly-est",
   "url": "http://www.cityartsonline.com/articles/greatest-oldest-grandmotherly-est",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/SEF_5856_1.jpg?itok=N7RGARjD",
   "storypic_url": "http://www.cityartsonline.com/articles/greatest-oldest-grandmotherly-est"
  },
  {
   "name": "Enter with Abandon",
   "url": "http://www.cityartsonline.com/articles/enter-abandon",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CormacHighRes--4_1.jpg?itok=IdU-uLaH",
   "storypic_url": "http://www.cityartsonline.com/articles/enter-abandon"
  },
  {
   "name": "Sandwich Fight!",
   "url": "http://www.cityartsonline.com/articles/sandwich-fight",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/bread_1.jpg?itok=V1nVKjs0",
   "storypic_url": "http://www.cityartsonline.com/articles/sandwich-fight"
  },
  {
   "name": "Battles",
   "url": "http://www.cityartsonline.com/q-and-a/battles",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CA1011_Now-battles_1_1.png?itok=GIJxrzEt",
   "storypic_url": "http://www.cityartsonline.com/q-and-a/battles"
  },
  {
   "name": "Pickwick: Universal Motown",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/10/universal-motion",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Pickwick_1.jpg?itok=GtjcGTNN",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/10/universal-motion"
  },
  {
   "name": "Q&A: Dita Vox of Thee Emergency",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/10/qa-dita-vox-thee-emergency",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CA1011_list-dita-vox.png?itok=ATdGfsF1",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/10/qa-dita-vox-thee-emergency"
  },
  {
   "name": "Fleet Foxes at the Paramount",
   "url": "http://www.cityartsonline.com/reviews/fleet-foxes-paramount-nothing-less-transcendence",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/fleet-foxes_1.jpg?itok=mqNKJKGD",
   "storypic_url": "http://www.cityartsonline.com/reviews/fleet-foxes-paramount-nothing-less-transcendence"
  },
  {
   "name": "Fleet Foxes at the Paramount: Nothing Less than Transcendence",
   "url": "http://www.cityartsonline.com/blog/2011/09/fleet-foxes-paramount-transcendence-and-nothing-else",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/fleetfoxes.jpg?itok=qNWk8Fuq",
   "storypic_url": "http://www.cityartsonline.com/blog/2011/09/fleet-foxes-paramount-transcendence-and-nothing-else"
  },
  {
   "name": "Mayor's Arts Award: Jack Straw Productions",
   "url": "http://www.cityartsonline.com/blog/2011/09/mayors-arts-award-jack-straw-productions",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/jackstraw.jpg?itok=_YVpnVcq",
   "storypic_url": "http://www.cityartsonline.com/blog/2011/09/mayors-arts-award-jack-straw-productions"
  },
  {
   "name": "Around Town: Can You Pass the Mushroom Test?",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/09/around-town-can-you-pass-mushroom-test",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS09_aroundtown2_thumb_0_1.png?itok=EZb_QN_R",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/09/around-town-can-you-pass-mushroom-test"
  },
  {
   "name": "Around Town: Can You Pass the Mushroom Test?",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/09/around-town-can-you-pass-mushroom-test",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS09_aroundtown2_thumb.png?itok=WamUTEAE",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/09/around-town-can-you-pass-mushroom-test"
  },
  {
   "name": "Sonic Youth",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/08/sonic-youth",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/City%20Arts_SOR_August%20Cover_Hi%20Res-3web_thumb_0_1.jpg?itok=E3bT3Fx1",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/08/sonic-youth"
  },
  {
   "name": "Sonic Youth",
   "url": "http://www.cityartsonline.com/issues/tacoma/2011/08/sonic-youth",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/City%20Arts_SOR_August%20Cover_Hi%20Res-3web_thumb_1_1.jpg?itok=SkgJ_BII",
   "storypic_url": "http://www.cityartsonline.com/issues/tacoma/2011/08/sonic-youth"
  },
  {
   "name": "Sonic Youth",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/08/sonic-youth",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/guitarboy_460_1.jpg?itok=tNfDgeeS",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/08/sonic-youth"
  },
  {
   "name": "A Different Kind of Art Walk",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/07/different-kind-art-walk",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS0711_Different-Kind-Walk_thumb.jpg?itok=foXrV49n",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/07/different-kind-art-walk"
  },
  {
   "name": "Picnic Perfect",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/06/picnic-perfect",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS0611_Picnic-Perfect_thumb_0_1.jpg?itok=fBdtPxjx",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/06/picnic-perfect"
  },
  {
   "name": "It's Like That",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/06/its",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS0611_Its-like-that.jpg?itok=Xl4TEvq4",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/06/its"
  },
  {
   "name": "Picnic Perfect",
   "url": "http://www.cityartsonline.com/articles/picnic-perfect",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS0611_Picnic-Perfect.jpg?itok=1LDvTKr8",
   "storypic_url": "http://www.cityartsonline.com/articles/picnic-perfect"
  },
  {
   "name": "Find Your Feast",
   "url": "http://www.cityartsonline.com/articles/find-your-feast",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/CAS0611_Find-Your-Feast_thumb.jpg?itok=XcCRJtjG",
   "storypic_url": "http://www.cityartsonline.com/articles/find-your-feast"
  },
  {
   "name": "Shabazz Palaces",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/05/shabazz-palaces",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/01_Shabazz%20Palaces_thumb_1_1.jpg?itok=oVXgr231",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/05/shabazz-palaces"
  },
  {
   "name": "Shabazz Palaces",
   "url": "http://www.cityartsonline.com/issues/tacoma/2011/05/shabazz-palaces",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/01_Shabazz%20Palaces_thumb_2_1.jpg?itok=AqHDt8ol",
   "storypic_url": "http://www.cityartsonline.com/issues/tacoma/2011/05/shabazz-palaces"
  },
  {
   "name": "Shabazz Palaces Arrives",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/05/shabazz-palaces",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/01_Shabazz%20Palaces_0554%20b%26w.jpg?itok=9frIiDfj",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/05/shabazz-palaces"
  },
  {
   "name": "News: Risky Co-Sign",
   "url": "http://www.cityartsonline.com/issues/tacoma/2011/04/news-risky-co-sign",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NewsRiskyCo-Sign_T_0_2.jpg?itok=Q6rpcffd",
   "storypic_url": "http://www.cityartsonline.com/issues/tacoma/2011/04/news-risky-co-sign"
  },
  {
   "name": "News: Risky Co-Sign",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/04/news-risky-co-sign",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/Mackalot01%20thumb.jpg?itok=C7XGucd0",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/04/news-risky-co-sign"
  },
  {
   "name": "Art vs. Tech",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/04/art-vs-tech",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ArtVsTech_T_1.jpg?itok=IDdJxfFk",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/04/art-vs-tech"
  },
  {
   "name": "News: Risky Co-Sign",
   "url": "http://www.cityartsonline.com/issues/eastside/2011/04/news-risky-co-sign",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/NewsRiskyCo-Sign_T_1.jpg?itok=kwkhdbWB",
   "storypic_url": "http://www.cityartsonline.com/issues/eastside/2011/04/news-risky-co-sign"
  },
  {
   "name": "Art vs. Tech",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/04/art-vs-tech",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/ArtVsTech%20illo1%20sq.jpg?itok=vHv3Yeqk",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/04/art-vs-tech"
  },
  {
   "name": "5 Highlights of 48 Hours",
   "url": "http://www.cityartsonline.com/blog/2011/02/five-highlights-48-hours",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/SnortingElk.jpg?itok=jrL2N49i",
   "storypic_url": "http://www.cityartsonline.com/blog/2011/02/five-highlights-48-hours"
  },
  {
   "name": "Let It Grow",
   "url": "http://www.cityartsonline.com/issues/tacoma/2011/03/let-it-grow",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/LetItGrow_T_0_1.jpg?itok=OlIlqB9H",
   "storypic_url": "http://www.cityartsonline.com/issues/tacoma/2011/03/let-it-grow"
  },
  {
   "name": "Let It Grow",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/03/let-it-grow",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/LetItGrow_T.jpg?itok=dTOaDKf0",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/03/let-it-grow"
  },
  {
   "name": "The Head and the Heart and the Van",
   "url": "http://www.cityartsonline.com/issues/seattle/2011/03/head-and-heart-and-van",
   "storypic": "http://www.cityartsonline.com/sites/default/files/styles/issue_thumb/public/articlethumbs/THATH_Van_T.jpg?itok=PAqjW0TO",
   "storypic_url": "http://www.cityartsonline.com/issues/seattle/2011/03/head-and-heart-and-van"
  }

    
        ]
})}
    )(app);


 


(window.angular);

angular.module('zwickCityArts').directive('myDirective', function() { 
    return {
        priority: 10, 
        link: function(scope,element,attrs) {
            scope.$watch(attrs.ngBind, function(newvalue) {
              console.log("element ",element.text());
            });           
        }
    };      
 });
