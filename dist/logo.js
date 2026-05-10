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
const texture = new THREE.TextureLoader().load('/assets/3d logo.png');
const mat = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geo,mat);
cube.position.x =3;
cube.position.y = 0.5;
cube.position.z = 1;

scene.add( cube );
const point_geo = new THREE.TorusGeometry(50,10,15,200);
const point_tex = new THREE.PointsMaterial({color:'white', size:0.4});
const point = new THREE.Points(point_geo,point_tex);
scene.add(point);
point.position.x =3;

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