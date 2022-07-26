/* import {arrayMinutes, arraySecond,} from './index.js'; */



window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        
        filesInput.addEventListener("change", function(event){
            let hourResult;
            let hour = Number(arrayInfoHour[0]);
            let media = Number(arrayMinutes[0]);

            if (hour < 10 ) {
                hourResult = `0${hour}`;
                console.log('ejecuto if ' + hour)
            } else {
                hourResult = hour;
                console.log('ejecuto else' + hour)
            }

            let files = event.target.files; //FileList object
            /* var output = document.getElementById("result"); */
            
            for(var i = 0; i< files.length; i++)
            {
                let file = files[i];
                
                let minutes;
                let second ;
                let cord1 = array1[i];
                let cord2 = array2[i];
                let escribeMinutes = arrayMinutes[i];
                let escribeSeconds = arraySecond[i]
                if (media < 1) {
                    minutes = `0${escribeMinutes}`
                    console.log('minutos en if '+ minutes)
                } else {
                    minutes = `3${escribeMinutes}`
                    console.log('minutos en if ' + minutes)
                }
                if (escribeSeconds < 10) {
                    second = `0${escribeSeconds}`
                    console.log(' second if ' + second)
                } else {
                    second = escribeSeconds;
                    console.log(' second else ' + second)
                }

                
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    /* setTimeout(() => { */
                    let picFile = event.target;
                    const selection = document.querySelector('.containerImage');
                    let div = document.createElement("div");
                    let img = document.createElement('img');
                    const parrafo = document.createElement('p');
                    const parrafo2 = document.createElement('p');
                    
                    let text1 = `PU_A_2157 SITE HUARYJULLO 
                    -16.263${cord1}, -70.02${cord2}, 4219.8m`;
                    let text3 = `29 may. 2022 ${hourResult}:${minutes}:${second}`

                    const text = document.createTextNode(text1);
                    const text2 = document.createTextNode(text3);
                    parrafo.appendChild(text);
                    parrafo2.appendChild(text2);
                    parrafo.classList.add('text')
                    parrafo2.classList.add('text2')
                    div.style.position = 'relative';
                    parrafo.style.position = 'absolute';
                    parrafo2.style.position = 'absolute';
                    img.src = picFile.result;
                    img.classList.add('imagenes');
                    div.appendChild(img);
                    div.appendChild(parrafo);
                    div.appendChild(parrafo2);
                    div.classList.add('containerImage2')
                    selection.appendChild(div);
                    /* }, 2000); */
                    
                    /* output.insertBefore(div,null);             */
                });
                
                 //Read the image
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}

