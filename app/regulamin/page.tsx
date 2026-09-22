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
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§2 Płatności i realizacja zamówień</h2>
                        <p className="mb-3">
                            Za płatności odpowiada serwis SimPay.pl, należący do PAYMENTS SOLUTION SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, ul. Słoneczna 4, 06-212 Krasnosielc, Polska. NIP: 7571485069.
                        </p>

                        <h3 className="font-bold text-[#1a1a1a] mt-4 mb-2">Metody płatności dostępne w sklepie:</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li>Przelewy Online</li>
                            <li>BLIK</li>
                            <li>PayPal</li>
                        </ul>

                        <p className="mb-2">Termin płatności jest natychmiastowy. Po dokonaniu opłaty użytkownik automatycznie otrzymuje zakupioną usługę (treść cyfrową) na serwerze.</p>
                        <p>Użytkownik dokonując płatności akceptuje niniejszy regulamin oraz regulaminy operatora płatności dostępne na stronie simpay.pl.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§3 Odstąpienie od umowy (Produkty cyfrowe)</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Wszystkie usługi oferowane w sklepie mają charakter treści cyfrowych, które nie są zapisane na nośniku materialnym.</li>
                            <li>Z uwagi na natychmiastowe dostarczenie usługi, konsument wyraża zgodę na rozpoczęcie dostarczania treści cyfrowej przed upływem 14 dni na odstąpienie od umowy.</li>
                            <li>W związku z powyższym, kupujący przyjmuje do wiadomości i akceptuje utratę prawa do odstąpienia od umowy po dostarczeniu wirtualnego przedmiotu na serwerze.</li>
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
