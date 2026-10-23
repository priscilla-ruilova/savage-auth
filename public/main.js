const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down");
const trash = document.getElementsByClassName("fa fa-trash-o fa-lg");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        // const name = this.parentNode.parentNode.childNodes[1].innerText //since creating objectID and message ID, we don't need const name and const msg anymore!
        // const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        console.log(messageID)
        fetch('likes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            messageID,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText) //variable can still be named thumbsUp but i changed it to thumbDown to help understand it
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        fetch('dislikes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            messageID,
            'thumbUp': thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          // console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const messageID = this.parentNode.parentNode.childNodes[1].dataset.messageId
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messageID
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
