# pva

* Урадити:

- хешовати лозинке у бази;
- рефакторисати сав код;
- реализовати почетну страну;
- реализовати повезаност функционалности: 
нпр: ако админ измењује сарадника, да му на клик буде доступна опција да измени и његово ангажовање;
- код је неконзистентан, рефакторисати; све да се приказује у један див

* Идеје: 

- Захтеви корисника, односно методе се требају извршавати помоћу АЈАКСА
- Реализовати обраду порука и грешака преко јаваскипта;

*Проблеми:

- Ако све функционалности админа буду на једној страни, скрипта за генералну проверу форми не функционише, јер види све форме не само активну него и оне у скривеним DIV-овима. Скрипта је тренутно онемогућена тако што у функцијама на клик дугмета није позвата.