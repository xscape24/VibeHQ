function changeScreenLeft(){
const btn=document.getELementById("left-arrow");

const soundImg=document.getELementById('sound-img');


btn.addEventListener('click', function() {
    // 3. Change the src attribute to the new image path
    soundImg.src ='assets/land1.jpg';

});
}
function changeScreenRight(){
const btn=document.querySelector('.right-arrow');
const screenContainer=document.querySelector('.screen-container');
const soundImg=document.querySelector('.sound-img');
const soundAudio=document.querySelector('.sound-audio');

}