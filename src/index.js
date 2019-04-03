import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';

import JobsList from "./components/jobsList";

import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

addLocaleData(esLocaleData);
addLocaleData(enLocaleData);

console.log(window);
ReactDOM.render(
	<IntlProvider  locale="es-Es" messages= {localeEsMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);