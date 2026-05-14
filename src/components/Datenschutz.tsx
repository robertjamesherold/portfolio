import { navigate } from '../lib/router';

export const Datenschutz = () => (
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
      Datenschutzerklärung
    </h1>

    <div className="mt-12 max-w-[720px] space-y-10 text-ink-2 text-[15px] sm:text-base leading-relaxed">
      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="font-medium text-ink-1 mt-4 mb-2">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          2. Verantwortliche Stelle
        </h2>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p className="mt-3">
          Robert James Herold<br />
          Im Kammerfest 23<br />
          63628 Bad Soden-Salmünster
        </p>
        <p className="mt-3">
          Telefon: +49 151 61660444<br />
          E-Mail: robertjamesherold@icloud.com
        </p>
        <p className="mt-3">
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten entscheidet.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          3. Datenerfassung auf dieser Website
        </h2>

        <h3 className="font-medium text-ink-1 mt-4 mb-2">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Verantwortliche Stelle" in dieser Datenschutzerklärung entnehmen.
        </p>

        <h3 className="font-medium text-ink-1 mt-4 mb-2">
          Wie erfasse ich Ihre Daten?
        </h3>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese
          mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie mir per
          E-Mail oder Telefon übermitteln.
        </p>
        <p className="mt-3">
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch die IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
          sobald Sie diese Website betreten.
        </p>

        <h3 className="font-medium text-ink-1 mt-4 mb-2">
          Wofür nutze ich Ihre Daten?
        </h3>
        <p>
          Diese Website dient als Portfolio und Bewerbungsunterlage. Wenn Sie
          mich per E-Mail oder Telefon kontaktieren, werden Ihre Angaben
          (Name, Kontaktdaten, Inhalt der Anfrage) zum Zwecke der Bearbeitung
          der Kontaktaufnahme und deren Abwicklung verarbeitet.
        </p>

        <h3 className="font-medium text-ink-1 mt-4 mb-2">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </h3>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>
        <p className="mt-3">
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an mich wenden.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          4. Hosting
        </h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>
        <p className="mt-3">
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
          gegenüber potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b
          DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung meines Online-Angebots durch einen professionellen
          Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          5. Kontaktaufnahme
        </h2>
        <p>
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
          inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
          Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei mir
          gespeichert und verarbeitet.
        </p>
        <p className="mt-3">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          meinem berechtigten Interesse an der effektiven Bearbeitung der an
          mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde.
        </p>
        <p className="mt-3">
          Die von Ihnen an mich per Kontaktanfragen übersandten Daten verbleiben
          bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          6. Ihre Rechte
        </h2>
        <p>Sie haben gegenüber mir folgende Rechte hinsichtlich Ihrer Daten:</p>
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-3">
          Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen das
          Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
          in einer anderen Weise verletzt worden sind, können Sie sich bei der
          zuständigen Aufsichtsbehörde beschweren.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-ink-1 mb-3">
          7. SSL-/TLS-Verschlüsselung
        </h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von „http://" auf „https://" wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p className="mt-3">
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an mich übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
      </div>

      <div className="pt-6 border-t border-line-subtle">
        <p className="text-ink-3 text-sm">
          Stand: Mai 2026
        </p>
      </div>
    </div>
  </section>
);
