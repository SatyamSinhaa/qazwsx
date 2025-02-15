import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect';
import { useNavigate } from 'react-router-dom';
import song from '../assets/songs/Piya.mp3'

const S = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    'What Your Heart Says',
    'What Do You Want',
    'Why Wanna Meet',
    'Propose Me In A Unique Way',
    'Why Me Only',
    "What Suits Me",
    "How Much You Miss Me",
    "Who Take Care Of You",
    "Is This Joke For You",
    "What Do You Feel",
    "Kuch Bi Bol Do Apne Se",
  ];

  const contentMap = {
    "What Your Heart Says": '<h2>Dil kehta he <br> Tu he yaha to <br> Jata lamha tham jae <br> Vakt ka dariya behte behte <br> Is manzar me tham jae <br> Tune diwana dil ko banaya <br> Is sil par ilzaam he kya <br> Sagar jesi aankho vali <br> Ye to bata tera naam he kya</h2>',
    "What Do You Want": '<h2>Ek chahat he meri <br> ke ek chahne vala esa ho <br> Jo chahne me bilkul mere jesa ho</h2>',
    "Why Wanna Meet": '<h2>Vo ek shaks jo kam kam mayassar (मिलना, प्राप्त होना, उपलब्ध होना) he mujhse <br> aarzo he ki kisi roz vo sara ka sara mil jae <br>Usse kehna mulakate adhuri reh gai thi <br> Usse kehna vo aakr dubara mil jae</h2>',
    "Propose Me In A Unique Way": '<h2>Adhuri chahte meri<br>Adhuri daastaan meri<br>Mere jasbe adhure he<br>meri khvaish ke paimaane adhure he<br>mohobbat ke mere hotho pe afsane adhoore he<br>adhoore pan ki ek duniya mere charo taraf he<br>phir bi apni dil ki gehraiyo ke sath<br>sab sachaiyo ke sath me iqraar krta hu<br>me tumse pyar krta hu</h2>',
    "Why always eyes": '<h2>Ese dekha krta tha me <br> Uski jheel si aankhe <br> Jese koi dekh raha ho <br> Pehli br samundar</h2>',
    "Why Me Only": '<h2>Agr talash kru koi mil hi jaega <br> Magar tumhari tarah kon mujhko chahega <br> Tumhe zaroor koi chahto se dekhega <br> Magar vo aankhe hamari kaha se laega</h2>',
    "What's the reason of smile": '<h2>Use dekhte hi chehra <br>Yun khil jaata hai, <br>Jaise uske hone se mujhe <br>Sab kuch mil jaata hai, <br>Kaise batau ki tu <br>Kya hai mere liye, <br>Tujhe bass ek baar dekh lu <br>Toh mera pura din ban jaata hai</h2>',
    "What Suits Me": '<h2>Jo shaks mere dil me basta he <br> vo jo bi pehen le usse jachta he <br> Meri dhadkan badh jaati he us pal ko <br> Jab kabhi vo mujhe dekh kr hasta he <br> Kambakt kya acha mukaddar (भाग्य, किस्मत) he uss aaine ka <br> Jiske samne vo hr roz sajta he</h2>',
    "Kuch Bi Bol Do Apne Se": '<h2>aankho ki chamak palko ki shan ho tum<br>chehre ki hasi labhoo ki muskaan ho tum <br>dhadkta hai dil bas tumhari aarzoo main <br>phir kasie naa kahu ki meri jaan ho tum</h2>',
    "How Much You Miss Me": '<h2>Acha khasa baithe baithe <br> gum ho jata hoon... <br> ab main aksar main nahi rehta <br> tum ho jata hun...</h2>',
    "Who Take Care Of You": '<h2>Teri yaad bi kamal krti he <br>kese kese dil se saval krti he <br>ek pal bi mujhe tanha hone nai deti <br>teri yaad bi mera kitna khayal rakhti he</h2>',
    "Is This Joke For You": '<h2>hame tumse ishq he  <br>koi mazak thodi he <br>tumhare liye hamari muhabbat ka koi hisaab thodi he <br>ab tum dhundoge mere iss gazal ka javab kahen <br>are pagal... <br>ye mere dil ki avaz he <br>koi kitaab thodi he</h2>',
    "What Do You Feel": '<h2>Usse baat to kr sakta hu lekin<br>Use karib se dekh nai sakta<br>baaho me bharna chahta hu lekin<br>use mehsoos ke alava<br>kuch nai kr sakta<br>Beintehaa mohobbat he unse<br>lekin vo itni dur he<br>ki use gale laga kr apni mohobbat bata bi nai sakta</h2>',
  };

  const handleClick = (letter) => {
    setSelectedButton(letter);
    setTimeout(() => { navigate('/songs') }, 37000)
  };

  return (
    <div>

      {selectedButton ? (
        <div>
          <h1>🌸 🌼 🌺 🌻</h1>
          <audio src={song} controls autoPlay style={{ display: 'none' }} />
          <TypingEffect lines={contentMap[selectedButton]} />
          <br /><br /><br /><br /><br /><h6>automatic redirect...</h6>
        </div>
      ) : (
        <div>
          <TypingEffect lines={'<h1>You have only one choice <br> think twice</h1>'} />
          {buttons.map((letter, index) => (
            <button key={index} onClick={() => handleClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default S;
