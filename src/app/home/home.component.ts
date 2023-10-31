import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faCheck, faDownload, faMailBulk, faMapLocationDot, faMoon, faPhone, faSun, faX } from '@fortawesome/free-solid-svg-icons';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  dynamicPrject: Array<any> = [
    {
      name: 'MNO Shop',
      imagePath: './assets/Mshop.jpg',
      frontpj: "https://github.com/MyoNaingOo/shopAng",
      backpj: "https://github.com/MyoNaingOo/shopmno",
    },
    {
      name: "2D 3D",
      imagePath: './assets/2D3D.jpg',
      frontpj: "https://github.com/MyoNaingOo/threedfrontend",
      backpj: "https://github.com/MyoNaingOo/threed",
    },
    {
      name: "Telephone Bills",
      imagePath: './assets/Teleconbills.jpg',
      frontpj: "https://github.com/MyoNaingOo/telconbill-frontend",
      backpj: "https://github.com/MyoNaingOo/teleconbill-backend",
    }
  ]

  services: any = [
    {
      name: "Static web(SILVER)",
      getcode: true,
      threed: false,
      hosting: true,
      sociallink: true,
      pages: "min 5 -> max 10",
      price: 12
    },
    {
      name: "Static web (GOLD)",
      getcode: true,
      threed: false,
      hosting: true,
      sociallink: true,
      pages: "min 10 -> max 25",
      price: 20
    },
    {
      name: "Static web(PLATINUM)",
      getcode: true,
      threed: true,
      hosting: true,
      sociallink: true,
      pages: "min 5 -> max 12",
      price: 50
    },
    {
      name: "Dynamic web(DIAMOND)",
      getcode: true,
      threed: false,
      hosting: true,
      sociallink: true,
      pages: "min 10 -> max 25",
      price: 100
    }
  ]

  contacts: any = [
    {
      "lable":"Mail",
      "link":"mailto:myonaingoo623@gmail.com",
      "show":"myonaingoo623@gmail.com",
    },
    {
      "lable":"Address",
      "link":"https://www.google.com/maps/place/16.547280,+94.693328/@16.547344,94.6933796,19z/data=!3m1!1e3!4m4!3m3!8m2!3d16.5472801!4d94.6933276",
      "show":"Ngapudaw,Ayeyarwady Region"
    },
    {
      "lable":"Telephone",
      "link":"tel:+959254590211",
      "show":"+959-254590211"
    },{
      "lable":"YouTube",
      "link":"https://youtube.com/@MNOIT",
      "show":"MNO IT"
    },
    {
      "lable":"Facebook",
      "link":"https://www.facebook.com/profile.php?id=100066607411343",
      "show":"Myo Naing Oo"
    },
    {
      "lable":"LinkedIn",
      "link":"https://www.linkedin.com/in/myo-naing-oo-641789292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "show":"Myo Naing Oo"
    },
    {

      "lable":"Instagram",
      "link":"https://www.instagram.com/myonaingoo623/tagged",
      "show":"Myo Naing Oo"
    }
  ]



  famail: any = faMailBulk
  fatal: any = faPhone
  fayoutube: any = faYoutube
  fadot: any = faMapLocationDot
  fafacebook: any = faFacebook
  faInstagram: any = faInstagram
  facheck: any = faCheck
  fax: any = faX
  faanglaeup: any = faAngleUp
  theme_icon: any;
  faDown:any = faDownload

  constructor() {
  }
  ngOnInit(): void {
    this.createroom()
  }




  createroom() {
    const canvas = document.getElementById('bgcan');
    const scene = new THREE.Scene();



    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.x = 2;
    pointLight.position.y = 2;
    pointLight.position.z = 2;
    scene.add(pointLight);



    let angularMod: any;
    var gltLoader = new GLTFLoader()
    gltLoader.load('./assets/angular.gltf', (gltf) => {
      gltf.scene.rotateY(3.7)
      gltf.scene.scale.y = 0.15
      gltf.scene.scale.x = 0.15
      gltf.scene.scale.z = 0.15

      if (window.innerWidth < 500) {
        gltf.scene.position.x = 1
      } else {
        gltf.scene.position.x = 2
      }

      gltf.scene.position.y = -0.6


      angularMod = gltf
      scene.add(angularMod.scene)
    })

    let springMod: any;
    gltLoader.load('./assets/springboot.gltf', (gltf) => {
      gltf.scene.rotateY(-0.5)
      gltf.scene.scale.y = 0.15
      gltf.scene.scale.x = 0.15
      gltf.scene.scale.z = 0.15

      if (window.innerWidth < 500) {
        gltf.scene.position.x = -1
      } else {
        gltf.scene.position.x = -2
      }

      springMod = gltf
      scene.add(springMod.scene)
    })


    let jsMod: any;
    gltLoader.load('./assets/js.gltf', (gltf) => {
      gltf.scene.rotateY(-1)
      gltf.scene.scale.y = 1.8
      gltf.scene.scale.x = 1.8
      gltf.scene.scale.z = 1.8
      gltf.scene.position.y = -1.2

      gltf.scene.position.x = -1.5

      if (window.innerWidth < 500) {
        gltf.scene.position.x = -0.8
      } else {
        gltf.scene.position.x = -1.5
      }



      jsMod = gltf
      scene.add(jsMod.scene)
    })

    let cppMod: any;
    gltLoader.load('./assets/cpp.gltf', (gltf) => {
      gltf.scene.rotateY(-1)
      gltf.scene.scale.y = 0.25
      gltf.scene.scale.x = 0.25
      gltf.scene.scale.z = 0.25
      gltf.scene.position.y = -1

      cppMod = gltf
      scene.add(cppMod.scene)
    })

    let HtmlMod: any;
    gltLoader.load('./assets/html.gltf', (gltf) => {
      gltf.scene.scale.y = 0.05
      gltf.scene.scale.x = 0.05
      gltf.scene.scale.z = 0.05
      gltf.scene.position.y = 1
      gltf.scene.position.x = 0.4
      HtmlMod = gltf
      scene.add(HtmlMod.scene)
    })

    let bootMod: any;
    gltLoader.load('./assets/bootstrap.gltf', (gltf) => {
      gltf.scene.rotateY(-1)
      gltf.scene.scale.y = 1.8
      gltf.scene.scale.x = 1.8
      gltf.scene.scale.z = 1.8

      bootMod = gltf
      scene.add(bootMod.scene)
    })



    let cssMod: any;
    gltLoader.load('./assets/css.gltf', (gltf) => {
      gltf.scene.rotateY(-1)
      gltf.scene.scale.y = 0.03
      gltf.scene.scale.x = 0.03
      gltf.scene.scale.z = 0.03
      gltf.scene.position.y = 1.5
      gltf.scene.position.x = -1
      cssMod = gltf
      scene.add(cssMod.scene)
    })

    let tsMod: any;
    gltLoader.load('./assets/Ts.gltf', (gltf) => {
      gltf.scene.rotateY(-1)
      gltf.scene.scale.y = 0.1
      gltf.scene.scale.x = 0.1
      gltf.scene.scale.z = 0.1
      gltf.scene.position.y = 1
      gltf.scene.position.x = 1
      tsMod = gltf
      scene.add(tsMod.scene)
    })

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      8,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    camera.position.z = 30;
    scene.add(camera);

    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

      renderer.setClearColor("#e5e5e5", 0);




    renderer.setSize(canvasSizes.width, canvasSizes.height);


    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth;
      canvasSizes.height = window.innerHeight;


      if (window.innerWidth < 500) {
        angularMod.scene.position.x = 1
        springMod.scene.position.x = -1
        jsMod.scene.position.x = -0.8

      } else {
        angularMod.scene.position.x = 2
        springMod.scene.position.x = -2
        jsMod.scene.position.x = -1.5
      }

      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);
    });




    let bgani = (obj: any) => {
      if (obj) {

        obj.scene.rotateZ(0.002)
        obj.scene.rotateX(-0.002)
        obj.scene.rotateY(0.002)
      }
    }

    const animate = () => {
      // const elapsedTime = clock.getElapsedTime();

      bgani(angularMod)
      bgani(jsMod)
      bgani(springMod)
      bgani(cppMod)
      bgani(HtmlMod)
      bgani(bootMod)
      bgani(cssMod)
      bgani(tsMod)

      renderer.render(scene, camera);


      window.requestAnimationFrame(animate);
    };

    animate();

  }



}
