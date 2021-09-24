function validarCampos(){
    $valid=true;
    $nroDni=document.getElementById("nroDni");
    $nombre=document.getElementById("nombre");
    $apellido=document.getElementById("apellido");
    $telefono=document.getElementById("telefono");
    $modelo=document.getElementById("modelo");
    if(isNaN($nroDni)){
        $nroDni.value=null;
        $invalid=document.getElementById("nroDni-text");
        $invalid.innerHTML="Ingresar un valor numérico.";
        $valid=false;
    }
    if(!isNaN($nombre)){
        $nroDni.value=null;
        $invalid=document.getElementById("nombre-text");
        $invalid.innerHTML="Ingresar un valor alfabético.";
        $valid=false;
    }
    if(!isNaN($apellido)){
        $nroDni.value=null;
        $invalid=document.getElementById("apellido-text");
        $invalid.innerHTML="Ingresar un valor alfabético.";
        $valid=false;
    }
    if(isNaN($telefono)){
        $nroDni.value=null;
        $invalid=document.getElementById("telefono-text");
        $invalid.innerHTML="Ingresar un valor numérico.";
        $valid=false;
    }
    if (isNaN($modelo)){
        $modelo.value=null;
        $invalid=document.getElementById("modelo-text");
        $invalid.innerHTML="Ingresar un valor numérico.";
        $valid=false;
    }
    return $valid;
}