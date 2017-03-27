import createReducer from '../utils/createReducer'

import image1 from '../assets/photos/Wolfix filamenty/1/1.png'
import image2 from '../assets/photos/Wolfix filamenty/1/2.png'
import image3 from '../assets/photos/Wolfix filamenty/1/3.png'
import image4 from '../assets/photos/Wolfix filamenty/1/4.png'
import image5 from '../assets/photos/Wolfix filamenty/2/1.png'
import image6 from '../assets/photos/Wolfix filamenty/2/2.png'
import image7 from '../assets/photos/Wolfix filamenty/2/3.png'
import image8 from '../assets/photos/Wolfix filamenty/3/1.png'
import image9 from '../assets/photos/Wolfix filamenty/3/2.png'
import image10 from '../assets/photos/Wolfix filamenty/3/3.png'
import image11 from '../assets/photos/Wolfix filamenty/3/4.png'
import image12 from '../assets/photos/Wolfix filamenty/4/1.png'
import image13 from '../assets/photos/Wolfix filamenty/4/2.png'
import image14 from '../assets/photos/Wolfix filamenty/4/3.png'
import image15 from '../assets/photos/Wolfix filamenty/5/1.png'
import image16 from '../assets/photos/Wolfix filamenty/5/2.png'
import image17 from '../assets/photos/Wolfix filamenty/5/3.png'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------

export const initialState = {
    filamenty: [
        {
            name: 'WOLFix PLA Economic Line',
            desc: `Soczyste i głębokie kolory z klasycznej palety barw.
                Każdy z użytkowników drukarki znajdzie jakiś kolor dla potrzeb swojego wydruku spośród 14
                odcieni: śnieżna biel, głęboki czarny, szary mysi, szary gołębi, transparentny, fiolet lawendowy, róż
                fuksja, niebieski chabrowy, błękitna laguna, zielony kiwi, zielone jabłuszko, żółty cytrynowy,
                pomarańczowy, czerwień makowa. Wszystkie materiały posiadają różne możliwości wyglądu
                o powierzchni – matowej przy druku w temp. 185 C, aż do połyskliwej przy temperaturze druku
                o 225 C. 1 kg filamentu nawiniętego na szpulę zapakowany jest hermetycznie z pochłaniaczem
                wilgoci w kartonowe pudełko, dzięki czemu mamy gwarancję, że materiał dostarczony zostanie
                nie uszkodzony i zabezpieczony przed działaniem czynników zewnętrznych typu wilgoć czy światło
                słoneczne.`,
            imgs: [
                image1,
                image2,
                image3,
                image4
            ]
        },
        {
            name: 'WOLFix ABS Economic Line',
            desc: `Każdy z użytkowników drukarki znajdzie jakiś kolor dla potrzeb swojego wydruku spośród 14
                odcieni: śnieżna biel, głęboki czarny, szary mysi, szary gołębi, naturalny, fiolet lawendowy, róż
                fuksja, niebieski chabrowy, błękitna laguna, ciemna zieleń, zielone jabłuszko, żółty cytrynowy,
                pomarańczowy, czerwień makowa. Wszystkie materiały świetnie drukują się w przedziale temp.
                o 225-265 C. 1 kg filamentu nawiniętego na szpulę jest zapakowany hermetycznie z pochłaniaczem
                wilgoci w kartonowe pudełko, dzięki czemu mamy gwarancję, że materiał dostarczony zostanie
                nie uszkodzony i zabezpieczony przed działaniem czynników zewnętrznych typu wilgoć czy światło
                słoneczne. Tolerancja średnicy filamentu to (+/-0,25mm).`,
            imgs: [
                image5,
                image6,
                image7
            ]
        },
        {
            name: 'WOLFix Crystal',
            desc: `Transparentne materiały w szlachetnych odcieniach.
                Nie ma osoby, która nie zachwyca się kamieniami szlachetnymi. Właśnie one były dla nas
                inspiracją do stworzenia linii WOLFix Crystal – rubinowy, szmaragdowy, szafirowy, granat, onyx. W
                połączeniu z transparentnością materiału i światłem tworzą niezwykłe zjawisko. Lampy, obudowy,
                elementy ubrań, biżuteria... Świat jubilerstwa stoi przed Tobą otworem!`,
            imgs: [
                image8,
                image9,
                image10,
                image11
            ]
        },
        {
            name: 'WOLFix NeoFluo',
            desc: `Neonowe filamenty posiadające cechy światłowodu.
                Reklama, obudowy maszyn, elektroniki, a także elementy oświetlenia. To tylko część z rzeczy,
                które można wydrukować z niepowtarzalnych neonowych kolorów, które posiadają cechy
                transparentności. Wystarczy jedna mała dioda, aby Twój wydruk rozbłysnął promieniami żółtego,
                pomarańczowego lub czerwonego neonu. Wypróbuj już dziś!`,
            imgs: [
                image12,
                image13,
                image14
            ]
        },
        {
            name: 'WOLFix Fashion&Design',
            desc: `Filamenty stworzone specjalnie z myślą o wydrukach modowych, sztuki użytkowej,
                architektonicznych, dekoracyjnych.
                Drukujesz makietę lub modele? WOLFix Kość słoniowa to kolor dla Ciebie! A może marzy Ci się
                strój w blasku srebrnych lub złotych refleksów? Jeśli tak, to nie zwlekaj. Linia Fashion&Design
                powstała z myślą o Tobie!`,
            imgs: [
                image15,
                image16,
                image17
            ]
        }
    ]
}

export default createReducer(initialState, {})
