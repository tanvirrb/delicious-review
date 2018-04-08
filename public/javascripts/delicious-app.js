import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';
import makeMap from './modules/map';
import ajaxHeart from './modules/heart'

autocomplete($('#address'), $('#lat'), $('#lng'))

typeAhead($('.search'));

makeMap($('#map'));

const heartForm = $$('form.heart');

heartForm.on('submit', ajaxHeart);