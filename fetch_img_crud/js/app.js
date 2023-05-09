var linkAPI = 'https://64599b8995624ceb21ebe122.mockapi.io/users';

var btnCreateUser = document.getElementById('btnCreate');
var idValue = document.getElementById('idInput');
var nameValue = document.getElementById('titleInput');
var jobValue = document.getElementById('bodyInput');
var imgValue = document.getElementById('inputIMG');
function start() {
    getAPI(render);
    handleCreateUser()
}
start();

function getAPI(callback) {
    fetch(linkAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function getAPIIMG(callback) {
    fetch(linkAPIIMG)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function render(users) {
    table = `
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Job</th>
        <th>Image</th>
    </tr>
    `;

    users.map(function(user) {
        return table +=
            `
        <tr class ="row-${user.id}">
            <td class = "id-User-${user.id}">${user.id}</td>
            <td class = "name-User-${user.id}">${user.name}</td>
            <td class = "job-User-${user.id}">${user.job}</td>
            <td><img class = "linkImg-User-${user.id}" src="${user.url}" alt="" style="width:100px;height: 100px;"></td>
            <td onclick = "handleDeleteUser(${user.id})"><button>Delete</button></td>
            <td onclick = "handleEditUser(${user.id})"><button>Edit</button></td>
        </tr>
        `;
    })

    document.getElementById('render').innerHTML = table;
}

function createUserAPI(data, callback) {
    fetch(linkAPI, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function handleCreateUser() {
    btnCreateUser.onclick = function() {
        var obj = {
            id: idValue.value,
            name: nameValue.value,
            job: jobValue.value,
            url: imgValue.value
        };
        createUserAPI(obj, function() {
            getAPI(render);
        });
    }
}
function handleDeleteUser(id)
{
    fetch(linkAPI + '/' + id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(){
        var rowItem = document.querySelector('.row-'+id);
        if(rowItem)
        {
            rowItem.remove();
        }
    });
}
function editUserAPI(data,callback,id)
{
    fetch(linkAPI + '/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}
function handleEditUser(id)
{
    var idUser = document.querySelector('.id-User-'+id).textContent;
    var nameUser = document.querySelector('.name-User-'+id).textContent;
    var jobUser = document.querySelector('.job-User-'+id).textContent;
    var linkIMGUser = document.querySelector('.linkImg-User-'+id).src;
    
    idValue.value = idUser;
    nameValue.value = nameUser;
    jobValue.value = jobUser;
    imgValue.value = linkIMGUser;


    btnCreateUser.innerText = 'Save'

    if( btnCreateUser.innerText == 'Save')
    {
        btnCreateUser.onclick = function()
    {
        var data = {
            id:idValue.value,
            name:nameValue.value,
            job:jobValue.value,
            url:imgValue.value
        }

        editUserAPI(data,function()
        {
            getAPI(render);
        },id)
        
        clear();
    }
    }
}

function clear()
{
    btnCreateUser.innerText = 'Create User'
    idValue.value = '';
    nameValue.value = '';
    jobValue.value = '';
    imgValue.value = '';
}