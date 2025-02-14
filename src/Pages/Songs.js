import React, { useState } from 'react'
import TypingEffect from '../components/TypingEffect'
import s1 from '../assets/lyrics/s1.jpg';
import s2 from '../assets/lyrics/s2.jpg';
import s3 from '../assets/lyrics/s3.jpg';
import s4 from '../assets/lyrics/s4.jpg';
import s6 from '../assets/lyrics/s6.jpg';
import s7 from '../assets/lyrics/s7.jpg';
import s8 from '../assets/lyrics/s8.jpg';
import s9 from '../assets/lyrics/s9.jpg';
import s11 from '../assets/lyrics/s11.jpg';
import s12 from '../assets/lyrics/s12.jpg';
import s13 from '../assets/lyrics/s13.jpg';
import s14 from '../assets/lyrics/s14.jpg';
import s15 from '../assets/lyrics/s15.jpg';
import s17 from '../assets/lyrics/s17.jpg';
import s18 from '../assets/lyrics/s18.jpg';
import s19 from '../assets/lyrics/s19.jpg';
import s20 from '../assets/lyrics/s20.jpg';
import s21 from '../assets/lyrics/s21.jpg';
import s22 from '../assets/lyrics/s22.jpg';
import s23 from '../assets/lyrics/s23.jpg';
import s24 from '../assets/lyrics/s24.jpg';
import s25 from '../assets/lyrics/s25.jpg';
import s26 from '../assets/lyrics/s26.jpg';
import s27 from '../assets/lyrics/s27.jpg';
import s30 from '../assets/lyrics/s30.jpg';
import s31 from '../assets/lyrics/s31.jpg';
import sat1 from '../assets/lyrics/sat1.jpg';

