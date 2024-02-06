const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

/*
 * @MICROFRONTEND
 *
 * Šiuo metu kompiliuojant single-spa aplikaciją galima naudoti
 * išskirtinai tik Webpack, ties Vite palaikymu pagal naujausią
 * informaciją vis dar yra dirbama iš single-spa kūrėjų pusės.
 *
 * Webpack konfigūracija kuriamą išplečiant single-spa pateikiamą
 * bazinę Webpack konfigūraciją, kuru sukuriama kviečiant
 * `singleSpaAngularWebpack`. Žemiau pateikiamas lodas leidžia
 * praplėsti bazinę konfigūraciją pagal poreikius.
 *
 * `externals` yra nurodomas projekto priklausomybių prefix'as,
 * kurios neturi būti įtraukiamos į sukompiliuotą kodą.
 * Visos priklausomybės su `@rc-ses` prefix'u, kurios yra
 * `src/@types` kataloge apibrėžia atitinkamų single-spa modulių
 * viešą eksportuojamą funkcionalumą, kurį galima "kviesti" bet
 * kur šioje aplikacijoje norint gauti arba pateikti informaciją
 * atitinkamiems moduliams.
 *
 * `output.filename` nurodo galutinio sukompiliuoto failo pavadinimą,
 * kuris privalo atitikti pavyzdyje nurodytą konvenciją ir privalo
 * būti žinomas šakninio single-spa projekto kuratoriams.
 */
module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(
    config,
    options
  );

  singleSpaWebpackConfig.externals = [
    /^@rc-ses\/.+/
  ];

  singleSpaWebpackConfig.output.filename = 'rc-ses-self-service-provider-demo-angular-ui.js';

  return singleSpaWebpackConfig;
};
