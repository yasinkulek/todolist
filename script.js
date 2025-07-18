let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Bu alani doldurmalisiniz!")
    }
    else {
        // girdigine gore listeye eleman ekle
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // saat bilgisi eklke
        let time = document.createElement("small");
        time.textContent = getCurrentDateTime();
        time.style.display = "block";
        time.style.fontSize = "12px";
        time.style.color = "#888";
        li.appendChild(time);
        // silme butonu ekle
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// tarih alma fonksiyonu
function getCurrentDateTime() {
    const now = new Date();
    const tarih = now.toLocaleDateString('tr-TR');
    const saat = now.toLocaleTimeString('tr-TR');
    return `${tarih} ${saat}`;
}


// check buttonu ve silme butonu ekleme
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// Enter tusuna basildiginda gorev ekle
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault();
    }
})

// function toggleTheme() {
//     document.body.classList.toggle("dark");
//     const isDark=document.body.classList.contains("dark");
//     localStorage.setItem("theme", isDark ? "dark" : "light");   //tema degistirme islemi ancak sitenin renklerine uymadi
// }
// window.addEventListener("load", () => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//         document.body.classList.add("dark");
//     }
// });

