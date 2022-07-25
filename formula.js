import {arrayMinutes, arraySecond,} from './index.js';

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
                console.log('ejecuto if')
            } else {
                hourResult = hour;
                console.log('ejecuto else')
            }

            var files = event.target.files; //FileList object
            /* var output = document.getElementById("result"); */
            console.log(arrayInfoHour)
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                console.log(file);
                
                let minutes;
                let second ;
                
                if (media < 1) {
                    minutes = `0${arrayMinutes[i]}`
                    console.log('ejecuto if minutes')
                } else {
                    minutes = `3${arrayMinutes[i]}`
                    console.log('ejecuto else minutes')
                }
                if (arraySecond[i]< 10) {
                    second = `0${arraySecond[i]}`
                } else {
                    second = arraySecond[i];
                }

                console.log(arrayMinutes)
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    var picFile = event.target;
                    console.log('evento' + picFile)
                    const selection = document.querySelector('.containerImage');
                    var div = document.createElement("div");
                    var img = document.createElement('img');
                    const parrafo = document.createElement('p');
                    const parrafo2 = document.createElement('p');
                    
                    let text1 = `PU_A2220 SITE ITAPALLUNI 
                    -16.19623, -69.5890, 4109.8m`;
                    let text3 = `2 jun. 2022 ${hourResult}:${minutes}:${second}`

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

