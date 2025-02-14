import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect';
import { useNavigate } from 'react-router-dom';

const S = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    // "Please don't be angry with me",
    // 'I want to be with you forever',
    'Propose me in a unique way',
    'Why always eyes',
    'What My Heart Says',
    // 'I promise you to love you forever',
    'What do you want',
    'Why wanna meet',
    'Why me only',
    "What Suits Me",
    "Kuch bi bol do apne se",
  ];

  // Mapping each letter to its corresponding content
  const contentMap = {
    "Please don't be angry with me": '<h2>Tum jo hr baat dil se laga leti ho <br> kabhi mujhe laga kr dekho acha lagega</h2>',
    "I want to be with you forever": "<h2>Talab ye he ki tum mil jao hame <br> or hasrat ye he k hamesha ke liye</h2>",
    "Propose me in a unique way": '<h2>Adhuri chahte meri <br>Adhuri daastaan meri <br> Mere jasbe adhure he <br> meri khvaish ke paimaane adhure he <br> mohobbat ke mere hotho pe afsane adhoore he <br> adhoore pan ki ek duniya mere charo taraf he <br> phir bi apni dil ki gehraiyo ke sath <br> sab sachaiyo ke sath me iqraar krta hu <br> me tumse pyar krta hu </h2>',
    "Why always eyes": '<h2>Ese dekha krta tha me <br> Uski jheel si aankhe <br> Jese koi dekh raha ho <br> Pehli br samundar</h2>',
    "What My Heart Says": '<h2>Dil kehta he <br> Tu he yaha to <br> Jata lamha tham jae <br> Vakt ka dariya behte behte <br> Is manzar me tham jae <br> Tune diwana dil ko banaya <br> Is sil par ilzaam he kya <br> Sagar jesi aankho vali <br> Ye to bata tera naam he kya</h2>',
    "I promise you to love you forever": '<h2>Tumhe lekr kabhi mera khayal nahi badlega <br> Yu to saal bahoot badlenge <br> Magar mera pyar nai badlega </h2>',
    "What do you want": '<h2>Ek chahat he meri <br> ke ek chahne vala esa ho <br> Jo chahne me bilkul mere jesa ho</h2>',
    "Why wanna meet": '<h2>Vo ek shaks jo kam kam mayassar (मिलना, प्राप्त होना, उपलब्ध होना) he mujhse <br> aarzo he ki kisi roz vo sara ka sara mil jae <br>Usse kehna mulakate adhuri reh gai thi <br> Usse kehna vo aakr dubara mil jae</h2>',
    "Why me only": '<h2>Agr talash kru koi mil hi jaega <br> Magar tumhari tarah kon mujhko chahega <br> Tumhe zaroor koi chahto se dekhega <br> Magar vo aankhe hamari kaha se laega</h2>',
    "What's the reason of smile": '<h2>Use dekhte hi chehra <br>Yun khil jaata hai, <br>Jaise uske hone se mujhe <br>Sab kuch mil jaata hai, <br>Kaise batau ki tu <br>Kya hai mere liye, <br>Tujhe bass ek baar dekh lu <br>Toh mera pura din ban jaata hai</h2>',
    "What Suits Me": '<h2>Jo shaks mere dil me basta he <br> vo jo bi pehen le usse jachta he <br> Meri dhadkan badh jaati he us pal ko <br> Jab kabhi vo mujhe dekh kr hasta he <br> Kambakt kya acha mukaddar (भाग्य, किस्मत) he uss aaine ka <br> Jiske samne vo hr roz sajta he</h2>',
    "Kuch bi bol do apne se": '<h2>aankho ki chamak palko ki shan ho tum…. <br>chehre ki hasi labhoo ki muskaan ho tum….. <br>dhadkta hai dil bas tumhari aarzoo main….. <br>phir kasie naa kahu ki meri jaan ho tum…</h2>',
  };

  const handleClick = (letter) => {
    setSelectedButton(letter);
    setTimeout(()=>{navigate('/songs')}, 20000)
  };

  return (
    <div>
      {selectedButton ? (
        <div><TypingEffect lines={contentMap[selectedButton]} /></div>
      ) : (
        buttons.map((letter, index) => (
          <button key={index} onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))
      )}
    </div>
  );
};

export default S;
