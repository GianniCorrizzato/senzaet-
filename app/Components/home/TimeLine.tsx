import React from 'react'
import CardBuy from './CardBuy'

const TimeLine = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">Dacia Duster</time>
      <div className="text-lg font-black">Prodotta dal 2010 al 2018</div>
      <CardBuy src="https://cdn-datak.motork.net/configurator-imgs/cars/it/original/DACIA/DUSTER/40593_SUV-5-PORTE/dacia-duster-front-view.jpg" name='Dacia Duster' desc='Con la terza generazione, la suv compatta Dacia Duster vanta uno stile moderno e personale ed è migliorata parecchio nella sicurezza: di serie per tutte le versioni,dali e il rilevamento posteriore degli ostacoli. A dispetto dei soli 434 cm di lunghezza, dentro lo spazio è buono, anche per i bagagli e pure nelle versioni ibride o a Gpl, che non presentano un vano di carico principale compromesso dagli ingombri della batteria.' price='6.400'/>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">Ford Ka</time>
      <div className="text-lg font-black">Prodotta dal 2009 al 2017</div>
      <CardBuy src="https://d2e5b8shawuel2.cloudfront.net/vehicle/273229/hra/original.jpg" name='Ford Ka' desc='La Ford Ka è un utilitaria di segmento A commercializzata dalla filiale europea della casa automobilistica statunitense Ford a partire dal 1996. Nel 2015 è stata presentata la terza generazione, che cambia denominazione in Ka+.' price='4.800'/>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">Fiat Panda</time>
      <div className="text-lg font-black">Prodotta dal 2012</div>
      <CardBuy src="https://cdnwp.dealerk.com/eed49ed7/uploads/sites/142/2018/02/fiat_panda_cross-1024x576.jpg" name='Fiat Panda' desc='La Fiat Panda è un auto superutilitaria prodotta dalla casa automobilistica italiana FIAT in tre serie: la prima, nata nel 1980 e disegnata da Giorgetto Giugiaro; la seconda nata nel 2003 e disegnata da Giuliano Biasio per Bertone; e la terza, nata nel 2012 e disegnata dal centro stile Fiat sotto la direzione di Roberto Giolito.' price='7.500'/>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end md:mb-10">
      <time className="font-mono italic">Lancia Thema</time>
      <div className="text-lg font-black">Prodotta dal 2011 al 2015</div>
      <CardBuy src="https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/serie_auto_galleria/2011/12/lancia_thema_ant.png" name='Lancia Thema' desc='La Lancia Thema, arrivata alla seconda generazione, è un’ammiraglia a trazione posteriore rivolta a chi vuole una “berlinona” comoda ed elegante. In poche parole non è altro che la versione rimarchiata della Chrysler 300 in vendita in Nord America. Adatta ai lunghi viaggi e dotata di un valido impianto frenante potente ed efficace, monta sospensioni ben tarate e ha un abitacolo ben insonorizzato impreziosito da sedili comodissimi: quelli anteriori sono elettrici, riscaldabili e ventilati. Migliorabili le finiture e generosa la dotazione di serie degli esemplari più recenti: climatizzatore automatico bizona, cruise control, fari bixeno, interni in pelle, navigatore e pedaliera elettrica con memoria. ' price='8.000'/>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start mb-10 md:text-end">
      <time className="font-mono italic">Mahindra XUV500</time>
      <div className="text-lg font-black">Prodotta dal 2012 al 2022</div>
      <CardBuy src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_970/public/primo_contatto_galleria/2019/07/mahindra-xuv-500-2019-07_11.jpg" name='Mahindra XUV500' desc='Proposta a un prezzo molto competitivo (si parte da 21.250 euro), la Mahindra XUV500 è una suv con sette posti comodi, che si aggiorna per la seconda volta (il modello è del 2012 e il primo restyling risale al 2015). A livello estetico, a cambiare è soprattutto la mascherina, che non ha più sette feritoie ma una trama a maglia ed è sottolineata da fregi cromati, che si ritrovano pure sopra i fari, con integrate le luci diurne a led. Sono inediti anche la zona del centrale del portellone, dove si trova un listello cromato, e i fanali. ' price='5.500'/>
    </div>
  </li>
</ul>
  )
}

export default TimeLine