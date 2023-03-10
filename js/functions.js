const changeDisplay = (id) => {
    let data = document.getElementById(id)
        if (data.classList.contains('hide')) {
            data.classList.remove('hide')
            data.classList.add('block')
        } else {
            data.classList.remove('block')
            data.classList.add('hide')
        }
}
const changeToHideDisplay = (id) => {
    let data = document.getElementById(id)
    if (data.classList.contains('block')) {
        data.classList.remove('block')
        data.classList.add('hide')
    }
}
const changeToBlockDisplay = (id) => {
    let data = document.getElementById(id)
    if (data.classList.contains('hide')) {
        data.classList.remove('hide')
        data.classList.add('block')
    }
}
const largeDeviceProfile = () => {
    changeToHideDisplay("educationLargeDeviceContainer")
    changeToHideDisplay("workExperienceLargeDeviceContainer")
    changeToHideDisplay("contactFormContainer")
    changeToBlockDisplay("profileLargeDeviceContainer")
    document.getElementById('profileLargeDeviceContainer').innerHTML = `
        <div class="r-flex">
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
            <ul class="white style-cleaner c-flex appear">
                <li class="mb-2 mt-1 ml-2">
                    <h4 class="txt-center">Linkedin</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/linkedin.png" alt="Icono de Linkedin" width="50">
                        <span class="align-self-center mx-1"><a href="https://www.linkedin.com/in/germ%C3%A1n-leandro-pitarch-a9368a266/" target="blank" class="white">www.linkedin.com</a></span>
                    </div>
                </li>
                <li class="my-2 ml-2">
                    <h4 class="txt-center">Twitter</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/twitter.png" alt="Icono de Twitter" width="50">
                        <span class="align-self-center mx-1"><a href="https://twitter.com/leandro_pitarch" target="blank" class="white">www.twitter.com</a></span>
                    </div>
                </li>
                <li class="my-2 ml-2">
                    <h4 class="txt-center">Instagram</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/instagram.png" alt="Icono de Instagram" width="50">
                        <span class="align-self-center mx-1"><a href="https://www.instagram.com/leandro_pitarch/" target="blank" class="white">www.instagram.com</a></span>
                    </div>
                </li>
            </ul>
        </div>
    `
}
const largeDeviceEducation = () => { 
    changeToHideDisplay("profileLargeDeviceContainer")
    changeToHideDisplay("workExperienceLargeDeviceContainer")
    changeToHideDisplay("contactFormContainer")
    changeToBlockDisplay("educationLargeDeviceContainer")
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
            <p class="txt-center line-height-1 pb-1">Curso de fundamentos básicos de la programación impulsado por el gobierno argentino <a href="https://www.argentina.gob.ar/produccion/argentina-programa/primera-etapa" target="blank" class="white">#SéProgramar:</a></p>
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
const largeDeviceWorkExperience = () => { 
    changeToHideDisplay("profileLargeDeviceContainer")
    changeToHideDisplay("educationLargeDeviceContainer")
    changeToHideDisplay("contactFormContainer")
    changeToBlockDisplay("workExperienceLargeDeviceContainer")
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

const contactForm = () => {
    changeToHideDisplay("profileLargeDeviceContainer")
    changeToHideDisplay("educationLargeDeviceContainer")
    changeToHideDisplay("workExperienceLargeDeviceContainer")
    changeToBlockDisplay("contactFormContainer")
    document.getElementById('contactFormContainer').innerHTML = `
        <form action="mailto:glpitarch@gmail.com?subject=Contacto mediante formulario" method="post" enctype="text/plain" class="white appear txt-center">
            <div class="c-flex">
                <label class="mb-0-5">Nombre de contacto</label>
                <input id="nameContact" class="txt-center py-0-5" type="text" placeholder="Escriba su nombre aquí" name="Nombre de contacto: "></input>
            </div>
            <div class="c-flex my-2">
                <label class="mb-0-5">Dirección de e-mail</label>
                <input id="emailContact" class="txt-center py-0-5" type="email" placeholder="ejemplo@servidor.com" name="Email de contacto: "></input>
            </div>
            <div class="c-flex">
                <label class="mb-0-5">País</label>
                <input id="countryContact" class="txt-center py-0-5" type="text" placeholder="Escriba su país aquí" name="Pais: "></input>
            </div>
            <div class="c-flex my-2">
                <label class="mb-0-5">Teléfono de contacto</label>
                <input id="phoneContact" class="txt-center py-0-5" type="tel" placeholder="Escriba algún número de teléfono aquí" name="Telefono de contacto: "></input>
            </div>
            <div class="c-flex">
                <label class="mb-0-5">Mensaje</label>
                <textarea id="msgContact" placeholder="Escriba su mensaje aquí" name="Mensaje: " rows="10" cols="40" class="txt-center py-0-5"></textarea>
            </div>
            <div class="c-flex my-2">
                <input id="submitButton" class="bg-light-green py-0-5" type="submit"></input>
                <input class="bg-light-red my-2 py-0-5" type="reset"></input>
            </div>
        </form>
    `
}