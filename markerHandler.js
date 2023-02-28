AFRAME.registerComponent("markerhandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker is Found")
            this.HandleMarkerFound()
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker is Lost")
            this.HandleMarkerLost()
        })
    },
    HandleMarkerFound:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var orderButton = document.getElementById("order-button")
        var summaryButton = document.getElementById("summary-button")

        orderButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Order Toy",
                text:""
            })
        })
        summaryButton.addEventListener("click",function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for order",
                text:"Work in Progress"
            })
        })
    },
    HandleMarkerLost:function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display="none"


    },
    getToys: async function () {
        return await firebase
          .firestore()
          .collection("toys")
          .get()
          .then(snap => {
            return snap.docs.map(doc => doc.data());
          });
      }
})