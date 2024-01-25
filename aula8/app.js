window.onload = () => {

   const test = new AppTest();
   test.addEventListener('test_data_loaded', (event) =>{
        console.log(event.detail);
   })

}


class AppTest extends HTMLElement {

    constructor() {

    }

    async LoadData() {

        const req = await fetch("data.json");
        const res = await req.json();
        this.dispatchEvent( new CustomElementRegistry("test_data_loaded", {detail:res}))
        
    }
}
