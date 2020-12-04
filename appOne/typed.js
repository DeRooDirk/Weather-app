(function() {
    //Clear the target
    document.getElementById("target").innerHTML = "";

    let messageTyped = text => {
        let arrayMessage = text.split('');

        let i = 0;
        let printMessage = setInterval(() => {
            document.getElementById("target").innerHTML += arrayMessage[i];
            i++;
            if (i === arrayMessage.length) {
                clearInterval(printMessage);
            }
        }, 100);
    };

    messageTyped("The most simplest weather app ,Get the weather information of any city, Temperature, Pressure, Wind-Speed, Humidity. ");

})();