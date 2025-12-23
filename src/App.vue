<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { preloadImages } from './assets/js/preload.js';
import { arrowSlides } from './assets/js/arrowSlides'; 


// === Preloader ===
const preloader = ref(null);
const imagesLoaded = ref(false);

const imagePaths = [
  new URL('./assets/image/bg-1.jpg', import.meta.url).href,
  new URL('./assets/image/bg-2.jpg', import.meta.url).href,
  new URL('./assets/image/bg-3.jpg', import.meta.url).href,
  new URL('./assets/image/bg-4.jpg', import.meta.url).href,
  new URL('./assets/image/bg-5.jpg', import.meta.url).href,
  new URL('./assets/image/bg-6.jpg', import.meta.url).href,
  new URL('./assets/image/bg-6a.jpg', import.meta.url).href,
  new URL('./assets/image/bg-7.jpg', import.meta.url).href,
  new URL('./assets/image/bg-8.jpg', import.meta.url).href,
  new URL('./assets/image/bg-9.jpg', import.meta.url).href,
  new URL('./assets/image/bg-10.jpg', import.meta.url).href,
  new URL('./assets/image/bg-11.jpg', import.meta.url).href,
  new URL('./assets/image/bg-15.jpg', import.meta.url).href,
  new URL('./assets/image/bg-16.jpg', import.meta.url).href,
  new URL('./assets/image/bg-17.jpg', import.meta.url).href,
  new URL('./assets/image/bg-18.jpg', import.meta.url).href,
  new URL('./assets/image/karta.png', import.meta.url).href, 
];
 
onMounted(() => {
    preloadImages(imagePaths, () => {
        imagesLoaded.value = true;
        if (preloader.value) {
        preloader.value.style.display = 'none';
        }
    });
});
 
const baseUrl = import.meta.env.BASE_URL;
const bg1 = `url(${new URL('./assets/image/bg-1.jpg', import.meta.url).href})`;
const bg2 = `url(${new URL('./assets/image/bg-2.jpg', import.meta.url).href})`;
const bg3 = `url(${new URL('./assets/image/bg-3.jpg', import.meta.url).href})`;
const bg4 = `url(${new URL('./assets/image/bg-4.jpg', import.meta.url).href})`;
const bg5 = `url(${new URL('./assets/image/bg-5.jpg', import.meta.url).href})`;
const bg6 = `url(${new URL('./assets/image/bg-6.jpg', import.meta.url).href})`;
const bg6a = `url(${new URL('./assets/image/bg-6a.jpg', import.meta.url).href})`;
const bg7 = `url(${new URL('./assets/image/bg-7.jpg', import.meta.url).href})`;
const bg8 = `url(${new URL('./assets/image/bg-8.jpg', import.meta.url).href})`;
const bg9 = `url(${new URL('./assets/image/bg-9.jpg', import.meta.url).href})`;
const bg10 = `url(${new URL('./assets/image/bg-10.jpg', import.meta.url).href})`;
const bg11 = `url(${new URL('./assets/image/bg-11.jpg', import.meta.url).href})`;
const bg15 = `url(${new URL('./assets/image/bg-15.jpg', import.meta.url).href})`;
const bg16 = `url(${new URL('./assets/image/bg-16.jpg', import.meta.url).href})`;
const bg17 = `url(${new URL('./assets/image/bg-17.jpg', import.meta.url).href})`;
const bg18 = `url(${new URL('./assets/image/bg-18.jpg', import.meta.url).href})`;
const bgkarta = `url(${new URL('./assets/image/karta.png', import.meta.url).href})`; 

const no1 = ref('');
const no2 = ref('');
const no3 = ref('');
const no4 = ref('');
const no5 = ref('');
const no6 = ref('');
const no7 = ref('');
const no8 = ref('');
const no9 = ref('');
const no10 = ref('');

const handleInput = (event, model) => {
  const value = event.target.value;
  if (model === 'no1') {
    no1.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  } else if (model === 'no3') {
    no3.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  } else if (/^\d*$/.test(value)) {
    if (model === 'no2') no2.value = value;
    if (model === 'no4') no4.value = value;
    if (model === 'no5') no5.value = value;
    if (model === 'no6') no6.value = value;
    if (model === 'no7') no7.value = value;
    if (model === 'no8') no8.value = value;
    if (model === 'no9') no9.value = value;
  }
};

