/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const video = document.querySelector('#video');
const btnPlay = document.querySelector('#btn-play');
const btnPause = document.querySelector('#btn-pause');
const btnMute = document.querySelector('#btn-mute');

const accionPlay = () => { video.play(); };
const accionPause = () => { video.pause(); };
const accionMute = () => { video.muted = !video.muted };

btnPlay.addEventListener('click', accionPlay);
btnPause.addEventListener('click', accionPause);
btnMute.addEventListener('click', accionMute);