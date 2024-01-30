window.onload = () =>{


    const test = new Test("test1", (value)=>{

        h1.innerText = value;
        
    });
    test.setName("red box");
    test.width = 100;
    test.height = 150;
    test.background = "red";

    const h1 = document.querySelector("h1");

    const test2 = new Test2(()=>{
        h1.innerText = "green clicked";

    });
    test2.width = 150;
    test2.height = 150;
    test2.background = "green";


}


    class Test2 {
        #view;
       

        constructor(callback){
            this.#view = document.createElement("div");
            this.#view.onclick = () => callback();

            document.body.appendChild(this.#view);
           
        }

     
        set width(value){
            this.#view.style.width = value + "px";
        }
        set height(value){
            this.#view.style.height = value + "px";
        }
        set background(value){
            this.#view.style.background = value;
        }
    }


   class Test  {

        #name;
        #age;
        #gender;

        #view;
        #callback;

        constructor(name, callback){
            this.#name = name;
            this.#callback = callback;

            this.#view = document.createElement("div");
            this.#view.onclick = () => this.#callback(this.#name + " clicked");
            document.body.appendChild(this.#view);
        }



        getName() {
            return this.#name; 
        }
        getAge() {
            return this.#age; 
        }
        getGender() {
            return this.#gender; 
        }

        setName(value) {
            this.#name = value;
        }
        setAge(value) {
            this.#age = value;
        }
        setGender(value) {
            this.#gender = value;
        }


        get width() {
            return this.#view.style.width.replace("px","");
        }
        set width(value){
            this.#view.style.width = value + "px";
        }       
        get height() {
            return this.#view.style.height.replace("px","");
        }
        set height(value){
            this.#view.style.height = value + "px";
        }
        get background(){
            return this.#view.style.background = ("");
        }
        set background(value){
            this.#view.style.background = value;
        }
    }