const { nextSlide, backSlide } = arrowSlides();
</script>

<template>
    <div v-if="!imagesLoaded" id="preloader" class="preloader fixed">
        <img src="/src/assets/image/logo-animation.svg"  />
    </div>
    <div class="slide-wrapper hidden relative"> 
    
        <div class="scene scene-1 opacity flex-center justify-center flex font-size absolute hidden" :style="{ backgroundImage: bg1, backgroundSize: 'cover', backgroundPosition: 'left' }" style="z-index: 50">
            <div class="relative z-2 ff-v2"> 
                <h1 class="ff-v1 mb-6 font-thin">Gnomovi uče strani jezik</h1> 
                <button class="btn-submit next-btn" @click="nextSlide">
                    Kreni s pričom
                </button>                
                <a href="https://price-pitalice.com.hr/" class="btn btn-submit block mt-10 w-fit text-center font-size-v4 mt-20 mx-auto">Povratak na početnu stranicu</a>
            </div>
        </div>

        <div class="scene scene-2 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg1, backgroundSize: 'cover', backgroundPosition: '25% center' }" style="z-index: 49">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">U zemlji stranoj za koju nitko nije čuo, jedan se patuljak izgubio. Iako je bio najmanji od prijatelja svih, nikad nije mislio da će za svoje nove prijatelje on biti div.</span></div>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-3 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg2, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 48">
            <div class="wrapper-v1 relative justify-end"><div class="blur"><span class="text-ovelay">Pošao je u šetnju i negdje krivo skrenuo. Ni sam nije znao kamo bi sljedeće krenuo. Kada je pomislio da se neće znati vratiti, primijetio je malo selo te se odlučio njegovim stanovnicima za pomoć obratiti.</span></div>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>  

        <div class="scene scene-4 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg3, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 47">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Kada je stigao u malo selo, pomoć je odmah zatražio, ali mu nitko nije odgovorio jer nitko nije znao što znači riječ - Hello.</span></div>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>    

        <div class="scene scene-5 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg4, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 46">
            <div class="wrapper-v1 botton-text"><div class="blur"><span class="text-ovelay">Naime, naš patuljak je hodao dalje nego što je mislio i predaleko zalutao. 
            Još je i samo engleski pričao, a u selu gnomova engleski nitko nije znao. <br/>Kako će se moći kući vratiti, ako ne može s njima ni razgovarati? A već i trbuščić svoju hranu traži, ali riječ Food, gnomove još više razdraži.</span></div>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>     

        <div class="scene scene-6 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg6, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 45">
            <div class="wrapper-v2 relative justify-end"><div class="blur"><span class="text-ovelay">Gnomovi su mislili da ih patuljak zeza, jer do sad nisu vidjeli tako velikog uljeza. Iako su znali da negdje žive divovi patuljci, nikada ih nisu susreli ili s njima razgovarali. Sada naš patuljak tvoju pomoć treba, jer ga svaki gnom već ljutito gleda.</span></div>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-7 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg6a, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 44">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Pomozi našem patuljku kada treba prevoditi, i tako mu pomogni da se vrati kući. 
                Ali patuljak želi znati "What is your name?", kako bi te mogao pozvati u pomoć!<br /></span></div>
            <input type="text" name="no-1" v-model="no1" placeholder="Your name" class="input-line font-size" @input="handleInput($event, 'no1')" />
            </div>  
            <button class="btn next-btn absolute" v-if="no1 !== ''" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-8 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg7, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 43">
            <div class="wrapper-v1 relative justify-end"><div class="blur"><span class="text-ovelay">Hvala ti {{ no1 }}! Sada ćeš mu moći pomoći! <br />Iako se patuljak želi kući vratiti, jako je gladan, trbuščić mu već kruli. 
                Možeš li mu pomoći {{ no1 }} i reći što znači Food u gnomovom govoru? <br > </span></div>
            <span class="text-bg">
                <input type="text" name="no-2" v-model="no2" placeholder="Prevedi riječ Food" class="input-line font-size font-size--v1" @input="handleInput($event, 'no2')" />
                <span class="validation-width"> 
                    <span v-if="no2 && no2 !== ''" :class="['validation', no2 === 'hrana' ? 'correct' : 'incorrect']">
                        {{  no2?.toLowerCase() === 'hrana' ? '✔️' : '❌' }}
                    </span>
                </span>
            </span>
            </div>
            <button class="btn next-btn absolute" v-if="no2?.toLowerCase() === 'hrana'"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-9 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg8, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 42">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Čim su gnomovi shvatili da je naš patuljak gladuš pravi, odmah su se razveselili i pun stol hrane poslužili. Također su željeli znati koji mu je obrok sa stola najdraži.<br />Je li to bila patka ili jabuka, možda komad pileta ili zrno grožđa? Patuljak opet traži pomoć tvoju, pa mu prevedi riječ pokoju. Koje ti je najdraže jelo?  <br/></span></div>
                <input type="text" name="no-3" v-model="no3" placeholder="Your favorite food?" class="input-line font-size font-size--v1 text-bg" @input="handleInput($event, 'no3')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no3 !== ''"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-10 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg9, backgroundSize: 'cover', backgroundPosition: '90% center' }" style="z-index: 41">
            <div class="wrapper-v1 relative">
                <div class="blur"><span class="text-ovelay">{{no3}} je i gnomovima hrana najdraža. Još ih zanima, kako se na engleskom kaže:<br /></span></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <span class="text-bg">
                        <input type="text" name="no-4" placeholder="Jabuka" v-model="no4" class="input-line font-size font-size--v1" @input="handleInput($event, 'no4')" />
                        <span class="validation-width"> 
                            <span v-if="no4 && no4 !== ''" :class="['validation', no4 === 'apple' ? 'correct' : 'incorrect']">
                                {{ no4?.toLowerCase() === 'apple' ? '✔️' : '❌' }}
                            </span>
                        </span>
                    </span>

                    <span class="text-bg">
                        <input type="text" name="no-5" placeholder="Patka" v-model="no5" class="input-line font-size font-size--v1" @input="handleInput($event, 'no5')" />
                        <span class="validation-width"> 
                            <span v-if="no5 && no5 !== ''" :class="['validation', no5 === 'duck' ? 'correct' : 'incorrect']">
                                {{ no5?.toLowerCase() === 'duck' ? '✔️' : '❌' }}
                            </span>
                        </span>
                    </span>

                    <span class="text-bg">
                        <input type="text" name="no-6" placeholder="Jaja" v-model="no6" class="input-line font-size font-size--v1" @input="handleInput($event, 'no6')" />
                        <span class="validation-width"> 
                            <span v-if="no6 && no6 !== ''" :class="['validation', no6 === 'eggs' ? 'correct' : 'incorrect']">
                                {{ no6?.toLowerCase() === 'eggs' ? '✔️' : '❌' }}
                            </span>
                        </span>
                    </span>

                    <span class="text-bg">
                        <input type="text" name="no-7" placeholder="Narandža" v-model="no7" class="input-line font-size font-size--v1" @input="handleInput($event, 'no7')" />
                        <span class="validation-width"> 
                            <span v-if="no7 && no7 !== ''" :class="['validation', no7 === 'orange' ? 'correct' : 'incorrect']">
                                {{ no7?.toLowerCase() === 'orange' ? '✔️' : '❌' }}
                            </span>
                        </span>
                    </span> 
                </div>
            </div> 
            <button class="btn next-btn absolute" v-if="no4?.toLowerCase() === 'apple' && no5?.toLowerCase() === 'duck' && no6?.toLowerCase() === 'eggs' && no7?.toLowerCase() === 'orange'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-11 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg10, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 40">
            <div class="wrapper-v1 relative float-right"><div class="blur"><span class="text-ovelay">Zahvaljujući tvojoj pomoći, patuljak više nema problema i nakon što je napunio svoj trbuščić, želi naći mjesto da malo zadrijema. Ispod drveta bolje ne, da mu jabuka na glavu ne padne. Možda da zamoli gnomove za najbolje mjesto za oči umorne. Ponovno treba pomoć tvoju za riječ Sleep na patuljčevu govoru.<br /></span></div>
                <input type="text" name="no-8" v-model="no8" class="input-line font-size text-bg" placeholder="Sleep na hrvatskom?" @input="handleInput($event, 'no8')" />
                <span class="validation-width">
                    <span v-if="no8 && no8 !== ''" :class="['validation', (no8?.toLowerCase() === 'spavati' || no8?.toLowerCase() === 'spavanje') ? 'correct' : 'incorrect']">
                        {{ (no8?.toLowerCase() === 'spavati' || no8?.toLowerCase() === 'spavanje') ? '✔️' : '❌' }}
                    </span>
                </span>
            </div>
            <button class="btn next-btn absolute" v-if="no8?.toLowerCase() === 'spavati' || no8?.toLowerCase() === 'spavanje'"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-12 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg11, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 39">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Gnomovi su se nasmijali i patuljka u najveću kuću uveli. Gnomovi su zapravo bili znatiželjna bića, pa žele da im patuljak još malo priča. Ali patuljak je previše umoran, već ga je uhvatio san.</span></div>
            </div> 
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-13 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg15, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 38">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Nakon što se odmorio, krenuti kući je naumio. Ali jedan gnom njegovu pomoć traži, krov mu negdje curi, a visoki patuljak može lako da istraži. Patuljak bi rado pomogao, ali nije razumio što mu je gnom govorio. <br />Možeš li mu pomoći i riječ krov prevesti?</span></div>
                <input type="text" name="no-9" v-model="no9" class="input-line font-size font-size--v1 text-bg" placeholder="Prevedi riječ krov" @input="handleInput($event, 'no9')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no9?.toLowerCase() === 'roof'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-14 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg16, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 37">
            <div class="wrapper-v1 absolute"><div class="blur"><span class="text-ovelay">Patuljak naš gnomu je pomoć pružio i brzo rupu na krovu pokrpao. Gnomovi su bili jako sretni i željeli su da ih naš patuljak ponovno posjeti. Kako bi znao opet navratiti, napravili su mu kartu pa će se sada moći i kući vratiti. Patuljak im se želio zahvaliti, pa riječ thank you prevedi.</span></div>
                <input type="text" name="no-10" v-model="no10" class="input-line font-size font-size--v1 text-bg" placeholder="Thank you na hrvatskom" @input="handleInput($event, 'no10')" />
            </div>        
            <div class="wrapper-v1 relative karta flex">  <img src="/src/assets/image/karta.png" class="mx-auto z-index-auto" /> </div>     
            
            <button class="btn next-btn absolute" v-if="no10?.toLowerCase() === 'hvala'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-15 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg17, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 36">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">Sad već i gnomovi malo engleski jezik znaju, pa će ga početi govoriti i u svome kraju. Patuljak je već put kući krenuo i jedva čekao priliku za iduću posjetu. 
            </span> </div>
            </div> 
            
            <button class="btn next-btn absolute" v-if="no8?.toLowerCase() === 'spavati' || no8?.toLowerCase() === 'spavanje'"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>

        <div class="scene scene-16 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg18, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 35">
            <div class="wrapper-v1 relative"><div class="blur"><span class="text-ovelay">
            Drago mu je da je i tebe upoznao te će te ponovno pozvati kada će u novu pustolovinu krenuti. S tobom je svaka pustolovina lakša i veselija!
            </span> </div>
            </div>

            <button class="btn next-btn absolute" v-if="no8?.toLowerCase() === 'spavati' || no8?.toLowerCase() === 'spavanje'"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>    
        </div>

        <div class="scene scene-17 font-size absolute hidden opacity uppercase" :style="{ backgroundImage: bg1, backgroundSize: 'cover', backgroundPosition: 'left' }" style="z-index: 34">
            <div class="relative z-2 wrapper-v4 text-black vertical-alignment"> 
                <h2 class="text-center block mb-6">Kraj!</h2> 
                <a href="https://price-pitalice.com.hr/prica/gnomovi-uce-strani-jezik/" class="btn btn-submit block text-center mt-20 btn-custom">Ponovi priču</a>
                <a href="https://price-pitalice.com.hr/price/" class="btn btn-submit block text-center mt-20 btn-custom">Još priča</a>

                <h3 class="text-center block mt-20 mb-6">Podjeli priču sa prijateljima!</h3>
                <div class="flex justify-center gap-4 items-center">
                    <a :href="`https://wa.me/?text=${encodeURIComponent('Šaljem ti jednu interaktivnu priču za djecu koju sam pronašla — zove se “Gnomovi uče strani jezik”. Djeca čitaju, rješavaju zadatke i uče kroz igru. - https://price-pitalice.com.hr/prica/gnomovi-uce-strani-jezik/')}`" target="_blank" class="share-icon-button" title="WhatsApp">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </a>
                    <a :href="`viber://forward?text=${encodeURIComponent('Šaljem ti jednu interaktivnu priču za djecu koju sam pronašla — zove se “Gnomovi uče strani jezik”. Djeca čitaju, rješavaju zadatke i uče kroz igru. - https://price-pitalice.com.hr/prica/gnomovi-uce-strani-jezik/')}`" target="_blank" class="share-icon-button" title="Viber">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016zm.067 1.697c.545-.003.88.02.88.02 4.54.01 6.711 1.38 7.221 1.84 1.67 1.429 2.528 4.856 1.9 9.892-.6 4.88-4.17 5.19-4.83 5.4-.28.09-2.88.73-6.152.52 0 0-2.439 2.941-3.199 3.701-.12.13-.26.17-.35.15-.13-.03-.17-.19-.16-.41l.02-4.019c-4.771-1.32-4.491-6.302-4.441-8.902.06-2.6.55-4.73 2-6.22 1.99-1.83 5.61-2.11 7.11-2.14zm.36 2.6a.299.299 0 00-.3.299.3.3 0 00.3.3 5.631 5.631 0 014.03 1.59A5.451 5.451 0 0117.5 10.5a.3.3 0 00.3.3.3.3 0 00.3-.3 5.957 5.957 0 00-1.926-4.373 6.13 6.13 0 00-4.353-1.728zm-3.954.809a.86.86 0 00-.37.11c-.36.14-.64.33-.89.55-.41.41-.64.959-.64 1.479.01.22.03.43.06.65.23 1.71 1.16 3.89 2.8 6.04 1.64 2.149 3.44 3.588 5.31 4.318.48.2.93.329 1.36.379.34.04.68.06 1.03.05a2.2 2.2 0 001.32-.6c.22-.22.4-.46.55-.73.1-.17.14-.34.14-.52-.01-.13-.07-.26-.2-.37l-1.821-1.26c-.12-.08-.24-.13-.35-.13s-.24.04-.37.13c-.31.21-.586.39-.805.54-.17.119-.337.209-.495.269a.364.364 0 01-.28.011 4.302 4.302 0 01-.49-.18 10.383 10.383 0 01-3.23-2.66 10.141 10.141 0 01-1.67-2.52.763.763 0 01-.09-.35c0-.14.06-.28.19-.43.18-.21.38-.44.6-.7.14-.18.21-.35.21-.52 0-.14-.05-.28-.16-.43L8.626 5.552a.643.643 0 00-.326-.172.878.878 0 00-.429.03zm9.419.95a.3.3 0 00-.3.3.3.3 0 00.3.3 4.382 4.382 0 012.99 1.29 4.1 4.1 0 011.15 2.97.3.3 0 00.3.3.3.3 0 00.3-.3 4.706 4.706 0 00-1.336-3.422A4.997 4.997 0 0017.29 6.06zm.03 1.76a.3.3 0 00-.3.3.3.3 0 00.3.3 2.312 2.312 0 011.73.75c.45.5.68 1.13.68 1.84a.3.3 0 00.3.3.3.3 0 00.3-.3c0-.88-.3-1.62-.85-2.24a2.977 2.977 0 00-2.16-.95z"/></svg>
                    </a>
                    <a :href="`mailto:?subject=${encodeURIComponent('Šaljem ti jednu interaktivnu priču za djecu koju sam pronašla — zove se “Gnomovi uče strani jezik”. Djeca čitaju, rješavaju zadatke i uče kroz igru.')}&body=${encodeURIComponent('Pogledaj ovu priču: https://price-pitalice.com.hr/prica/gnomovi-uce-strani-jezik/')}`" class="share-icon-button" title="E-mail">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </a>
                </div>
            </div>  
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

    </div> 
</template>