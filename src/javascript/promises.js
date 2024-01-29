const promise = new Promise((resolve, reject) => {
    const email = {
        isVerified: false
    }
    setTimeout((email) => {
        resolve({video: 'Prison Break', url: 'https://prisonbreak.com'})
        console.log('We got the data');
        reject(new Error('Failed'))
    })
})

promise.then((data) => console.log(data))
.catch(console.log)