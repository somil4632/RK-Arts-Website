import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';
const scene = new THREE.Scene();
const header = document.querySelector('header')
const camera = new THREE.PerspectiveCamera(75,header.clientWidth / header.clientHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#logo'),
    alpha :true
});

renderer.setSize(header.clientWidth, header.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);



const geo = new THREE.BoxGeometry(0.1,1.3,3);
const texture = new THREE.TextureLoader().load('./assets/3d logo.png');
const mat = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geo,mat);
cube.position.x =0;
cube.position.y = 0;
cube.position.z = 2;

scene.add( cube );
const point_geo = new THREE.TorusGeometry(50,20,30,200);
const point_tex = new THREE.PointsMaterial({color:'white', size:0.4});
const point = new THREE.Points(point_geo,point_tex);
scene.add(point);
point.position.x =0;

camera.position.z = 5;
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.015;
    point.rotation.y += 0.02;
    point.rotation.x += 0.02;

    renderer.render(scene,camera);
}
animate()

document.addEventListener('DOMContentLoaded', () =>{
    const openw = document.getElementById('openwd');
    const closew = document.getElementById('closewd');
    const popupwd = document.getElementById('wd');

    openw.addEventListener('click',() =>{
    popupwd.classList.remove('hidden');
    })
        closew.addEventListener('click', () =>{
            popupwd.classList.add('hidden');
        })

})


document.addEventListener('DOMContentLoaded', () =>{
    const openl = document.getElementById('openlt');
    const closel = document.getElementById('closelt');
    const popuplt = document.getElementById('lt');

    openl.addEventListener('click',() =>{
    popuplt.classList.remove('hidden');
    })
        closel.addEventListener('click', () =>{
            popuplt.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openb = document.getElementById('openwb');
    const closeb = document.getElementById('closewb');
    const popupwb = document.getElementById('wb');

    openb.addEventListener('click',() =>{
    popupwb.classList.remove('hidden');
    })
        closeb.addEventListener('click', () =>{
            popupwb.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openv = document.getElementById('openvs');
    const closev = document.getElementById('closevs');
    const popupvs = document.getElementById('vs');

    openv.addEventListener('click',() =>{
    popupvs.classList.remove('hidden');
    })
        closev.addEventListener('click', () =>{
            popupvs.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openB = document.getElementById('openbb');
    const closeB = document.getElementById('closebb');
    const popupbb = document.getElementById('bb');

    openB.addEventListener('click',() =>{
    popupbb.classList.remove('hidden');
    })
        closeB.addEventListener('click', () =>{
            popupbb.classList.add('hidden');
        })

})


document.addEventListener('DOMContentLoaded', () =>{
    const openp = document.getElementById('openpa');
    const closep = document.getElementById('closepa');
    const popuppa = document.getElementById('pa');

    openp.addEventListener('click',() =>{
    popuppa.classList.remove('hidden');
    })
        closep.addEventListener('click', () =>{
            popuppa.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openp = document.getElementById('openpa');
    const closep = document.getElementById('closepa');
    const popuppa = document.getElementById('pa');

    openp.addEventListener('click',() =>{
    popuppa.classList.remove('hidden');
    })
        closep.addEventListener('click', () =>{
            popuppa.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openE = document.getElementById('openEn');
    const closeE = document.getElementById('closeEn');
    const popupEn = document.getElementById('En');

    openE.addEventListener('click',() =>{
    popupEn.classList.remove('hidden');
    })
        closeE.addEventListener('click', () =>{
            popupEn.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openo = document.getElementById('openpo');
    const closeo = document.getElementById('closepo');
    const popuppo = document.getElementById('po');

    openo.addEventListener('click',() =>{
    popuppo.classList.remove('hidden');
    })
        closeo.addEventListener('click', () =>{
            popuppo.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openM = document.getElementById('openMe');
    const closeM = document.getElementById('closeMe');
    const popupMe = document.getElementById('Me');

    openM.addEventListener('click',() =>{
    popupMe.classList.remove('hidden');
    })
        closeM.addEventListener('click', () =>{
            popupMe.classList.add('hidden');
        })

})

document.addEventListener('DOMContentLoaded', () =>{
    const openG = document.getElementById('openGi');
    const closeG = document.getElementById('closeGi');
    const popupGi = document.getElementById('Gi');

    openG.addEventListener('click',() =>{
    popupGi.classList.remove('hidden');
    })
        closeG.addEventListener('click', () =>{
            popupGi.classList.add('hidden');
        })

})
let slideIndex = 0;
const slider = document.getElementById("slider");
const pre = document.getElementById("pre");
const next = document.getElementById("next");

const totalSlides = slider.children.length;
function updateSlider(){
    slider.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlider();
})
pre.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
})  

const slider2 = document.getElementById("slider2");
const pre2 = document.getElementById("pre2");
const next2 = document.getElementById("next2");
const totalSlides2 = slider2.children.length;
function updateSlider2(){
    slider2.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next2.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides2;
    updateSlider2();
})
pre2.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides2) % totalSlides2;
    updateSlider2();
})  

const slider3 = document.getElementById("slider3");
const pre3 = document.getElementById("pre3");
const next3 = document.getElementById("next3");
const totalSlides3 = slider3.children.length;
function updateSlider3(){
    slider3.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next3.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider3();
})
pre3.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides3) % totalSlides3;
    updateSlider3();
})  

const slider4 = document.getElementById("slider4");
const pre4 = document.getElementById("pre4");
const next4 = document.getElementById("next4");
const totalSlides4 = slider4.children.length;
function updateSlider4(){
    slider4.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next4.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider4();
})
pre4.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides4) % totalSlides4;
    updateSlider4();
})  

