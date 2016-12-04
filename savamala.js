(function ($) {

    var check = setInterval(function () {

        var hour = (new Date()).getHours();

        if (hour > 22) {
            demolition();
        }

    }, 3000);


    function demolition() {

        clearInterval(check);

        if ($) {

            $('body').html(
                '<img src="http://images3.kurir.rs/slika-724x489/savamala-rusenje-foto-n1-shutterstock-ilustracija-1462395748-899387.jpg" />'
            );

        } else {

            console.log('rusenjeee');
        }
    }

}((typeof module !== undefined && module.exports) ? undefined : jQuery));
