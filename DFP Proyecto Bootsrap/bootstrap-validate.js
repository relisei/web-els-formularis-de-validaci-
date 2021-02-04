   
function validation(){
    var search = document.getElementById('mySearching').value;

    if(search == ""){
        document.getElementById('search').innerHTML ="Try again with specific term";
        return false;
    }
    if((search.length <= 3) || (search.length > 20)){
        document.getElementById('search').innerHTML ="Enter at least 3 characters";
        return false;
    }
}




function inserter(formId, textToShow, id){
    if(!document.getElementById(`invalid-feedback-${id}`)){
        let element = document.createElement('div');
        element.textContent = textToShow;
        element.setAttribute('class',`invalid-feedback`)
        element.setAttribute('id',`invalid-feedback-${id}`)
        document.getElementById(formId).parentNode.appendChild(element);
    }
}


function signInValidate() {

    var errors = 0;
    let formArr = document.forms['myForm']
    console.log(formArr)

    for(let i=0;i<formArr.length;i++){
        switch(String(formArr[i].name)){
            case ('inputEmailAddress'):
                if(!validar_email(formArr[i].value) && formArr[i].value.length !== 0){
                    formArr[i].classList.add('is-invalid')
                    inserter(formArr[i].id, 'Email Incorrecto','email')
                    errors++
                }else if (formArr[i].value.length == 0){
                    formArr[i].classList.add('is-invalid')
                    inserter(formArr[i].id, 'Este campo es obligatorio','email')
                    errors++
                }
            case 'inputMyPassword': 
                if (formArr[i].value.length == 0){
                    formArr[i].classList.add('is-invalid')
                    inserter(formArr[i].id, 'Este campo es obligatorio','password')
                    errors++
                }
        }
        
    }
}


function registerValidate() {

    var errors = 0;
    
    let formArr = document.forms['myFormReg']

    for(let i=0;i<formArr.length;i++){
        console.log(formArr[i].name==='inputEmailAddress')
            
        if((formArr[i].name==='inputEmailAddress') && (!validar_email(formArr[i].value))){
            formArr[i].classList.add('is-invalid')
            inserter(formArr[i].id, 'Email Incorrecto', 'emailRegister')
            errors++
        }

            
        else if (formArr[i].name==='inputMyPassword'){
            if(!validar_password(formArr[i].value)){
                formArr[i].classList.add('is-invalid')
                inserter(formArr[i].id, 'Debe contener al menos 8 caract. una mayúsc. y un núm.', 'passRegister' )
                errors++
            } 
        }

        else if(formArr[i].name == "inputPasswordConfirm" && formArr[i].value !== formArr['inputMyPassword'].value){
            formArr[i].classList.add("is-invalid");
            inserter(formArr[i].id, 'Las con no ci', 'passMatcher' )
            acumErrores ++;
        }


        else if ((formArr[i].name==='InputCountries') && (formArr[i].value.length > 2)){
                formArr[i].classList.add('is-invalid')
                inserter(formArr[i].id, 'Debes agregar un pais', 'pais')
                errors++
        }
              
    }        
}


function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {
	var regex = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
	return regex.test(password) ? true : false;
}