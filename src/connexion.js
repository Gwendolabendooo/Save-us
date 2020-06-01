export function inscription(e) { 
    var result = {
        Pseudo: document.querySelector("#Pseudo").value,
        Mail: document.querySelector("#Mail").value,
        Mdp: document.querySelector("#Mdp").value
    };

    console.log(result);
    alert("ok");

    var data = JSON.stringify(result);
    console.log(data);
    alert("ok");

}; 
