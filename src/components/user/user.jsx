import React from 'react'
import Swal from 'sweetalert2';

export const User = () => {        

    const user = localStorage.getItem('usermame');

    if (user === null) {
      
      Swal.fire({
        icon: 'question',
        title: "What's your name?",
        input: 'text',
        inputLabel: "This information is for better usability",
        inputPlaceholder: 'Enter your first name',
        showCancelButton: true        
      }).then((result) => {
        if (result.value) {
          localStorage.setItem('username', result.value);
        }
      });
    } else {
      console.log(user)
    }
    
  return (
    <>

    </>
  )
}