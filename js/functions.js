const dataContainer = (id) => {
    let data = document.getElementById(id)
        if (data.classList.contains('hide')) {
            data.classList.remove('hide')
            data.classList.add('block')
        } else {
            data.classList.remove('block')
            data.classList.add('hide')
        }
}

const LargeDeviceProfile = () => {
    educationLargeDeviceContainer.classList.remove('block')
    educationLargeDeviceContainer.classList.add('hide')
    workExperienceLargeDeviceContainer.classList.remove('block')
    workExperienceLargeDeviceContainer.classList.add('hide')
    profileLargeDeviceContainer.classList.remove('hide')
    profileLargeDeviceContainer.classList.add('block')
    document.getElementById('profileLargeDeviceContainer').innerHTML = `
        <ul class="white style-cleaner c-flex appear">
            <li class="mb-2 mt-1">
                <h4 class="txt-center">Dirección de correo electrónico</h4>
                <div class="r-flex">
                    <img src="./assets/images/icons/email.png" alt="Icono de email" width="50">
                    <span class="align-self-center mx-1">glpitarch@gmail.com</span>
                </div>
            </li>
            <li class="my-2">
                <h4 class="txt-center">Número de teléfono celular</h4>
                <div class="r-flex">
                    <img src="./assets/images/icons/whapp.png" alt="Icono de whatsapp" width="50">
                    <span class="align-self-center mx-1">+54 9 11 3459-2877</span>
                </div>
            </li>
            <li class="my-2">
                <h4 class="txt-center">Ubicación</h4>
                <div class="r-flex">
                    <img src="./assets/images/icons/location.png" alt="Icono de localización" width="50">
                    <span class="align-self-center mx-1">Buenos Aires, Argentina</span>
                </div>
            </li>
        </ul>
    `
}

const LargeDeviceEducation = () => { 
    profileLargeDeviceContainer.classList.add('hide')
    profileLargeDeviceContainer.classList.remove('block')
    workExperienceLargeDeviceContainer.classList.add('hide')
    workExperienceLargeDeviceContainer.classList.remove('block')
    educationLargeDeviceContainer.classList.remove('hide')
    educationLargeDeviceContainer.classList.add('block')
    document.getElementById('webDeveloperLargeDeviceContainer').innerHTML = `
        <p>Curso realizado en <a href="https://www.coderhouse.com/" class="white">Coderhouse</a></p>
        <ul class="txt-left">
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/html.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>HTML 5</p>
                </div>
            </li>
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/css.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>CSS 3</p>
                </div>
            </li>
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/sass.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Sass</p>
                </div>
            </li>
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/bootstrap.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Bootstrap</p>
                </div>
            </li>
        </ul>
    `
    document.getElementById('javascriptLargeDeviceContainer').innerHTML = `
        <p>Curso realizado en <a href="https://www.coderhouse.com/" target="blank" class="white">Coderhouse</a></p>
        <ul class="txt-left">
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/javascript.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Javascript</p>
                </div>
            </li>
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/react.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>React Js</p>
                </div>
            </li>
        </ul>
    `
    document.getElementById('othersLargeDeviceContainer').innerHTML = `
        <ul class="txt-left appear">
            <p class="txt-center line-height-1 pb-1 mx-1">Curso de fundamentos básicos de la programación impulsado por el gobierno argentino <a href="https://www.argentina.gob.ar/produccion/argentina-programa/primera-etapa" target="blank" class="white">#SéProgramar:</a></p>
            <h5 class="txt-center mt-2">Fundamentos:</h5>
            <li class="r-flex justify-content-center py-1">
                <img src="./assets/images/icons/gobstones.png" alt="Icono de CSS" width="50">
                <div class="width-1 align-self-center">
                    <p><a href="https://gobstones.github.io/" target="blank" class="white">Gobstones</a></p>
                </div>
            </li>
            <h5 class="txt-center mt-2">Programación imperativa:</h5>
            <li class="r-flex justify-content-center py-1">
                <img src="./assets/images/icons/javascript.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Javascript</p>
                </div>
            </li>
            <h5 class="txt-center mt-2">Programación con Objetos:</h5>
            <li class="r-flex justify-content-center py-1">
                <img src="./assets/images/icons/ruby.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Ruby</p>
                </div>
            </li>
            <div class="bottom-border pb-1"></div>
            <li class="r-flex justify-content-center my-2">
                <img src="./assets/images/icons/git.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">
                    <p>Git</p>
                </div>
            </li>
        </ul>
    `
    document.getElementById('technologistLargeDeviceContainer').innerHTML = `
        <ul class="txt-center mx-1 appear">
            <li class="r-flex justify-content-center">
                <a href="" class="align-self-center"><img src="./assets/images/icons/certificate.png" alt="Icono de diploma" width="50" class="pr-1"></a>
                <div class="width-1 align-self-center">
                    <p class="line-height-1">Técnico en diagnóstico por imágenes (2015)</p>
                </div>
            </li>
            <li class="r-flex justify-content-center mt-2">
                <a href="" class="align-self-center"><img src="./assets/images/icons/certificate.png" alt="Icono de diploma" width="50" class="pr-1"></a>
                <div class="width-1 align-self-center">
                    <p class="line-height-1">Licenciado en diagnóstico por imágenes con orientación en medicina nuclear (2022)</p>
                </div>
            </li>
        </ul>
    `
}

const LargeDeviceWorkExperience = () => { 
    profileLargeDeviceContainer.classList.add('hide')
    profileLargeDeviceContainer.classList.remove('block')
    educationLargeDeviceContainer.classList.add('hide')
    educationLargeDeviceContainer.classList.remove('block')
    workExperienceLargeDeviceContainer.classList.remove('hide')
    workExperienceLargeDeviceContainer.classList.add('block')
    document.getElementById('developerWorkExperienceLargeDeviceContainer').innerHTML = `
        <ul class="txt-center mx-1 style-cleaner appear white">
            <li class="r-flex justify-content-center my-2 appear">
                <img src="./assets/images/icons/github.png" alt="Icono de CSS" width="50" class="pr-1">
                <div class="width-1 align-self-center">                                           
                    <p><a href="https://github.com/glpitarch?tab=repositories" target="blank" class="white">Github</a></p>
                </div>
            </li>
        </ul>
    `
    document.getElementById('technologistWorkExperienceLargeDeviceContainer').innerHTML = `
        <ul class="txt-center mx-1 style-cleaner appear white">
            <li>
                ARGUS Diagnóstico médico
            </li>
            <li class="my-2">
                Centro de Educación Médica e Investigaciones Clínicas “Norberto Quirno” (CEMIC) (actualidad)
            </li>
        </ul>
    `
}
