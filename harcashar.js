const ansW = document.querySelectorAll(".answer");
const quesT = document.querySelector(".questions");
const answersConter = document.querySelector(".answersConter");
const resultAnsConter = document.querySelector(".resultAnsConter");
const rigtAns = document.querySelector(".rigtH3Inner");
const wrongAns = document.querySelector(".wrongH3Inner");
let points = 0;
let rightAnswer = []
let wrongAnswer = []
let indexof;
let h = 0;

const questions = [{
    quest: "Ինչպե՞ս է կոչվում ադամանդը որն առանց այլ քարերի տեղադրված է ոսկերչական իրի վրա",
    var1: "Սաթելիտ",
    var2: "Սարտոն",
    var3: "Սոլիտեր",
    var4: "Սթելիթ",
    rightAnswer: "Սոլիտեր",
  }, {
    quest: "Ո՞ր գերմանական քաղաքն են հաճախ անվանում «Ֆլորենցիա Էլբայի վրա»․",
    var1: "Բեռլին",
    var2: "Համբուրգ",
    var3: "Բրեմեն",
    var4: "Դրեզդեն",
    rightAnswer: "Դրեզդեն",
  }, {
    quest: "Ո՞ր քիմիական տարրի անվանումն է հունարենից թարգմանաբար նշանակում «դեղնականաչ»․",
    var1: "Ջրածին",
    var2: "Քլոր",
    var3: "Ֆտոր",
    var4: "Ֆոսֆոր",
    rightAnswer: "Քլոր",
  },
  {
    quest: "Ի՞նչ համեմունք են ավանդաբար ավելացնում մարոկկոյան սուրիճի մեջ․",
    var1: "Դարչին",
    var2: "Սամիթ",
    var3: "Քրքում",
    var4: "Սև պղպեղ",
    rightAnswer: "Սև պղպեղ",
  }, {
    quest: "Ինչպե՞ս է կոչվում նեղուցը, որը բաժանում է Եվրոպան Աֆրիկայից․",
    var1: "Դարդանել",
    var2: "Բոսֆոր",
    var3: "Լա Մանշ",
    var4: "Ջիբրալթարի",
    rightAnswer: "Ջիբրալթարի",
  }, {
    quest: "Ինչպե՞ս է լատիներենից թարգմանվում բոլոր ուսանողների հիմնը՝ Gaudeamus-ը․",
    var1: "Կուրախանանք",
    var2: "Կապրենք",
    var3: "Կջանանք",
    var4: "Կսովորենք",
    rightAnswer: "Կուրախանանք",
  },
  {
    quest: "Ո՞ր կտավն է Այվազովսկին նկարել համատեղ Ռեպինի հետ․",
    var1: "«9-րդ ալիք»",
    var2: "«Ծովափ»",
    var3: "«Պուշկինի հրաժեշտը ծովին»",
    var4: "«Մաքսանենգները»",
    rightAnswer: "«Պուշկինի հրաժեշտը ծովին»",
  }, {
    quest: "Ո՞ւմ էին հին հույները համարում առևտրի աստված․",
    var1: "Արես",
    var2: "Հերմես",
    var3: "Դիոնիսոս",
    var4: "Հեփեստոս",
    rightAnswer: "Հերմես",
  }, {
    quest: "Ո՞ր երկրի հետ Ռուսաստանի Դաշնությունն ունի ամենակարճ ցամաքային սահմանը․",
    var1: "Լատվիա",
    var2: "Լիտվա",
    var3: "Նորվեգիա",
    var4: "ԿԺԴՀ",
    rightAnswer: "ԿԺԴՀ",
  }, {
    quest: "Ո՞ր ստեղծագործությունն է եղել առաջինը՝ տպագրված տպագրական մեքենայով․",
    var1: "«Փարիզի Աստվածամոր տաճարը» Վիկտոր Հյուգո",
    var2: "«Կոմս Մոնտե Քրիստո» Ալեքսանդր Դյումա",
    var3: "«Թոմ Սոյերի արկածները» Մարկ Տվեն",
    var4: "«Քսան հազար լյո ջրի տակ» Ժյուլ Վեռն",
    rightAnswer: "«Թոմ Սոյերի արկածները» Մարկ Տվեն",
  }, {
    quest: "Կատվազգիներից ո՞ր կենդանուն են անվանում լեռնային առյուծ․",
    var1: "Հեպարդ",
    var2: "Հովազ",
    var3: "Լուսան",
    var4: "Պումա",
    rightAnswer: "Պումա",
  }, {
    quest: "Նշված երկրներից ո՞րն է ողողվում Հոնիական ծովով․",
    var1: "Եգիպտոս",
    var2: "Ալբանիա",
    var3: "Կուբա",
    var4: "Հնդկաստան",
    rightAnswer: "Ալբանիա",
  },
  {
    quest: "Ինչ են ավելացնում Գլասյե սուրճի մեջ․",
    var1: "Սև պղպեղ",
    var2: "Պաղպաղակ",
    var3: "Յուղալի սերուցք",
    var4: "Դարչին",
    rightAnswer: "Պաղպաղակ",
  },
];

const answer = function() {
  quesT.innerHTML = questions[h].quest
  ansW[0].innerHTML = questions[h].var1
  ansW[1].innerHTML = questions[h].var2
  ansW[2].innerHTML = questions[h].var3
  ansW[3].innerHTML = questions[h].var4
}

function btnAnsw() {
  for (let btn of ansW) {
    btn.addEventListener("click", function() {
        if (this.innerHTML == questions[h].rightAnswer) {
          rightAnswer.push(h + " հարցի պատասխան " + " ( " + questions[h].rightAnswer + " ) ")
          h++
          points++;
        } else {
          wrongAnswer.push(h + " հարցի պատասխան " + " ( " + questions[h].rightAnswer + " ) ")
          h++;
        }

        if (h == questions.length) {
          h = 0
          questions[h].quest = questions.length + " հարցից " + points + " ճիշտ պատասղան";
          answersConter.style = " display: none";
          resultAnsConter.style = "display: flex";
          rigtAns.innerHTML = rightAnswer.join("<br>")
            wrongAns.innerHTML = wrongAnswer.join("<br>")
          }
          answer();

        });
    }
  }
  document.write(rightAnswer + "\n")


  btnAnsw()

  answer()



  // function number(num, num2) {
  //   if (num < num2) {
  //     console.log("num poqre num2 ic")
  //   } else if (num > num2) {
  //     console.log("num mec e num2 ic")
  //   } else {
  //     console.log("num voch poqre vochel mec num2 ic")
  //   }
  // }
  // number(7, 7);