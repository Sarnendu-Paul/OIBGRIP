var celsius = document.getElementById("celsius");
    var farenheit =document.getElementById("farenheit");

    celsius.addEventListener('input', function(){
        let cel = this.value;
        let fah = (cel * 9/5) + 32;
        if(!Number.isInteger(fah)){
            fah = fah.toFixed(4);
        }
        farenheit.value = fah;
    });

    farenheit.addEventListener('input', function(){
        let fah = this.value;
        let cel = (fah-32) * 5/9;
        if(!Number.isInteger(cel)){
            cel = cel.toFixed(4);
        }
        celsius.value = cel;
    });