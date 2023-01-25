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
