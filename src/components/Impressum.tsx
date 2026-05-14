import { navigate } from '../lib/router';

export const Impressum = () => (
  <section className="container-x pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-28">
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate('/');
      }}
      className="inline-flex items-center gap-2 mono text-[11px] sm:text-[12px] tracking-[.18em] text-ink-3 hover:text-ink-1 transition uppercase"
    >
      <span aria-hidden>←</span>
      <span>Zur Übersicht</span>
    </a>

    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightish mt-10">
      Impressum
    </h1>

    <div className="mt-12 max-w-[720px] space-y-10 text-ink-2 text-[15px] sm:text-base leading-relaxed">
      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          Robert James Herold<br />
          Im Kammerfest 23<br />
          63628 Bad Soden-Salmünster
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">Kontakt</h2>
        <p>
          Telefon: +49 151 61660444<br />
          E-Mail: robertjamesherold@icloud.com
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          Robert James Herold<br />
          Im Kammerfest 23<br />
          63628 Bad Soden-Salmünster
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-soft hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mt-3">
          Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen.
        </p>
        <p className="mt-3">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werde ich diese Inhalte
          umgehend entfernen.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          Haftung für Links
        </h2>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren
          Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p className="mt-3">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werde ich derartige Links
          umgehend entfernen.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">Urheberrecht</h2>
        <p>
          Die durch mich erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen meiner schriftlichen Zustimmung.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht
          kommerziellen Gebrauch gestattet.
        </p>
        <p className="mt-3">
          Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden,
          werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
          Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
          Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde
          ich derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  </section>
);
