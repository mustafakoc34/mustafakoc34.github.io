var karavanBtn = document.getElementById("karavanBtn");
var bungalovBtn = document.getElementById("bungalovBtn");
var cadirBtn = document.getElementById("cadirBtn");
var tHouseBtn = document.getElementById("tHouseBtn");

var rightListArea = document.getElementById("rightListArea");


karavanBtn.addEventListener("click", karavan)
function karavan(){
    karavanBtn.style.backgroundColor ="rgb(208, 185, 36)";
    bungalovBtn.style.backgroundColor ="rgb(58, 85, 57)";
    cadirBtn.style.backgroundColor ="rgb(58, 85, 57)";
    tHouseBtn.style.backgroundColor ="rgb(58, 85, 57)";
    
    rightListArea.innerHTML =`
    <div class="row">
    <div class="col-sm-4">
      <div class="card"> 
        <img src="./img/karavanNo1.jpeg" class="card-img-top" alt="...">
        <div class="card-body cardKaravan" >
        <h3 class="card-text">Karavan No: 3.30</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="./img/380karavan.jpeg" class="card-img-top" alt="...">
        <div class="card-body cardKaravan" >
        <h3 class="card-text">Karavan No: 3.80</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.80m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>Arka Masa ve Oturma Grubu 2 Kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="./img/525karavan.jpg" class="card-img-top" alt="...">
        <div class="card-body cardKaravan">
        <h3 class="card-text karavan-yazi">Karavan No: 5.25</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
  </div>
    `;
}

bungalovBtn.addEventListener("click", bungalov)
function bungalov(){
    bungalovBtn.style.backgroundColor ="rgb(208, 185, 36)";
    karavanBtn.style.backgroundColor ="rgb(58, 85, 57)";
    cadirBtn.style.backgroundColor ="rgb(58, 85, 57)";
    tHouseBtn.style.backgroundColor ="rgb(58, 85, 57)";
    rightListArea.innerHTML =`
    <div class="row">
    <div class="col-sm-4">
      <div class="card"> 
        <img src="./img/karavanNo1.jpeg" class="card-img-top" alt="...">
        <div class="card-body cardBungalov">
        <h3 class="card-text">Bungalov No: 1</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/140/600/400" class="card-img-top" alt="...">
        <div class="card-body cardBungalov">
        <h3 class="card-text">Bungalov No: 2</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/141/600/400" class="card-img-top" alt="...">
        <div class="card-body cardBungalov">
        <h3 class="card-text karavan-yazi">Bungalov No: 3</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
  </div>
    `;
}

cadirBtn.addEventListener("click", cadir)
function cadir(){
    cadirBtn.style.backgroundColor ="rgb(208, 185, 36)";
    bungalovBtn.style.backgroundColor ="rgb(58, 85, 57)";
    karavanBtn.style.backgroundColor ="rgb(58, 85, 57)";
    tHouseBtn.style.backgroundColor ="rgb(58, 85, 57)";
    rightListArea.innerHTML =`
    <div class="row">
    <div class="col-sm-4">
      <div class="card"> 
        <img src="./img/karavanNo1.jpeg" class="card-img-top" alt="...">
        <div class="card-body cardCadir">
        <h3 class="card-text">Çadır No: 1</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/140/600/400" class="card-img-top" alt="...">
        <div class="card-body cardCadir">
        <h3 class="card-text">Çadır No: 2</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/141/600/400" class="card-img-top" alt="...">
        <div class="card-body cardCadir">
        <h3 class="card-text karavan-yazi">Çadır No: 3</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
  </div>
    `;
}

tHouseBtn.addEventListener("click", tHouse)
function tHouse(){
    tHouseBtn.style.backgroundColor ="rgb(208, 185, 36)";
    cadirBtn.style.backgroundColor ="rgb(58, 85, 57";
    bungalovBtn.style.backgroundColor ="rgb(58, 85, 57)";
    karavanBtn.style.backgroundColor ="rgb(58, 85, 57)";
    rightListArea.innerHTML =`
    <div class="row" id="tHouse">
    <div class="col-sm-4">
      <div class="card"> 
        <img src="./img/karavanNo1.jpeg" class="card-img-top" alt="...">
        <div class="card-body cardTinyHouse">
        <h3 class="card-text">Tıny House No: 1</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/140/600/400" class="card-img-top" alt="...">
        <div class="card-body cardTinyHouse">
        <h3 class="card-text">Tıny House No: 2</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <img src="https://picsum.photos/id/141/600/400" class="card-img-top" alt="...">
        <div class="card-body cardTinyHouse">
        <h3 class="card-text karavan-yazi">Tıny House No: 3</h3>
        <ul>
          <li class="baslik">Özellikler</li>
          <li>Uzunluk: 3.30m</li>
          <li>Kapasite: 4 kişilik</li>
          <li>İki Gözlü Ocak-Gazlı</li>
          <li>Buzdolabı 12v</li>
          <li>Duş Kabini</li>
        </ul>
        </div>
        <div>
        <button type="button" class="btn btn-warning buton-stil rezerveBtn">Rezervasyon yap</button>
        </div>
      </div>
    </div>
  </div>
    `;
    
}