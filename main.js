AFRAME.registerComponent("base-model",{
    schema:{
        radius:{type:"number",default:5},
        height:{type:"number",default:1}
    },
    init:function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        })
        this.el.setAttribute("material",{color:"blue"})
    }
})

AFRAME.registerComponent("rotate-car",{
    tick:function(){
        window.addEventListener("click",e=>{
            this.data.clickCounter+=1
            if(this.data.clickCounter==1){
                const rotation={x:0,y:20,z:0}
                this.el.setAttribute("rotation",rotation)
            }
            else if(this.data.clickCounter==2){
                const rotation={x:0,y:100,z:0}
                this.el.setAttribute("rotation",rotation)
            }
        })
    }
})



