$(document).ready(function(){

    $('#calcul').click(function(event){
        var note1 = document.getElementById('noteOne').value;
        var note2 = document.getElementById('noteTwo').value;
        var note3 = document.getElementById('noteThree').value;
        var note4 = document.getElementById('noteFour').value;
        var note5 = document.getElementById('noteFive').value;
        var result = document.getElementById('average').value = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5))/5;

        if((result >=0) && (result < 10)){
            $('#appreciation').html('En dessous de la moyenne');
        }
        else if((result >= 10) && (result < 13)){
            $('#appreciation').html('Moyen');
        }
        else if((result >= 13) && (result < 16)){
            $('#appreciation').html('Bien');
        }
        else if((result >= 16) && (result < 20)){
            $('#appreciation').html('Très bien');
        }
        else if(result == 20){
            $('#appreciation').html('Excellent')
        }

        event.preventDefault();

    });

});