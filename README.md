<h1>UniRo</h1>
<p> Realizatori: Avramoniu Calin-Stefan / Baluta Cezar </p>
<br><br>
 
<h2>Informatii generale:</h2>

    Categorie:  Web
    Judet:  Bucuresti
    Liceu:  Colegiul National de Informatica "Tudor Vianu"
    URL:  www.uniro.eu
 
<br>
<h2>Descriere proiect:</h2>

    UniRo este o platforma web, creata cu scopul de a ajuta tinerii sa aleaga o universitate din Romania, in functie de domeniile pe care doresc sa le studieze.
    Pe platforma noastra sunt afisate aproximativ 70 de universitati din Romania, dupa popularitatea acestora.
    Prin intermediul platformei, utilizatorii beneficiaza de un sistem de filtrare menit sa faciliteze cautarea universitatilor pe baza anumitor criterii specifice,  cum ar fi:
    
        ⦁ Orasul in care se afla universitatea
        ⦁ Facultatile disponibile
        ⦁ Domeniile de licenta
        ⦁ Ratingul universitatii
        ⦁ Distanta la care se afla universitatea fata de utilizator
        
    De asemenea, reprezentantii universitatilor care nu se regasesc in lista noastra pot trimite o cerere prin intermediul unui formular aflat pe pagina de contact.       Aceste cereri sunt examinate si acceptate urmand publicarea acestora pe platforma. Utilizatorii pot contacta echipa printr-un alt formular existent pe aceeasi    pagina si pot oferi sugestii pentru imbunatatirea platformei.
    Spre deosebire de alte aplicatii web similare, UniRo ofera o interfata moderna si prietenoasa cu utilizatorul, precum si o varietate de filtre indisponibile pe     alte platforme.
    Platforma noastra are integrata si o interfata de management al datelor si de editare a universitatilor, prin care administratorii pot gestiona continutul afisat   utilizatorului si pot vedea in timp real performanta aplicatiei.
<br>
<h2>Tehnologii si aplicatii folosite:</h2>

    IDE:  Visual Studio Code
    
    Source Control:  Git si Github Desktop
    
    Dezvoltare BACKEND:
    
        Node JS ( serverul este dezvoltat cu Node JS )
        Pachete NPM
        Javascript ( Folosit pentru afisarea universitatilor si pentru alte functionalitati din BACKEND
        .env ( Fisierul .env impiedica expunerea parolelor si cheilor secrete de la API si de la Mongo DB in source code si astfel protejeaza aplicatia de accesul     nedorit. Accesul in cod al variabilelor se realizeaza prin intermediul expresiei process.env.NUME_VARIABILA )

    Dezvoltare FRONTEND:  
    
        HTML 5 ( Am folosit EJS care ne permite sa introducem elemente HTML in mai multe fisiere fara a transcrie codul in toate fisierele, iar in schimb acesta este   scris intr-un singur fisier template. De asemenea EJS permite si introducerea unor expresii Javascript in HTML fara folosirea tag-ului <script> ) 
        CSS 3 ( Folosit la stilizarea elementelor HTML)
        Javascript ( Folosit pentru elemente dinamice )
        JQuery
        Bootstrap
        Fontawesome Icons 
        
    API:
    
        Am dezvoltat un API care ne creeaza o legatura cu baza de date si ne transmite datele sub forma unui obiect json. Datele transmise de API sunt generate dinamic in pagina la incarcarea acesteia pentru a evita suprasolicitarea serverului. Astfel incarcarea datelor se face rapid si asigura utilizatorului o experienta placuta cand exploreaza pagina de universitati. 

    Baza de Date:
        
        Mongo DB ( MongoDB este un sistem de gestionare a bazelor de date NoSQL orientat spre documente. Spre deosebire de bazele tradiționale, care stochează date în tabele formate din rânduri și coloane, MongoDB stochează date în structuri JSON, denumite documente. )
<br>
<h2>Surse :</h2>

    Preluare date despre universitati:
    
        www.wikipedia.org
        www.4icu.org
        Google images
