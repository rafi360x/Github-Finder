// define nassesary element 

let Get_Data = document.querySelector(".GEtBtn");
let from = document.querySelector(".from1");
let Get_Search = document.querySelector(".Search");
let Img = document.querySelector(".Img-Class img");
let GEt_follow = document.querySelector(".Followers");
let GEt_Following = document.querySelector(".Following");
let Get_Gists = document.querySelector(".Public");
let Get_repos = document.querySelector(".Gists");
let Get_Profile = document.querySelector(".Profile");
let Get_company = document.querySelector(".company");
let GEt_Website = document.querySelector(".Website");
let Get_Location = document.querySelector(".Location");
let Get_Member = document.querySelector(".Member");
//let Get_Div = document.querySelector(".DIVHas");
//let imges =  document.querySelector(".carded img");
// addd event lisenar 
//Get_Data.addEventListener("click", Test);
Get_Search.addEventListener("click", Test2)

// functions


function Test2() {
    let GEt_from = from.value;
    fetch(`https://api.github.com/users/${from.value}`)
        .then(user => user.json())
        .then(data => {
            if (data.message == "Not Found") {
                document.querySelector(".DIVHas").style.display = "none";
                document.querySelector(".TExtMe").style.display = "block";
            } else {
                document.querySelector(".TExtMe").style.display = "none";
                document.querySelector(".DIVHas").style.display = "block";
                console.log(data);
                Img.setAttribute("src", `${data.avatar_url}`)
                GEt_follow.innerHTML = `Followers ${data.followers}`;
                GEt_Following.innerHTML = `Following ${data.following}`;
                Get_Gists.innerHTML = `Gists ${data.public_gists}`;
                Get_repos.innerHTML = `Repos ${data.public_repos}`;
                Get_Profile.setAttribute("href", `${data.html_url}`);
                Get_company.innerHTML = `Company: ${data.company}`;
                GEt_Website.innerHTML = `Website/Blog: ${data.blog}`;
                Get_Location.innerHTML = `Location: ${data.location}`;
                Get_Member.innerHTML = `Scince ${data.created_at}`;
                // Imgdefine();
            }
        });
    from.value = ""
};

function BedIv() {
    document.querySelector(".DIVHas").style.display = "none";
    document.querySelector(".TExtMe").style.display = "none";
}
BedIv();