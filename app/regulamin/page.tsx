export default function RegulaminPage() {
    return (
        <div className="flex flex-1 w-full flex-col items-center px-6 pb-12">
            <div className="mt-10 w-full max-w-[1600px]">
                <h1 className="mb-2 text-3xl font-black uppercase tracking-tight text-[#1a1a1a] md:text-4xl">
                    Regulamin
                </h1>

                <p className="mb-8 font-medium text-[#666]">
                    Z dnia: 22.09.2026
                </p>

                <div className="p-0 leading-relaxed text-[#666] md:p-4">
                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §1. Postanowienia ogólne i świadczenie usług
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Wyspa i jej usługi działają na podstawie
                                niniejszego Regulaminu.
                            </li>
                            <li>
                                Nieznajomość Regulaminu nie zwalnia z obowiązku
                                jego przestrzegania. Korzystanie z usług oznacza
                                akceptację postanowień Regulaminu.
                            </li>
                            <li>
                                Sklep umożliwia zakup wirtualnych przedmiotów
                                i treści cyfrowych na serwerze gry komputerowej
                                Minecraft. Zamówienia nie podlegają fizycznej
                                wysyłce.
                            </li>
                            <li>
                                Wymagania techniczne niezbędne do korzystania
                                z usług obejmują posiadanie oryginalnej gry
                                Minecraft oraz stabilnego połączenia
                                z Internetem.
                            </li>
                            <li>
                                Złożenie zamówienia polega na wyborze
                                wirtualnego przedmiotu, podaniu nazwy
                                użytkownika z gry oraz przejściu do płatności.
                                Do zawarcia umowy dochodzi w momencie pozytywnego
                                autoryzowania płatności.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §2. Postanowienia ogólne i warunki korzystania
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Właścicielem i administratorem Serwisu jest
                                Usługodawca.
                            </li>
                            <li>
                                Korzystanie z Serwisu wymaga spełnienia
                                następujących wymagań technicznych: dostępu
                                do sieci Internet, zainstalowanej przeglądarki
                                internetowej z obsługą JavaScript i plików
                                cookies, posiadania aktywnego konta e-mail
                                oraz zainstalowanej gry Minecraft.
                            </li>
                            <li>
                                Usługobiorca zobowiązany jest do korzystania
                                z Serwisu w sposób zgodny z prawem, dobrymi
                                obyczajami oraz postanowieniami niniejszego
                                Regulaminu. Zakazane jest dostarczanie treści
                                o charakterze bezprawnym.
                            </li>
                            <li>
                                Treści cyfrowe i usługi zakupowane w Serwisie
                                służą wyłącznie do użytku w ramach serwera gry
                                Minecraft powiązanego z Serwisem WYSPA.GG
                                i nie stanowią oficjalnego produktu Mojang AB
                                ani Microsoft.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §3. Zasady składania zamówień i realizacji usług
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Ceny wszystkich produktów widoczne w Serwisie
                                są cenami brutto wyrażonymi w złotych polskich
                                (PLN) i zawierają wszystkie obowiązujące podatki.
                            </li>
                            <li>
                                W celu złożenia zamówienia Usługobiorca wybiera
                                produkt, podaje swój unikalny pseudonim (nick)
                                z gry Minecraft, podaje adres e-mail, wybiera
                                metodę płatności oraz akceptuje Regulamin wraz
                                z Polityką Prywatności.
                            </li>
                            <li>
                                Dostępne metody płatności to: BLIK, przelewy
                                oraz PayPal.
                            </li>
                            <li>
                                Do realizacji płatności wykorzystywany jest
                                system zewnętrzny obsługiwany przez
                                Payments Solution Sp. z o.o. (SimPay).
                            </li>
                            <li>
                                W przypadku wystąpienia problemów z realizacją
                                płatności elektronicznych Klient może
                                skontaktować się bezpośrednio z operatorem
                                płatności SimPay za pośrednictwem jego strony
                                kontaktowej:{' '}
                                <a
                                    href="https://simpay.pl/kontakt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-[#1a1a1a] underline underline-offset-4 transition-colors hover:text-black"
                                >
                                    simpay.pl/kontakt
                                </a>
                            </li>
                            <li>
                                Realizacja zamówienia i dostarczenie treści
                                cyfrowej następuje automatycznie w ciągu kilku
                                minut od momentu zaksięgowania wpłaty w systemie
                                Operatora Płatności. W przypadku awarii
                                technicznych czas ten może ulec wydłużeniu
                                do maksymalnie 24 godzin.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §4. Ochrona konsumenta i prawo do odstąpienia od umowy
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Zgodnie z art. 38 pkt 13 Ustawy z dnia 30 maja
                                2014 r. o prawach konsumenta prawo do odstąpienia
                                od umowy zawartej na odległość nie przysługuje
                                Konsumentowi w odniesieniu do umów o dostarczanie
                                treści cyfrowych niedostarczanych na nośniku
                                materialnym, jeżeli spełnianie świadczenia
                                rozpoczęło się za wyraźną i uprzednią zgodą
                                Konsumenta przed upływem terminu do odstąpienia
                                od umowy i po poinformowaniu go przez
                                przedsiębiorcę o utracie prawa do odstąpienia
                                od umowy.
                            </li>
                            <li>
                                Usługobiorca, dokonując zakupu i zaznaczając
                                odpowiednie pole (checkbox) w procesie
                                zakupowym, wyraża zgodę na natychmiastowe
                                rozpoczęcie świadczenia usługi (dostarczenie
                                przedmiotu lub rangi w grze) przed upływem
                                14-dniowego terminu do odstąpienia od umowy
                                i przyjmuje do wiadomości utratę tego prawa,
                                zgodnie z obowiązującymi przepisami.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §5. Procedura reklamacyjna
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Usługodawca ma obowiązek dostarczyć treść
                                cyfrową zgodną z umową.
                            </li>
                            <li>
                                W przypadku niewykonania lub nienależytego
                                wykonania usługi, np. braku przyznania rangi
                                lub braku przedmiotu po zaksięgowaniu wpłaty,
                                Klient ma prawo złożyć reklamację.
                            </li>
                            <li>
                                Reklamacje należy zgłaszać na adres e-mail:{' '}
                                <a
                                    href="mailto:nocnydominator@gmail.com"
                                    className="font-semibold text-[#1a1a1a] underline underline-offset-4 transition-colors hover:text-black"
                                >
                                    nocnydominator@gmail.com
                                </a>
                            </li>
                            <li>
                                Usługodawca rozpatruje reklamację w terminie
                                do 14 dni kalendarzowych od dnia jej doręczenia
                                i przekazuje odpowiedź na adres e-mail Klienta.
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §6. Ochrona danych osobowych i prywatność
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Administratorem danych osobowych Usługobiorców
                                jest Grażyna Spudzis.
                            </li>
                            <li>
                                Dane osobowe, takie jak nick z gry, adres
                                e-mail, adres IP oraz historia transakcji,
                                przetwarzane są w celu realizacji zamówień,
                                obsługi ewentualnych reklamacji oraz
                                wypełnienia obowiązków podatkowo-księgowych.
                            </li>
                            <li>
                                Dane nie są przekazywane podmiotom trzecim,
                                z wyjątkiem Operatora Płatności
                                (Payments Solution Sp. z o.o.) w celu
                                realizacji transakcji.
                            </li>
                            <li>
                                Usługobiorca ma prawo dostępu do swoich danych,
                                ich sprostowania, usunięcia, ograniczenia
                                przetwarzania oraz wniesienia sprzeciwu,
                                w przypadkach przewidzianych przepisami prawa.
                                Wnioski należy kierować na adres:{' '}
                                <a
                                    href="mailto:nocnydominator@gmail.com"
                                    className="font-semibold text-[#1a1a1a] underline underline-offset-4 transition-colors hover:text-black"
                                >
                                    nocnydominator@gmail.com
                                </a>
                            </li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="mb-3 text-xl font-black uppercase text-[#1a1a1a]">
                            §7. Postanowienia końcowe
                        </h2>

                        <ol className="list-decimal space-y-2 pl-5">
                            <li>
                                Umowy zawierane za pośrednictwem Serwisu
                                podlegają prawu polskiemu.
                            </li>
                            <li>
                                W sprawach nieuregulowanych niniejszym
                                Regulaminem zastosowanie mają przepisy Kodeksu
                                cywilnego, Ustawy o prawach konsumenta oraz
                                Ustawy o świadczeniu usług drogą elektroniczną.
                            </li>
                            <li>
                                Usługodawca zastrzega sobie prawo do zmiany
                                Regulaminu z ważnych przyczyn, takich jak
                                zmiana przepisów prawa lub metod płatności.
                                O zmianach Usługobiorcy zostaną poinformowani
                                poprzez publikację nowej wersji Regulaminu
                                na stronie WYSPA.GG.
                            </li>
                            <li>
                                Pełne dane kontaktowe Usługodawcy:
                            </li>
                        </ol>

                        <address className="mt-4 space-y-1 border-l-2 border-[#1a1a1a]/20 pl-4 not-italic">
                            <p className="font-bold text-[#1a1a1a]">
                                Grażyna Spudzis
                            </p>
                            <p>Adres siedziby: Gałczyńskiego 5/15</p>
                            <p>
                                E-mail kontaktowy:{' '}
                                <a
                                    href="mailto:nocnydominator@gmail.com"
                                    className="font-semibold text-[#1a1a1a] underline underline-offset-4 transition-colors hover:text-black"
                                >
                                    nocnydominator@gmail.com
                                </a>
                            </p>
                        </address>
                    </section>
                </div>
            </div>
        </div>
    );
}
