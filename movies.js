//init
//資料

let movies_item = [
    {
        image: "images/navy_seals.jpg",
        title: "Navy Seals vs. Zombies(海豹突擊隊大戰殭屍)",
        year: "2015",
        score: 0,
    },

    {
        image: "images/I_Am_Legend.jpg",
        title: "I Am Legend(我是傳奇)",
        year: "2007",
        score: 0,
    },
    {
        image: "images/dead_season.jpg",
        title: "Dead Season(死亡季節)",
        year: "2012",
        score: 0,
    },
    {
        image: "images/the_dead.jpg",
        title: "The Dead(屍地餘生)",
        year: "2010",
        score: 0,
    },
    {
        image: "images/the_dead2.jpg",
        title: "The Dead 2:India(屍地餘生2)",
        year: "2013",
        score: 0,
    },
    {
        image: "images/extingction.jpg",
        title: "EXTINGCTION(滅絕:喪屍屠城)",
        year: "2015",
        score: 0,
    },
    {
        image: "images/redcon-1.jpg",
        title: "REDCON-1(屍控警戒)",
        year: "2018",
        score: 0,
    },
    {
        image: "images/28_Days_Later.jpg",
        title: "28 Days Later(28天毀滅倒數)",
        year: "2002",
        score: 0,
    },
    {
        image: "images/28_weeks_later.jpg",
        title: "28 Weeks Later(28週毀滅倒數：全球封閉)",
        year: "2007",
        score: 0,
    },
    {
        image: "images/Zombieland.jpg",
        title: "Zombieland(屍樂園)",
        year: "2009",
        score: 0,
    },
    {
        image: "images/Zombieland_Double_Tap.jpg",
        title: "Zombieland:Double Tap(屍樂園:髒比雙拼)",
        year: "2019",
        score: 0,
    },
    {
        image: "images/Dead_Rising_Watchtower.jpg",
        title: "Dead Rising:Watchtower(喪屍圍城:瞭望塔)",
        year: "2015",
        score: 0,
    },
    {
        image: "images/Dead_Rising_Endgame.jpg",
        title: "Dead Rising:Endgame(喪屍圍城:終局)",
        year: "2016",
        score: 0,
    },
    {
        image: "images/world_war_z.jpg",
        title: "World War Z(末日之戰)",
        year: "2013",
        score: 0,
    },
    {
        image: "images/eyes_of_the_dead.jpg",
        title: "Eyes Of The Dead(活死人之眼)",
        year: "2015",
        score: 0,
    },
    {
        image: "images/Survival_of_Dead.jpg",
        title: "Survival of Dead(活死人之島)",
        year: "2010",
        score: 0,
    },
    {
        image: "images/The_Crazies.jpg",
        title: "The Crazies(屍心瘋)",
        year: "2010",
        score: 0,
    },
    {
        image: "images/Resident_Evil.jpg",
        title: "Resident Evil(惡靈古堡1)",
        year: "2002",
        score: 0,
    },
    {
        image: "images/Resident_Evil_Apocalypse.jpg",
        title: "Resident Evil:Apocalypse(惡靈古堡2:啟示錄)",
        year: "2004",
        score: 0,
    },
    {
        image: "images/Resident_Evil_Extinction.jpg",
        title: "Resident Evil: Extinction(惡靈古堡3:大滅絕)",
        year: "2007",
        score: 0,
    },
    {
        image: "images/Resident_Evil_Afterlife.jpg",
        title: "Resident Evil: Afterlife(惡靈古堡4:陰陽界)",
        year: "2010",
        score: 0,
    },
    {
        image: "images/Resident_Evil_Retribution.jpg",
        title: "Resident Evil: Retribution(惡靈古堡5:天譴日)",
        year: "2012",
        score: 0,
    },
    {
        image: "images/Resident_Evil_The_Final_Chapter.jpg",
        title: "Resident Evil: The Final Chapter(惡靈古堡6:最終章)",
        year: "2017",
        score: 0,
    },
    {
        image: "images/The_Maze_Runner.png",
        title: "The Maze Runner(移動迷宮1)",
        year: "2014",
        score: 0,
    },
    {
        image: "images/Maze_Runner_The_Scorch_Trials.png",
        title: "Maze Runner: The Scorch Trials(移動迷宮2:焦土試煉)",
        year: "2015",
        score: 0,
    },
    {
        image: "images/Maze_Runner_The_Death_Cure.png",
        title: "Maze Runner: The Death Cure(移動迷宮3:死亡解藥)",
        year: "2018",
        score: 0,
    },
    {
        image: "images/Land_of_the_Dead.jpg",
        title: "Land of the Dead(活屍禁區)",
        year: "2005",
        score: 0,
    },
    {
        image: "images/Cargo.jpg",
        title: "Cargo(禍日光景)",
        year: "2018",
        score: 0,
    },
    {
        image: "images/The_Girl_with_All_the_Gifts.jpg",
        title: "The Girl with All the Gifts(帶來末日的女孩)",
        year: "2018",
        score: 0,
    },
];

