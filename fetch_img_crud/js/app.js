var linkAPI = 'https://64599b8995624ceb21ebe122.mockapi.io/users';
var linkAPIIMG = 'https://api.slingacademy.com/v1/sample-data/photos';
var btnCreateUser = document.getElementById('btnCreate');
var idValue = document.getElementById('idInput');
var titleValue = document.getElementById('titleInput');
var bodyValue = document.getElementById('bodyInput');

function start() {
    getAPI(render);
    getAPIIMG(render);
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
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.job}</td>
            <td><img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="" style="width:100px;height: 100px;"></td>
            <td><button>Delete</button></td>
            <td><button>Edit</button></td>
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
            name: titleValue.value,
            job: bodyValue.value
        };
        createUserAPI(obj, function() {
            getAPI(render);
        });
    }
}