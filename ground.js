// creating class Ground 
class Ground {
// creating constructor
constructor (x,y,width,height){

// creating body for ground 
    var  options={
          isStatic:true
            }
                this.body=Bodies.rectangle(x,y,width,height,options)
                    this.x=x
                        this.y=y
                            this.width=width
                         this.height=height
                    World.add(world,this.body)


}
// creating display 

display(){
    var pos = this.body.position
        var width = this.width
            var height = this.height 
         rectMode(CENTER)
    rect(pos.x,pos.y,width,height)





}

}