const Songs = () => {
  const images = [
    { image: s1, line: '<h2> जैसे पर्वत पे घटा झुकती है <br> जैसे सागर से लहर उठती है <br> ऐसे किसी चहरे पे निगाह रुकती है</h2>' },
    { image: s2, line: '<h2> डूबे-डूबे जिस्म-ओ-जाँ हैं प्यार की बारिशों में <br> जी रहा हूँ, जी रहा हूँ मैं तेरी ख़्वाहिशों में <br> भूल के मैं दुनिया सारी खोया तेरे नशे में </h2>' },
    { image: s3, line: '<h2>आ तुझे इन बाहों में भर के <br> और भी कर लूं मैं करीब <br>तू जुदा हो तो लगे हैं <br> आता जाता हर पल अजीब</h2>' },
    { image: s4, line: '<h2> मैं तेरे, मैं तेरे क़दमों में रख दूँ ये जहाँ <br> मेरा इश्क़ दीवानगी <br> है नहीं, है नहीं आशिक़ कोई मुझ सा तेरा <br> तू मेरे लिए बंदगी </h2>' },
    { image: s6, line: '<h2> दिल कहता है तू है यहाँ तो <br> जाता लम्हा थम जाए <br> वक़्त का दरिया बहते बहते <br> इस मंज़र में जम जाए </h2>' },
    { image: s7, line: '<h2>तू मेरा ठिकाना मेरा आशियाना <br> ढले शाम जब भी मेरे पास आना <br> है बाँहों में रहना कहीं अब ना जाना <br> हूँ महफूज़ इनमे बुरा है ज़माना </h2>'},
    { image: s8, line: '<h2>जागे जागे रहते थे खोए खोए रहते थे <br> करते थे प्यार की बातें <br> कभी तन्हाई में कभी पुरवाई में <br> होती थी रोज़ मुलाकातें <br> तेरी इन बाहों में तेरी पनाहों में <br> मैंने हर लम्हा गुज़ारा <br> तेरे इस चेहरे को चाँद सुन्हेरे को <br> मैंने तो जिगर में उतारा <br> </h2>' },
    { image: s9, line: '<h2>हवा कली घटा को भी है तेरी जुस्तुजू <br> सिली सिली सिली सी लगे तेरी खुश्बू <br> तेरा तेरा तेरा अक्स है मेरे रूबरू <br> मेरे मेरे मेरे दिल को है तेरी आरज़ू <br> दिलबर हसीं मेरे दिलनशीं <br> मैं गुम हुआ तुझमें कहीं</h2>' },
    { image: s13, line: '<h2>तू ही मेरी शब है सुबह है तू ही दिन है मेरा <br> तू ही मेरा रब है जहां है तू ही मेरी दुनिया <br> तू वक़्त मेरे लिए मैं हूँ तेरा लम्हां <br> कैसे रहेगा भला हो के तु मुझसे जुदा</h2>' },
    { image: s11, line: '<h2>चुरा लिया है तुम ने जो दिल को <br> नज़र नहीं चुराना सनम <br> बदल के मेरी तुम ज़िंदगानी <br> कहीं बदल न जाना सनम</h2>' },
    { image: s12, line: '<h2> ये देखो सपने मेरे, नींदों से होके तेरे <br> रातों से कहते हैं, लो, हम तो सवेरे हैं वो <br> सच हो गए जो <br> सुनो ना, दो जहानों के ये नज़ारे <br> कुछ भी नहीं हैं आगे तुम्हारे </h2>' },
    { image: s14, line:'<h2>हर घड़ी लग रही तेरी कमी <br> ले चली किस गली ये ज़िंदगी <br> है पता, लापता हूँ प्यार में <br> अनकही, अनसुनी चाहत जगी <br> जो हुआ, पहले हुआ नहीं <br> आज तुम कर लो ज़रा यक़ीं प्यार का </h2>'},
    { image: s15, line: '<h2> तू ही मेरे, तू ही मेरे इश्क़ की इब्तिदा है <br> तू ही मेरे, तू ही मेरे इश्क़ की इम्तिहाँ है <br> साँसों की जुंबिश कहती है, "कुछ नहीं तेरे सिवा है" </h2>' },
    { image: s17, line:'<h2> तेरी तमन्ना आँखों में लेके परछाइयों का पीछा किया <br> हर अजनबी से तेरा पता मैं दीवानों की तरह पूछा किया <br> तुझ बिन यूँ लगता है, दिल है कहीं गुमशुदा </h2>'},
    { image: s18, line: '<h2>दर्द का आलम है हर-दम तेरे बिन, ओ, मेरे हमदम <br>आँखों में दिखती हैं मायूसियाँ <br>जहाँ भी जाऊँ तेरे बिन, बड़ी मुश्किल से गुज़रे दिन <br>चुभती हैं दिल को तेरी ख़ामोशियाँ</h2>' },
    { image: s19, line:'<h2>मेरा वजूद अब तू मुझमे है शामिल <br>सोहबत में तेरी मुझे सब कुछ हासिल <br>फिर क्यों लगता है ऐसा <br>जैसे मैं हूँ बेखुद सा <br>ढूंडू मैं खुद को कहाँ </h2>'   },
    { image: s20, line: '<h2>कोई भी ऐसा लम्हा नहीं है <br> जिसमें मेरे तू होता नहीं है <br> मैं सो भी जाऊँ रातों में, लेकिन <br> तू है कि मुझमें सोता नहीं है</h2>' },
    { image: s21, line: '<h2>आँखें तेरी शबनमी चेहरा तेरा आईना <br> तु है उदासी भरी कोई हसीं दास्ताँ <br> दिल में है क्या कुछ तो बता <br> क्यों है भला खुद से खफा</h2>' },
    { image: s22, line:`<h2>Oh, I cannot explain, <br> every time, it's the same <br>Oh, I feel that it's real, <br> take my heart</h2>`},
    { image: s23, line: `<h2>I've been lonely too long, <br> oh, I can't be so strong <br>Take the chance for romance, <br> take my heart</h2>` },
    { image: s24, line: `<h2> मैं शायद हूँ, यक़ीं तुम हो <br> मेरे चेहरे पे ठहरी एक हँसी तुम हो <br> तेरा मिलना यूँ रोज़ाना <br> लगे साँसों की आदत तुमको दोहराना <br>         </h2>`},
    { image: s25, line:'<h2> मेरी धड़कनों में, ही तेरी सदा <br> इस कदर तू मेरी, रूह में बस गया <br> तेरी यादों से, कब रहा मैं जुदा <br> वक़्त से पूछ ले, वक़्त मेरा गवाह <br> </h2>'},
    { image: s26, line:'<h2> कभी चुप-चुप रहे, कभी गाया ये करे <br>  बिन पूछे तेरी तारीफ़ें सुनाया ये करे <br>  है कोई हकीकत तू या कोई फसाना है <br>  कुछ जाने अगर तो इतना के ये तेरा दीवाना है <br>  रे मन मेरा,</h2>'},
    { image: s27, line: '<h2>धुल गए दिल के सारे ग़म, ख़ुशी से आँखें हैं ये नम <br>ज़िंदगी में तू मेरी जब से आ गया <br>दिल का अरमान बना है तू, मेरी पहचान बना है तू <br>साँसों में रूह बन के तू समा गया</h2>' },
    // { image: s28, /** */ line:  },
    { image: s30, /** */ line: '<h2>तू ही मेरे अरमानों में, तू ही मेरे अफ़सानों में <br> ख़यालों के पैमानों में तू ही तू <br> मेरे जिगर की ख़ाहिश में, मेरी वफ़ा की बंदिश में <br> मोहब्बतों की रंजिश में तू ही तू</h2>' },
    { image: s31, /** */ line: '<h2>ख्वाबों में तुझको सांवरा है <br>जज़्बों में अपने उतारा है <br>मेरी ये आँखें जिधर देखे <br>तेरा ही तेरा नजारा है </h2>' },

    { image: sat1, line: '<h2> उलझे काहे रे, मैं हूँ सूरत में, तुझसे बढ़ के कहीं <br> ठहरी तू है जवां तो, मैं भी सजीला कुछ कम नहीं </h2>' },
  ]

  const [counter, setCounter] = useState(0);
  // const [displayButton, setDisplayButton] = useState(false);

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
    console.log(counter);
  };

  return (
    <div>
      <TypingEffect lines={"<h2>aaaahhhh.... finally pahuch hi gae <br> ab sun...</h2>"} />
      {images.slice(0, counter).map((image, index) => (
        <div key={index}>
          <img src={image.image} alt={`pic ${index + 2}`} height={510} />
          <TypingEffect lines={image.line} />
        </div>
      ))}
      <button onClick={handleCounter}>click</button>
    </div>
  )
}

export default Songs