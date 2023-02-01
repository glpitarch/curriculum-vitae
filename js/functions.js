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

const tabletProfile = () => { 
    document.getElementById('tabletContainer').innerHTML = `
        <div>
            <ul class="white style-cleaner r-flex">
                <li class="mx-3">
                    <h4>Dirección de correo electrónico</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/email.png" alt="Icono de email" width="50">
                        <span class="align-self-center">glpitarch@gmail.com</span>
                    </div>
                </li>
                <li class="mx-3">
                    <h4>Número de teléfono celular</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/whapp.png" alt="Icono de whatsapp" width="50">
                        <span class="align-self-center">+54 9 11 3459-2877</span>
                    </div>
                </li>
                <li class="mx-3">
                    <h4>Ubicación</h4>
                    <div class="r-flex">
                        <img src="./assets/images/icons/location.png" alt="Icono de localización" width="50">
                        <span class="align-self-center">Buenos Aires, Argentina</span>
                    </div>
                </li>
            </ul>
        </div>
    `
}

const tabletEducation = () => { 
    document.getElementById('tabletContainer').innerHTML = `
        <div >
            <ul class="txt-left">
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
            </ul>
        </div>
    `
}

const tabletWorkExperience = () => { 
    document.getElementById('tabletContainer').innerHTML = `
        <div >
            <ul class="txt-left">
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Culpa voluptatibus odit tempore dolore magnam laudantium asperiores ipsa reiciendis unde, 
                    vero corporis eum, nemo earum officia. Molestias voluptate veniam consequatur suscipit?</p></li>
            </ul>
        </div>
    `
}
