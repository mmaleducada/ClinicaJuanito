function change (especialidad, medico) {
    especialidad = document.getElementById(especialidad);
    medico = document.getElementById(medico);
    medico.value ="";
    medico.innerHTML = "";
    if(especialidad.value == "Cardiología") {
        var optionArray = ["|", "Malena Mendoza|Malena Mendoza", "Delfina Rios|Delfina Rios", "Bautista Olivera|Bautista Olivera"];
    } else if (especialidad.value == "Dermatología") {
        var optionArray = ["|", "Pablo Vargas|Pablo Vargas", "Julieta Castillo|Julieta Castillo", "Santino Lopez|Santino Lopez"];
    } else if (especialidad.value == "Medicina General") {
        var optionArray = ["|", "Mateo Villalba|Mateo Villalba", "Valentina Paez|Valentina Paez", "Tomas Cruz|Tomas Cruz"];
    }else if (especialidad.value == "Neurología") {
        var optionArray = ["|", "Azul Gomez|Azul Gomez", "Felipe Paez|Felipe Paez", "Valentino Soria|Valentino Soria"];
    }else if (especialidad.value == "Obstetricia y Ginecología") {
        var optionArray = ["|", "Renata Ferreyra|Renata Ferreyra", "Francisco Miranda|Francisco Miranda", "Luna Torres|Luna Torres"];
    }else if (especialidad.value == "Oftalmología") {
        var optionArray = ["|", "Ambar Miranda|Ambar Miranda", "Benicio Rodriguez|Benicio Rodriguez", "Sofia Rojas|Sofia Rojas"];
    }else if (especialidad.value == "Pediatría") {
        var optionArray = ["|", "Emilia Ruiz|Emilia Ruiz", "Lorenzo Silva|Lorenzo Silva", "Agustin Farias|Agustin Farias"];
    }else if (especialidad.value == "Psiquiatría") {
        var optionArray = ["|", "Mateo Villalba|Mateo Villalba", "Valentino Soria|Valentino Soria", "Julieta Castillo|Julieta Castillo"];
    }else if (especialidad.value == "Urología") {
        var optionArray = ["|", "Jazmin Martinez|Jazmin Martinez", "Joaquin Gonzalez|Joaquin Gonzalez", "Benjamin Soto|Benjamin Soto"];
    };

    for (option = 0;option < optionArray.length; option++){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        medico.options.add(newOption);
    };
}


function change2 (medico, horario) {
    medico = document.getElementById(medico);
    horario = document.getElementById(horario);
    horario.value ="";
    horario.innerHTML = "";
    if(medico.value == "Malena Mendoza") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Delfina Rios") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Bautista Olivera") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Pablo Vargas") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Julieta Castillo") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Santino Lopez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Mateo Villalba") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Valentina Paez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Tomas Cruz") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Azul Gomez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Felipe Paez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Valentino Soria") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Renata Ferreyra") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Francisco Miranda") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Luna Torres") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Ambar Miranda") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Benicio Rodriguez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Sofia Rojas") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Emilia Ruiz") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Lorenzo Silva") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Agustin Farias") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Jazmin Martinez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Joaquin Gonzalez") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    } else if (medico.value == "Benjamin Soto") {
        var optionArray = ["|", "9:00 am|9:00 am", "9:30 am|9:30 am", "10:00 am|10:00 am"];
    };

    for (option = 0;option < optionArray.length; option++){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        horario.options.add(newOption);
    };
}
 
