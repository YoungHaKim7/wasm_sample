import { Remarkable } from 'remarkable';
import * as wasm from "../pkg/";

// wasm markdown stuff
const wa = new Remarkable();
const remarkableDiv = document.getElementById('wasm-markdown');
const renderRemarkable = text => {
    const html = wa.render(text);
    // remarkableDiv.innerHTML = html;
}

// js markdown stuff
const wasmDiv = document.getElementById('js-markdown');
const renderWasm = text => {
    const html = wasm.render(text);
    // wasmDiv.innerHTML = html;
}

const textarea = document.getElementById('input-text');
textarea.addEventListener('keyup', e => {
    const text = e.target.value;
    console.time('remarkable');
    renderRemarkable(text);
    console.timeEnd('remarkable');

    console.time('wasm');
    renderWasm(text);
    console.timeEnd('wasm');
});

