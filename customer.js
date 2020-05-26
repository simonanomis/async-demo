console.log('Before');

async function sendEmailConfirmation() {
    try {
        const customer = await getCustomer(1);
        console.log('Customer: ', customer);
        if (customer.isGold){
            const topMovies = await getTopMovies();
            console.log('Top movies: ', topMovies);
            const sentMail = await sendEmail(customer.email, topMovies);
            console.log('Email sent to: ', sentMail);
        }
        
        
    } catch (error) {
         console.log('Error', error.message);
    }
}

sendEmailConfirmation();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting a customer from a database...');
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);  
    });
  }
  
  function getTopMovies() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Get the top movies...');
            resolve(['movie1', 'movie2']);
          }, 4000);
      }); 
  }
  
  function sendEmail(email, movies) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Send email...');
            resolve('test@test.com');
          }, 4000);
      });
  }

  console.log('After');