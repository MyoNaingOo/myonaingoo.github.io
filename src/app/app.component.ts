import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Collapse, CollapseInterface, CollapseOptions, initFlowbite } from 'flowbite';
// import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  modeicon: any

  linkops: any = [

    {
      "lable": "HOME",
      "link": "#"
    },
    {
      "lable": "Service",
      "link": "#service"
    },
    {
      "lable": "Skill",
      "link": "#skill"
    },

    {
      "lable": "About",
      "link": "#about"
    },
    {
      "lable": "Contacts",
      "link": "#contact"
    }
  ]

  ngOnInit(): void {

    if (localStorage.getItem("theme") == "dark") {
      let body = document.documentElement
      body.classList.add("dark")
      this.modeicon = faSun
    } else {
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = faMoon
    }


  }

  dark() {

    if(localStorage.getItem("theme")== "light"){
      let body = document.documentElement
      body.classList.add("dark")

      this.modeicon = faSun
      localStorage.setItem("theme","dark")
    }else{
      let body = document.documentElement
      body.classList.remove("dark")
      this.modeicon = faMoon


      localStorage.setItem("theme","light")

    }



  }

  toggler() {


    const $targetEl: any = document.getElementById('targetEl');
    const $triggerEl: any = document.getElementById('triggerEl');
    const options: CollapseOptions = {
      onCollapse: () => {
        console.log('element has been collapsed')
      },
      onExpand: () => {
        console.log('element has been expanded')
      },
      onToggle: () => {
        console.log('element has been toggled')
      }
    };

    /*
    * $targetEl: required
    * $triggerEl: optional
    * options: optional
    */
    const collapse: CollapseInterface = new Collapse($targetEl, $triggerEl, options);

    collapse.expand()
  }



}
