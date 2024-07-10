



/*


const heading= React.createElement("h1",{id : "heading"   },"Welcome to react "  );     // create an heading element by react which is an object  ( name of the tag, attributs, children)
console.log(heading); //this element h1 is an js oject with props (children + attribute) and type h1 
const root = ReactDOM.createRoot(document.getElementById("root"));  // create a root to  inject into reactdom by id in div tag
root.render(heading);                                               // render  - heading object --> h1 tag  through the root inject into html 


*/


/*
<div id = parent>
    <div id = child>
        <h1> 
            hello world !!!
        </h1>
        <h2>
           hello world to react !!!
        <h2>
    </div>


    <div id = child>
        <h1> 
            hello world !!!
        </h1>
        <h2>
           hello world to react !!!
        <h2>
    </div>


</div>
*/


const parent = React.createElement("div", {id:"parent" }, 
   [ React.createElement("div",{id : "child"}, 
       [ React.createElement("h1",{}, "hello world"), React.createElement("h2",{}, "hello world")]
     ) ,

     React.createElement("div",{id : "child"}, 
        [ React.createElement("h1",{}, "hello world"), React.createElement("h2",{}, "hello world")]
      ) ,

   ]


)

console.log(parent)

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

