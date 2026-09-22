export default function RegulaminPage() {
    return (
        <div className="flex flex-1 flex-col items-center px-6 pb-12 w-full">
            <div className="w-full max-w-[1600px] mt-10">
                <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] uppercase tracking-tight mb-2">
                    Regulamin
                </h1>
                <p className="text-[#666] font-medium mb-8">Z dnia: 23.04.2026</p>

                <div className="p-8 md:p-12 leading-relaxed text-[#666]">

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§1 Postanowienia ogólne i świadczenie usług</h2>
                        <ol className="list-decimal pl-5 space-y-2 mb-3">
                            <li>Wyspa i jej usługi działają na podstawie niniejszego regulaminu.</li>
                            <li>Nieznajomość regulaminu nie zwalnia z jego przestrzegania. Korzystanie z usług sprawia, że automatycznie akceptujesz regulamin.</li>
                            <li>Sklep umożliwia zakup wirtualnych przedmiotów i treści cyfrowych na serwerze gry komputerowej Minecraft. Zamówienia nie podlegają fizycznej wysyłce.</li>
                            <li>Wymagania techniczne do korzystania z usług to posiadanie oryginalnej gry Minecraft oraz stabilnego połączenia z Internetem.</li>
                            <li>Złożenie zamówienia polega na wyborze wirtualnego przedmiotu, podaniu nazwy użytkownika z gry oraz przejściu do płatności. Do zawarcia umowy dochodzi w momencie pozytywnego autoryzowania płatności.</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§3
Zasady składania zamówień i realizacji usług</h2>
                        <p className="mb-3">1. Ceny wszystkich produktów widoczne w Serwisie są cenami brutto wyrażonymi w złotych polskich (PLN) i zawierają wszystkie obowiązujące podatki.</p>
                        <p>2. W celu złożenia zamówienia Usługobiorca wybiera produkt, podaje swój unikalny pseudonim (nick) z gry Minecraft, podaje adres e-mail, wybiera metodę płatności oraz akceptuje Regulamin wraz z Polityką Prywatności.</p>
                        <p>3. Dostępne metody płatności to: BLIK, Przelewy, PayPal.</p>
                        <p>4. Do realizacji płatności wykorzystywany jest system zewnętrzny operowany przez Payments Solution Sp. z o.o. (SimPay).</p>
                        <p>5. W przypadku wystąpienia problemów z realizacją płatności elektronicznych, Klient może skontaktować się bezpośrednio z operatorem płatności SimPay za pośrednictwem strony kontaktowej: https://simpay.pl/kontakt</p>
                        <p>6. Realizacja zamówienia i dostarczenie Treści Cyfrowej następuje automatycznie w ciągu kilku minut od momentu zaksięgowania wpłaty w systemie Operatora Płatności. W przypadku awarii technicznych czas ten może ulec wydłużeniu do maksymalnie 24 godzin.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§4 Ochrona konsumenta i prawo do odstąpienia od umowy</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Zgodnie z art. 38 pkt 13 Ustawy z dnia 30 maja 2014 r. o prawach konsumenta, prawo do odstąpienia od umowy zawartej na odległość NIE przysługuje Konsumentowi w odniesieniu do umów o dostarczanie treści cyfrowych niedostarczanych na nośniku materialnym, jeżeli spełnianie świadczenia rozpoczęło się za wyraźną i uprzednią zgodą Konsumenta przed upływem terminu do odstąpienia od umowy i po poinformowaniu go przez przedsiębiorcę o utracie prawa do odstąpienia od umowy.</li>
                            <li>Usługobiorca dokonując zakupu i zaznaczając odpowiednie pole (checkbox) w procesie zakupowym, wyraża zgodę na natychmiastowe rozpoczęcie świadczenia usługi (dostarczenie przedmiotu/rangi w grze) przed upływem 14-dniowego terminu do odstąpienia od umowy i przyjmuje do wiadomości utratę tego prawa.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§5
Procedura reklamacyjna</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Usługodawca ma obowiązek dostarczyć Treść Cyfrową zgodną z umową.</li>
                            <li>W przypadku niewykonania lub nienależytego wykonania usługi (np. braku przyznania rangi, braku przedmiotu po zaksięgowaniu wpłaty), Klient ma prawo złożyć reklamację.</li>
                            <li>Reklamacje należy zgłaszać na adres e-mail: nocnydominator@gmail.com.</li>
                            <li>Usługodawca rozpatruje reklamację w terminie do 14 dni kalendarzowych od dnia jej doręczenia i przekazuje odpowiedź na adres e-mail Klienta.</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§6 Ochrona danych osobowych i prywatność</h2>
                        <p className="mb-2">1. Administratorem Danych Osobowych Usługobiorców jest Grażyna Spudzis.</p>
                        <p>2. Dane osobowe (nick z gry, adres e-mail, adres IP, historia transakcji) przetwarzane są wyłącznie w celu realizacji zamówień, obsługi ewentualnych reklamacji oraz wypełnienia obowiązków podatkowo-księgowych.</p>
                        <p>3. Dane nie są przekazywane podmiotom trzecim za wyjątkiem Operatora Płatności (Payments Solution Sp. z o.o.) w celu realizacji transakcji.</p>
                        <p>4. Usługobiorca ma prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu. Wnioski należy kierować na adres: nocnydominator@gmail.com</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§7 Postanowienia końcowe</h2>
                        <p className="mb-2"> 1. Umowy zawierane za pośrednictwem Serwisu podlegają prawu polskiemu. </p>
                        <p>2. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego, Ustawy o prawach konsumenta oraz Ustawy o świadczeniu usług drogą elektroniczną.</p>
                        <p>3. Usługodawca zastrzega sobie prawo do zmiany Regulaminu z ważnych przyczyn (np. zmiana przepisów prawa, zmiana metod płatności). O zmianach Usługobiorcy zostaną poinformowani poprzez publikację nowej wersji na stronie WYSPA.GG.</p>
                        <p>
                            4. Pełne dane kontaktowe Usługodawcy:
                            Grażyna Spudzis
                            Adres siedziby: Gałczyńskiego 5/15
                            E-mail kontaktowy: nocnydominator@gmail.com
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
