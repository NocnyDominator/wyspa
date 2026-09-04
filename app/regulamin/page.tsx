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
                            <li>Chunky i jej usługi działają na podstawie niniejszego regulaminu.</li>
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
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§4 Reklamacje</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Reklamacje związane ze świadczeniem usług elektronicznych można składać w przypadku, gdy przedmiot nie został dostarczony lub jest niezgodny z umową i opisem.</li>
                            <li>Sprzedawca ponosi odpowiedzialność za brak zgodności treści cyfrowej z umową.</li>
                            <li>Reklamacje należy składać poprzez wiadomość e-mail. W wiadomości należy podać nazwę użytkownika, adres e-mail użyty do zamówienia, nazwę usługi, metodę płatności oraz numer zamówienia.</li>
                            <li>Rozpatrzenie reklamacji następuje niezwłocznie, maksymalnie w terminie 14 dni od jej otrzymania.</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§5 Własność intelektualna</h2>
                        <p className="mb-2">Wszystkie treści zamieszczone na CHUNKY.PL korzystają z ochrony prawno-autorskiej.</p>
                        <p>Jakiekolwiek wykorzystanie przez kogokolwiek, bez wyraźnej pisemnej zgody, elementów składających się na treść oraz zawartość serwisu stanowi naruszenie prawa autorskiego i skutkuje odpowiedzialnością prawną.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-black text-xl text-[#1a1a1a] uppercase mb-3">§6 Postanowienia końcowe</h2>
                        <p className="mb-2">
                            Umowy zawierane za pośrednictwem strony podlegają prawu polskiemu. Sklep zastrzega sobie prawo do wprowadzania zmian w niniejszym regulaminie. W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa.
                        </p>
                        <p>
                            Sprzedawcą, administratorem danych osobowych oraz podmiotem świadczącym usługi drogą elektroniczną w ramach serwisu jest xxxx Kontakt we wszelkich sprawach związanych z funkcjonowaniem sklepu możliwy jest pod adresem e-mail xxxx.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}