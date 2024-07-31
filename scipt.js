var mswitch = false;
let menu;

console.log(wind);
function Menu(){
    mswitch = ! mswitch;
    
    if(mswitch){
      menu = document.createElement('div');
      menu.className = "mmenu"
      menu.innerHTML +=`<button class="prog" onclick="OpenWindow()">
      <img src="web_asset_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" alt="" height="20" width="20" class="icon">
      </button>` ;
      document.body.append(menu);  
    }
    else{
        document.body.removeChild(menu);
    }
}
function Close(){
let wind = document.getElementById("window");
wind.remove();
}
function OpenWindow(){
    document.body.insertAdjacentHTML('beforeend',`<div class="window" id="window">
            <div class="wup">
                <button class="close" onclick="Close()">
                    <img src="close_24dp_666666_FILL0_wght400_GRAD0_opsz24.png" alt="" class="cimg">
                </button>
            </div>
        </div>`)
}