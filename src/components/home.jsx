import React, { Component } from "react";
import "../App.css"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import Toolbar from "./components/Toolbar/Toolbar";
// import SideDrawer from "./components/SideDrawer/SideDrawer";


// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

class Home extends React.Component {


  render() {
    return (
      <div style={{ height: "100%" }} className="app">
        {/* <Toolbar ToggleDrawer={this.ToggleDrawer} /> */}
        <main style={{ marginTop: "10vh" }}>
          <p style={{ padding: "1.5rem" }}>
            This is the page content! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi euismod varius urna, vitae rhoncus diam
            eleifend non. Ut vitae dignissim urna, vitae gravida dui. Morbi
            commodo massa id mauris suscipit posuere. Quisque placerat porta
            magna eget sodales. Praesent condimentum fermentum velit et
            fermentum. Quisque pretium ipsum diam. Sed blandit lacus non leo
            elementum, at tristique sapien pharetra. Mauris commodo ut urna a
            tincidunt. <br />
            Nunc sollicitudin, libero sit amet aliquet sagittis, augue odio
            porta diam, quis vestibulum elit lectus vitae lacus. Sed maximus,
            ligula semper tristique congue, elit metus lobortis est, eget
            commodo dolor ligula in lectus. Phasellus porta sed urna vitae
            semper. In hac habitasse platea dictumst. Fusce a laoreet purus.
            Nulla facilisi. Vestibulum rutrum felis odio. Aenean est nunc,
            fringilla accumsan diam non, accumsan suscipit mi. <br />
            <br />
            In scelerisque velit non dui porttitor, in varius lacus gravida.
            Morbi sed lobortis orci. Donec quis molestie mauris, et tristique
            mauris. Ut mollis tortor orci, vel feugiat tortor cursus sed. Cras
            placerat ipsum nec orci tristique, ac blandit sapien aliquam.
            Quisque ultricies volutpat ipsum, pretium mattis enim ultrices ac.
            Ut quam mauris, rhoncus in magna sed, porttitor varius leo.
            Suspendisse at lacinia justo. <br />
            <br />
            Mauris volutpat nisl vulputate ligula elementum facilisis vel sit
            amet purus. Nullam pharetra nibh eget luctus dignissim. Fusce semper
            tincidunt ante a fringilla. Mauris elementum hendrerit quam, ut
            porttitor nisl porta sed. Nulla luctus magna lacus, nec ullamcorper
            purus ultrices et. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Phasellus metus sapien,
            tempor non libero vel, feugiat ultrices justo. Phasellus euismod
            risus eget varius tristique. Nam eu nisi a diam accumsan ornare.
            Nulla at lacinia dui. Mauris ac efficitur enim. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Duis nibh mi, pretium eu convallis ut, tristique nec
            ante. Sed sit amet lorem et metus porttitor pretium at eget diam.
            Nam feugiat, elit at vehicula vestibulum, elit sapien molestie
            ligula, eu ullamcorper sapien massa sed enim. In eu euismod tellus.
            Donec tincidunt massa ut lectus efficitur lacinia. Sed commodo nulla
            leo, ut sollicitudin lacus rutrum eget. Aliquam erat volutpat. Etiam
            odio augue, vehicula vel turpis ut, ultrices rhoncus magna. Mauris
            nisi arcu, eleifend eu tincidunt eget, convallis id odio. In hac
            habitasse platea dictumst. Proin tincidunt molestie purus ac
            viverra.
            <br /> <br />
            Duis tincidunt finibus dui, a volutpat velit sollicitudin quis.
            Nulla magna nibh, lobortis nec sapien non, ullamcorper porta augue.
            Donec mi urna, mollis quis eros in, fermentum sagittis purus. Morbi
            sagittis lacinia accumsan. Curabitur ac augue at nisi cursus
            ullamcorper at non erat. Vivamus semper fringilla arcu, nec
            elementum ligula laoreet porttitor. Phasellus placerat est lectus,
            sit amet vestibulum justo fermentum ullamcorper. Morbi vitae tellus
            quis nulla sodales finibus. Proin accumsan ullamcorper nisl eget
            euismod. Nam vel scelerisque tellus. Fusce posuere eros a risus
            consectetur ultricies. Cras vel ligula sapien. Nullam vitae iaculis
            enim, non sodales eros. In accumsan nulla non diam finibus, et
            eleifend tellus feugiat. Fusce nec est vitae mauris mollis volutpat.
            Nulla facilisi. Cras quis nulla in magna convallis ultrices.
            Praesent pulvinar, leo a euismod tincidunt, enim enim accumsan elit,
            non bibendum ipsum neque sit amet mi. Quisque congue et nibh eget
            ornare. Nulla mattis eros vel dui feugiat, sed vehicula nibh
            suscipit. Praesent luctus neque id dolor imperdiet egestas. Mauris
            porttitor leo eget massa commodo mattis non id felis. Pellentesque
            vehicula metus sed commodo tincidunt. Aliquam in arcu augue. Ut nec
            eros efficitur dolor porta commodo a vitae libero. Sed a risus
            luctus, interdum orci ac, commodo augue. Phasellus ultricies augue
            et tellus lacinia, nec ultrices dui mollis. Pellentesque at nibh
            tincidunt neque tempus efficitur venenatis id erat. Sed eget
            vehicula neque. In ut vehicula orci, sed consectetur magna. Duis
            consequat velit non interdum aliquam. Etiam malesuada lobortis
            dolor, convallis pulvinar ligula pharetra vitae. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Proin tincidunt tortor mi. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla a ex sapien. Aliquam dignissim,
            urna ac ornare laoreet, diam enim posuere sem, vel auctor leo tortor
            vel ante. Praesent fermentum risus sit amet nunc condimentum, eu
            cursus nulla mattis. Maecenas tellus nibh, tempus a maximus a,
            porttitor nec nisl. Integer ultrices imperdiet purus a scelerisque.
            Duis maximus nibh erat, quis lacinia metus aliquam vitae. Integer
            vel orci laoreet tellus aliquam euismod nec et augue. Nulla
            bibendum, magna id elementum malesuada, orci massa ornare nulla,
            quis pretium lorem mi quis arcu. In hac habitasse platea dictumst.
            Nullam dapibus felis eu augue bibendum, non convallis libero
            gravida. Vestibulum et felis nisl. Phasellus interdum ultrices
            lectus non bibendum. Aenean laoreet rhoncus pharetra. Etiam maximus
            consequat tellus non gravida. In lacinia molestie mollis. Vestibulum
            nec aliquet purus, non commodo arcu. Aliquam consectetur arcu nisl,
            ac convallis nisl vestibulum nec. Nullam ac ultrices tellus, ac
            eleifend ligula. Proin sagittis sagittis mi at fringilla.
            Suspendisse scelerisque convallis consectetur. Etiam dictum neque at
            urna posuere, vitae consequat tortor varius. Maecenas non felis et
            magna aliquet laoreet. Fusce scelerisque eleifend quam et lobortis.
            Duis quis bibendum sapien. Suspendisse vitae sapien lacus. Phasellus
            tempor, tellus et tempus bibendum, est elit semper est, eu luctus
            mauris felis at elit. Vestibulum ligula dui, commodo id varius
            elementum, auctor et felis. Praesent sodales, tellus sed lacinia
            malesuada, arcu arcu blandit est, id tincidunt purus leo vitae
            felis. Morbi egestas eget nulla et imperdiet. Suspendisse odio
            lectus, congue nec mi in, iaculis pharetra sem. Cras metus est,
            euismod ut placerat semper, tincidunt vitae elit. Etiam ut egestas
            urna. Etiam fermentum eros magna, sed tristique libero efficitur sit
            amet. Sed vestibulum eros nunc, a pretium enim eleifend ac. Donec
            quis risus at ipsum feugiat molestie eu vitae nunc. Mauris
            scelerisque pellentesque nibh, ac posuere ligula ultrices vel.
          </p>
        </main>
      </div>
    );
    // }
  }
}

export default Home;
