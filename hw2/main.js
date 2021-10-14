
let current=document.getElementById("smallPhoto3");
let prev=document.getElementById("smallPhoto3");
let count=1;

let current_but=0;
let prev_but=0;

const img=[
    [
        "https://med.stanford.edu/news/all-news/2021/09/cat-fur-color-patterns/_jcr_content/main/image.img.620.high.jpg/cat_by-Kateryna-T-Unsplash.jpg",
        "https://c0.wallpaperflare.com/preview/793/890/349/tabby-cat-looking-upward.jpg",
        "https://www.thesprucepets.com/thmb/5YOHbja8lLg4KprPlJsNvS9mq50=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/guide-to-cat-eyes-552114-hero-75d820458de24543a35543a584b9eec6.jpg",
        "https://mymodernmet.com/wp/wp-content/uploads/archive/J0R3qpz33gRJaWzcZ3eB_1082105479.jpeg",
    ],
    [
        "https://www.science.org/do/10.1126/science.aba2340/abs/dogs_1280p_0.jpg",
        "https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg",
        "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg",
        "https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg",
    ],
    [
        "https://www.genengnews.com/wp-content/uploads/2021/03/aswathy-n-srMHHWCTvcU-unsplash-1068x801.jpg",
        "https://www.massaudubon.org/var/ezdemo_site/storage/images/site_ma/learn/nature-wildlife/mammals/cottontail-rabbits/situations-solutions/176132-10-eng-US/situations-solutions.jpg",
        "https://s.abcnews.com/images/Business/GTY_rabbit_sr_140508_16x9_1600.jpg",
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2102,x_0,y_0/v1554351612/shape/mentalfloss/557234-istock-480927021.jpg?itok=PqZrVPfq",

    ],
    [
        "https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png",
        "https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png",
        "https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png",
        "https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png",
    ]
];

let but= [

    document.getElementById("cat"),
    document.getElementById("dog"),
    document.getElementById("rabbit"),
    document.getElementById("null")
];

let showImg = [
    document.getElementById("smallPhoto1"),
    document.getElementById("smallPhoto2"),
    document.getElementById("smallPhoto3"),
    document.getElementById("smallPhoto4")
    
];

let expandingImg = document.getElementById("bigPhoto");

function changeImage(imgs) {
    imgs.classList.add("choose");
    prev=current;
    current=imgs;
    // if(current_but===3) {
        
    // }
    if(count!=1){
        prev.classList.remove("choose");
    }
    expandingImg.src = imgs.src;
    count++;

}

function init(init_index){
    current.classList.remove("choose");
    but[init_index].classList.add("chosen_but");
    expandingImg.src = img[init_index][2];
    for (let i =0 ;i< showImg.length; i++){
        showImg[i].src = img[init_index][i];
    }
}

function choose(button){
    if(button===3){
          but[button].classList.add("none");
          alert('this album is empty! add some photo here!');
     }
    but[button].classList.add("chosen_but");
    prev_but=current_but;
    current_but=button;
    but[prev_but].classList.remove("chosen_but");
    init(button);
}
    







