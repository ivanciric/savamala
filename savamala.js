(function (isNode) {

    var beforePhotoUrl = 'http://static.mondo.rs/Picture/334802/jpeg/ljudi-savamala-25.jpg';
    var afterPhotoUrl = 'http://images3.kurir.rs/slika-724x489/savamala-rusenje-foto-n1-shutterstock-ilustracija-1462395748-899387.jpg';

    var check = setInterval(function () {

        var hour = (new Date()).getHours();

        if (hour > 22) {
            demolition();
        }

    }, 3000);

    if (!isNode) {
      document.querySelector('body').innerHTML = '<img src="' + beforePhotoUrl + '" />';
    }


    function demolition() {

        clearInterval(check);

        if (!isNode) {

            document.querySelector('body').innerHTML = '<img src="' + afterPhotoUrl + '" />';

        } else {

            console.log('rusenjeee');
        }
    }

}(typeof module !== 'undefined' && module.exports));