const thumb = `<i class="fa fa-thumbs-up" aria-hidden="true"></i>&nbsp<i class="fa fa-thumbs-down" aria-hidden="true"></i>`;
const cross_button = `<button type="button" class="btn btn-danger">X</button>`;

//拇指往上<i class="fa fa-thumbs-up" aria-hidden="true"></i>
//拇指往下<i class="fa fa-thumbs-down" aria-hidden="true"></i>
//得分<span></span>
//紅色叉叉按鈕<button type="button" class="btn btn-danger">X</button>
const tbody = document.querySelector(".table tbody");
function addItem(movies_item) {
    let count = 0;
    movies_item.forEach((item) => {
        let htmlContent = `<tr>
              <td><img src=${item.image} width="30%"  class="img-fluid img-fluid d-block pr-0"></td>
              <td><h5>${item.title}</h5></td>
              <td>${item.year}</td>
              <td><i class="fa fa-thumbs-up "aria-hidden="true"></i>&nbsp<i class="fa fa-thumbs-down" aria-hidden="true"></i>&nbsp<span>${item.score}</span></td>
              <td>${cross_button}</td>
              <td style="visibility:hidden;">${count}</td>
              </tr>`;
        tbody.innerHTML += htmlContent;
        console.log(count);
        count++;
    });
}
addItem(movies_item);

//event
//score不能共用

tbody.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.tagName == "BUTTON") {
        console.log("It is button");
        const click_button = event.target;
        //let td = click_button.parentElement;
        //let tr = td.parentElement;
        let tr = click_button.parentElement.parentElement;
        console.log(tr);
        tr.remove();
    }
    if (event.target.classList.contains("fa-thumbs-up")) {
        console.log("Click is thumbs-up");
        //console.log(event.target.parentElement);
        let sorting =
            event.target.parentElement.nextSibling.nextSibling.nextSibling
                .nextSibling;
        console.log(sorting.textContent); //抓到排序的值
        let sortingValue = sorting.textContent;
        let span = event.target.parentElement.children[2]; //
        console.log(span);
        //movies_item[0].score = movies_item[0].score + 1;
        movies_item[sortingValue].score++;
        let score = movies_item[sortingValue].score;
        span.innerHTML = score;
    } else if (event.target.classList.contains("fa-thumbs-down")) {
        console.log("Click is thumbs-down");
        let sorting1 =
            event.target.parentElement.nextSibling.nextSibling.nextSibling
                .nextSibling;
        console.log(sorting1.textContent); //抓到排序的值
        let sortingValue1 = sorting1.textContent;
        let span1 = event.target.parentElement.children[2]; //
        console.log(span1);
        //movies_item[0].score = movies_item[0].score - 1;
        movies_item[sortingValue1].score--;
        let score = movies_item[sortingValue1].score;
        span1.innerHTML = score;
    }
});
