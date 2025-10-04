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
  new URL('./assets/image/karta.png', import.meta.url).href,
  new URL('./assets/image/patuljak-zabrinut.png', import.meta.url).href,
  new URL('./assets/image/patuljak-zabrinut-2.png', import.meta.url).href,
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
const bgkarta = `url(${new URL('./assets/image/karta.png', import.meta.url).href})`;
const bgzabrinut = `url(${new URL('./assets/image/patuljak-zabrinut.png', import.meta.url).href})`;
const bgzabrinut2 = `url(${new URL('./assets/image/patuljak-zabrinut-2.png', import.meta.url).href})`;

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
  if (/^\d*$/.test(value)) {
    if (model === 'no1') no1.value = value;
    if (model === 'no2') no2.value = value;
    if (model === 'no3') no3.value = value;
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
            </div>
        </div>

        <div class="scene scene-2 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg1, backgroundSize: 'cover', backgroundPosition: '25% center' }" style="z-index: 49">
            <div class="wrapper-v1 relative"><span class="text-ovelay">U zemlji stranoj za koju nitko nije čuo, jedan se patuljak izgubio. Iako je bio najmanji od prijatelja svih, nikad nije mislio da će za svoje nove prijatelje on biti div.</span>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-3 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg2, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 48">
            <div class="wrapper-v1 relative justify-end"><span class="text-ovelay">Pošao je u šetnju i negdje krivo skrenuo. Ni sam nije znao kamo bi sljedeće krenuo. Kada je pomislio da se neće znati vratiti, primijetio je malo selo te se odlučio njegovim stanovnicima za pomoć obratiti.</span>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>  

        <div class="scene scene-4 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg3, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 47">
            <div class="wrapper-v1 relative"><span class="text-ovelay">Kada je stigao u malo selo, pomoć je odmah zatražio, ali mu nitko nije odgovorio jer nitko nije znao što znači riječ - Hello.</span>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>    

        <div class="scene scene-5 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg4, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 46">
            <div class="wrapper-v5 absolute botton-text"><span class="text-ovelay">Naime, naš patuljak je hodao dalje nego što je mislio i predaleko zalutao. 
            Još je i samo engleski pričao, a u selu gnomova engleski nitko nije znao. Kako će se moći kući vratiti, ako ne može s njima ni razgovarati? A već i trbuščić svoju hranu traži, ali riječ Food, gnomove još više razdraži.</span>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div>     

        <div class="scene scene-6 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg6, backgroundSize: 'cover', backgroundPosition: 'left' }" style="z-index: 45">
            <div class="wrapper-v4 absolute botton-text"><span class="text-ovelay">Gnomovi su mislili da ih patuljak zeza, jer do sad nisu vidjeli tako velikog uljeza. Iako su znali da negdje žive divovi patuljci, nikada ih nisu susreli ili s njima razgovarali. Sada naš patuljak tvoju pomoć treba, jer ga svaki gnom već ljutito gleda.</span>
            </div>  
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-7 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg6a, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 44">
            <div class="wrapper-v5 absolute botton-text"><span class="text-ovelay">Pomozi našem patuljku kada treba prevoditi, i tako mu pomogni da se vrati kući. 
                Ali patuljak želi znati tvoje ime, da te može pozvati u pomoć!</span>
            <input type="text" name="no-1" v-model="no1" placeholder="Your name" class="input-line font-size font-size--v1" @input="handleInput($event, 'no1')" />
            </div>  
            <button class="btn next-btn absolute" v-if="no1 !== ''" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>
        </div> 

        <div class="scene scene-8 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg7, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 43">
            <div class="wrapper-v1 relative justify-end"><span class="text-ovelay">Hvala ti, sada ćeš mu moći pomoći kuči se vratiti. Iako patuljak želi kući vratiti, jako je gladan, trbuščić mu već kruli. <br > 
                Možeš li mu pomoći {{ no1 }} i reći što znači Food u gnomovom govoru? </span>
            <span>
                <input type="text" name="no-2" v-model="no2" class="input-line font-size font-size--v1" @input="handleInput($event, 'no2')" />
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
            <div class="wrapper-v1 relative"><span class="text-ovelay">Čim su gnomovi shvatili da je naš patuljak gladuš pravi, odmah su se razveselili i pun stol hrane poslužili. Također su željeli znati koji mu je obrok sa stola najdraži.Je li to bila patka ili jabuka, možda komad pileta ili zrno grožđa? Patuljak opet traži pomoć tvoju, pa mu prevedi riječ pokoju. Koje ti je najdraže jelo?  </span>
                <input type="text" name="no-3" v-model="no3" class="input-line font-size font-size--v1" @input="handleInput($event, 'no3')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no3 !== ''"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-10 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg9, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 41">
            <div class="wrapper-v1 relative"><span class="text-ovelay">{{no3}} je i gnomovima hrana najdraža. A još ih zanima, kako se kaže:</span>
                <span>
                    <input type="text" name="no-4" placeholder="Jabuka" v-model="no4" class="input-line font-size font-size--v1" @input="handleInput($event, 'no4')" />
                    <span class="validation-width"> 
                        <span v-if="no4 && no4 !== ''" :class="['validation', no4 === 'apple' ? 'correct' : 'incorrect']">
                            {{ no4?.toLowerCase() === 'apple' ? '✔️' : '❌' }}
                        </span>
                    </span>
                </span>

                <span>
                    <input type="text" name="no-5" placeholder="Patka" v-model="no5" class="input-line font-size font-size--v1" @input="handleInput($event, 'no5')" />
                    <span class="validation-width"> 
                        <span v-if="no5 && no5 !== ''" :class="['validation', no5 === 'duck' ? 'correct' : 'incorrect']">
                            {{ no5?.toLowerCase() === 'duck' ? '✔️' : '❌' }}
                        </span>
                    </span>
                </span>

                <span>
                    <input type="text" name="no-6" placeholder="Jaja" v-model="no6" class="input-line font-size font-size--v1" @input="handleInput($event, 'no6')" />
                    <span class="validation-width"> 
                        <span v-if="no6 && no6 !== ''" :class="['validation', no6 === 'eggs' ? 'correct' : 'incorrect']">
                            {{ no6?.toLowerCase() === 'eggs' ? '✔️' : '❌' }}
                        </span>
                    </span>
                </span>

                <span>
                    <input type="text" name="no-7" placeholder="Narandža" v-model="no7" class="input-line font-size font-size--v1" @input="handleInput($event, 'no7')" />
                    <span class="validation-width"> 
                        <span v-if="no7 && no7 !== ''" :class="['validation', no7 === 'orange' ? 'correct' : 'incorrect']">
                            {{ no7?.toLowerCase() === 'orange' ? '✔️' : '❌' }}
                        </span>
                    </span>
                </span> 
            </div> 
            <button class="btn next-btn absolute" v-if="no4?.toLowerCase() === 'apple' && no5?.toLowerCase() === 'duck' && no6?.toLowerCase() === 'eggs' && no7?.toLowerCase() === 'orange'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-11 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg10, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 40">
            <div class="wrapper-v1 relative float-right"><span class="text-ovelay">Zahvaljujući tvojoj pomoći, patuljak više nema problema i nakon što je napunio svoj trbuščić, želi naći mjesto da malo zadrijema. Ispod drveta bolje ne, da mu jabuka na glavu ne padne, pa možda da zamoli gnomove za najbolje mjesto za oči umorne. Ponovno treba pomoć tvoju za riječ Sleeping na patuljčevu govoru.</span>
                <input type="text" name="no-8" v-model="no8" class="input-line font-size font-size--v1" @input="handleInput($event, 'no8')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no8?.toLowerCase() === 'spavanje'"  @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-12 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg11, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 39">
            <div class="wrapper-v1 relative"><span class="text-ovelay">Gnomovi su se nasmijali i patuljka u najveću kuću uveli. Gnomovi su zapravo bili znatiželjna bića, pa žele da im patuljak još malo priča. Ali patuljak je previše umoran, već ga je uhvatio san.</span>
            </div> 
            <button class="btn next-btn absolute" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-13 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg15, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 38">
            <div class="wrapper-v1 relative"><span class="text-ovelay">Kada se odmorio, krenuti kući je planirao. Ali jedan gnom njegovu pomoć traži, krov mu negdje curi, a visoki patuljak može lako rupu da potraži. Patuljak bi gnomu pomogao, ali nije razumio što mu je gnom govorio. Možeš li mu pomoći i riječ krov prevesti?</span>
                <input type="text" name="no-9" v-model="no9" class="input-line font-size font-size--v1" @input="handleInput($event, 'no9')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no9?.toLowerCase() === 'roof'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-14 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg11, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 37">
            <div class="wrapper-v1 relative"><span class="text-ovelay">Patuljak naš gnomu je pomoć pružio i brzo rupu na krovu pokrpao. Gnomovi su bili jako sretni i željeli su da ih naš patuljak ponovno posjeti. Kako bi znao opet navratiti, napravili su mu kartu pa će se sada moći i kući vratiti. Patuljak im se želio zahvaliti, pa riječ thank you prevedi.</span>
                <input type="text" name="no-10" v-model="no10" class="input-line font-size font-size--v1" @input="handleInput($event, 'no10')" />
            </div> 
            <button class="btn next-btn absolute" v-if="no10?.toLowerCase() === 'hvala'" @click="nextSlide">
                <img src="/src/assets/image/arrow.svg" />
            </button>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

        <div class="scene scene-15 ff-v2 font-size absolute hidden" :style="{ backgroundImage: bg11, backgroundSize: 'cover', backgroundPosition: 'center' }" style="z-index: 36">
            <div class="wrapper-v1 relative"><span class="text-ovelay">Sad već i gnomovi malo engleski jezik znaju, pa će ga početi govoriti i u svome kraju. Patuljak je već put kući krenuo, sretan što je stekao nove prijatelje. Shvatio je da pravi prijatelji ne moraju govoriti isti jezik, važno je samo da se razumiju srcem.</span>
                <input type="text" name="no-11" v-model="no11" class="input-line font-size font-size--v1" @input="handleInput($event, 'no11')" />
            </div> 
            <a href="https://price-pitalice.com.hr/" class="btn btn-submit next-btn absolute">Kraj</a>
            <button class="btn back-btn absolute" @click="backSlide">
                <img src="/src/assets/image/arrow-prev.svg" />
            </button>        
        </div>

    </div> 
</template>