const slider5 = document.getElementById("slider5");
const pre5 = document.getElementById("pre5");
const next5 = document.getElementById("next5");
const totalSlides5 = slider5.children.length;
function updateSlider5(){
    slider5.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next5.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider5();
})
pre5.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides5) % totalSlides5;
    updateSlider5();
})  

const slider6 = document.getElementById("slider6");
const pre6 = document.getElementById("pre6");
const next6 = document.getElementById("next6");
const totalSlides6 = slider6.children.length;
function updateSlider6(){
    slider6.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next6.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider6();
})
pre6.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides6) % totalSlides6;
    updateSlider6();
})

const slider7 = document.getElementById("slider7");
const pre7 = document.getElementById("pre7");
const next7 = document.getElementById("next7");
const totalSlides7 = slider7.children.length;
function updateSlider7(){
    slider7.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next7.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider7();
})
pre7.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides7) % totalSlides7;
    updateSlider7();
}) 

const slider8 = document.getElementById("slider8");
const pre8 = document.getElementById("pre8");
const next8 = document.getElementById("next8");
const totalSlides8 = slider8.children.length;
function updateSlider8(){
    slider8.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next8.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider8();
})
pre8.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides8) % totalSlides8;
    updateSlider8();
}) 


const slider9 = document.getElementById("slider9");
const pre9 = document.getElementById("pre9");
const next9 = document.getElementById("next9");
const totalSlides9 = slider9.children.length;
function updateSlider9(){
    slider9.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next9.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider9();
})
pre9.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides9) % totalSlides9;
    updateSlider9();
})

const slider10 = document.getElementById("slider10");
const pre10 = document.getElementById("pre10");
const next10 = document.getElementById("next10");
const totalSlides10 = slider10.children.length;
function updateSlider10(){
    slider10.style.transform = `translateX(-${slideIndex * 100}%)` ; 
}
next10.addEventListener("click" , () => {
    slideIndex = (slideIndex + 1) % totalSlides3;
    updateSlider10();
})
pre10.addEventListener("click" , () => {
    slideIndex = (slideIndex - 1 + totalSlides10) % totalSlides10;
    updateSlider10();
}) 

function resizeLogo(){
    const width = header.clientWidth;
    const height = header.clientHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();

    if(window.innerwidth < 768)
    {
        cube.scale.set(0.7,0.7,0.7);
        point.scale.set(0.4,0.4,0.4);
        camera.position.z = 7;
    }
    
    else if(window.innerwidth < 1024){
        cube.scale.set(0.9,0.9,0.9);
        point.scale.set(0.7,0.7,0.7);
        camera.position.z = 6;
    }

   
}
window.addEventListener('resize',resizeLogo)
resizeLogo();