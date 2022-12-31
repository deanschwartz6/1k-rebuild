import './globe.css';
import ImageMapper from 'react-image-mapper';

export default function Globe(){
    const url = 'https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg';
    const map = {
        name: '#1KW',
        areas: [
            {name: 'lookalikes', shape: 'poly', coords: [420,292,655,153,683,170,688,372,455,507,423,491]},
            {name: 'contact', shape: 'poly', coords: [973,680,975,592,1171,478,1168,379,1288,441,1289,621,1087,747]},
            {name: 'dmk', shape: 'poly', coords: [679,674,494,571,691,457,868,558]},
            {name: 'soniks', shape: 'poly', coords: [714,705,834,637,934,696,934,713,815,784,714,729]},
            {name: '1collection', shape: 'poly', coords: [709,385,708,283,784,237,933,323,936,387,924,403,922,432,854,473]},
            {name: 'arkade', shape: 'poly', coords: [959,195,994,173,1115,243,1116,512,1076,533,1061,528,997,566,918,525,920,400,972,371,959,366]}
        ]
    };
    return(
        <div id='body-globe'>
        <div class="container">
        {/* <!-- Navigation--> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div class="container px-4 px-lg-5">

                    <a class="navbar-brand" href="/">1K Globe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="secret">
                <ImageMapper src={url} map={map} />
            </div>
        
            {/* <!-- double sidebar--> */}
            <div class="sidebar"></div>
            <div class="sidebar2"></div>
            {/* <!-- double sidebar end--> */}

        </div>
        </div>
    );
}